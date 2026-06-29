import type { Metadata } from "next";
import { ResearchSection } from "@/components/research/ResearchSection";
import { ProjectBreadcrumb } from "@/components/research/ProjectBreadcrumb";
import { study } from "@/lib/research";

export const metadata: Metadata = {
  title: "Our Study | The Maternal Advocacy Project",
  description:
    "Comparative content analysis of maternal testimony using LIWC linguistic measures of trauma, resilience, and advocacy.",
};

export default function StudyPage() {
  return (
    <div className="project-subpage">
      <ProjectBreadcrumb current="Our Study" />
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
    </div>
  );
}
