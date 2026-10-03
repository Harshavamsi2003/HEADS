import Section from "../../components/ui/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Logo from "../../components/ui/Logo.jsx";

export default function WhoWeAre() {
  return (
    <Section tone="light" id="who-we-are">
      <div className="split split--center">
        <Reveal effect="left" className="split__text">
          <span className="eyebrow">Who We Are</span>
          <h2 className="sec-head__title">Engineering expertise, project experience and modern digital tools</h2>
          <p>HEADS combines engineering expertise, project experience and modern digital tools to support clients across the project lifecycle. We work with EPC contractors, operators, engineering companies, equipment and package suppliers, shipyards and other project stakeholders, providing flexible remote engineering and site or field support based on project requirements.</p>
          <p>Our engineers' experience in international EPC and project environments covers Greenfield, Brownfield, modification, revamp, shutdown, turnaround and new-build projects, across different client specifications, engineering practices and international standards.</p>
        </Reveal>
        <Reveal effect="right" className="logo-showcase">
          <span className="logo-showcase__ring" aria-hidden="true" />
          <Logo variant="full" tone="dark" className="logo-showcase__logo" eager />
        </Reveal>
      </div>
    </Section>
  );
}
