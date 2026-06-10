import type { TeamMember } from "@/lib/research";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export function ResearchTeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="card member-card">
      <div className="member-card__head">
        <span className="member-card__avatar" aria-hidden="true">
          {initials(member.name)}
        </span>
        <div>
          <h3 className="member-card__name">{member.name}</h3>
          <p className="member-card__role">{member.role}</p>
        </div>
      </div>
      <p className="member-card__affiliation">{member.affiliation}</p>
      <p className="member-card__bio">{member.bio}</p>
    </article>
  );
}
