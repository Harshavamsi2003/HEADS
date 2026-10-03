import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, lead, align = "center", as: H = "h2", className = "" }) {
  return (
    <Reveal className={`sec-head sec-head--${align} ${className}`.trim()}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <H className="sec-head__title">{title}</H>
      {lead && <p className="sec-head__lead">{lead}</p>}
    </Reveal>
  );
}
