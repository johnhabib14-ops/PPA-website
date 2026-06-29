import type { Metadata } from "next";
import { ResearchRegionPage } from "@/components/research/ResearchRegionPage";

export const metadata: Metadata = {
  title: "Israeli Mothers After October 7 | The Maternal Advocacy Project",
  description:
    "Mothers advocating after the October 7 attacks, with attention to families affected by abduction, loss, and political violence.",
};

export default function IsraelPage() {
  return <ResearchRegionPage slug="israel" tone="alt" />;
}
