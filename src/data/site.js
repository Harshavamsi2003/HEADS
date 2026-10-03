// Central company details. Every URL on the site is built from SITE.url,
// which MUST keep the "www." prefix.
export const SITE = {
  name: "HEADS",
  legalName: "Hari Engineering and Design Solutions",
  tagline: "Engineering Expertise. Practical Solutions. Reliable Delivery.",
  domain: "www.headsengg.com",
  url: "https://www.headsengg.com",
  // Alternative names of the company. Only names that genuinely identify it are listed.
  alternateNames: ["Hari Engineering and Design Solutions", "HEADS Engg"],
  founded: "2026",
  email: "info@headsengg.com",
  careersEmail: "careers@headsengg.com",
  // Add the number here when it is ready (e.g. "+91 98765 43210"). While empty,
  // the phone row is hidden everywhere instead of showing a placeholder.
  phone: "",
  address: {
    line1: "Loyear Jaganathan Street, Guindy",
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600032",
    country: "IN",
    countryName: "India",
  },
  responseTime: "Within 1–2 business days",
  mapsQuery: "Loyear Jaganathan Street, Guindy, Chennai, Tamil Nadu 600032, India",
  // Contact form: create a free key at web3forms.com for info@headsengg.com and
  // set VITE_WEB3FORMS_KEY in Vercel. Without it, the form opens the visitor's
  // email app addressed to info@headsengg.com instead.
  web3formsKey: (import.meta.env && import.meta.env.VITE_WEB3FORMS_KEY) || "",
};

export const fullAddress = () => {
  const a = SITE.address;
  return `${a.line1}, ${a.locality}, ${a.region}, ${a.countryName} – ${a.postalCode}`;
};
// Always returns an absolute www URL.
export const abs = (path = "/") => `${SITE.url}${path}`;
