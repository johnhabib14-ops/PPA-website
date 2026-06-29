import type { Metadata } from "next";
import Link from "next/link";
import { DarkHero } from "@/components/research/DarkHero";
import { ResearchSection } from "@/components/research/ResearchSection";
import { ResearchTeamCard } from "@/components/research/ResearchTeamCard";
import {
  maternalAdvocacyProject,
  maternalAdvocacyRoutes,
  overview,
  hubRegionCards,
  hubSupportCards,
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
            <Link className="button button--accent" href={maternalAdvocacyRoutes.study}>
              Explore the study
            </Link>
            <Link className="button button--ghost-light" href={maternalAdvocacyRoutes.findings}>
              View findings
            </Link>
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
        id="case-studies"
        eyebrow="Regional case studies"
        title="Explore maternal advocacy by context"
        intro="Each case study documents a distinct political and historical setting. Select a region to read the full narrative, imagery, and further reading without scrolling through the entire project at once."
      >
        <div className="card-grid">
          {hubRegionCards.map((card) => (
            <article key={card.href} className="project-card">
              <span className="eyebrow">{card.eyebrow}</span>
              <h3 className="project-card__title">{card.title}</h3>
              <p className="project-card__desc">{card.description}</p>
              <Link className="button button--primary project-card__cta" href={card.href}>
                Read case study
              </Link>
            </article>
          ))}
        </div>
      </ResearchSection>

      <ResearchSection
        id="research-materials"
        eyebrow="Research program"
        title="Foundations, methods, and resources"
        intro="Theoretical grounding, study design, preliminary findings, and media materials each have dedicated pages for focused reading."
        tone="alt"
      >
        <div className="card-grid card-grid--thirds">
          {hubSupportCards.map((card) => (
            <article key={card.href} className="card hub-support-card">
              <span className="eyebrow">{card.eyebrow}</span>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-bio">{card.description}</p>
              <Link className="button button--ghost hub-support-card__cta" href={card.href}>
                View section
              </Link>
            </article>
          ))}
        </div>
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
