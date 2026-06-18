import Image from "next/image";
import type { ResearchPhoto } from "@/lib/research";

type ResearchStoryCardProps = {
  title: string;
  paragraphs: string[];
  quote?: string;
  photo?: ResearchPhoto;
};

export function ResearchStoryCard({ title, paragraphs, quote, photo }: ResearchStoryCardProps) {
  return (
    <article className="research-story-card">
      {photo ? (
        <figure className="research-story-card__media">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={480}
            height={360}
            sizes="(min-width: 768px) 280px, 100vw"
            className="research-story-card__image"
          />
          {photo.caption ? (
            <figcaption className="research-story-card__caption">{photo.caption}</figcaption>
          ) : null}
        </figure>
      ) : null}
      <div className="research-story-card__body">
        <h4 className="research-story-card__title">{title}</h4>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {quote ? (
          <blockquote className="research-story-card__quote">
            <p>{quote}</p>
          </blockquote>
        ) : null}
      </div>
    </article>
  );
}
