import Section from "../../components/ui/Section.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import Photo from "../../components/ui/Photo.jsx";
import { SOFTWARE_GROUPS } from "../../data/software.js";

// A directory: one ruled row per discipline — software on the left-middle, applications on the right.
export default function SoftwareDirectory() {
  return (
    <Section tone="tint" id="software">
      <div className="soft-head">
        <SectionHeading align="left" eyebrow="Engineering Software & Digital Tools" title="The tools behind our engineering"
          lead="HEADS uses a range of engineering software and digital tools selected according to project requirements, client standards, applicable engineering practices and project execution requirements." />
        <div className="frame">
          <Photo name="software-workstation" alt="Engineer at a workstation with a 3D plant model and process diagram" sizes="(min-width: 60rem) 44vw, 100vw" ratio="3/2" />
        </div>
      </div>
      <ul className="dir">
        {SOFTWARE_GROUPS.map((g, i) => (
          <Reveal as="li" key={g.title} delay={(i % 2) * 70} className="dir__row">
            <div className="dir__name"><Icon name={g.icon} /><h3>{g.title}</h3></div>
            <ul className="dir__tools" aria-label={`${g.title} software`}>
              {g.tools.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <ul className="dir__apps" aria-label={`${g.title} applications`}>
              {g.apps.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </Reveal>
        ))}
      </ul>
      <div className="dir__notes">
        <Reveal className="dir__note">
          <Icon name="laptop" />
          <div><h3>Software &amp; Client Environment Support</h3>
            <p>HEADS can work with client-provided engineering databases, templates, existing project files and established engineering workflows, subject to project requirements and available software environments.</p></div>
        </Reveal>
        <Reveal delay={100} className="dir__note">
          <Icon name="check" />
          <div><h3>Engineering Software Approach</h3>
            <p>Software is selected based on the project scope, engineering discipline, client specifications, applicable standards, software availability and project execution requirements. Engineering outputs are subject to appropriate technical review and verification.</p></div>
        </Reveal>
      </div>
    </Section>
  );
}
