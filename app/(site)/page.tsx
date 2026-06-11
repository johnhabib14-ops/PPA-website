import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/Band";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ReferralSection } from "@/components/ReferralSection";
import { ServiceOverviewCard } from "@/components/ServiceOverviewCard";
import { TrustStrip } from "@/components/TrustStrip";
import { ClinicianLead } from "@/components/ClinicianLead";
import { CONTACT_HREF } from "@/lib/nav";
import { siteConfig, fullAddress, googleMapsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Neuropsychological assessment and therapy in El Segundo",
  description:
    "Pacific Psychological Associates offers adult neuropsychological testing and psychotherapy in El Segundo, serving greater Los Angeles with evidence-informed assessment and therapy.",
};

const PROCESS_ASSESSMENT = [
  {
    title: "Consultation",
    description:
      "Clarify your questions, review whether testing fits your situation, and outline time, records, and next steps.",
  },
  {
    title: "Evaluation",
    description:
      "Structured interview and standardized measures selected for your referral question. Conclusions follow the data gathered.",
  },
  {
    title: "Feedback and recommendations",
    description:
      "Plain-language results, practical recommendations, and options for follow-up when findings support them.",
  },
] as const;

const PROCESS_THERAPY = [
  {
    title: "Consultation",
    description:
      "Discuss your concerns, prior care if any, and whether outpatient therapy here is a reasonable match.",
  },
  {
    title: "Treatment planning",
    description:
      "Agree on priorities, session cadence, and how we will review progress together over time.",
  },
  {
    title: "Ongoing care",
    description:
      "Regular sessions with periodic goal review. Referrals for medication or higher-level care when clinically appropriate.",
  },
] as const;

const NEURO_CONCERNS = [
  {
    title: "Diagnostic clarification",
    text: "Structured data when mood, anxiety, attention, or cognitive symptoms overlap and the next step is unclear.",
  },
  {
    title: "ADHD and executive functioning",
    text: "Attention, organization, and functional impact across settings when evaluation is clinically indicated.",
  },
  {
    title: "Autism and social communication",
    text: "Diagnostic clarification for adults when history and presentation warrant formal evaluation.",
  },
  {
    title: "Learning disorders and accommodations",
    text: "Academic skills and processing relative to ability; documentation may be discussed when data support it—institutions set their own criteria.",
  },
  {
    title: "Memory and cognitive concerns",
    text: "Memory complaints or changes in thinking speed, with interpretation in medical and life context.",
  },
  {
    title: "Concussion, brain injury, and cognitive change",
    text: "Outpatient assessment when referral questions fit cognitive and emotional sequelae after injury or illness.",
  },
] as const;

const THERAPY_FOCUS = [
  "Anxiety",
  "Depression",
  "Stress and burnout",
  "Relationship patterns",
  "Adjustment concerns",
  "Life transitions",
  "Identity development",
  "Emotional regulation",
  "Performance pressure",
] as const;

export default function HomePage() {
  return (
    <>
      <PageHero
        size="tall"
        titleId="hero-heading"
        eyebrow={`${siteConfig.officeCity}, ${siteConfig.address.state} · ${siteConfig.regionLabel} area`}
        title={siteConfig.heroHeadline}
        lead={siteConfig.heroSubheadline}
      >
        <p>
          {siteConfig.name} is a private neuropsychology-oriented practice for adults: formal evaluation when
          referral questions call for testing, and psychotherapy when ongoing outpatient care is the right fit.
          Language and recommendations stay measured—evaluation is guided by the referral question, and we avoid
          promising specific labels or results.
        </p>
        <div className="page-hero__actions">
          <Link className="button button--primary" href={CONTACT_HREF}>
            Schedule consultation
          </Link>
          <Link className="button button--ghost-light" href="/#services-overview">
            Explore services
          </Link>
        </div>
        <TrustStrip />
      </PageHero>

      <Band id="services-overview" aria-labelledby="services-overview-heading">
        <h2 id="services-overview-heading" className="section-title">
          Two ways we can help
        </h2>
        <p className="muted">
          <strong>Neuropsychological assessment</strong> uses testing and interview to address focused diagnostic
          and cognitive questions. <strong>Therapy</strong> addresses ongoing mood, stress, and relationship
          patterns through structured outpatient care. Many people use one or both over time.
        </p>
        <div className="service-overview-grid">
          <ServiceOverviewCard
            title="Neuropsychological assessment"
            description="Adult neuropsychological testing when interview and standardized measures can address a defined question about cognition, learning, attention, or diagnostic overlap."
            whoFor="Adults referred by physicians, therapists, or schools; self-referred individuals; families; or professionals seeking a structured testing opinion—not every concern requires a full evaluation."
            concernsAddressed="ADHD and executive functioning; autism and social communication; learning disorders; memory and cognitive change; concussion or brain injury concerns; academic or standardized-testing accommodation questions when clinically appropriate; diagnostic clarification."
            whatToExpect="Consultation, scheduled evaluation sessions, and feedback. Reports or summaries may be provided when appropriate. Recommendations may include treatment planning ideas or referral suggestions; accommodations are discussed when findings support them, without guaranteed outcomes."
            href="/assessment"
            ctaLabel="Neuropsychological assessment"
            headingLevel="h3"
          />
          <ServiceOverviewCard
            title="Therapy services"
            description="Individual outpatient psychotherapy grounded in established models, for adults who want steady, collaborative work on mood, stress, relationships, and adjustment."
            whoFor="Adults seeking weekly or biweekly therapy when patterns or symptoms interfere with work, relationships, or well-being—and who can be served safely in outpatient care (not an emergency substitute)."
            concernsAddressed="Anxiety, depression, stress and burnout, relationship patterns, life transitions, identity and adjustment, emotional regulation, and performance pressure."
            whatToExpect="Consultation, treatment planning, and ongoing sessions with periodic review of goals. When neuropsychological testing has already occurred here or elsewhere, that information may inform therapy only within scope and consent."
            href="/therapy"
            ctaLabel="Therapy services"
            headingLevel="h3"
          />
        </div>
      </Band>

      <Band tone="alt" aria-labelledby="neuro-home-heading">
        <h2 id="neuro-home-heading" className="section-title">
          Neuropsychological assessment
        </h2>
        <p>
          Evaluations are tailored to the referral question. Testing may help clarify ADHD, autism spectrum
          presentation, learning disorders, memory concerns, cognitive changes, concussion or brain injury
          concerns, academic or standardized-testing accommodation questions, and situations where diagnosis or next
          steps are unclear. Referral questions from physicians, therapists, schools, and families are common.
          Accommodation recommendations may be included when findings support them; institutions make their own
          eligibility decisions.
        </p>
        <ul className="concern-grid">
          {NEURO_CONCERNS.map((c) => (
            <li key={c.title} className="concern-grid__item">
              <article className="concern-card">
                <strong>{c.title}</strong>
                {c.text}
              </article>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: "var(--space-lg)" }}>
          <Link className="button button--secondary" href="/assessment">
            Full assessment information
          </Link>
        </p>
      </Band>

      <Band aria-labelledby="therapy-home-heading">
        <h2 id="therapy-home-heading" className="section-title">
          Therapy services
        </h2>
        <p>
          Outpatient therapy focuses on patterns that maintain distress, skills that fit your context, and
          decisions aligned with your values. Care is informed by established psychological models and reviewed
          regularly for fit and intensity.
        </p>
        <ul className="clinician-lead__list" style={{ maxWidth: "50ch" }}>
          {THERAPY_FOCUS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p>
          <Link className="button button--secondary" href="/therapy">
            Full therapy information
          </Link>
        </p>
      </Band>

      <Band tone="alt">
        <ProcessSteps
          sectionId="process-assessment-home"
          sectionTitle="Assessment process"
          steps={[...PROCESS_ASSESSMENT]}
        />
      </Band>

      <Band>
        <ProcessSteps
          sectionId="process-therapy-home"
          sectionTitle="Therapy process"
          steps={[...PROCESS_THERAPY]}
        />
      </Band>

      <Band tone="alt" id="about-preview" aria-labelledby="about-home-heading">
        <h2 id="about-home-heading" className="section-title">
          About the practice
        </h2>
        <p className="muted">
          We keep a clear clinician profile so referring providers and prospective patients can judge fit before
          scheduling.
        </p>
        <ClinicianLead headingId="clinician-home" />
        <p style={{ marginTop: "var(--space-xl)" }}>
          <Link href="/about">About page, credentials, and team structure</Link>
        </p>
      </Band>

      <Band>
        <ReferralSection />
      </Band>

      <Band tone="alt" aria-labelledby="contact-home-heading">
        <h2 id="contact-home-heading" className="section-title">
          Location and contact
        </h2>
        <div className="visit-grid">
          <div className="visit-card">
            <h3>Office</h3>
            <p className="visit-card-body">{fullAddress()}</p>
          </div>
          <div className="visit-card">
            <h3>Hours</h3>
            <p className="visit-card-body">{siteConfig.hours}</p>
          </div>
          <div className="visit-card">
            <h3>Phone</h3>
            <p className="visit-card-body">
              <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>
            </p>
            <p className="visit-card-body">
              <Link href={CONTACT_HREF}>Contact form</Link>
              {" · "}
              <a href={googleMapsUrl()}>Directions</a>
            </p>
          </div>
        </div>
      </Band>
    </>
  );
}
