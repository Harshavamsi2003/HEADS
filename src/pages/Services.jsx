import PageHero from "../components/ui/PageHero.jsx";
import CTABanner from "../components/ui/CTABanner.jsx";
import ServiceTimeline from "../sections/services/ServiceTimeline.jsx";
import Delivery from "../sections/services/Delivery.jsx";
import Industries from "../sections/services/Industries.jsx";
import ProjectShowcase from "../sections/services/ProjectShowcase.jsx";

export default function Services() {
  return (
    <>
      <PageHero
        path="/services"
        eyebrow="Engineering Services"
        title="Electrical & Instrumentation Engineering Services"
        lead="Hari Engineering and Design Solutions (HEADS) provides E&I engineering consultancy and project support across the project lifecycle, from concept through commissioning and handover, for clients in the Oil & Gas and Marine & Offshore industries worldwide."
      />
      <ServiceTimeline />
      <Delivery />
      <Industries />
      <ProjectShowcase />
      <CTABanner
        title="Tell us about your project"
        text="Share your scope, location and schedule and we will respond with the appropriate engineering approach."
        secondary={{ to: "/engineering-capabilities", label: "View Capabilities" }}
      />
    </>
  );
}
