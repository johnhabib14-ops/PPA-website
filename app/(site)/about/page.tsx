import type { Metadata } from "next";
import { Band } from "@/components/Band";
import { PageHero } from "@/components/PageHero";
import { ClinicianLead } from "@/components/ClinicianLead";
import { TeamSection } from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "About our clinicians & team",
  description:
    "Meet Pacific Psychological Associates in El Segundo: credentials, neuropsychological assessment experience, adult psychotherapy, clinical approach, and supervised team structure for greater Los Angeles.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        titleId="about-hero-heading"
        eyebrow="Private practice"
        title="About us"
        lead="We combine neuropsychological science with clear, respectful communication. The practice includes doctoral-level leadership, licensed psychologists, and supervised clinical and neuropsychology trainees serving adults in El Segundo and the greater Los Angeles area."
      />

      <Band aria-labelledby="about-overview-heading">
        <h2 id="about-overview-heading" className="section-title">
          Credentials and scope
        </h2>
        <p>
          The lead clinician&apos;s training, board certification, and licensure are summarized below, along with
          assessment experience, therapy experience, and clinical approach. Assessment and therapy services are
          described in detail on their respective pages; this page emphasizes who provides care and how the team is
          organized.
        </p>
      </Band>

      <Band tone="alt" aria-label="Lead clinician">
        <ClinicianLead headingId="clinician-about" />
      </Band>

      <Band aria-label="Clinical team">
        <TeamSection sectionId="clinical-team" />
      </Band>
    </>
  );
}
