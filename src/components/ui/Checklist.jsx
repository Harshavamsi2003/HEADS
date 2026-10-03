import Icon from "./Icon.jsx";
import { rv } from "./Reveal.jsx";

// Check-marked list. `cols` sets responsive column count via CSS (1–3).
export default function Checklist({ items, cols = 1, stagger = true, className = "" }) {
  return (
    <ul className={`checklist checklist--c${cols} ${className}`.trim()}>
      {items.map((t, i) => (
        <li key={t} {...rv("up", stagger ? Math.min(i, 8) * 45 : 0)}>
          <Icon name="check" className="checklist__tick" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
