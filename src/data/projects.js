export const PROJECTS = [
  {
    slug: "30m-frp-fishing-vessel",
    path: "/projects/30m-frp-fishing-vessel",
    title: "30 m FRP Fishing Vessel – Electrical & Instrumentation Engineering",
    short: "30 m FRP Fishing Vessel – E&I Engineering",
    industry: "Marine & Offshore",
    type: "New-Build Fishing Vessel",
    classification: "Indian Register of Shipping (IRS)",
    status: "Ongoing",
    phase: "Detailed Engineering & Class Approval",
    overview:
      "HEADS is delivering complete Electrical & Instrumentation (E&I) engineering, procurement support, and installation and commissioning support for a 30 m FRP fishing vessel, designed in accordance with applicable IRS class requirements.",
    scope: [
      { icon: "bolt", title: "Power Generation & Distribution", items: ["Electrical load list and load analysis", "Power generation and main switchboard engineering", "Emergency and essential electrical systems", "DC distribution, battery chargers, UPS and battery systems"] },
      { icon: "network", title: "Electrical Design & System Studies", items: ["Electrical single line diagrams", "Short-circuit and electrical system studies", "Cable sizing and cable schedule engineering"] },
      { icon: "gauge", title: "Onboard Electrical & Control Systems", items: ["Lighting and small power systems", "Earthing and lightning protection", "Navigation and essential electrical systems", "Instrumentation and control engineering"] },
      { icon: "clipboard", title: "Procurement & Execution Support", items: ["Equipment and vendor engineering support", "Technical procurement support", "Site installation, testing and commissioning support", "As-built engineering and final documentation"] },
    ],
    // Phases are derived from the scope of work; the "current" one is highlighted.
    phases: ["Detailed Engineering & Class Approval", "Procurement Support", "Installation, Testing & Commissioning Support", "As-Built Engineering & Final Documentation"],
    currentPhaseIndex: 0,
  },
];
