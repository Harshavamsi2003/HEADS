// `bg` (optional) is rendered behind the content — used for photo backgrounds (see SectionBg).
export default function Section({ tone = "light", id, className = "", bg = null, children, ...rest }) {
  return (
    <section id={id} data-tone={tone === "dark" ? "dark" : "light"} className={`section section--${tone}${bg ? " has-bg" : ""} ${className}`.trim()} {...rest}>
      {bg}
      <div className="container">{children}</div>
    </section>
  );
}
