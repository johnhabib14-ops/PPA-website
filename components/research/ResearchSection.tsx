import type { ReactNode } from "react";

type ResearchSectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** Full-bleed band tone for alternating rhythm. */
  tone?: "default" | "alt" | "surface";
};

export function ResearchSection({ id, eyebrow, title, intro, children, tone = "default" }: ResearchSectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} className={`band band--${tone} research-section`} aria-labelledby={headingId}>
      <div className="band__inner">
        <div className="research-section__head">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2 id={headingId} className="section-title">
            {title}
          </h2>
          {intro ? <p className="lead">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
