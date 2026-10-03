import Section from "../../components/ui/Section.jsx";
import Photo from "../../components/ui/Photo.jsx";

// Closing brand panel: logo, tagline and the four areas HEADS works in.
// Hidden on phones, where the small icon row would be unreadable (the logo and tagline are in the footer).
export default function BrandBanner() {
  return (
    <Section tone="light" id="brand" className="brand">
      <Photo name="brand-banner" alt="HEADS – Hari Engineering and Design Solutions. Engineering Expertise. Practical Solutions. Reliable Delivery. Oil & Gas, Marine & Offshore, E&I Engineering, Global Support" sizes="(min-width: 90rem) 1500px, 92vw" ratio="2168/725" />
    </Section>
  );
}
