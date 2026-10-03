# HEADS website — www.headsengg.com

Hari Engineering and Design Solutions (HEADS). React + Vite, **statically pre-rendered** (SEO-ready), hosted on Vercel.

## Pages (5 — all in sitemap.xml)
| URL | Contains |
|-----|----------|
| `/` | Home |
| `/about-us` | About, vision/mission, values, approach, **Quality & HSE** (`#quality`), **Careers** (`#careers`) |
| `/services` | Services, **Industries** (`#industries`), **Projects** (`#projects`) |
| `/engineering-capabilities` | Capabilities, **Software & Tools** (`#software`), **Site & Field** (`#site-field`), **AI & Automation** (`#ai-automation`), **Standards** (`#standards`) |
| `/contact` | Enquiry form, details, map |

`vercel.json` redirects the old sub-page URLs (e.g. `/industries`, `/quality-hse`) to the matching section.

## Deploy (3 steps)
1. Push this folder to GitHub → import in Vercel (it detects Vite; build `npm run build`, output `dist`).
2. Domains: add `www.headsengg.com` (primary) and `headsengg.com` (redirects to www).
3. Optional: set `VITE_WEB3FORMS_KEY` (see `.env.example`) so the form sends email directly.
Then in Google Search Console add the domain and submit `https://www.headsengg.com/sitemap.xml`.

## Run locally
```bash
npm install
npm run dev
npm run build     # also checks: one <h1>, one canonical, one description per page, and "www." on every URL
```

## Photos
- Optimized photos are in `public/images/` (WebP, several sizes — the browser downloads only the size it needs).
- To add or replace a photo: put the original in `images-src/` (file name = photo name, e.g. `industry-onshore.png`), then run
  `npm i -D sharp` (one-off) and `npm run images`. This regenerates `public/images/` and `src/data/images.js`.
  (The originals are not included in the ZIP because they are large — keep your own copies.)
- Home hero: `hero-desktop` (landscape screens) and `hero-mobile` (portrait screens) are picked automatically.
- Photos marked "Illustrative image" are AI-generated; replace them with real project photos when available.
- Theme: the gold highlight on dark areas is `--accent-soft` in `src/styles/base/tokens.css`.

## Where to edit
- Company details / phone: `src/data/site.js` (phone is hidden until filled)
- Text content: `src/data/*.js`, section files in `src/sections/`
- Titles & descriptions (SEO): `src/seo/routes.js` — update `LASTMOD` when content changes
- Colours: `src/styles/base/tokens.css`
- Logo changed: replace `public/brand/*.svg`, `npm i -D sharp && npm run icons`

## Structure
```
src/
  pages/        5 page files (they only assemble sections)
  sections/     home/ about/ services/ capabilities/  — one file per section, each with its own layout
  components/   layout/ (Navbar, Footer, Intro, RouteEffects) · ui/ · visuals/ · forms/
  data/         all content          seo/  routes, structured data, head tags
  styles/       base/ components/ sections/ pages/   (index.css imports all)
```
