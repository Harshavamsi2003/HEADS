import Section from "../../components/ui/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Photo from "../../components/ui/Photo.jsx";
import { PROJECTS } from "../../data/projects.js";

export default function FeaturedProject() {
  const p = PROJECTS[0];
  return (
    <Section tone="light" id="featured-project">
      <Reveal className="feature">
        <div className="feature__text">
          <span className="eyebrow">Featured Project</span>
          <h2 className="sec-head__title">{p.short}</h2>
          <dl className="meta">
            <div><dt>Project Type</dt><dd>{p.type}</dd></div>
            <div><dt>Industry</dt><dd>{p.industry}</dd></div>
            <div><dt>Classification</dt><dd>{p.classification}</dd></div>
            <div><dt>Status</dt><dd><span className="status"><i />{p.status}</span></dd></div>
          </dl>
          <p>HEADS is providing Electrical &amp; Instrumentation engineering, procurement support and commissioning support for a 30 m FRP fishing vessel, developed in accordance with applicable IRS class requirements.</p>
          <div className="btn-row"><Button to="/services#projects">View Project</Button></div>
        </div>
        <div className="feature__art">
          <Photo fill name="project-frp-vessel" alt="Fishing vessel on a shipyard cradle (illustrative image)" sizes="(min-width: 60rem) 50vw, 100vw" caption="Illustrative image" />
        </div>
      </Reveal>
    </Section>
  );
}
