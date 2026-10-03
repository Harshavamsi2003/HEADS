import { Link } from "react-router-dom";
import Section from "../../components/ui/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Icon from "../../components/ui/Icon.jsx";
import Photo from "../../components/ui/Photo.jsx";
import { PROJECT_TYPES } from "../../data/services.js";

export default function Delivery() {
  return (
    <Section tone="dark" id="delivery">
      <div className="split split--center">
        <Reveal effect="left" className="split__text">
          <span className="eyebrow">Project Types</span>
          <h2 className="sec-head__title">Support for every kind of project</h2>
          <ul className="pills pills--left">
            {PROJECT_TYPES.map((t) => <li key={t} className="pill">{t}</li>)}
          </ul>
          <div className="delivery-note">
            <Icon name="network" />
            <div>
              <h3>Delivery Model</h3>
              <p>Remote engineering with on-site support, as required by the project.</p>
              <p className="dim">For detailed technical scope and deliverables, see our <Link to="/engineering-capabilities">Engineering Capabilities</Link>.</p>
            </div>
          </div>
        </Reveal>
        <Photo name="remote-engineering" alt="Engineer on a video call with a colleague at a plant" sizes="(min-width: 60rem) 48vw, 100vw" ratio="3/2" />
      </div>
    </Section>
  );
}
