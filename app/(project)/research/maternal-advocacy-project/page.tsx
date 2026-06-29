import type { Metadata } from "next";
import Link from "next/link";
import { DarkHero } from "@/components/research/DarkHero";
import { ResearchSection } from "@/components/research/ResearchSection";
import { GraphPlaceholderCard } from "@/components/research/GraphPlaceholderCard";
import { ResearchTeamCard } from "@/components/research/ResearchTeamCard";
import { MediaResourceCard } from "@/components/research/MediaResourceCard";
import { ResearchResourceLinks } from "@/components/research/ResearchResourceLinks";
import { ResearchGroupContent } from "@/components/research/ResearchGroupContent";
import { ResearchFoundationsContent } from "@/components/research/ResearchFoundationsContent";
import {
  maternalAdvocacyProject,
  overview,
  researchFoundations,
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

      <ResearchSection id="overview" eyebrow={overview.eyebrow} title={overview.title} intro={overview.body} tone="alt">
        <ul className="overview-grid">
          {overview.groups.map((group, i) => (
            <li key={group.title}>
              <Link className="overview-grid__item overview-grid__link" href={group.href}>
                <span className="overview-grid__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.blurb}</p>
                </div>
              </Link>
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

      <ResearchSection
        id="research-foundations"
        eyebrow={researchFoundations.eyebrow}
        title={researchFoundations.title}
        intro={researchFoundations.intro}
      >
        <ResearchFoundationsContent foundations={researchFoundations} />
      </ResearchSection>

      {researchGroups.map((group, gi) => (
        <ResearchSection
          key={group.id}
          id={group.id}
          eyebrow={group.eyebrow}
          title={group.title}
          intro={group.intro}
          tone={gi % 2 === 0 ? "default" : "alt"}
        >
          <ResearchGroupContent group={group} />
          {group.resourceLinks?.length ? (
            <div className="research-resources">
              <h3 className="research-resources__title">Further reading</h3>
              <ResearchResourceLinks links={group.resourceLinks} />
            </div>
          ) : null}
        </ResearchSection>
      ))}

      <ResearchSection id="our-study" eyebrow={study.eyebrow} title={study.title} tone="alt">
        <div className="study-callout">
          {study.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
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
