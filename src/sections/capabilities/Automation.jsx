import Section from "../../components/ui/Section.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import Checklist from "../../components/ui/Checklist.jsx";
import Photo from "../../components/ui/Photo.jsx";

const DIGITAL = [
  "Standard Engineering Calculation Templates", "Automated Engineering Schedules and Registers", "Engineering Data Processing",
  "Engineering Data Validation", "Digital Engineering Workflows", "Document and Engineering Data Management",
  "Engineering Productivity Solutions", "Automated Engineering Reports and Calculations", "Excel-Based Engineering Tools",
];
const AI = ["AI-Assisted Engineering Workflow Development", "Early-Stage Development of AI-Based Engineering Calculation and Automation Tools"];
const FLOW = [
  { icon: "database", t: "Engineering Data" },
  { icon: "check", t: "Validation" },
  { icon: "calculator", t: "Calculation Templates" },
  { icon: "users", t: "Engineering Review" },
  { icon: "file", t: "Reports & Registers" },
];

export default function Automation() {
  return (
    <Section tone="light" id="ai-automation">
      <SectionHeading eyebrow="AI & Engineering Automation" title="Automation with engineering review at the centre"
        lead="Standard workflows, calculation templates and engineering automation that improve productivity, consistency and efficiency." />
      <Reveal as="ol" effect="fade" className="flow" aria-label="Digital engineering workflow">
        {FLOW.map((f) => (
          <li key={f.t} className={`flow__item${f.t === "Engineering Review" ? " flow__item--key" : ""}`}>
            <span className="flow__icon"><Icon name={f.icon} /></span>
            <b>{f.t}</b>
          </li>
        ))}
      </Reveal>
      <div className="auto">
        <Reveal effect="left" className="auto__digital">
          <h3>Digital Engineering &amp; Productivity</h3>
          <p>We use digital tools, standard workflows and engineering automation to improve productivity, consistency and efficiency.</p>
          <Checklist items={DIGITAL} cols={2} stagger={false} />
        </Reveal>
        <Reveal effect="right" className="auto__ai">
          <Photo className="auto__photo" name="ai-automation" alt="Digital plant model generating engineering schedules and drawings" sizes="(min-width: 64rem) 40vw, 100vw" ratio="16/10" />
          <Icon name="sparkles" />
          <h3>AI-Assisted Engineering</h3>
          <p>HEADS is developing AI-assisted engineering workflows and tools to support engineering calculations, data processing and repetitive engineering activities.</p>
          <Checklist items={AI} stagger={false} />
          <p className="auto__note"><Icon name="shield" />Engineering review, verification and professional judgement remain integral to the use of digital and AI-assisted tools.</p>
        </Reveal>
      </div>
    </Section>
  );
}
