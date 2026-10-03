import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV } from "../../data/navigation.js";
import { SITE } from "../../data/site.js";
import Icon from "../ui/Icon.jsx";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(""); // mobile accordion
  const [dd, setDd] = useState("");           // desktop dropdown opened by click/touch
  const bar = useRef(null);
  const head = useRef(null);
  const [tone, setTone] = useState("dark"); // colour of the section currently behind the bar

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      // which section sits behind the middle of the bar? (later sections paint on top, so the last match wins)
      const probe = (head.current ? head.current.offsetHeight : 64) / 2;
      let t = "dark";
      document.querySelectorAll("[data-tone]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) t = el.getAttribute("data-tone");
      });
      setTone(t);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [pathname]);

  const { hash } = useLocation();
  useEffect(() => { setOpen(false); setDd(""); setOpenSub(""); }, [pathname, hash]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { setOpen(false); setDd(""); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header ref={head} className={`nav${scrolled ? " nav--scrolled" : ""}${open ? " nav--open" : ""}${tone === "light" && !open ? " nav--light" : ""}`}>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="nav__inner container container--wide">
        <Link to="/" className="nav__brand" aria-label={`${SITE.name} – ${SITE.legalName} – home`}>
          <span className="nav__markwrap">
            <img src="/brand/logo-mark-light.svg" alt="" width="424" height="456" className="nav__mark nav__mark--onDark" decoding="async" />
            <img src="/brand/logo-mark.svg" alt="" width="424" height="456" className="nav__mark nav__mark--onLight" decoding="async" />
          </span>
          <span className="nav__brandtxt">
            <b>HEADS</b>
            <small>Hari Engineering and Design Solutions</small>
          </span>
        </Link>

        <nav className="nav__menu" aria-label="Primary">
          <ul>
            {NAV.filter((i) => !i.cta).map((item) =>
              item.children ? (
                <li key={item.to} className={`nav__item nav__item--dd${dd === item.to ? " is-open" : ""}`}>
                  <div className="nav__ddhead">
                    <NavLink to={item.to} end className="nav__link">{item.label}</NavLink>
                    <button type="button" className="nav__ddbtn" aria-label={`Toggle ${item.label} menu`} aria-expanded={dd === item.to} onClick={() => setDd(dd === item.to ? "" : item.to)}>
                      <Icon name="chevron" />
                    </button>
                  </div>
                  <div className="nav__dd" role="menu">
                    <div className="nav__ddgrid">
                      {item.children.map((c) => (
                        <Link key={c.to} to={c.to} className="nav__ddlink" role="menuitem">
                          <span className="nav__ddicon"><Icon name={c.icon} /></span>
                          <span><b>{c.label}</b><small>{c.text}</small></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.to} className="nav__item">
                  <NavLink to={item.to} end className="nav__link">{item.label}</NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        <Link to="/contact" className="nav__cta">Contact Us<Icon name="arrow" /></Link>

        <button type="button" className="nav__burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
      <div className="nav__progress" aria-hidden="true"><i ref={bar} /></div>

      {/* Mobile drawer */}
      <div className={`drawer${open ? " is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <div className="drawer__backdrop" onClick={() => setOpen(false)} />
        <aside className="drawer__panel">
          <nav aria-label="Mobile">
            <ul className="drawer__list">
              {NAV.map((item) =>
                item.children ? (
                  <li key={item.to}>
                    <div className="drawer__row">
                      <NavLink to={item.to} end className="drawer__link" tabIndex={open ? 0 : -1}>{item.label}</NavLink>
                      <button type="button" className={`drawer__toggle${openSub === item.to ? " is-open" : ""}`} aria-label={`Show ${item.label} pages`} aria-expanded={openSub === item.to} onClick={() => setOpenSub(openSub === item.to ? "" : item.to)} tabIndex={open ? 0 : -1}>
                        <Icon name="chevron" />
                      </button>
                    </div>
                    <div className={`drawer__sub${openSub === item.to ? " is-open" : ""}`}>
                      <ul>
                        {item.children.slice(1).map((c) => (
                          <li key={c.to}><Link to={c.to} className="drawer__sublink" tabIndex={open && openSub === item.to ? 0 : -1}>{c.label}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink to={item.to} end className={`drawer__link${item.cta ? " drawer__link--cta" : ""}`} tabIndex={open ? 0 : -1}>{item.label}</NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="drawer__foot">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <span>{SITE.address.locality}, {SITE.address.countryName} · Serving clients worldwide</span>
          </div>
        </aside>
      </div>
    </header>
  );
}
