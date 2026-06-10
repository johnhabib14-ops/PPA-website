import { getTeamByCategory } from "@/lib/team";

type TeamSectionProps = {
  /** Anchor id for in-page links (e.g. from legacy /team redirect). */
  sectionId?: string;
};

export function TeamSection({ sectionId }: TeamSectionProps) {
  const groups = getTeamByCategory();

  return (
    <section
      id={sectionId}
      aria-labelledby="team-heading"
      className="section section--band team-section"
    >
      {/* TODO(launch): Replace placeholder names and bios in data/team.json with approved public listings. */}
      <h2 id="team-heading" className="section-title">
        Clinical team structure
      </h2>
      <p className="muted">
        Our practice includes the director, licensed psychologists, and trainees completing clinical and
        neuropsychology externships under supervision. Externs provide care within their training scope; licensed
        staff retain clinical responsibility as required by regulation and site policy.
      </p>
      {groups.map((group) => (
        <div key={group.category} className="team-group">
          <h3>{group.label}</h3>
          <div className="card-grid">
            {group.members.map((member) => (
              <article key={member.id} className="card team-card">
                <h4 className="card-title">{member.name}</h4>
                <p className="card-role">{member.title}</p>
                <p className="card-bio">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
