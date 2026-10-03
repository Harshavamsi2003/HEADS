// "Engineering Capabilities" — eight capability areas, grouped as in the HEADS capability statement.
export const CAPABILITIES = [
  {
    id: "electrical", n: "01", icon: "bolt", title: "Electrical Engineering",
    summary: "System design, power system studies and complete electrical detailed engineering.",
    groups: [
      { title: "System Design & Power Distribution", items: ["Electrical Design Basis and Engineering Philosophy", "Power Generation and Distribution Systems", "MV and LV Electrical Systems", "Emergency, Essential and Standby Power Systems", "UPS, Battery and DC Systems", "Switchgear and MCC Engineering", "Transformer and Generator Engineering", "Emergency Diesel Generator Systems", "Electrical Equipment Engineering"] },
      { title: "Power System Studies", items: ["Load Flow Analysis", "Short-Circuit Analysis", "Voltage Drop Analysis", "Motor Starting Analysis", "Protection Coordination", "Arc Flash Analysis", "Harmonic Analysis", "Power System Modelling and Network Studies", "Other Applicable Electrical System Studies"] },
      { title: "Electrical Detailed Engineering", items: ["Single Line Diagrams", "Electrical Schematics and Wiring Diagrams", "Electrical Load Lists", "Equipment Schedules", "Cable Sizing and Cable Schedules", "Cable Routing and Cable Tray Engineering", "Lighting and Small Power Design", "Earthing and Lightning Protection", "Hazardous Area Electrical Engineering", "Electrical Datasheets and Specifications", "Material Take-Offs (MTO)", "Material Requisitions", "Engineering Calculations and Technical Documentation"] },
    ],
  },
  {
    id: "instrumentation", n: "02", icon: "gauge", title: "Instrumentation & Control Engineering",
    summary: "Instrument design, I/O, loop and control-system engineering support.",
    groups: [
      { title: "Instrumentation & Control", items: ["Instrument Index and Instrument Datasheets", "Instrument Specifications", "Instrumentation Design Basis and Philosophy", "Instrument Location and Layout Drawings", "Hook-Up Drawings", "Instrument Installation Drawings", "Loop Diagrams", "Instrument Cable Engineering", "Junction Box Engineering", "I/O Engineering", "Control System Engineering Support", "DCS, PLC and SCADA Engineering Support", "SIS Engineering Support", "Cause & Effect Documentation", "Alarm and Trip Engineering Support", "Package and Vendor Control Interfaces", "Instrumentation Schedules and Documentation"] },
    ],
  },
  {
    id: "layout", n: "03", icon: "cube", title: "Layout & 2D/3D Engineering",
    summary: "Electrical and instrumentation layouts, 2D drafting and 3D modelling.",
    groups: [
      { title: "Electrical Engineering Layouts", items: ["Substation and Electrical Room Layouts", "Switchgear and MCC Layouts", "Equipment Layouts", "Cable Tray Layouts", "Lighting Layouts", "Earthing Layouts", "Lightning Protection Layouts"] },
      { title: "Instrumentation Layouts", items: ["Instrument Location Layouts", "Cable Tray and Routing Layouts", "Junction Box Layouts", "Instrument Installation Layouts"] },
      { title: "2D & 3D Engineering", items: ["2D Electrical and Instrumentation Design", "3D Electrical and Instrumentation Modelling", "Equipment Modelling", "Cable Tray Modelling", "Cable and Instrument Routing", "Model Review and Interface Checks", "Clash and Constructability Review Support", "Brownfield Model Updates", "As-Built Drawing Development"] },
    ],
  },
  {
    id: "marine", n: "04", icon: "ship", title: "Marine & Vessel E&I Engineering",
    summary: "Electrical and instrumentation engineering for new-build and modified vessels.",
    groups: [
      { title: "Marine & Vessel E&I", items: ["Vessel Electrical Load Analysis", "Marine Power Generation and Distribution", "Main and Emergency Electrical Systems", "DC Distribution, Battery and Charger Systems", "Marine Lighting and Small Power", "Earthing and Lightning Protection", "Navigation and Essential Electrical Systems", "Marine Instrumentation and Control", "Electrical and Instrumentation Drawings", "Class Documentation and Approval Support", "New-Build Vessel Engineering", "Vessel Modification and Upgrade Engineering", "Support for Applicable Classification Society Requirements"] },
    ],
  },
  {
    id: "brownfield", n: "05", icon: "wrench", title: "Brownfield & Modification Engineering",
    summary: "Assessment, modification, tie-in and shutdown engineering for existing facilities.",
    groups: [
      { title: "Brownfield & Modification", items: ["Existing Facility Assessment", "Site Verification and Field Data Collection", "Existing System Review", "Plant Modification and Revamp Engineering", "Plant Expansion Engineering", "Tie-In Engineering", "Equipment Replacement", "Cable Rerouting and System Modification", "Electrical and Instrumentation System Upgrades", "Shutdown and Turnaround Engineering", "Temporary System Engineering", "As-Built Engineering", "Redline and Modification Documentation"] },
    ],
  },
  {
    id: "procurement", n: "06", icon: "clipboard", title: "Procurement & Execution Support",
    summary: "Technical procurement, vendor coordination and construction engineering support.",
    groups: [
      { title: "Procurement & Execution", items: ["Engineering Input Review", "Scope Definition and Technical Requirements", "Technical Queries and Engineering Clarifications", "Technical Bid Evaluation", "Vendor Document Review", "Vendor Engineering Coordination", "Equipment and Package Engineering Support", "Material and Equipment Technical Review", "Engineering Change Support", "Interface Coordination with Vendors and Contractors", "Procurement Engineering Support", "Construction Engineering Support"] },
    ],
  },
  {
    id: "site", n: "07", icon: "hardhat", title: "Site & Field Engineering Support",
    summary: "Surveys, installation support, commissioning, close-out and handover.",
    link: "/engineering-capabilities#site-field",
    groups: [
      { title: "Site & Field", items: ["Site Surveys", "Existing System Verification", "Field Data Collection", "As-Built Verification", "Construction and Installation Support", "Technical Query Resolution", "Field Engineering Support", "Pre-Commissioning Support", "Testing and Commissioning Support", "Punch List Support", "Redline Drawing Updates", "Close-Out Documentation", "Handover Documentation"] },
    ],
  },
  {
    id: "digital", n: "08", icon: "sparkles", title: "Digital Engineering & Engineering Productivity",
    summary: "Calculation templates, automated schedules, data validation and AI-assisted workflows.",
    link: "/engineering-capabilities#ai-automation",
    groups: [
      { title: "Digital Engineering", items: ["Standard Engineering Calculation Templates", "Automated Engineering Schedules and Registers", "Engineering Data Processing", "Engineering Data Validation", "Digital Engineering Workflows", "Document and Engineering Data Management", "Engineering Productivity Solutions", "Automated Engineering Reports and Calculations", "Excel-Based Engineering Tools", "AI-Assisted Engineering Workflow Development", "Early-Stage Development of AI-Based Engineering Calculation and Automation Tools"] },
    ],
    note: "Engineering review, verification and professional judgement remain integral to the use of digital and AI-assisted tools.",
  },
];

export const CAPABILITY_TAGS = ["Electrical Engineering", "Instrumentation & Control", "Power System Studies", "2D & 3D Engineering", "Marine & Vessel E&I", "Digital Engineering"];

