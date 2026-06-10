import type { Metadata } from "next";
import Link from "next/link";
import { DarkHero } from "@/components/research/DarkHero";
import { maternalAdvocacyProject } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Clinical, psychological, and human-rights focused research projects associated with Pacific Psychological Associates, including scholarly work, conference materials, and study findings.",
};

const FUTURE_PROJECTS = [
  {
    title: "Additional research projects",
    note: "Additional research projects will be added as they develop, including clinical, psychological, and scholarly work led by the practice and its collaborators.",
  },
  {
    title: "Conference materials & scholarship",
    note: "Posters, presentations, and publications will be collected here as they become available for public sharing.",
  },
] as const;

export default function ResearchPage() {
  return (
    <>
      <DarkHero
        titleId="research-hero-heading"
        eyebrow="Research"
        title="Research"
        subtitle="Clinical, psychological, and human-rights focused research projects."
        intro="This section houses research projects, conference materials, and scholarly work associated with the practice and its collaborators. We share work that meets careful standards of evidence and is presented responsibly."
      />

      <section className="section" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="section-title">
          Featured project
        </h2>
        <p className="section-intro">
          A current research and advocacy project led in collaboration with the practice and its partners.
        </p>

        <div className="card-grid" style={{ marginTop: "var(--space-xl)" }}>
          <article className="project-card">
            <span className="eyebrow">Featured</span>
            <h3 className="project-card__title">{maternalAdvocacyProject.title}</h3>
            <p className="project-card__desc">{maternalAdvocacyProject.shortDescription}</p>
            <Link className="button button--primary project-card__cta" href={maternalAdvocacyProject.href}>
              View Project
            </Link>
          </article>
        </div>
      </section>

      <section className="section section--band" aria-labelledby="future-heading">
        <h2 id="future-heading" className="section-title">
          More research to come
        </h2>
        <p className="section-intro">
          The practice&apos;s research program continues to grow. New projects and materials will appear here as they
          develop.
        </p>
        <div className="card-grid" style={{ marginTop: "var(--space-xl)" }}>
          {FUTURE_PROJECTS.map((p) => (
            <div key={p.title} className="placeholder-card">
              <h3 className="placeholder-card__title">{p.title}</h3>
              <p className="placeholder-card__note">{p.note}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
