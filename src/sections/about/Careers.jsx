import Section from "../../components/ui/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Icon from "../../components/ui/Icon.jsx";
import Checklist from "../../components/ui/Checklist.jsx";
import Photo from "../../components/ui/Photo.jsx";
import { WHY_WORK, ROLES, LOOK_FOR } from "../../data/careers.js";
import { SITE } from "../../data/site.js";

export default function Careers() {
  return (
    <Section tone="tint" id="careers">
      <div className="careers__top">
        <Photo name="about-team" alt="Engineering team reviewing drawings in an office" sizes="(min-width: 60rem) 46vw, 100vw" ratio="4/3" />
        <Reveal effect="right" className="careers__intro">
          <span className="eyebrow">Careers</span>
          <h2 className="sec-head__title">Build Your Career with HEADS</h2>
          <p>We combine engineering expertise, digital tools, and project experience to deliver reliable Electrical &amp; Instrumentation solutions across Oil &amp; Gas and Marine &amp; Offshore projects.</p>
        </Reveal>
      </div>

      <ul className="perks">
        {WHY_WORK.map((w, i) => (
          <Reveal as="li" key={w.title} delay={i * 80} className="perk">
            <Icon name={w.icon} />
            <h3>{w.title}</h3>
            <p>{w.text}</p>
          </Reveal>
        ))}
      </ul>

      <div className="careers">
        <Reveal effect="left" className="careers__roles">
          <h3>Career opportunities</h3>
          <ul className="roles">
            {ROLES.map((r) => <li key={r}><span>{r}</span><Icon name="arrow" /></li>)}
          </ul>
          <p className="note">We are always open to talented professionals. Send us your CV even if your specific role is not currently listed.</p>
        </Reveal>
        <Reveal effect="right" className="join">
          <h3>What we look for</h3>
          <Checklist items={LOOK_FOR} stagger={false} />
          <div className="join__apply">
            <p>Submit your CV: <a href={`mailto:${SITE.careersEmail}`}>{SITE.careersEmail}</a></p>
            <Button href={`mailto:${SITE.careersEmail}?subject=${encodeURIComponent("Job application – HEADS")}`} variant="light">Apply Now</Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
