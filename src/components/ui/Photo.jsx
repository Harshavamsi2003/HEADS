import { IMAGES } from "../../data/images.js";

// Responsive photo helpers. Files live in /public/images and are produced by
// `npm run images` from the originals in /images-src (see scripts/optimize-images.mjs).
export const srcSetFor = (name) => IMAGES[name].widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(", ");

// Plain <img>: right size per screen, lazy-loaded, with width/height to avoid layout shift.
export function Img({ name, alt = "", sizes = "100vw", eager = false, className = "" }) {
  const m = IMAGES[name];
  const widths = m.widths;
  return (
    <img
      className={className || undefined}
      src={`/images/${name}-${widths[widths.length - 1]}.webp`}
      srcSet={srcSetFor(name)}
      sizes={sizes}
      width={m.w}
      height={m.h}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

// Framed photo that fades in and slowly "settles" (zooms out) when scrolled into view.
//   ratio  – CSS aspect-ratio, e.g. "3/2"      fill – stretch to the parent box instead
//   caption – small label in the corner (used to mark illustrative images)
export default function Photo({ name, alt = "", sizes = "100vw", ratio, fill = false, eager = false, caption, className = "" }) {
  return (
    <figure className={`photo${fill ? " photo--fill" : ""} ${className}`.trim()} style={!fill && ratio ? { aspectRatio: ratio } : undefined} data-reveal="fade">
      <Img name={name} alt={alt} sizes={sizes} eager={eager} />
      {caption && <figcaption className="photo__cap">{caption}</figcaption>}
    </figure>
  );
}

// Decorative photo behind a whole section (dark navy veil keeps text readable).
export function SectionBg({ name, sizes = "100vw" }) {
  return (
    <div className="sec-bg" aria-hidden="true" data-reveal="fade">
      <Img name={name} sizes={sizes} />
    </div>
  );
}
