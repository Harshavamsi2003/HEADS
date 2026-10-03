// Builds the <head> tags for a route. The same descriptors are:
//  • turned into an HTML string at build time (scripts/prerender.mjs), and
//  • applied in-place in the browser on client-side navigation (applyHead),
// so there is exactly one of each tag and no duplicates.
import { SITE, abs } from "../data/site.js";
import { buildSchema } from "./schema.js";

const OG_IMAGE = () => abs("/og-image.png");

export function headDescriptors(route) {
  const url = abs(route.path === "/" ? "/" : route.path);
  const d = [
    { t: "meta", k: "name", n: "description", c: route.description },
    { t: "meta", k: "name", n: "robots", c: route.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1" },
    { t: "meta", k: "name", n: "author", c: `${SITE.legalName} (${SITE.name})` },
    { t: "meta", k: "name", n: "application-name", c: SITE.name },
    { t: "meta", k: "property", n: "og:type", c: "website" },
    { t: "meta", k: "property", n: "og:site_name", c: `${SITE.name} – ${SITE.legalName}` },
    { t: "meta", k: "property", n: "og:locale", c: "en_IN" },
    { t: "meta", k: "property", n: "og:title", c: route.title },
    { t: "meta", k: "property", n: "og:description", c: route.description },
    { t: "meta", k: "property", n: "og:image", c: OG_IMAGE() },
    { t: "meta", k: "property", n: "og:image:alt", c: `${SITE.name} – ${SITE.legalName}` },
    { t: "meta", k: "name", n: "twitter:card", c: "summary_large_image" },
    { t: "meta", k: "name", n: "twitter:title", c: route.title },
    { t: "meta", k: "name", n: "twitter:description", c: route.description },
    { t: "meta", k: "name", n: "twitter:image", c: OG_IMAGE() },
  ];
  if (!route.noindex) {
    d.push({ t: "link", n: "canonical", href: url });
    d.push({ t: "meta", k: "property", n: "og:url", c: url });
  }
  d.push({ t: "ld", json: JSON.stringify(buildSchema(route)) });
  return d;
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function headToHtml(route) {
  const out = [`<title>${esc(route.title)}</title>`];
  for (const x of headDescriptors(route)) {
    if (x.t === "meta") out.push(`<meta ${x.k}="${x.n}" content="${esc(x.c)}" />`);
    else if (x.t === "link" && x.n === "canonical") out.push(`<link rel="canonical" href="${esc(x.href)}" />`);
    else if (x.t === "ld") out.push(`<script type="application/ld+json" id="ld-json">${x.json.replace(/</g, "\\u003c")}</script>`);
  }
  return out.join("\n    ");
}

// Browser: update the existing tags in place (or create them if missing).
export function applyHead(route) {
  document.title = route.title;
  const head = document.head;
  const ensure = (sel, create) => head.querySelector(sel) || head.appendChild(create());
  for (const x of headDescriptors(route)) {
    if (x.t === "meta") {
      const el = ensure(`meta[${x.k}="${x.n}"]`, () => { const m = document.createElement("meta"); m.setAttribute(x.k, x.n); return m; });
      el.setAttribute("content", x.c);
    } else if (x.t === "link" && x.n === "canonical") {
      ensure('link[rel="canonical"]', () => { const l = document.createElement("link"); l.rel = "canonical"; return l; }).setAttribute("href", x.href);
    } else if (x.t === "ld") {
      ensure("script#ld-json", () => { const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "ld-json"; return s; }).textContent = x.json;
    }
  }
  // A noindex page must not keep a canonical from the previous page.
  if (route.noindex) {
    head.querySelector('link[rel="canonical"]')?.remove();
    head.querySelector('meta[property="og:url"]')?.remove();
  }
}
