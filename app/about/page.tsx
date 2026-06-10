import type { Metadata } from "next";
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
      <header className="page-header stack-tight">
        <p className="eyebrow">Private practice</p>
        <h1>About us</h1>
        <p className="lead">
          We combine neuropsychological science with clear, respectful communication. The practice includes
          doctoral-level leadership, licensed psychologists, and supervised clinical and neuropsychology trainees
          serving adults in El Segundo and the greater Los Angeles area.
        </p>
      </header>

      <section className="section section--first about-page__overview" aria-labelledby="about-overview-heading">
        <h2 id="about-overview-heading" className="section-title">
          Credentials and scope
        </h2>
        <p>
          The lead clinician&apos;s training, board certification, and licensure are summarized below, along with
          assessment experience, therapy experience, and clinical approach. Assessment and therapy services are
          described in detail on their respective pages; this page emphasizes who provides care and how the team is
          organized.
        </p>
      </section>

      <ClinicianLead headingId="clinician-about" />

      <TeamSection sectionId="clinical-team" />
    </>
  );
}
