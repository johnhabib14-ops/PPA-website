import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  titleId?: string;
  lead?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  /** Narrower hero for interior pages; default is the taller home treatment. */
  size?: "default" | "tall";
};

export function PageHero({
  eyebrow,
  title,
  titleId,
  lead,
  children,
  actions,
  size = "default",
}: PageHeroProps) {
  return (
    <section className={`page-hero${size === "tall" ? " page-hero--tall" : ""}`} aria-labelledby={titleId}>
      <div className="page-hero__grid" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="pageHeroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pageHeroGrid)" />
        </svg>
      </div>
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="page-hero__inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 id={titleId} className="page-hero__title">
          {title}
        </h1>
        {lead ? <p className="page-hero__lead">{lead}</p> : null}
        {children}
        {actions ? <div className="page-hero__actions">{actions}</div> : null}
      </div>
    </section>
  );
}
