import Image from "next/image";
import type { researchFoundations } from "@/lib/research";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type ResearchFoundationsContentProps = {
  foundations: typeof researchFoundations;
};

export function ResearchFoundationsContent({ foundations }: ResearchFoundationsContentProps) {
  return (
    <>
      <div className="foundation-layout">
        <figure id="foundation-artwork" className="foundation-figure">
          <Image
            src={foundations.image.src}
            alt={foundations.image.alt}
            width={682}
            height={1024}
            sizes="(min-width: 900px) 20rem, 60vw"
            className="foundation-figure__image"
          />
          <figcaption className="foundation-figure__caption">{foundations.image.caption}</figcaption>
        </figure>

        <ul className="resource-links foundation-cards">
          {foundations.cards.map((card) => (
            <li key={card.title}>
              <article id={`block-${slugify(card.title)}`} className="resource-link-card">
                <h3 className="resource-link-card__title">{card.title}</h3>
                {card.body.map((p, i) => (
                  <p key={i} className="resource-link-card__summary">
                    {p}
                  </p>
                ))}
                <p className="resource-link-card__source foundation-card__citation">{card.citation}</p>
                <div className="foundation-card__links">
                  {card.links.map((link) => (
                    <a
                      key={link.url}
                      className="resource-link-card__link"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div id="foundation-sources" className="research-resources">
        <h3 className="research-resources__title">Sources and further reading</h3>
        <ul className="source-list">
          {foundations.sources.map((source) => (
            <li key={source.url} className="source-list__item">
              <span className="source-list__citation">{source.citation}</span>{" "}
              <a className="source-list__link" href={source.url} target="_blank" rel="noopener noreferrer">
                {source.label}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
