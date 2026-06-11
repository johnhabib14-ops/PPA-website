import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/Band";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CONTACT_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Therapy in Los Angeles & adult psychotherapy",
  description:
    "Outpatient adult psychotherapy in El Segundo and greater Los Angeles for anxiety therapy, depression, stress, relationships, transitions, and regulation—integrated with the practice’s neuropsychological assessment perspective.",
};

const STEPS = [
  {
    title: "Consultation",
    description:
      "Discuss your concerns, prior treatment if any, and whether weekly or biweekly outpatient therapy here is a reasonable fit.",
  },
  {
    title: "Treatment planning",
    description:
      "Define initial goals, session structure, and how we will review progress. You should know what therapy will and will not address.",
  },
  {
    title: "Ongoing care",
    description:
      "Regular sessions with goal review. Referrals for medication evaluation elsewhere or higher-level care when clinically appropriate.",
  },
] as const;

const FOCUS = [
  "Anxiety",
  "Depression",
  "Stress and burnout",
  "Relationship patterns",
  "Life transitions",
  "Identity and adjustment",
  "Emotional regulation",
  "Performance pressure",
] as const;

export default function TherapyPage() {
  return (
    <>
      <PageHero
        titleId="therapy-hero-heading"
        eyebrow="Outpatient psychotherapy"
        title="Therapy services"
        lead="Individual therapy for adults in El Segundo and greater Los Angeles—direct, warm, and grounded in established psychological care. The same practice offers neuropsychological assessment; when testing is part of your history, we may use that context in therapy only with appropriate consent and within ethical scope."
      />

      <Band aria-labelledby="therapy-neuro-heading">
        <h2 id="therapy-neuro-heading" className="section-title">
          Therapy within a neuropsychology-informed practice
        </h2>
        <p>
          We emphasize how attention, mood, stress, and thinking patterns interact in real life—not inspirational
          slogans. If you are seeking evaluation rather than ongoing therapy,{" "}
          <Link href="/assessment">neuropsychological assessment</Link> is described separately; some people pursue
          both over time, and others need only one service.
        </p>
      </Band>

      <Band tone="alt" aria-labelledby="therapy-fit-heading">
        <h2 id="therapy-fit-heading" className="section-title">
          What therapy here looks like
        </h2>
        <p>
          Sessions focus on understanding patterns that maintain distress, building skills that fit your situation,
          and making decisions consistent with your values. Progress depends on many factors, including attendance,
          severity, and outside stressors; we revisit goals so care stays appropriate to your needs.
        </p>
      </Band>

      <Band aria-labelledby="focus-heading">
        <h2 id="focus-heading" className="section-title">
          Areas we often address
        </h2>
        <ul className="clinician-lead__list" style={{ maxWidth: "52ch" }}>
          {FOCUS.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </Band>

      <Band tone="alt" aria-labelledby="therapy-not-heading">
        <h2 id="therapy-not-heading" className="section-title">
          Scope and limits
        </h2>
        <p>
          We provide outpatient psychotherapy, not crisis management through this website or email. Couples or family
          therapy as a primary service is not described here; ask the office which modalities are available with
          specific clinicians.
        </p>
      </Band>

      <Band>
        <ProcessSteps sectionId="process-therapy" sectionTitle="Therapy process" steps={[...STEPS]} />
      </Band>

      <Band tone="alt" aria-labelledby="therapy-cta-heading">
        <h2 id="therapy-cta-heading" className="section-title">
          Request a consultation
        </h2>
        <p>
          Use the contact form for general scheduling inquiries. Do not include sensitive clinical details; staff
          will collect information securely after we respond.
        </p>
        <Link className="button button--primary" href={CONTACT_HREF}>
          Schedule consultation
        </Link>
      </Band>
    </>
  );
}
