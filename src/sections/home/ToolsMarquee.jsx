import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SOFTWARE_GROUPS } from "../../data/software.js";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";

// Every tool, tagged with the discipline it belongs to.
const TOOLS = SOFTWARE_GROUPS.flatMap((g, gi) => g.tools.map((name) => ({ name, group: g.title, tone: gi % 3 })));

// Neutral two-letter monogram (not a trademarked logo): first two letters of a
// single word, or the initials of the first two words.
const mono = (name) => {
  const words = name.replace(/[^A-Za-z0-9 ]/g, " ").trim().split(/\s+/);
  return (words.length > 1 ? words[0][0] + words[1][0] : words[0].slice(0, 2)).toUpperCase();
};

const half = Math.ceil(TOOLS.length / 2);
const ROWS = [TOOLS.slice(0, half), TOOLS.slice(half)];

function Track({ tools, hidden }) {
  return (
    <ul className="tools__track" aria-hidden={hidden || undefined}>
      {tools.map((t) => (
        <li key={t.name} className="tool" data-g={t.tone}>
          <span className="tool__badge">{mono(t.name)}</span>
          <span className="tool__txt">
            <span className="tool__name">{t.name}</span>
            <span className="tool__group">{t.group}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

// Two rows of tool chips drifting in opposite directions. The second copy of each
// row is aria-hidden: it only exists to make the loop seamless.
// Premium touches: rows enter from opposite sides, a light sheen sweeps a chip on
// hover (which also pauses its row), and the drift speeds up while you scroll.
export default function ToolsMarquee() {
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let last = window.scrollY, rate = 1, raf = 0;
    const setRate = (r) => root.current && root.current.querySelectorAll(".tools__track").forEach((t) => t.getAnimations().forEach((a) => { a.playbackRate = r; }));
    const settle = () => {
      rate += (1 - rate) * 0.06; // ease back to normal speed
      if (Math.abs(rate - 1) > 0.01) { setRate(rate); raf = requestAnimationFrame(settle); } else { setRate(1); raf = 0; }
    };
    const onScroll = () => {
      const y = window.scrollY, dy = Math.abs(y - last); last = y;
      const r = root.current && root.current.getBoundingClientRect();
      if (!r || r.bottom < 0 || r.top > window.innerHeight) return; // only while the strip is on screen
      rate = Math.min(Math.max(rate, 1 + dy / 14), 4);
      setRate(rate);
      if (!raf) raf = requestAnimationFrame(settle);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section ref={root} id="tools" data-tone="light" className="section section--light tools" aria-labelledby="tools-title">
      <div className="container">
        <Reveal className="sec-head sec-head--center">
          <span className="eyebrow">Software &amp; Digital Tools</span>
          <h2 id="tools-title" className="sec-head__title">Engineering tools we work with</h2>
        </Reveal>
      </div>
      <div className="tools__rows">
        {ROWS.map((row, i) => (
          <Reveal key={i} effect={i ? "right" : "left"} delay={i * 140} className={`tools__row tools__row--${i + 1}`}>
            <Track tools={row} />
            <Track tools={row} hidden />
          </Reveal>
        ))}
      </div>
      <div className="container">
        <Reveal className="center-cta">
          <Link to="/engineering-capabilities#software" className="link-arrow">View all software &amp; tools<Icon name="arrow" /></Link>
        </Reveal>
      </div>
    </section>
  );
}
