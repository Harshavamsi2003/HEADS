// Brand logo (vector, traced from the supplied artwork).
//  variant: "full" (emblem + HEADS wordmark) | "mark" (emblem only)
//  tone:    "dark" (navy on light backgrounds) | "light" (white on dark backgrounds)
const DIMS = { full: [754, 568], mark: [424, 456] };
export default function Logo({ variant = "full", tone = "dark", className = "", alt = "HEADS – Hari Engineering and Design Solutions logo", eager = false }) {
  const [w, h] = DIMS[variant];
  const src = `/brand/logo-${variant}${tone === "light" ? "-light" : ""}.svg`;
  return <img src={src} alt={alt} width={w} height={h} className={`logo logo--${variant} ${className}`.trim()} loading={eager ? "eager" : "lazy"} decoding="async" />;
}
