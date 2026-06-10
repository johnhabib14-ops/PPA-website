import Link from "next/link";

export type ServiceCardProps = {
  title: string;
  description: string;
  /** One or two sentences: typical visitor or referral situation. */
  whoFor?: string;
  /** Conditions or concerns commonly addressed (no outcome guarantees). */
  concernsAddressed?: string;
  /** What happens next at a high level (no guarantees). */
  whatToExpect?: string;
  href: string;
  ctaLabel: string;
  headingLevel?: "h2" | "h3";
};

export function ServiceOverviewCard({
  title,
  description,
  whoFor,
  concernsAddressed,
  whatToExpect,
  href,
  ctaLabel,
  headingLevel = "h3",
}: ServiceCardProps) {
  const Tag = headingLevel === "h2" ? "h2" : "h3";
  return (
    <article className="service-overview-card">
      <Tag className="service-overview-card__title">{title}</Tag>
      <p className="service-overview-card__desc">{description}</p>
      {whoFor ? (
        <div className="service-overview-card__block">
          <h4 className="service-overview-card__label">Who this is for</h4>
          <p className="service-overview-card__detail">{whoFor}</p>
        </div>
      ) : null}
      {concernsAddressed ? (
        <div className="service-overview-card__block">
          <h4 className="service-overview-card__label">Concerns this addresses</h4>
          <p className="service-overview-card__detail">{concernsAddressed}</p>
        </div>
      ) : null}
      {whatToExpect ? (
        <div className="service-overview-card__block">
          <h4 className="service-overview-card__label">What you can expect</h4>
          <p className="service-overview-card__detail">{whatToExpect}</p>
        </div>
      ) : null}
      <Link className="button button--secondary service-overview-card__cta" href={href}>
        {ctaLabel}
      </Link>
    </article>
  );
}
