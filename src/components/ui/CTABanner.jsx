import Button from "./Button.jsx";
import Reveal from "./Reveal.jsx";

export default function CTABanner({
  title = "Let's Discuss Your Engineering Requirements",
  text = "Whether you require engineering consultancy, detailed design, technical support or field assistance, HEADS is ready to understand your requirements and develop the appropriate engineering approach.",
  primary = { to: "/contact", label: "Contact HEADS" },
  secondary,
}) {
  return (
    <section className="cta" data-tone="light">
      <div className="container">
        <Reveal className="cta__box">
          <h2 className="cta__title">{title}</h2>
          <p className="cta__text">{text}</p>
          <div className="cta__actions">
            <Button to={primary.to} href={primary.href} variant="light">{primary.label}</Button>
            {secondary && <Button to={secondary.to} href={secondary.href} variant="outline-light" icon={secondary.icon ?? "arrow"}>{secondary.label}</Button>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
