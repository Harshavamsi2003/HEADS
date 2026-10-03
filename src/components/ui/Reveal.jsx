// Scroll-reveal wrapper. It only renders a data attribute; the actual
// animation is plain CSS toggled by one IntersectionObserver (see
// components/layout/RouteEffects.jsx). That keeps server-rendered HTML
// fully visible to search engines and avoids hydration mismatches.
export default function Reveal({ as: Tag = "div", effect = "up", delay = 0, className = "", children, ...rest }) {
  return (
    <Tag data-reveal={effect} style={delay ? { "--d": `${delay}ms` } : undefined} className={className} {...rest}>
      {children}
    </Tag>
  );
}
// Helper for elements that need reveal props without a wrapper:  <li {...rv("up", 80)}>
export const rv = (effect = "up", delay = 0) => ({ "data-reveal": effect, style: delay ? { "--d": `${delay}ms` } : undefined });
