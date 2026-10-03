import Section from "../../components/ui/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import Checklist from "../../components/ui/Checklist.jsx";
import Photo from "../../components/ui/Photo.jsx";
import { PROJECTS } from "../../data/projects.js";

const p = PROJECTS[0];

// Dark showcase: vessel photo beside a spec sheet, scope in ruled columns below.
export default function ProjectShowcase() {
  return (
    <Section tone="dark" id="projects">
      <Reveal className="pshow__head">
        <span className="eyebrow">Projects</span>
        <h2 className="sec-head__title">{p.title}</h2>
      </Reveal>
      <div className="pshow">
        <Reveal effect="left" className="pshow__info">
          <dl className="defs">
            <div><dt>Industry</dt><dd>{p.industry}</dd></div>
            <div><dt>Project Type</dt><dd>{p.type}</dd></div>
            <div><dt>Classification</dt><dd>{p.classification}</dd></div>
            <div><dt>Status</dt><dd><span className="status status--light"><i />{p.status}</span></dd></div>
            <div><dt>Current Phase</dt><dd>{p.phase}</dd></div>
          </dl>
          <p>{p.overview}</p>
        </Reveal>
        <Photo className="pshow__art" name="project-frp-vessel" alt="Fishing vessel on a shipyard cradle (illustrative image)" sizes="(min-width: 62rem) 55vw, 100vw" ratio="3/2" caption="Illustrative image" />
      </div>
      <Reveal as="h3" className="pshow__scope-title">Scope of Work</Reveal>
      <ul className="scope">
        {p.scope.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 80} className="scope__col">
            <Icon name={s.icon} />
            <h4>{s.title}</h4>
            <Checklist items={s.items} stagger={false} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
