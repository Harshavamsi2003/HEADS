import { Link } from "react-router-dom";
import Section from "../../components/ui/Section.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import { Img } from "../../components/ui/Photo.jsx";
import { INDUSTRIES } from "../../data/industries.js";

// Three photo cards. Desktop/tablet: the full photo on top, details below. Phones: a swipeable row
// of photo tiles with the text over the picture (the next tile peeks in).
export default function IndustryTiles() {
  return (
    <Section tone="dark" id="industries-preview">
      <SectionHeading align="left" eyebrow="Industries" title="Industries We Serve" lead="E&I engineering consultancy and project support for Oil & Gas and Marine & Offshore projects worldwide." />
      <ul className="tiles">
        {INDUSTRIES.map((ind, i) => (
          <Reveal as="li" key={ind.id} effect="up" delay={i * 110}>
            <Link to={`/services#${ind.id}`} className="tile" aria-label={ind.title}>
              <span className="tile__media">
                <Img name={ind.photo} alt={ind.alt} sizes="(min-width: 48rem) 33vw, 80vw" />
                <span className="tile__shade" aria-hidden="true" />
              </span>
              <span className="tile__go" aria-hidden="true"><Icon name="arrowUR" /></span>
              <span className="tile__body">
                <span className="tile__icon"><Icon name={ind.icon} /></span>
                <span className="tile__title">{ind.title}</span>
                <span className="tile__text">{ind.short}</span>
                <span className="tile__more">Explore<Icon name="arrow" /></span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
