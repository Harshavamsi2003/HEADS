import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_SECTIONS } from "../../data/pageSections.js";
import Icon from "../ui/Icon.jsx";

// A small tab on the right edge of every page. It opens a list of this page's
// sections; the current section is highlighted and clicking one scrolls to it.
export default function PageContents() {
  const { pathname } = useLocation();
  const sections = PAGE_SECTIONS[pathname.replace(/\/+$/, "") || "/"];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const box = useRef(null);

  useEffect(() => { setOpen(false); setActive("top"); }, [pathname]);

  // scroll-spy: mark the section that is crossing the middle of the screen
  useEffect(() => {
    if (!sections || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [pathname]); // eslint-disable-line

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const onDown = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onDown); };
  }, [open]);

  if (!sections) return null;

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: id === "top" ? "start" : "start" });
    setOpen(false);
  };

  return (
    <div className={`toc${open ? " is-open" : ""}`} ref={box}>
      <button type="button" className="toc__btn" aria-label={open ? "Close page contents" : "Open page contents"} aria-expanded={open} aria-controls="page-contents" onClick={() => setOpen((v) => !v)}>
        <Icon name={open ? "close" : "list"} />
      </button>
      <nav className="toc__panel" id="page-contents" aria-label="On this page" aria-hidden={!open}>
        <p className="toc__title">On this page</p>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={active === s.id ? "is-active" : ""} onClick={(e) => go(e, s.id)} tabIndex={open ? 0 : -1}>{s.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
