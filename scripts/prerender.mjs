// Static pre-rendering (SSG).
//
// `vite build` produces the client bundle (dist/) and `vite build --ssr`
// produces a server entry (dist-ssr/). This script renders every route to
// real HTML — full page content, <title>, meta description, canonical, Open
// Graph and JSON-LD — and writes one index.html per URL, plus sitemap.xml,
// robots.txt and a 404.html. Search engines (and AI crawlers that don't run
// JavaScript) therefore see the complete page immediately; in the browser,
// React then "hydrates" the same markup and takes over.
//
// It also fails the build if any headsengg.com URL is missing "www.".
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");
const SITE = "https://www.headsengg.com";

if (!existsSync(join(dist, "index.html"))) { console.error("[prerender] dist/index.html missing – run `vite build` first."); process.exit(1); }
const template = readFileSync(join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-html-->") || !template.includes("<!--head-tags-->")) {
  console.error("[prerender] template markers missing in dist/index.html"); process.exit(1);
}
const entry = readdirSync(ssrDir).find((f) => /^entry-server\.(m?js)$/.test(f));
const { render, ROUTES, LASTMOD } = await import(pathToFileURL(join(ssrDir, entry)).href);

// Preload the two main web-font files (latin subset) so text renders sooner.
const assets = existsSync(join(dist, "assets")) ? readdirSync(join(dist, "assets")) : [];
const preload = ["sora-latin-wght-normal", "inter-latin-wght-normal"]
  .map((n) => assets.find((f) => f.startsWith(n) && f.endsWith(".woff2")))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join("\n    ");

// Hero photo preload (Home only): the browser fetches the portrait photo on portrait screens and the
// landscape photo otherwise — matching the <picture> in HomeHero.jsx — before the page's JS even runs.
const heroSet = (prefix) =>
  assets.length || existsSync(join(dist, "images"))
    ? readdirSync(join(dist, "images")).filter((f) => f.startsWith(`${prefix}-`) && f.endsWith(".webp"))
        .map((f) => ({ f, w: Number(f.match(/-(\d+)\.webp$/)[1]) })).sort((a, b) => a.w - b.w)
        .map(({ f, w }) => `/images/${f} ${w}w`).join(", ")
    : "";
const heroPreload = () => {
  const m = heroSet("hero-mobile"), d = heroSet("hero-desktop");
  if (!m || !d) return "";
  return [
    `<link rel="preload" as="image" type="image/webp" media="(max-aspect-ratio: 1/1)" imagesrcset="${m}" imagesizes="100vw" fetchpriority="high" />`,
    `<link rel="preload" as="image" type="image/webp" media="(min-aspect-ratio: 101/100)" imagesrcset="${d}" imagesizes="100vw" fetchpriority="high" />`,
  ].join("\n    ");
};

const fill = ({ html, head }, path = "") =>
  template
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace("<!--head-tags-->", head + "\n    " + preload + (path === "/" ? "\n    " + heroPreload() : ""))
    .replace("<!--app-html-->", html);

const written = [];
for (const r of ROUTES) {
  const out = fill(render(r.path), r.path);
  const dir = r.path === "/" ? dist : join(dist, r.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), out);
  written.push({ path: r.path, html: out });
}
const nf = fill(render("/404"));
writeFileSync(join(dist, "404.html"), nf);
written.push({ path: "/404", html: nf });

// ---- sitemap.xml & robots.txt (all URLs use www) ----
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ROUTES.map((r) => `  <url>\n    <loc>${SITE}${r.path}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </url>`).join("\n") +
  `\n</urlset>\n`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);
writeFileSync(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

// ---- checks ----
let problems = 0;
const bad = (m) => { problems++; console.error("  ✗ " + m); };
const count = (s, re) => (s.match(re) || []).length;
for (const { path, html } of written) {
  if (count(html, /<h1[\s>]/g) !== 1) bad(`${path}: expected exactly one <h1>, found ${count(html, /<h1[\s>]/g)}`);
  if (path !== "/404") {
    if (count(html, /<link rel="canonical"/g) !== 1) bad(`${path}: canonical tag count != 1`);
    if (count(html, /<meta name="description"/g) !== 1) bad(`${path}: description tag count != 1`);
    if (!html.includes(`<link rel="canonical" href="${SITE}${path}"`)) bad(`${path}: canonical is not ${SITE}${path}`);
  }
  if (/<div id="root"><\/div>/.test(html)) bad(`${path}: empty root – page was not rendered`);
}
// every file we ship: no headsengg.com URL without www
const scan = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) { scan(p); continue; }
    if (!/\.(html|xml|txt|json|webmanifest|js)$/.test(f)) continue;
    const txt = readFileSync(p, "utf8");
    const m = txt.match(/https?:\/\/(?!www\.)headsengg\.com/g);
    if (m) bad(`${p.replace(dist, "dist")}: ${m.length} URL(s) without "www."`);
  }
};
scan(dist);
rmSync(ssrDir, { recursive: true, force: true });
if (problems) { console.error(`[prerender] ${problems} problem(s) found.`); process.exit(1); }
console.log(`[prerender] ${ROUTES.length} pages + 404 + sitemap.xml + robots.txt written. All checks passed.`);
