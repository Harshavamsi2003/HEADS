import Section from "../../components/ui/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import Photo from "../../components/ui/Photo.jsx";
import { SERVICES } from "../../data/services.js";

// Intro (text + image), then a vertical timeline with services alternating left and right.
export default function ServiceTimeline() {
  return (
    <Section tone="light" id="services-list">
      <div className="svc-intro">
        <Reveal effect="left" className="svc-intro__text">
          <span className="eyebrow">Concept to handover</span>
          <h2 className="sec-head__title">Eight Services Across the Project Lifecycle</h2>
          <p>From early feasibility and FEED through detailed engineering, procurement, site support and handover, HEADS supports each stage with coordinated Electrical &amp; Instrumentation engineering.</p>
        </Reveal>
        <Photo name="design-to-reality" alt="Electrical single-line diagram merging into a switchgear room" sizes="(min-width: 60rem) 48vw, 100vw" ratio="3/2" />
      </div>
      <Reveal as="ol" effect="fade" className="zig">
        {SERVICES.map((s, i) => (
          <Reveal as="li" key={s.title} effect={i % 2 ? "right" : "left"} className="zig__item">
            <div className="zig__body">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
            <span className="zig__node"><Icon name={s.icon} /></span>
            <span className="zig__space" aria-hidden="true" />
          </Reveal>
        ))}
      </Reveal>
    </Section>
  );
}
