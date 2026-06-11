import type { ReactElement } from "react";
import type { MediaResource } from "@/lib/research";

const icons: Record<string, ReactElement> = {
  Articles: (
    <path
      d="M6 4h9l3 3v13H6zM15 4v3h3M9 12h6M9 15h6M9 9h3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Videos: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  ),
  Interviews: (
    <>
      <path d="M12 3a4 4 0 014 4v3a4 4 0 11-8 0V7a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 11a6 6 0 0012 0M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Reports: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Downloads: (
    <path
      d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export function MediaResourceCard({ resource }: { resource: MediaResource }) {
  const isAvailable = resource.url && resource.status !== "coming_soon";

  return (
    <article className="card">
      <span className="media-card__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          {icons[resource.type] ?? icons.Articles}
        </svg>
      </span>
      <h3 className="card-title">{resource.title}</h3>
      <p className="card-bio">{resource.description}</p>
      {isAvailable ? (
        <a
          className="media-card__link"
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View resource
          <span className="sr-only"> (opens in new tab): {resource.title}</span>
        </a>
      ) : (
        <span className="media-card__status">Coming soon</span>
      )}
    </article>
  );
}
