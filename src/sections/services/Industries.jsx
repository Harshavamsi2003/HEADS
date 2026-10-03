import Section from "../../components/ui/Section.jsx";
import Reveal, { rv } from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import Photo from "../../components/ui/Photo.jsx";
import { INDUSTRIES } from "../../data/industries.js";

// Each industry: a sticky photo + heading on the left and a plain ruled list on the right.
export default function Industries() {
  return (
    <>
      <Section tone="tint" id="industries">
        <Reveal className="ind-intro">
          <span className="eyebrow">Industries</span>
          <h2 className="sec-head__title">Oil &amp; Gas and Marine &amp; Offshore</h2>
          <p>HEADS provides E&amp;I engineering consultancy and project support for Oil &amp; Gas and Marine &amp; Offshore projects worldwide. Our services support new developments, brownfield modifications, upgrades, shutdowns, turnarounds and new-build projects across these sectors.</p>
        </Reveal>
      </Section>
      {INDUSTRIES.map((ind, idx) => (
        <Section key={ind.id} id={ind.id} tone={idx % 2 ? "tint" : "light"} className="ind-sec">
          <div className="ind">
            <Reveal effect="left" className="ind__head">
              <Photo name={ind.photo} alt={ind.alt} sizes="(min-width: 60rem) 32vw, 100vw" ratio="4/3" />
              <h3 className="ind__title">{ind.title}</h3>
              <p>{ind.intro}</p>
            </Reveal>
            <ul className="ind__items">
              {ind.items.map((it, i) => (
                <li key={it} {...rv("up", (i % 4) * 60)}><Icon name="check" /><span>{it}</span></li>
              ))}
            </ul>
          </div>
        </Section>
      ))}
      <Section tone="light" className="ind-focus">
        <Reveal className="center-narrow">
          <span className="eyebrow">Industry Focus</span>
          <p className="ind-focus__text">HEADS supports projects from Concept &amp; Feasibility through FEED, Detailed Engineering, Execution, Commissioning and Handover, with remote engineering and on-site support as required.</p>
        </Reveal>
      </Section>
    </>
  );
}
