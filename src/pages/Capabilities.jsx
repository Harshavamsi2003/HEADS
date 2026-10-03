import PageHero from "../components/ui/PageHero.jsx";
import CTABanner from "../components/ui/CTABanner.jsx";
import CapabilityList from "../sections/capabilities/CapabilityList.jsx";
import SoftwareDirectory from "../sections/capabilities/SoftwareDirectory.jsx";
import FieldSupport from "../sections/capabilities/FieldSupport.jsx";
import Automation from "../sections/capabilities/Automation.jsx";
import Standards from "../sections/capabilities/Standards.jsx";

const JUMP = [
  ["#overview", "Capabilities"], ["#software", "Software & Tools"], ["#site-field", "Site & Field"],
  ["#ai-automation", "AI & Automation"], ["#standards", "Standards"],
];

export default function Capabilities() {
  return (
    <>
      <PageHero
        path="/engineering-capabilities"
        eyebrow="Engineering Capabilities"
        title="Engineering Capabilities"
        lead="HEADS provides integrated Electrical & Instrumentation (E&I) engineering for Greenfield, Brownfield, Modification, Shutdown, Turnaround and New-Build projects. Our capabilities cover engineering design, power system studies, calculations, 2D/3D engineering, procurement support, field engineering and digital engineering solutions across the project lifecycle."
      >
        <nav className="jump" aria-label="On this page">
          {JUMP.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </PageHero>
      <CapabilityList />
      <SoftwareDirectory />
      <FieldSupport />
      <Automation />
      <Standards />
      <CTABanner />
    </>
  );
}
