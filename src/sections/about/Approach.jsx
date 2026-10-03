import Section from "../../components/ui/Section.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import Checklist from "../../components/ui/Checklist.jsx";
import { APPROACH } from "../../data/home.js";

export default function Approach() {
  return (
    <Section tone="tint" id="approach">
      <SectionHeading eyebrow="How we work" title="Our Engineering Approach" lead="We follow a structured and practical approach." />
      <Reveal as="ol" effect="fade" className="approach" aria-label="Engineering approach">
        {APPROACH.map((a) => (
          <li key={a.title} className="approach__step">
            <span className="approach__icon"><Icon name={a.icon} /></span>
            <b>{a.title}</b>
          </li>
        ))}
      </Reveal>
      <Reveal className="approach__focus">
        <p>Our approach focuses on</p>
        <Checklist cols={2} items={[
          "Clear understanding of project requirements", "Technical accuracy, checking and review",
          "Effective interdisciplinary coordination", "Constructability and execution awareness",
          "Document control and traceability", "Practical and project-focused engineering solutions",
        ]} />
      </Reveal>
    </Section>
  );
}
