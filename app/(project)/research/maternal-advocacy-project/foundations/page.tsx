import type { Metadata } from "next";
import { ResearchSection } from "@/components/research/ResearchSection";
import { ResearchFoundationsContent } from "@/components/research/ResearchFoundationsContent";
import { ProjectBreadcrumb } from "@/components/research/ProjectBreadcrumb";
import { RegionPageToc } from "@/components/research/RegionPageToc";
import { getFoundationsTocItems } from "@/lib/research-toc";
import { researchFoundations } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research Foundations | The Maternal Advocacy Project",
  description:
    "Theoretical and historical foundations for the Maternal Advocacy Project, including the maternal contract framework and Argentina's history of disappearance.",
};

export default function ResearchFoundationsPage() {
  const tocItems = getFoundationsTocItems(researchFoundations);

  return (
    <div className="region-page-layout">
      <RegionPageToc items={tocItems} />
      <div className="region-page-main">
        <ProjectBreadcrumb current="Research Foundations" />
        <ResearchSection
          id="research-foundations"
          eyebrow={researchFoundations.eyebrow}
          title={researchFoundations.title}
          intro={researchFoundations.intro}
        >
          <ResearchFoundationsContent foundations={researchFoundations} />
        </ResearchSection>
      </div>
    </div>
  );
}
