import type { ReactNode } from "react";

type DarkHeroProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  subtitle?: string;
  intro?: string;
  quote?: string;
  actions?: ReactNode;
};

export function DarkHero({ eyebrow, title, titleId, subtitle, intro, quote, actions }: DarkHeroProps) {
  return (
    <section className="dark-hero" aria-labelledby={titleId}>
      <div className="dark-hero__grid" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="darkHeroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#darkHeroGrid)" />
        </svg>
      </div>
      <div className="dark-hero__glow" aria-hidden="true" />

      <div className="dark-hero__inner">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 id={titleId} className="dark-hero__title">
          {title}
        </h1>
        {subtitle ? <p className="dark-hero__subtitle">{subtitle}</p> : null}
        {intro ? <p className="dark-hero__intro">{intro}</p> : null}
        {actions ? <div className="dark-hero__actions">{actions}</div> : null}
        {quote ? <p className="dark-hero__quote">{quote}</p> : null}
      </div>
    </section>
  );
}
