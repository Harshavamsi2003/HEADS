import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import CTABanner from "../components/ui/CTABanner.jsx";
import WhoWeAre from "../sections/about/WhoWeAre.jsx";
import VisionMission from "../sections/about/VisionMission.jsx";
import Values from "../sections/about/Values.jsx";
import Approach from "../sections/about/Approach.jsx";
import Quality from "../sections/about/Quality.jsx";
import Careers from "../sections/about/Careers.jsx";
import BrandBanner from "../sections/about/BrandBanner.jsx";
import { SITE } from "../data/site.js";

export default function About() {
  return (
    <>
      <PageHero
        path="/about-us"
        eyebrow="About HEADS"
        title="About Hari Engineering and Design Solutions (HEADS)"
        lead={`${SITE.tagline} HEADS is an Electrical & Instrumentation (E&I) engineering consultancy established in ${SITE.founded}, serving the Oil & Gas and Marine & Offshore industries from Chennai, Tamil Nadu, India.`}
      />
      <WhoWeAre />
      <VisionMission />
      <Values />
      <Approach />
      <Quality />
      <Careers />
      <Section tone="light">
        <Reveal className="commit">
          <span className="eyebrow">Our Commitment</span>
          <p className="commit__quote">We aim to be a dependable engineering partner, providing professional, responsive and technically sound Electrical &amp; Instrumentation engineering support.</p>
        </Reveal>
      </Section>
      <BrandBanner />
      <CTABanner />
    </>
  );
}
