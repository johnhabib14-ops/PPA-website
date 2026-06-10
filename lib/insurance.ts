import insuranceData from "@/data/insurance.json";

export type InsuranceContent = {
  lastUpdated: string;
  intro: string;
  therapyPayers: string[];
  disclaimer: string;
  notListed: string;
};

export function getInsuranceContent(): InsuranceContent {
  return insuranceData as InsuranceContent;
}
