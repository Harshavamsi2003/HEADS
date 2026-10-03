import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Icon from "../components/ui/Icon.jsx";
import Checklist from "../components/ui/Checklist.jsx";
import EnquiryForm from "../components/forms/EnquiryForm.jsx";
import { SITE, fullAddress } from "../data/site.js";

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;
  return (
    <>
      <PageHero
        path="/contact"
        eyebrow="Contact Us"
        title="Let's Discuss Your Engineering Requirements"
        lead="Whether you need Electrical & Instrumentation engineering, project consultancy, design engineering, or site support, the HEADS team is ready to discuss your requirements."
      />

      <Section tone="light" id="contact-details">
        <div className="contact">
          <div className="contact__info">
            <Reveal className="contact__card spot">
              <h2>Get in Touch</h2>
              <ul className="contact__list">
                <li><span><Icon name="mail" /></span><div><b>Email</b><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div></li>
                {SITE.phone && <li><span><Icon name="phone" /></span><div><b>Phone</b><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></div></li>}
                <li><span><Icon name="clock" /></span><div><b>Response Time</b>{SITE.responseTime}</div></li>
                <li><span><Icon name="pin" /></span><div><b>Our Location</b><address>{SITE.legalName} (HEADS)<br />{fullAddress()}</address></div></li>
                <li><span><Icon name="globe" /></span><div><b>Serving Clients Globally</b>Remote engineering with on-site support, as required.</div></li>
              </ul>
            </Reveal>
            <Reveal delay={100} className="contact__card spot">
              <h2>Engineering Enquiries</h2>
              <p>For project enquiries, technical requirements, engineering support, and consultancy services, please share your project details with us.</p>
              <p className="contact__sub">What you can share</p>
              <Checklist stagger={false} items={["Project or facility type", "Engineering scope", "Project location", "Required engineering services", "Project schedule or target dates", "Relevant technical documents, if available"]} />
              <p className="note"><Icon name="lock" />Information and documents shared with HEADS will be handled with appropriate confidentiality and professional care.</p>
            </Reveal>
            <Reveal delay={160} className="contact__card spot">
              <h2>Business &amp; General Enquiries</h2>
              <p>For partnerships, vendor registration, careers, and general enquiries, please contact us using the email above or the enquiry form.</p>
            </Reveal>
          </div>

          <Reveal delay={80} id="enquiry-form" className="contact__formwrap"><EnquiryForm /></Reveal>
        </div>
      </Section>

      <Section tone="tint" id="location">
        <Reveal className="mapbox">
          <iframe title="HEADS office location on Google Maps" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </Reveal>
      </Section>
    </>
  );
}
