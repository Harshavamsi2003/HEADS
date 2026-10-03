// The site has 5 pages. Former sub-pages live on them as sections, reachable by #anchor.
export const NAV = [
  { label: "Home", to: "/" },
  {
    label: "About Us", to: "/about-us",
    children: [
      { label: "Who We Are", to: "/about-us", icon: "compass", text: "Vision, mission, values and approach" },
      { label: "Quality & HSE", to: "/about-us#quality", icon: "shield", text: "QMS, ISO 9001 status and HSE" },
      { label: "Careers", to: "/about-us#careers", icon: "briefcase", text: "Build your career with HEADS" },
    ],
  },
  {
    label: "Services", to: "/services",
    children: [
      { label: "Engineering Services", to: "/services", icon: "bolt", text: "Concept to commissioning and handover" },
      { label: "Industries", to: "/services#industries", icon: "factory", text: "Oil & Gas onshore, offshore and Marine" },
      { label: "Projects", to: "/services#projects", icon: "ship", text: "Featured E&I project work" },
    ],
  },
  {
    label: "Engineering Capabilities", to: "/engineering-capabilities",
    children: [
      { label: "Capabilities Overview", to: "/engineering-capabilities", icon: "layers", text: "Electrical, I&C, 2D/3D, marine and more" },
      { label: "Software & Digital Tools", to: "/engineering-capabilities#software", icon: "chip", text: "ETAP, SPEL, SPI, E3D, S3D and more" },
      { label: "Site & Field Support", to: "/engineering-capabilities#site-field", icon: "hardhat", text: "Surveys to commissioning and handover" },
      { label: "AI & Engineering Automation", to: "/engineering-capabilities#ai-automation", icon: "sparkles", text: "Templates, workflows and AI-assisted tools" },
      { label: "Engineering Standards", to: "/engineering-capabilities#standards", icon: "award", text: "IEC, IEEE, API, IRS, DNV and more" },
    ],
  },
  { label: "Contact Us", to: "/contact", cta: true },
];

export const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about-us" },
      { label: "Quality & HSE", to: "/about-us#quality" },
      { label: "Careers", to: "/about-us#careers" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Engineering Services", to: "/services" },
      { label: "Industries", to: "/services#industries" },
      { label: "Projects", to: "/services#projects" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Overview", to: "/engineering-capabilities" },
      { label: "Software & Digital Tools", to: "/engineering-capabilities#software" },
      { label: "Site & Field Support", to: "/engineering-capabilities#site-field" },
      { label: "AI & Engineering Automation", to: "/engineering-capabilities#ai-automation" },
      { label: "Engineering Standards", to: "/engineering-capabilities#standards" },
    ],
  },
];
