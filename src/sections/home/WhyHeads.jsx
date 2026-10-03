import Section from "../../components/ui/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import IconBadge from "../../components/ui/IconBadge.jsx";
import { WHY_HEADS } from "../../data/home.js";

// Sticky title on the left, a divided list on the right.
export default function WhyHeads() {
  return (
    <Section tone="tint" id="why-heads">
      <div className="why">
        <Reveal effect="left" className="why__lead">
          <span className="eyebrow">Why HEADS</span>
          <h2 className="sec-head__title">A Dependable Engineering Partner</h2>
          <p>Coordinated E&amp;I engineering, structured review and flexible delivery for every stage of your project.</p>
          <div className="btn-row"><Button to="/about-us#quality" variant="ghost">Quality &amp; HSE</Button></div>
        </Reveal>
        <ul className="why__list">
          {WHY_HEADS.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 70} className="why__item">
              <IconBadge name={w.icon} />
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
