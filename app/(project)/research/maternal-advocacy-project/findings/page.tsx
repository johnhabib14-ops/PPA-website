import type { Metadata } from "next";
import { ResearchSection } from "@/components/research/ResearchSection";
import { GraphPlaceholderCard } from "@/components/research/GraphPlaceholderCard";
import { ProjectBreadcrumb } from "@/components/research/ProjectBreadcrumb";
import { findings } from "@/lib/research";

export const metadata: Metadata = {
  title: "Graphs and Findings | The Maternal Advocacy Project",
  description:
    "Planned LIWC visualizations comparing emotional tone, cognitive processing, and advocacy language across study groups.",
};

export default function FindingsPage() {
  return (
    <div className="project-subpage">
      <ProjectBreadcrumb current="Graphs and Findings" />
      <ResearchSection id="findings" eyebrow={findings.eyebrow} title={findings.title} intro={findings.intro}>
        <div className="graph-grid">
          {findings.cards.map((card) => (
            <GraphPlaceholderCard key={card.title} card={card} />
          ))}
        </div>
        <p className="update-note">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 8v0M12 11v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          {findings.updateNote}
        </p>
      </ResearchSection>
    </div>
  );
}
