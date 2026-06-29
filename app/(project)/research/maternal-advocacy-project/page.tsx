import type { Metadata } from "next";
import Image from "next/image";
import { DarkHero } from "@/components/research/DarkHero";
import { ResearchSection } from "@/components/research/ResearchSection";
import { GraphPlaceholderCard } from "@/components/research/GraphPlaceholderCard";
import { ResearchTeamCard } from "@/components/research/ResearchTeamCard";
import { MediaResourceCard } from "@/components/research/MediaResourceCard";
import { ResearchPhotoGallery } from "@/components/research/ResearchPhotoGallery";
import { ResearchResourceLinks } from "@/components/research/ResearchResourceLinks";
import { ResearchContentBlocks } from "@/components/research/ResearchContentBlocks";
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

function ResearchGroupContent({ group }: { group: (typeof researchGroups)[number] }) {
  const isStacked = group.layout === "stacked";

  if (isStacked) {
    return (
      <div className="research-stacked">
        <div className="research-body">
          <div className="text-block research-lead">
            {group.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {group.quote ? (
            <blockquote className="study-callout research-quote">
              <p>{group.quote}</p>
            </blockquote>
          ) : null}
          {group.blocks?.length ? <ResearchContentBlocks blocks={group.blocks} /> : null}
        </div>
        {group.photos?.length ? (
          <div className="research-stacked__gallery">
            <ResearchPhotoGallery photos={group.photos} />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="research-split">
      <div className="research-body">
        <div className="text-block research-lead">
          {group.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {group.quote ? (
          <blockquote className="study-callout research-quote">
            <p>{group.quote}</p>
          </blockquote>
        ) : null}
        {group.subsections?.length ? (
          <div className="research-subsections-grid card-grid">
            {group.subsections.map((sub, si) => (
              <article key={si} className="construct-card">
                {sub.title ? <h4>{sub.title}</h4> : null}
                {sub.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </article>
            ))}
          </div>
        ) : null}
        {group.collapsible ? (
          <details className="research-collapsible">
            <summary>{group.collapsible.title}</summary>
            <div className="text-block">
              {group.collapsible.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </details>
        ) : null}
      </div>
      {group.photos?.length ? (
        <ResearchPhotoGallery photos={group.photos} />
      ) : group.placeholderLabel && group.placeholderNote ? (
        <PlaceholderFigure label={group.placeholderLabel} note={group.placeholderNote} />
      ) : null}
    </div>
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

      {/* Research foundations */}
      <ResearchSection
        id="research-foundations"
        eyebrow={researchFoundations.eyebrow}
        title={researchFoundations.title}
        intro={researchFoundations.intro}
      >
        <div className="foundation-layout">
          <figure className="foundation-figure">
            <Image
              src={researchFoundations.image.src}
              alt={researchFoundations.image.alt}
              width={682}
              height={1024}
              sizes="(min-width: 900px) 20rem, 60vw"
              className="foundation-figure__image"
            />
            <figcaption className="foundation-figure__caption">
              {researchFoundations.image.caption}
            </figcaption>
          </figure>

          <ul className="resource-links foundation-cards">
            {researchFoundations.cards.map((card) => (
              <li key={card.title}>
                <article className="resource-link-card">
                  <h3 className="resource-link-card__title">{card.title}</h3>
                  {card.body.map((p, i) => (
                    <p key={i} className="resource-link-card__summary">
                      {p}
                    </p>
                  ))}
                  <p className="resource-link-card__source foundation-card__citation">{card.citation}</p>
                  <div className="foundation-card__links">
                    {card.links.map((link) => (
                      <a
                        key={link.url}
                        className="resource-link-card__link"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <span className="sr-only"> (opens in new tab)</span>
                      </a>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className="research-resources">
          <h3 className="research-resources__title">Sources and further reading</h3>
          <ul className="source-list">
            {researchFoundations.sources.map((source) => (
              <li key={source.url} className="source-list__item">
                <span className="source-list__citation">{source.citation}</span>{" "}
                <a
                  className="source-list__link"
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.label}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
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
          <ResearchGroupContent group={group} />
          {group.resourceLinks?.length ? (
            <div className="research-resources">
              <h3 className="research-resources__title">Further reading</h3>
              <ResearchResourceLinks links={group.resourceLinks} />
            </div>
          ) : null}
        </ResearchSection>
      ))}

      {/* Our study */}
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
        <div className="card-grid" style={{ marginTop: "var(--space-lg)" }}>
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
