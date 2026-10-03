import Section from "../../components/ui/Section.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Icon from "../../components/ui/Icon.jsx";
import { LIFECYCLE } from "../../data/services.js";

// "What we do": five stages joined by a line that draws itself as you scroll in.
export default function ProcessLine() {
  return (
    <Section tone="tint" id="what-we-do">
      <SectionHeading eyebrow="What we do" title="Engineering That Supports Your Project" lead="HEADS provides flexible E&I engineering support across the project lifecycle." />
      <Reveal as="ol" effect="fade" className="process">
        {LIFECYCLE.map((s) => (
          <li key={s.title} className="process__step">
            <span className="process__node"><Icon name={s.icon} /></span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </Reveal>
      <Reveal className="center-cta"><Button to="/services">View Engineering Services</Button></Reveal>
    </Section>
  );
}
