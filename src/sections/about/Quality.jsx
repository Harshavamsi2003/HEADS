import Section from "../../components/ui/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import Checklist from "../../components/ui/Checklist.jsx";
import { QMS_ITEMS, HSE_ITEMS } from "../../data/quality.js";

export default function Quality() {
  return (
    <>
      <Section tone="light" id="quality">
        <div className="quality">
          <Reveal effect="left" className="quality__main">
            <span className="eyebrow">Quality &amp; HSE</span>
            <h2 className="sec-head__title">Quality, safety, compliance and continual improvement</h2>
            <p>At HEADS, quality, safety, compliance, and continual improvement are integral to our engineering and project delivery approach.</p>
            <h3 className="quality__sub">Quality Management &amp; Assurance</h3>
            <Checklist items={QMS_ITEMS} cols={2} stagger={false} />
          </Reveal>
          <Reveal effect="right" className="iso">
            <span className="iso__badge"><Icon name="award" /></span>
            <h3>ISO 9001</h3>
            <p className="iso__status"><span className="status"><i />Certification Status: In Progress</span></p>
            <p>HEADS is implementing a structured Quality Management System aligned with ISO 9001 requirements, with certification currently in progress.</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" id="hse">
        <Reveal className="hse">
          <div className="hse__lead">
            <span className="eyebrow">HSE Commitment</span>
            <h2 className="sec-head__title">Safe engineering and project execution</h2>
          </div>
          <ul className="hse__list">
            {HSE_ITEMS.map((t) => <li key={t}><Icon name="check" />{t}</li>)}
          </ul>
        </Reveal>
        <Reveal className="hse__improve">
          <Icon name="leaf" />
          <p><b>Continual improvement.</b> HEADS promotes continual improvement through technical learning, lessons learned, process improvement, digital tools, engineering automation, and competency development.</p>
        </Reveal>
      </Section>
    </>
  );
}
