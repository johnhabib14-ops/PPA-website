import type { Metadata } from "next";
import { ResearchRegionPage } from "@/components/research/ResearchRegionPage";

export const metadata: Metadata = {
  title: "Madres de Plaza de Mayo | The Maternal Advocacy Project",
  description:
    "Mothers who publicly advocated for their disappeared children during Argentina's military dictatorship.",
};

export default function MadresPage() {
  return <ResearchRegionPage slug="madres" />;
}
