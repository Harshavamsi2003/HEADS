import { SITE, abs } from "../data/site.js";
import { crumbsFor } from "./routes.js";
import { SERVICES } from "../data/services.js";

const ORG_ID = `${SITE.url}/#organization`;
const WEB_ID = `${SITE.url}/#website`;

export const organizationNode = () => ({
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: SITE.alternateNames,
  url: `${SITE.url}/`,
  logo: { "@type": "ImageObject", url: abs("/favicon-512.png"), width: 512, height: 512 },
  image: abs("/og-image.png"),
  description:
    "HEADS (Hari Engineering and Design Solutions) is an Electrical & Instrumentation (E&I) engineering consultancy serving the Oil & Gas and Marine & Offshore industries from Chennai, India.",
  email: SITE.email,
  ...(SITE.phone ? { telephone: SITE.phone } : {}),
  foundingDate: SITE.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Electrical engineering", "Instrumentation and control engineering", "Power system studies",
    "Marine electrical engineering", "Oil and gas engineering", "Brownfield engineering", "2D and 3D engineering",
  ],
  contactPoint: [{ "@type": "ContactPoint", contactType: "customer service", email: SITE.email, areaServed: "Worldwide", availableLanguage: "English" }],
});

export const websiteNode = () => ({
  "@type": "WebSite",
  "@id": WEB_ID,
  url: `${SITE.url}/`,
  name: SITE.name,
  alternateName: SITE.alternateNames,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
});

export function buildSchema(route) {
  const graph = [organizationNode(), websiteNode()];
  const url = abs(route.path === "/" ? "/" : route.path);

  if (!route.noindex) {
    graph.push({
      "@type": route.path === "/contact" ? "ContactPage" : route.path === "/about-us" ? "AboutPage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: route.title,
      description: route.description,
      isPartOf: { "@id": WEB_ID },
      about: { "@id": ORG_ID },
      inLanguage: "en",
    });
    const crumbs = crumbsFor(route.path);
    if (crumbs.length > 1) {
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.path) })),
      });
    }
  }
  if (route.path === "/services") {
    graph.push({
      "@type": "ItemList",
      name: "HEADS Engineering Services",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem", position: i + 1,
        item: { "@type": "Service", name: s.title, description: s.text, provider: { "@id": ORG_ID }, serviceType: "Electrical & Instrumentation engineering" },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
