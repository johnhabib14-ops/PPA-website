import teamData from "@/data/team.json";

export type TeamCategory = "lead" | "psychologist" | "clinical_extern" | "neuropsych_extern";

export type TeamMember = {
  id: string;
  category: TeamCategory;
  name: string;
  title: string;
  bio: string;
};

const CATEGORY_ORDER: TeamCategory[] = [
  "lead",
  "psychologist",
  "clinical_extern",
  "neuropsych_extern",
];

const CATEGORY_LABELS: Record<TeamCategory, string> = {
  lead: "Director",
  psychologist: "Psychologists",
  clinical_extern: "Clinical psychology externs",
  neuropsych_extern: "Neuropsychology externs",
};

export function getTeamMembers(): TeamMember[] {
  return teamData.team as TeamMember[];
}

export function getTeamByCategory(): { category: TeamCategory; label: string; members: TeamMember[] }[] {
  const members = getTeamMembers();
  return CATEGORY_ORDER.map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    members: members.filter((m) => m.category === category),
  })).filter((g) => g.members.length > 0);
}
