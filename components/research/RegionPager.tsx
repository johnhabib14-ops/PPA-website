import Link from "next/link";
import type { RegionPageLink } from "@/lib/research";

type RegionPagerProps = {
  prev?: RegionPageLink;
  next?: RegionPageLink;
};

export function RegionPager({ prev, next }: RegionPagerProps) {
  if (!prev && !next) return null;

  return (
    <nav className="region-pager" aria-label="Regional case studies">
      {prev ? (
        <Link className="region-pager__link region-pager__link--prev" href={prev.href}>
          <span className="region-pager__label">Previous</span>
          <span className="region-pager__title">{prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link className="region-pager__link region-pager__link--next" href={next.href}>
          <span className="region-pager__label">Next</span>
          <span className="region-pager__title">{next.label}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
