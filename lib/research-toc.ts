import type { ResearchGroup, researchFoundations } from "@/lib/research";
import type { TocItem } from "@/components/research/RegionPageToc";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getGroupTocItems(group: ResearchGroup): TocItem[] {
  const items: TocItem[] = [{ id: "intro", label: "Introduction" }];

  if (group.quote) {
    items.push({ id: "quote", label: "Quote" });
  }

  if (group.subsections?.length) {
    items.push({ id: "subsections", label: "Key themes" });
  }

  if (group.collapsible) {
    items.push({
      id: "background",
      label: group.collapsible.title ?? "Background",
    });
  }

  group.blocks?.forEach((block, i) => {
    if (block.type === "card" && block.title) {
      items.push({ id: `block-${slugify(block.title)}`, label: block.title });
    } else if (block.type === "story") {
      items.push({ id: `block-${slugify(block.title)}`, label: block.title });
    } else if (block.type === "stats" && block.title) {
      items.push({ id: `block-${slugify(block.title)}`, label: block.title });
    } else if (block.type === "bullets" && block.title) {
      items.push({ id: `block-${slugify(block.title)}`, label: block.title });
    } else if (block.type === "table" && block.title) {
      items.push({ id: `block-${slugify(block.title)}`, label: block.title });
    } else if (block.type === "org") {
      items.push({ id: `block-${slugify(block.title)}`, label: block.title });
    } else {
      items.push({ id: `block-${i}`, label: `Section ${i + 1}` });
    }
  });

  if (group.photos?.length) {
    items.push({ id: "gallery", label: "Photo gallery" });
  }

  if (group.resourceLinks?.length) {
    items.push({ id: "further-reading", label: "Further reading" });
  }

  return items;
}

export function getFoundationsTocItems(
  foundations: typeof researchFoundations,
): TocItem[] {
  return [
    { id: "foundation-artwork", label: "Artwork" },
    ...foundations.cards.map((card) => ({
      id: `block-${slugify(card.title)}`,
      label: card.title,
    })),
    { id: "foundation-sources", label: "Sources and further reading" },
  ];
}
