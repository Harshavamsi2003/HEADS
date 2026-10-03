import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../../components/ui/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import IconBadge from "../../components/ui/IconBadge.jsx";
import Checklist from "../../components/ui/Checklist.jsx";
import Photo from "../../components/ui/Photo.jsx";
import { CAPABILITIES } from "../../data/capabilities.js";

// Every capability area has its own cover photo.
const COVERS = {
  electrical: { name: "capability-electrical", alt: "Medium and low voltage switchgear room" },
  instrumentation: { name: "capability-instrumentation", alt: "Pressure transmitters and a control valve on process piping" },
  layout: { name: "capability-layout-3d", alt: "Engineers reviewing a 3D substation model on a large wall display" },
  marine: { name: "capability-marine", alt: "Ship's main switchboard room and control console" },
  brownfield: { name: "capability-brownfield", alt: "Marked-up drawing held against newly installed cable tray in an operating plant" },
  procurement: { name: "capability-procurement", alt: "Engineers inspecting an electrical equipment skid during factory testing" },
  site: { name: "capability-site-installation", alt: "Aerial view of an electrical substation under construction with cable trenches" },
  digital: { name: "capability-digital-productivity", alt: "Engineer working with calculation sheets and a schedule on a laptop and tablet" },
};

const goTo = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Index that follows you while you read: a sticky sidebar on large screens and a sticky,
// swipeable chip bar on smaller ones. The area currently on screen is highlighted.
function CapsIndex({ active }) {
  const bar = useRef(null);
  // keep the active chip visible inside the horizontal bar (small screens)
  useEffect(() => {
    const el = bar.current && bar.current.querySelector(".is-active");
    if (el && bar.current.scrollWidth > bar.current.clientWidth) {
      bar.current.scrollTo({ left: el.offsetLeft - bar.current.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
    }
  }, [active]);
  const idx = CAPABILITIES.findIndex((c) => c.id === active);

  return (
    <>
      <aside className="caps__index" aria-label="Capability areas">
        <p>On this page</p>
        <div className="caps__track" aria-hidden="true"><i style={{ height: `${((idx + 1) / CAPABILITIES.length) * 100}%` }} /></div>
        <ul>
          {CAPABILITIES.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className={active === c.id ? "is-active" : ""} aria-current={active === c.id ? "true" : undefined} onClick={(e) => goTo(e, c.id)}>{c.title}</a>
            </li>
          ))}
        </ul>
      </aside>
      <nav className="caps__chips" aria-label="Capability areas" ref={bar}>
        {CAPABILITIES.map((c) => (
          <a key={c.id} href={`#${c.id}`} className={active === c.id ? "is-active" : ""} onClick={(e) => goTo(e, c.id)}>{c.title.replace(" Engineering", "").replace("Engineering ", "")}</a>
        ))}
      </nav>
    </>
  );
}

export default function CapabilityList() {
  const [active, setActive] = useState(CAPABILITIES[0].id);

  // scroll-spy: the article crossing the upper-middle of the screen is "active"
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    CAPABILITIES.forEach((c) => { const el = document.getElementById(c.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <Section tone="light" id="overview" className="caps">
      <div className="caps__layout">
        <CapsIndex active={active} />
        <div className="caps__main">
          {CAPABILITIES.map((c) => (
            <Reveal as="article" key={c.id} id={c.id} className="cap">
              <Photo className="cap__cover" name={COVERS[c.id].name} alt={COVERS[c.id].alt} sizes="(min-width: 64rem) 62vw, 100vw" />
              <header className="cap__head">
                <IconBadge name={c.icon} size="lg" />
                <div>
                  <h2>{c.title}</h2>
                  <p>{c.summary}</p>
                </div>
              </header>
              <div className={`cap__groups cap__groups--${c.groups.length}`}>
                {c.groups.map((g) => (
                  <div key={g.title} className="cap__group">
                    {c.groups.length > 1 && <h3>{g.title}</h3>}
                    <Checklist items={g.items} cols={c.groups.length === 1 ? 3 : 1} stagger={false} />
                  </div>
                ))}
              </div>
              {c.note && <p className="cap__note"><Icon name="shield" />{c.note}</p>}
              {c.link && <Link to={c.link} className="link-arrow">Learn more<Icon name="arrow" /></Link>}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
