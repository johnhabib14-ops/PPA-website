import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EmbeddedIntake } from "@/components/EmbeddedIntake";
import { siteConfig, fullAddress, googleMapsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & schedule a consultation",
  description:
    "Contact Pacific Psychological Associates in El Segundo for Los Angeles neuropsychological assessment or adult psychotherapy inquiries. General contact form only—not for emergencies or detailed symptoms.",
};

export default function ContactPage() {
  const showEmbed =
    process.env.NEXT_PUBLIC_USE_EMBEDDED_INTAKE === "true" &&
    Boolean(process.env.NEXT_PUBLIC_INTAKE_IFRAME_SRC);

  return (
    <>
      <header className="page-header stack-tight">
        <p className="eyebrow">Scheduling and inquiries</p>
        <h1>Contact</h1>
        <p className="lead">
          Use this page to request a consultation or ask a non-urgent administrative question. The form below is
          for general inquiries only and is not monitored for emergencies.
        </p>
      </header>

      <div className="contact-layout">
        <aside className="contact-sidebar" aria-label="Office location and hours">
          <div className="contact-office-card">
            <h2 className="section-title">Office</h2>
            <address className="contact-office-address">
              <p>
                <strong>Address</strong>
                <br />
                {fullAddress()}
              </p>
              <p>
                <strong>Phone</strong>
                <br />
                <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>
              </p>
              <p>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
              <p>
                <strong>Hours</strong>
                <br />
                <span className="muted">{siteConfig.hours}</span>
              </p>
              <p>
                <a href={googleMapsUrl()}>Driving directions</a>
              </p>
            </address>
          </div>
        </aside>

        <div className="contact-main">
          <EmbeddedIntake />

          <section className="section section--first" aria-labelledby="form-heading">
            <h2 id="form-heading" className="section-title">
              {showEmbed ? "Alternate inquiry form" : "General inquiry form"}
            </h2>
            {!showEmbed ? (
              <p className="muted">
                Fields marked with an asterisk are required. We respond during business hours.
              </p>
            ) : (
              <p className="muted">
                If you are not using the embedded secure form above, you may submit a brief message here.
              </p>
            )}
            <div className="form-wrap">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
