import type { ResearchResourceLink } from "@/lib/research";

export function ResearchResourceLinks({ links }: { links: ResearchResourceLink[] }) {
  return (
    <ul className="resource-links">
      {links.map((link) => (
        <li key={link.url}>
          <article className="resource-link-card">
            <h3 className="resource-link-card__title">{link.title}</h3>
            <p className="resource-link-card__source">{link.source}</p>
            <p className="resource-link-card__summary">{link.summary}</p>
            <a
              className="resource-link-card__link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View resource
              <span className="sr-only"> (opens in new tab): {link.title}</span>
            </a>
          </article>
        </li>
      ))}
    </ul>
  );
}
