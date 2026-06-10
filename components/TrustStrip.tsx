import { siteConfig } from "@/lib/site";

const TRUST_ITEMS = [
  "Neuropsychological assessment",
  "Adult psychotherapy",
  "ADHD and autism evaluation",
  "Learning and memory concerns",
  "Anxiety and mood concerns",
] as const;

export function TrustStrip() {
  const locationLine = `${siteConfig.officeCity} and Greater ${siteConfig.regionLabel}`;

  return (
    <div className="trust-strip" role="region" aria-label="Practice focus and service area">
      <ul className="trust-strip__list">
        {TRUST_ITEMS.map((item) => (
          <li key={item} className="trust-strip__item">
            <span className="trust-strip__label">{item}</span>
          </li>
        ))}
        <li className="trust-strip__item">
          <span className="trust-strip__label">{locationLine}</span>
        </li>
      </ul>
    </div>
  );
}
