import aboutData from "@/data/about.json";

export type LeadClinician = {
  name: string;
  photoAlt: string;
  credentials: string;
  intro: string;
  approach: string;
  specialties: string[];
};

export function getLeadClinician(): LeadClinician {
  return aboutData.lead as LeadClinician;
}
