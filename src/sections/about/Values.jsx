import Section from "../../components/ui/Section.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";

const VALUES = [
  { icon: "award", title: "Technical Excellence", text: "Strong engineering fundamentals, accuracy and professional standards." },
  { icon: "check", title: "Quality", text: "Quality integrated into engineering reviews, documentation and project delivery." },
  { icon: "lock", title: "Integrity", text: "Professionalism, transparency and accountability in our work and relationships." },
  { icon: "target", title: "Client Focus", text: "Understanding client requirements and delivering solutions aligned with project objectives." },
  { icon: "shield", title: "Safety", text: "Maintaining safety awareness throughout engineering development and project execution." },
  { icon: "refresh", title: "Continuous Improvement", text: "Learning from experience and continuously improving our engineering methods, processes and tools." },
];

// Open grid with a heavy rule above each value instead of card boxes.
export default function Values() {
  return (
    <Section tone="light" id="values">
      <SectionHeading align="left" eyebrow="What guides us" title="Our Values" />
      <ul className="values">
        {VALUES.map((v, i) => (
          <Reveal as="li" key={v.title} delay={(i % 3) * 90} className="value">
            <Icon name={v.icon} />
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
