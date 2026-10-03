// Generates favicons + the social-share (Open Graph) image from the logo SVGs.
//   npm i -D sharp   (one-off)   then   npm run icons
// Source files: public/brand/logo-mark-light.svg, public/brand/logo-full-light.svg
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

let sharp;
try { sharp = (await import("sharp")).default; }
catch { console.error("Run `npm i -D sharp` first."); process.exit(1); }

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = (f) => join(root, "public", f);
const NAVY = "#050751";
const markSvg = readFileSync(pub("brand/logo-mark-light.svg"));
const fullSvg = readFileSync(pub("brand/logo-full-light.svg"));

async function tile(size, { round = true } = {}) {
  const r = round ? Math.round(size * 0.22) : 0;
  const base = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
       <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
         <stop offset="0" stop-color="#0A0E86"/><stop offset="1" stop-color="${NAVY}"/></linearGradient></defs>
       <rect width="${size}" height="${size}" rx="${r}" fill="url(#g)"/></svg>`
  );
  const h = Math.round(size * 0.66);
  const mark = await sharp(markSvg, { density: 600 }).resize({ height: h }).png().toBuffer();
  return sharp(base).composite([{ input: mark, gravity: "centre" }]).png().toBuffer();
}

const out = {};
for (const s of [16, 32, 48, 96, 192, 512]) {
  out[s] = await tile(s);
  writeFileSync(pub(`favicon-${s}.png`), out[s]);
}
writeFileSync(pub("apple-touch-icon.png"), await tile(180, { round: false }));

// favicon.ico (PNG-in-ICO; supported by every current browser)
const sizes = [16, 32, 48];
const head = Buffer.alloc(6); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length; const dirs = []; const imgs = [];
for (const s of sizes) {
  const d = Buffer.alloc(16);
  d[0] = s; d[1] = s; d.writeUInt16LE(1, 4); d.writeUInt16LE(32, 6);
  d.writeUInt32LE(out[s].length, 8); d.writeUInt32LE(offset, 12);
  offset += out[s].length; dirs.push(d); imgs.push(out[s]);
}
writeFileSync(pub("favicon.ico"), Buffer.concat([head, ...dirs, ...imgs]));

// Open Graph / Twitter card (1200x630)
const logo = await sharp(fullSvg, { density: 400 }).resize({ height: 330 }).png().toBuffer();
const lm = await sharp(logo).metadata();
const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#03042F"/><stop offset="1" stop-color="#0B0F6B"/></linearGradient>
    <pattern id="p" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#8C98FF" stroke-opacity=".08"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#b)"/><rect width="1200" height="630" fill="url(#p)"/>
  <rect x="640" y="150" width="3" height="330" fill="#AEB8D6" fill-opacity=".5"/>
  <g font-family="Poppins, Arial, Helvetica, sans-serif" fill="#fff">
    <text x="690" y="228" font-size="30" font-weight="600" fill="#AEB8D6" letter-spacing="3">HARI ENGINEERING AND</text>
    <text x="690" y="270" font-size="30" font-weight="600" fill="#AEB8D6" letter-spacing="3">DESIGN SOLUTIONS</text>
    <text x="690" y="352" font-size="37" font-weight="700">Electrical &amp; Instrumentation</text>
    <text x="690" y="404" font-size="37" font-weight="700">Engineering Solutions</text>
    <text x="690" y="462" font-size="24" fill="#AEB8D6">Oil &amp; Gas  •  Marine &amp; Offshore</text>
    <text x="690" y="560" font-size="26" font-weight="600" fill="#C9D0FF">www.headsengg.com</text>
  </g></svg>`);
await sharp(bg).composite([{ input: logo, left: Math.round(320 - lm.width / 2), top: Math.round(315 - lm.height / 2) }]).png({ compressionLevel: 9 }).toFile(pub("og-image.png"));
console.log("Icons + og-image written to /public");
