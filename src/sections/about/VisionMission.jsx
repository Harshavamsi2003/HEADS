import Section from "../../components/ui/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import { SectionBg } from "../../components/ui/Photo.jsx";

// Two large typographic statements split by a vertical rule, over a photo with a solid navy veil.
export default function VisionMission() {
  return (
    <Section tone="dark" id="vision-mission" bg={<SectionBg name="about-vision" />}>
      <div className="vm">
        <Reveal className="vm__item">
          <span className="eyebrow">Our Vision</span>
          <p className="vm__text">To become a globally trusted engineering consultancy, recognized for technical excellence, reliable delivery, innovation and long-term client relationships.</p>
        </Reveal>
        <Reveal delay={140} className="vm__item">
          <span className="eyebrow">Our Mission</span>
          <p className="vm__text">To deliver high-quality and practical engineering solutions through experienced professionals, structured processes, modern engineering tools and continuous improvement.</p>
        </Reveal>
      </div>
    </Section>
  );
}
