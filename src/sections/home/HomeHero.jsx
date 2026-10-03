import { Fragment } from "react";
import Button from "../../components/ui/Button.jsx";
import { IMAGES } from "../../data/images.js";
import { SITE } from "../../data/site.js";

const NAME = "Hari Engineering and Design Solutions".split(" ");
// "Engineering Expertise. Practical Solutions. Reliable Delivery." -> three short phrases
const TAG = SITE.tagline.split(". ").map((t, i, a) => (i < a.length - 1 ? `${t}.` : t));

const set = (name) => IMAGES[name].widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(", ");
const D = IMAGES["hero-desktop"], M = IMAGES["hero-mobile"];

// Full-screen hero. The landscape photo is used on desktop/landscape screens and the portrait
// photo on phones/tablets held upright (chosen by the browser, only one is downloaded).
// Layout: text on the left over the sky on desktop; text anchored to the bottom over the sea on portrait screens.
export default function HomeHero() {
  return (
    <section className="hero" id="top" data-hero data-tone="dark" aria-labelledby="hero-title">
      <picture className="hero__photo">
        <source media="(max-aspect-ratio: 1/1)" type="image/webp" srcSet={set("hero-mobile")} sizes="100vw" width={M.w} height={M.h} />
        <img
          src={`/images/hero-desktop-${D.widths[D.widths.length - 2]}.webp`}
          srcSet={set("hero-desktop")}
          sizes="100vw"
          width={D.w}
          height={D.h}
          alt="Offshore oil and gas platform at sunset"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">
            {NAME.map((w, i) => (
              <Fragment key={w + i}>
                <span className="hw"><span style={{ "--i": i }}>{w}</span></span>
                {i < NAME.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </h1>
          <p className="hero__sub rise-t" style={{ "--d": "60ms" }}>Electrical &amp; Instrumentation Engineering Solutions</p>
          <p className="hero__tagline rise" style={{ "--d": "300ms" }}>
            {TAG.map((t, i) => (
              <Fragment key={t}>
                <span>{t}</span>
                {i < TAG.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </p>
          <p className="hero__text rise-t" style={{ "--d": "120ms" }}>
            HEADS is an Electrical &amp; Instrumentation engineering consultancy for Oil &amp; Gas and Marine &amp; Offshore projects, based in Chennai, India and serving clients worldwide.
          </p>
          <div className="hero__actions rise" style={{ "--d": "380ms" }}>
            <Button to="/services" variant="light">Explore Our Services</Button>
            <Button to="/contact" variant="outline-light">Discuss Your Project</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
