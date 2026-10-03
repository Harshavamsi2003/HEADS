import Section from "../../components/ui/Section.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import Checklist from "../../components/ui/Checklist.jsx";
import { SectionBg } from "../../components/ui/Photo.jsx";

const PHASES = [
  { icon: "search", title: "Survey & Verification", items: ["Site Surveys", "Existing System Verification", "Field Data Collection", "As-Built Verification"] },
  { icon: "hardhat", title: "Construction & Installation", items: ["Construction and Installation Support", "Technical Query Resolution", "Field Engineering Support"] },
  { icon: "gauge", title: "Commissioning", items: ["Pre-Commissioning Support", "Testing and Commissioning Support", "Punch List Support"] },
  { icon: "file", title: "Close-Out & Handover", items: ["Redline Drawing Updates", "Close-Out Documentation", "Handover Documentation"] },
];

// Chevron-shaped stage headers read left→right as a journey from survey to handover.
export default function FieldSupport() {
  return (
    <Section tone="dark" id="site-field" bg={<SectionBg name="site-field-support" />}>
      <SectionHeading align="left" eyebrow="Site & Field Support" title="From site survey to handover"
        lead="Field engineering support delivered as remote engineering with on-site support, as required by the project – for Greenfield, Brownfield, modification, shutdown and turnaround work." />
      <ol className="chev">
        {PHASES.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 110} className="chev__step">
            <div className="chev__head"><Icon name={p.icon} /><h3>{p.title}</h3></div>
            <Checklist items={p.items} stagger={false} />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
