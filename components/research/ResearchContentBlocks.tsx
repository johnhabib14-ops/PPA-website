import type { ResearchContentBlock } from "@/lib/research";
import { ResearchStoryCard } from "@/components/research/ResearchStoryCard";
import { ResearchStatGrid } from "@/components/research/ResearchStatGrid";
import { ResearchAdvocateTable } from "@/components/research/ResearchAdvocateTable";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function blockId(block: ResearchContentBlock, index: number): string {
  if ("title" in block && block.title) {
    return `block-${slugify(block.title)}`;
  }
  return `block-${index}`;
}

type ResearchContentBlocksProps = {
  blocks: ResearchContentBlock[];
  groupId?: string;
};

export function ResearchContentBlocks({ blocks, groupId }: ResearchContentBlocksProps) {
  return (
    <div className="research-blocks">
      {blocks.map((block, i) => {
        const id = blockId(block, i);

        switch (block.type) {
          case "card":
            return (
              <article key={i} id={id} className="construct-card research-block-card">
                {block.title ? <h4>{block.title}</h4> : null}
                {block.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </article>
            );
          case "story":
            return (
              <div key={i} id={id}>
                <ResearchStoryCard
                  title={block.title}
                  paragraphs={block.paragraphs}
                  quote={block.quote}
                  photo={block.photo}
                />
              </div>
            );
          case "stats":
            return (
              <div key={i} id={id}>
                <ResearchStatGrid title={block.title} items={block.items} />
              </div>
            );
          case "bullets": {
            const isCollapsible = groupId === "ukraine";
            const content = (
              <>
                {block.title ? <h4 className="research-bullet-block__title">{block.title}</h4> : null}
                {block.intro ? <p className="research-bullet-block__intro">{block.intro}</p> : null}
                <ul className="research-bullet-block__list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            );

            if (isCollapsible && block.title) {
              return (
                <details key={i} id={id} className="research-collapsible research-bullet-block">
                  <summary>{block.title}</summary>
                  <div className="research-bullet-block__inner">
                    {block.intro ? <p className="research-bullet-block__intro">{block.intro}</p> : null}
                    <ul className="research-bullet-block__list">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              );
            }

            return (
              <div key={i} id={id} className="research-bullet-block">
                {content}
              </div>
            );
          }
          case "table":
            return (
              <div key={i} id={id}>
                <ResearchAdvocateTable
                  title={block.title}
                  attribution={block.attribution}
                  columns={block.columns}
                  rows={block.rows}
                  initialVisibleRows={groupId === "october7" ? 4 : undefined}
                />
              </div>
            );
          case "org":
            return (
              <article key={i} id={id} className="research-org-profile">
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
