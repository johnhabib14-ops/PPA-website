import type { ResearchContentBlock } from "@/lib/research";
import { ResearchStoryCard } from "@/components/research/ResearchStoryCard";
import { ResearchStatGrid } from "@/components/research/ResearchStatGrid";
import { ResearchAdvocateTable } from "@/components/research/ResearchAdvocateTable";

export function ResearchContentBlocks({ blocks }: { blocks: ResearchContentBlock[] }) {
  return (
    <div className="research-blocks">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "card":
            return (
              <article key={i} className="construct-card research-block-card">
                {block.title ? <h4>{block.title}</h4> : null}
                {block.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </article>
            );
          case "story":
            return (
              <ResearchStoryCard
                key={i}
                title={block.title}
                paragraphs={block.paragraphs}
                quote={block.quote}
                photo={block.photo}
              />
            );
          case "stats":
            return <ResearchStatGrid key={i} title={block.title} items={block.items} />;
          case "bullets":
            return (
              <div key={i} className="research-bullet-block">
                {block.title ? <h4 className="research-bullet-block__title">{block.title}</h4> : null}
                {block.intro ? <p className="research-bullet-block__intro">{block.intro}</p> : null}
                <ul className="research-bullet-block__list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          case "table":
            return (
              <ResearchAdvocateTable
                key={i}
                title={block.title}
                attribution={block.attribution}
                columns={block.columns}
                rows={block.rows}
              />
            );
          case "org":
            return (
              <article key={i} className="research-org-profile">
                <h4 className="research-org-profile__title">
                  <a href={block.url} target="_blank" rel="noopener noreferrer">
                    {block.title}
                  </a>
                </h4>
                {block.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
                {block.bullets.length ? (
                  <ul className="research-org-profile__list">
                    {block.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
