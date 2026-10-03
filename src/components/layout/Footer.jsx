import { Link } from "react-router-dom";
import { FOOTER_COLUMNS } from "../../data/navigation.js";
import { SITE, fullAddress } from "../../data/site.js";
import Logo from "../ui/Logo.jsx";
import Icon from "../ui/Icon.jsx";

export default function Footer() {
  return (
    <footer className="footer" data-tone="dark">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" aria-label="HEADS home"><Logo variant="full" tone="light" className="footer__logo" /></Link>
            <p className="footer__name">{SITE.legalName}</p>
            <p className="footer__tag">{SITE.tagline}</p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} className="footer__col" aria-label={col.title}>
              <p className="footer__h">{col.title}</p>
              <ul>{col.links.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
            </nav>
          ))}

          <div className="footer__col footer__contact">
            <p className="footer__h">Contact</p>
            <ul>
              <li><Icon name="mail" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              {SITE.phone && <li><Icon name="phone" /><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></li>}
              <li><Icon name="pin" /><address>{fullAddress()}</address></li>
              <li><Icon name="globe" /><span>Serving clients worldwide</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bar">
          <p>© {SITE.founded} {SITE.name} – {SITE.legalName}. All rights reserved.</p>
          <p><a href={SITE.url}>{SITE.domain}</a></p>
        </div>
      </div>
    </footer>
  );
}
