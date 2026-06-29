import type { Metadata } from "next";
import { ResearchSection } from "@/components/research/ResearchSection";
import { MediaResourceCard } from "@/components/research/MediaResourceCard";
import { ProjectBreadcrumb } from "@/components/research/ProjectBreadcrumb";
import { media } from "@/lib/research";

export const metadata: Metadata = {
  title: "Media Resources | The Maternal Advocacy Project",
  description:
    "Articles, films, reports, interviews, and downloadable reference materials related to the Maternal Advocacy Project.",
};

export default function MediaPage() {
  return (
    <div className="project-subpage">
      <ProjectBreadcrumb current="Media Resources" />
      <ResearchSection id="media" eyebrow={media.eyebrow} title={media.title} intro={media.intro} tone="alt">
        <div className="card-grid card-grid--thirds">
          {media.resources.map((resource) => (
            <MediaResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
        <p className="muted" style={{ marginTop: "var(--space-lg)", fontStyle: "italic" }}>
          {media.note}
        </p>
      </ResearchSection>
    </div>
  );
}
