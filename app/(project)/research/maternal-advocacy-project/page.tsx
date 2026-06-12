import type { Metadata } from "next";
import { DarkHero } from "@/components/research/DarkHero";
import { ResearchSection } from "@/components/research/ResearchSection";
import { GraphPlaceholderCard } from "@/components/research/GraphPlaceholderCard";
import { ResearchTeamCard } from "@/components/research/ResearchTeamCard";
import { MediaResourceCard } from "@/components/research/MediaResourceCard";
import { ResearchPhotoGallery } from "@/components/research/ResearchPhotoGallery";
import { ResearchResourceLinks } from "@/components/research/ResearchResourceLinks";
import {
  maternalAdvocacyProject,
  overview,
  researchGroups,
  study,
  findings,
  media,
  team,
} from "@/lib/research";

export const metadata: Metadata = {
  title: "The Maternal Advocacy Project",
  description:
    "A trauma-informed comparative research project documenting maternal advocacy amid political violence, abduction, and authoritarianism. Content analysis using LIWC linguistic measures of trauma, resilience, and testimony.",
  keywords: [
    "maternal advocacy",
    "political violence",
    "trauma",
    "resilience",
    "LIWC",
    "linguistic analysis",
    "testimony",
    "human rights research",
  ],
};

function PlaceholderFigure({ label, note }: { label: string; note: string }) {
  return (
    <figure className="research-figure">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 14l4.5-4 3.5 3 4-5 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <figcaption>{label}</figcaption>
      <p className="research-figure__note">{note}</p>
    </figure>
  );
}

export default function MaternalAdvocacyProjectPage() {
  return (
    <>
      <DarkHero
        tall
        titleId="map-hero-heading"
        eyebrow={maternalAdvocacyProject.eyebrow}
        title={maternalAdvocacyProject.title}
        subtitle={maternalAdvocacyProject.subtitle}
        intro={maternalAdvocacyProject.heroIntro}
        quote={maternalAdvocacyProject.heroSubtitle}
        actions={
          <>
            <a className="button button--accent" href="#our-study">
              Explore the study
            </a>
            <a className="button button--ghost-light" href="#findings">
              View findings
            </a>
          </>
        }
      />

      {/* Project overview */}
      <ResearchSection id="overview" eyebrow={overview.eyebrow} title={overview.title} intro={overview.body} tone="alt">
        <ul className="overview-grid">
          {overview.groups.map((group, i) => (
            <li key={group.title} className="overview-grid__item">
              <span className="overview-grid__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.blurb}</p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="tag-list">
          {overview.tags.map((tag) => (
            <li key={tag} className="tag-pill">
              {tag}
            </li>
          ))}
        </ul>
      </ResearchSection>

      {/* Three group sections */}
      {researchGroups.map((group, gi) => (
        <ResearchSection
          key={group.id}
          id={group.id}
          eyebrow={group.eyebrow}
          title={group.title}
          intro={group.intro}
          tone={gi % 2 === 0 ? "default" : "alt"}
        >
          <div className="research-split">
            <div className="text-block">
              {group.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {group.subsections?.map((sub, si) => (
                <div key={si} className="research-subsection">
                  {sub.title ? <h3 className="research-subsection__title">{sub.title}</h3> : null}
                  {sub.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
              ))}
              {group.resourceLinks?.length ? (
                <ResearchResourceLinks links={group.resourceLinks} />
              ) : null}
            </div>
            {group.photos?.length ? (
              <ResearchPhotoGallery photos={group.photos} />
            ) : group.placeholderLabel && group.placeholderNote ? (
              <PlaceholderFigure label={group.placeholderLabel} note={group.placeholderNote} />
            ) : null}
          </div>
        </ResearchSection>
      ))}

      {/* Our study */}
      <ResearchSection id="our-study" eyebrow={study.eyebrow} title={study.title} tone="alt">
        <div className="study-callout">
          <p>{study.description}</p>
        </div>

        <div className="card-grid" style={{ marginTop: "var(--space-xl)" }}>
          {study.groups.map((g) => (
            <article key={g.label} className="card">
              <span className="eyebrow">{g.label}</span>
              <h3 className="card-title">{g.title}</h3>
              <p className="card-bio">{g.blurb}</p>
            </article>
          ))}
        </div>

        <h3 style={{ marginTop: "var(--space-3xl)" }}>{study.liwc.title}</h3>
        <div className="liwc-grid">
          <div className="text-block">
            <p>{study.liwc.intro}</p>
            <p>{study.liwc.constructsIntro}</p>
            <p>{study.liwc.outro}</p>
          </div>
          <ul className="measure-list">
            {study.liwc.measures.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <h3 style={{ marginTop: "var(--space-3xl)" }}>{study.keyConstructs.title}</h3>
        <p className="section-intro">{study.keyConstructs.intro}</p>
        <div className="card-grid card-grid--thirds" style={{ marginTop: "var(--space-lg)" }}>
          {study.keyConstructs.items.map((item) => (
            <article key={item.title} className="construct-card">
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </ResearchSection>

      {/* Findings */}
      <ResearchSection id="findings" eyebrow={findings.eyebrow} title={findings.title} intro={findings.intro}>
        <div className="graph-grid">
          {findings.cards.map((card) => (
            <GraphPlaceholderCard key={card.title} card={card} />
          ))}
        </div>
        <p className="update-note">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 8v0M12 11v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          {findings.updateNote}
        </p>
      </ResearchSection>

      {/* Media */}
      <ResearchSection id="media" eyebrow={media.eyebrow} title={media.title} intro={media.intro} tone="alt">
        <div className="card-grid card-grid--thirds">
          {media.resources.map((resource) => (
            <MediaResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
        <p className="muted" style={{ marginTop: "var(--space-lg)", fontStyle: "italic" }}>
          {media.note}
        </p>
      </ResearchSection>

      {/* Who we are */}
      <ResearchSection id="team" eyebrow={team.eyebrow} title={team.title} intro={team.intro}>
        <div className="card-grid card-grid--thirds">
          {team.members.map((member, i) => (
            <ResearchTeamCard key={i} member={member} />
          ))}
        </div>
      </ResearchSection>
    </>
  );
}
