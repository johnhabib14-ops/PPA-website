import type { Metadata } from "next";
import Link from "next/link";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ReferralSection } from "@/components/ReferralSection";
import { CONTACT_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Los Angeles neuropsychological assessment & testing",
  description:
    "Adult neuropsychological testing in El Segundo and greater Los Angeles. Evaluation for ADHD, autism, learning disorders, memory concerns, and diagnostic clarification—guided by the referral question, without guaranteed outcomes.",
};

const STEPS = [
  {
    title: "Consultation",
    description:
      "Review records when available, clarify the referral question, and confirm whether outpatient testing is appropriate before scheduling.",
  },
  {
    title: "Evaluation",
    description:
      "Interview and standardized measures selected for your referral question. The battery is guided by the question; conclusions depend on the data obtained.",
  },
  {
    title: "Feedback and recommendations",
    description:
      "Results in plain language. Recommendations may include treatment planning ideas, practical strategies, referral suggestions, or accommodation-related discussion when findings support them.",
  },
] as const;

const CONCERNS = [
  {
    t: "Diagnostic clarification",
    d: "When mood, anxiety, attention, and cognitive symptoms overlap, structured data may help refine hypotheses and next steps.",
  },
  {
    t: "ADHD and executive functioning",
    d: "Attention, organization, and functional impact across settings when evaluation is clinically indicated.",
  },
  {
    t: "Autism and social communication",
    d: "Diagnostic clarification for adults when developmental history and current presentation warrant formal evaluation.",
  },
  {
    t: "Learning disorders and academic accommodations",
    d: "Achievement and processing relative to cognitive ability when academic questions are central. Schools and testing programs apply their own rules; we do not imply guaranteed accommodations.",
  },
  {
    t: "Memory and cognitive concerns",
    d: "Subjective memory complaints or concern after medical or neurological events—interpreted in context, not in isolation.",
  },
  {
    t: "Concussion, brain injury, and cognitive change",
    d: "Outpatient tracking of cognitive and emotional symptoms when the referral question fits what neuropsychological testing can address.",
  },
] as const;

export default function AssessmentPage() {
  return (
    <>
      <header className="page-header stack-tight">
        <p className="eyebrow">Clinical neuropsychology</p>
        <h1>Neuropsychological assessment</h1>
        <p className="lead">
          Adult neuropsychological evaluation in El Segundo for the greater Los Angeles area. We use
          evidence-based measures and clinical interview to address focused referral questions—diagnostic
          clarification, cognitive characterization, and recommendations that may support treatment planning when
          findings allow.
        </p>
      </header>

      <section className="section section--first" aria-labelledby="when-heading">
        <h2 id="when-heading" className="section-title">
          When evaluation may help
        </h2>
        <p>
          Assessment is most useful when there is a defined question that testing and interview can inform—for
          example, better understanding strengths and weaknesses, clarifying whether symptoms meet diagnostic
          criteria when that is clinically appropriate, or supporting treatment or accommodation planning when data
          support specific recommendations. We do not promise a particular diagnosis, score, or outcome; conclusions
          follow the evidence gathered and your history.
        </p>
      </section>

      <section className="section section--alt" aria-labelledby="domains-heading">
        <h2 id="domains-heading" className="section-title">
          Referral questions we often evaluate
        </h2>
        <p className="muted">
          The list below describes common domains; your evaluation is guided by the referral question and may not
          include every area.
        </p>
        <ul className="concern-grid">
          {CONCERNS.map((c) => (
            <li key={c.t} className="concern-grid__item">
              <article className="concern-card">
                <strong>{c.t}</strong>
                {c.d}
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="outputs-heading">
        <h2 id="outputs-heading" className="section-title">
          Treatment planning, practical recommendations, and collaboration
        </h2>
        <p>
          Feedback may help clarify how cognitive and emotional findings relate to the original referral question.
          Discussion can support treatment planning with your therapist or physician when that is within scope.
          Practical recommendations may include strategies for work or school, follow-up services, or referral options
          consistent with results—they are suggestions, not prescriptions, and they do not replace your other
          providers&apos; judgment.
        </p>
        <p>
          Questions from physicians, therapists, schools, attorneys, and families are welcome. We coordinate as
          appropriate with permission; we do not provide legal advice, guarantee educational outcomes, or determine
          eligibility for programs or benefits.
        </p>
      </section>

      <ProcessSteps sectionId="process-assessment" sectionTitle="How assessment proceeds" steps={[...STEPS]} />

      <ReferralSection />

      <section className="section section--alt" aria-labelledby="assessment-cta-heading">
        <h2 id="assessment-cta-heading" className="section-title">
          Next steps
        </h2>
        <p>
          If you are unsure whether testing is right for you, request a consultation through our contact page.
          Please avoid detailed clinical history in the web form; staff will gather information securely by phone
          when appropriate.
        </p>
        <Link className="button button--primary" href={CONTACT_HREF}>
          Schedule consultation
        </Link>
      </section>
    </>
  );
}
