import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { findRoute } from "../../seo/routes.js";
import { applyHead } from "../../seo/head.js";

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Everything that must happen after a route renders in the browser:
//  1. update <title>/meta/canonical/JSON-LD for the new page
//  2. scroll to top (or to #hash) and play a soft page-enter transition
//  3. start the scroll-reveal observer for the new content
//  4. hero parallax: the top hero drifts and fades as you scroll away from it
// Plus a global card "spotlight" that follows the cursor.
export default function RouteEffects() {
  const { pathname, hash, key } = useLocation();
  const first = useRef(true);

  // 1) new page: update <title>/meta/canonical/JSON-LD and play the soft page transition
  useEffect(() => {
    applyHead(findRoute(pathname));
    const main = document.getElementById("main");
    if (!first.current && main && !reduceMotion()) {
      main.classList.remove("page-enter");
      void main.offsetWidth; // restart animation
      main.classList.add("page-enter");
    }
    first.current = false;
  }, [pathname]);

  // 2) every navigation (incl. clicking the same #link again): scroll to the section, or to the top
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        // let the page-enter transition / layout settle first so the target position is final
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash, key]);

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not([data-in])");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.setAttribute("data-in", "")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.setAttribute("data-in", ""); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.06 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (reduceMotion()) return;
    const heroes = document.querySelectorAll("[data-hero]");
    if (!heroes.length) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const p = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.85), 0), 1);
      heroes.forEach((h) => h.style.setProperty("--p", p.toFixed(3)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [pathname]);

  useEffect(() => {
    const onMove = (e) => {
      const c = e.target.closest && e.target.closest(".spot");
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${e.clientX - r.left}px`);
      c.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
