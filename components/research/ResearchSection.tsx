import type { ReactNode } from "react";

type ResearchSectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function ResearchSection({ id, eyebrow, title, intro, children }: ResearchSectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} className="research-section" aria-labelledby={headingId}>
      <div className="research-section__head">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 id={headingId} className="section-title">
          {title}
        </h2>
        {intro ? <p className="lead">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
