// Single source of truth for every page: URL, <title>, meta description,
// sitemap settings. Used by the client router, the pre-render script,
// sitemap.xml and structured data, so they can never drift apart.
const BRAND = "HEADS";

// Date the site content last changed (YYYY-MM-DD). Used as <lastmod> in sitemap.xml.
// Update this whenever page content genuinely changes — Google ignores lastmod
// values that are always "today", so it is deliberately NOT the build date.
export const LASTMOD = "2026-10-02";

export const ROUTES = [
  {
    path: "/", name: "Home",
    title: "HEADS – Hari Engineering and Design Solutions | E&I Engineering",
    description: "HEADS (Hari Engineering and Design Solutions) is a Chennai-based Electrical & Instrumentation engineering consultancy for Oil & Gas and Marine & Offshore projects worldwide.",
  },
  {
    path: "/about-us", name: "About Us",
    title: "About HEADS | Hari Engineering and Design Solutions, Chennai",
    description: "About HEADS – Hari Engineering and Design Solutions: vision, mission, values and engineering approach, plus our quality management (ISO 9001-aligned, in progress), HSE commitment and careers.",
  },
  {
    path: "/services", name: "Services",
    title: "E&I Engineering Services, Industries & Projects | HEADS",
    description: "Electrical & Instrumentation engineering from concept, Pre-FEED and FEED to detailed engineering, commissioning and handover for Oil & Gas and Marine & Offshore – with featured project work.",
  },
  {
    path: "/engineering-capabilities", name: "Engineering Capabilities",
    title: "Engineering Capabilities, Software & Standards | HEADS",
    description: "Electrical, instrumentation & control, 2D/3D and marine E&I capabilities; engineering software (ETAP, SPEL, SPI, E3D, S3D); site support; AI-assisted automation; and standards applied.",
  },
  {
    path: "/contact", name: "Contact Us",
    title: "Contact HEADS | Engineering Enquiries – Chennai, India",
    description: "Contact Hari Engineering and Design Solutions (HEADS) in Guindy, Chennai. Share your project scope, location and schedule – we respond within 1–2 business days.",
  },
];

export const NOT_FOUND = {
  path: "/404", name: "Page not found", noindex: true,
  title: `Page not found | ${BRAND} – Hari Engineering and Design Solutions`,
  description: "The page you are looking for could not be found. Visit the HEADS home page to explore our Electrical & Instrumentation engineering services.",
};

export const findRoute = (pathname) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return ROUTES.find((r) => r.path === clean) || NOT_FOUND;
};

// Breadcrumb trail for a route path, e.g. /engineering-capabilities/engineering-standards
export const crumbsFor = (path) => {
  const trail = [ROUTES[0]];
  if (path === "/") return trail;
  const parts = path.split("/").filter(Boolean);
  let acc = "";
  parts.forEach((p) => {
    acc += `/${p}`;
    const r = ROUTES.find((x) => x.path === acc);
    if (r) trail.push(r);
  });
  return trail;
};
