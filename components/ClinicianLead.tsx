import { getLeadClinician } from "@/lib/about";

export function ClinicianLead({ headingId = "clinician-lead-heading" }: { headingId?: string }) {
  const lead = getLeadClinician();

  return (
    <section className="clinician-lead" aria-labelledby={headingId}>
      {/* TODO(launch): Replace placeholder fields in data/about.json (name, intro, photoAlt, specialties) with approved copy before launch. */}
      <div className="clinician-lead__grid">
        <div
          className="clinician-lead__photo"
          role="img"
          aria-label={lead.photoAlt}
        >
          {/* TODO(launch): Add approved headshot image asset; keep descriptive alt text in data/about.json. */}
          <span className="clinician-lead__photo-note" aria-hidden="true">
            Photo
            <br />
            forthcoming
          </span>
        </div>
        <div className="clinician-lead__content">
          <h2 id={headingId} className="clinician-lead__name">
            {lead.name}
          </h2>
          <p className="clinician-lead__creds">{lead.credentials}</p>
          <p>{lead.intro}</p>
          <h3 className="clinician-lead__subhead">Clinical approach</h3>
          <p>{lead.approach}</p>
          <h3 className="clinician-lead__subhead">Assessment and therapy experience</h3>
          <ul className="clinician-lead__list">
            {lead.specialties.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
