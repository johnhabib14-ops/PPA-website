import { ResearchPhotoGallery } from "@/components/research/ResearchPhotoGallery";
import { ResearchContentBlocks } from "@/components/research/ResearchContentBlocks";
import type { ResearchGroup } from "@/lib/research";

function PlaceholderFigure({ label, note }: { label: string; note: string }) {
  return (
    <figure className="research-figure">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3 14l4.5-4 3.5 3 4-5 6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <figcaption>{label}</figcaption>
      <p className="research-figure__note">{note}</p>
    </figure>
  );
}

type ResearchGroupContentProps = {
  group: ResearchGroup;
};

export function ResearchGroupContent({ group }: ResearchGroupContentProps) {
  const isStacked = group.layout === "stacked";

  if (isStacked) {
    return (
      <div className="research-stacked">
        <div className="research-body">
          <div id="intro" className="text-block research-lead">
            {group.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {group.quote ? (
            <blockquote id="quote" className="study-callout research-quote">
              <p>{group.quote}</p>
            </blockquote>
          ) : null}
          {group.blocks?.length ? (
            <ResearchContentBlocks blocks={group.blocks} groupId={group.id} />
          ) : null}
        </div>
        {group.photos?.length ? (
          <div id="gallery" className="research-stacked__gallery">
            <ResearchPhotoGallery photos={group.photos} />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="research-split">
      <div className="research-body">
        <div id="intro" className="text-block research-lead">
          {group.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {group.quote ? (
          <blockquote id="quote" className="study-callout research-quote">
            <p>{group.quote}</p>
          </blockquote>
        ) : null}
        {group.subsections?.length ? (
          <div id="subsections" className="research-subsections-grid card-grid">
            {group.subsections.map((sub, si) => (
              <article key={si} className="construct-card">
                {sub.title ? <h4>{sub.title}</h4> : null}
                {sub.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </article>
            ))}
          </div>
        ) : null}
        {group.collapsible ? (
          <details id="background" className="research-collapsible">
            <summary>{group.collapsible.title}</summary>
            <div className="text-block">
              {group.collapsible.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </details>
        ) : null}
      </div>
      {group.photos?.length ? (
        <div id="gallery">
          <ResearchPhotoGallery photos={group.photos} />
        </div>
      ) : group.placeholderLabel && group.placeholderNote ? (
        <PlaceholderFigure label={group.placeholderLabel} note={group.placeholderNote} />
      ) : null}
    </div>
  );
}
