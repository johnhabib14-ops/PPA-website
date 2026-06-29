import { notFound } from "next/navigation";
import { ResearchSection } from "@/components/research/ResearchSection";
import { ResearchGroupContent } from "@/components/research/ResearchGroupContent";
import { ResearchResourceLinks } from "@/components/research/ResearchResourceLinks";
import { RegionPager } from "@/components/research/RegionPager";
import { RegionPageToc } from "@/components/research/RegionPageToc";
import { ProjectBreadcrumb } from "@/components/research/ProjectBreadcrumb";
import { getGroupTocItems } from "@/lib/research-toc";
import { getRegionPagerLinks, getResearchGroupBySlug } from "@/lib/research";

type ResearchRegionPageProps = {
  slug: "madres" | "israel" | "ukraine";
  tone?: "default" | "alt";
  breadcrumb?: string;
};

export function ResearchRegionPage({ slug, tone = "default", breadcrumb }: ResearchRegionPageProps) {
  const group = getResearchGroupBySlug(slug);
  if (!group) notFound();

  const tocItems = getGroupTocItems(group);
  const pager = getRegionPagerLinks(slug);
  const breadcrumbLabel = breadcrumb ?? group.title;

  return (
    <div className="region-page-layout">
      <RegionPageToc items={tocItems} />
      <div className="region-page-main">
        <ProjectBreadcrumb current={breadcrumbLabel} />
        <ResearchSection
          id={group.id}
          eyebrow={group.eyebrow}
          title={group.title}
          intro={group.intro}
          tone={tone}
        >
          <ResearchGroupContent group={group} />
          {group.resourceLinks?.length ? (
            <div id="further-reading" className="research-resources">
              <h3 className="research-resources__title">Further reading</h3>
              <ResearchResourceLinks links={group.resourceLinks} />
            </div>
          ) : null}
        </ResearchSection>
        <RegionPager prev={pager.prev} next={pager.next} />
      </div>
    </div>
  );
}
