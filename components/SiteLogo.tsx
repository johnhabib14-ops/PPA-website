type SiteLogoProps = {
  variant?: "default" | "light";
  className?: string;
};

/**
 * Decorative mark + wordmark. Parent link should set aria-label with full practice name.
 */
export function SiteLogo({ variant = "default", className = "" }: SiteLogoProps) {
  const variantClass = variant === "light" ? "site-logo--light" : "site-logo--default";
  return (
    <span className={`site-logo ${variantClass} ${className}`.trim()}>
      <svg
        className="site-logo__mark-svg"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect className="site-logo__mark-bg" width="44" height="44" rx="10" />
        <path
          className="site-logo__wave site-logo__wave--1"
          d="M8 28c4-6 8-8 14-8s10 2 14 8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="site-logo__wave site-logo__wave--2"
          d="M8 22c4-5 8-6.5 14-6.5s10 1.5 14 6.5"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="site-logo__wave site-logo__wave--3"
          d="M8 16c4-4 8-5 14-5s10 1 14 5"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="site-logo__text">
        <span className="site-logo__line site-logo__line--strong">PPA</span>
        <span className="site-logo__line site-logo__line--full">Pacific Psychological Associates</span>
      </span>
    </span>
  );
}
