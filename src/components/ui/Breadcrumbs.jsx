import { Link } from "react-router-dom";
import { crumbsFor } from "../../seo/routes.js";

export default function Breadcrumbs({ path }) {
  const crumbs = crumbsFor(path);
  if (crumbs.length < 2) return null;
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((c, i) => (
          <li key={c.path}>
            {i < crumbs.length - 1 ? <Link to={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
