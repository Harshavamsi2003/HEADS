import { Link } from "react-router-dom";
import Section from "../../components/ui/Section.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import { STANDARD_GROUPS, STANDARDS_NOTE } from "../../data/standards.js";

// Six ruled columns on dark, standards shown as outlined tags.
export default function Standards() {
  return (
    <Section tone="dark" id="standards">
      <SectionHeading align="left" eyebrow="Engineering Standards" title="Standards & compliance"
        lead="Our engineering is developed in accordance with applicable standards and project requirements, including:" />
      <ul className="stdwall">
        {STANDARD_GROUPS.map((g, i) => (
          <Reveal as="li" key={g.title} delay={(i % 3) * 80} className="stdwall__col">
            <Icon name={g.icon} />
            <h3>{g.title}</h3>
            <ul>{g.items.map((x) => <li key={x}>{x}</li>)}</ul>
          </Reveal>
        ))}
      </ul>
      <Reveal className="stdwall__note">
        <p>{STANDARDS_NOTE}</p>
        <Link to="/services#projects" className="link-arrow">See our IRS-classed vessel project<Icon name="arrow" /></Link>
      </Reveal>
    </Section>
  );
}
