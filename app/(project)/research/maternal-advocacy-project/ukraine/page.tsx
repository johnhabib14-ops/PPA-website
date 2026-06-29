import type { Metadata } from "next";
import { ResearchRegionPage } from "@/components/research/ResearchRegionPage";

export const metadata: Metadata = {
  title: "Ukrainian Mothers | The Maternal Advocacy Project",
  description:
    "Mothers affected by war, displacement, child abduction, family separation, and political violence in Ukraine.",
};

export default function UkrainePage() {
  return <ResearchRegionPage slug="ukraine" />;
}
