import Breadcrumbs from "./Breadcrumbs.jsx";

// Solid-colour hero used at the top of every inner page. The page's single <h1> lives here.
// `data-hero` lets RouteEffects apply the scroll parallax/fade.
export default function PageHero({ path, eyebrow, title, lead, children }) {
  return (
    <header className="page-hero" id="top" data-hero data-tone="dark">
      <div className="container page-hero__inner">
        <Breadcrumbs path={path} />
        {eyebrow && <span className="eyebrow eyebrow--light rise" style={{ "--d": "60ms" }}>{eyebrow}</span>}
        <h1 className="page-hero__title rise-t">{title}</h1>
        {lead && <p className="page-hero__lead rise-t" style={{ "--d": "100ms" }}>{lead}</p>}
        {children && <div className="page-hero__extra rise" style={{ "--d": "240ms" }}>{children}</div>}
      </div>
    </header>
  );
}
