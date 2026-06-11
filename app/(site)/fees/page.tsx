import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/Band";
import { PageHero } from "@/components/PageHero";
import { InsuranceList } from "@/components/InsuranceList";
import { CONTACT_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Fees, insurance & billing",
  description:
    "Fees and insurance for therapy and neuropsychological services at Pacific Psychological Associates, El Segundo. Therapy insurance list; assessment fees vary—verify benefits directly with your plan.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        titleId="fees-hero-heading"
        eyebrow="Transparency"
        title="Fees and insurance"
        lead="Billing depends on the service (assessment vs. therapy), your payer, and network status. Fee details are discussed during consultation; insurance and benefits should be verified directly with your plan—we do not guarantee coverage or reimbursement."
      />

      <Band aria-labelledby="fees-policy-heading">
        <h2 id="fees-policy-heading" className="section-title">
          How we discuss fees
        </h2>
        <p>
          Neuropsychological evaluations are typically structured as a professional service package or by testing
          session, depending on referral question and testing needs. <strong>Assessment fees may vary</strong> with
          complexity, records, and report requirements; you will receive a plain-language summary of what to expect
          before non-emergency services begin.
        </p>
        <p>
          Psychotherapy is usually billed per session according to your insurance contract or an agreed private-pay
          rate. The office explains estimated responsibility when possible, but <strong>benefits should be verified
          directly</strong> with your carrier; quoted estimates are not a guarantee of payment, and{" "}
          <strong>coverage is not guaranteed</strong> for any service.
        </p>
        <p>
          Questions about Good Faith Estimates under the No Surprises Act or a specific payer can be directed to
          administrative staff during business hours.
        </p>
      </Band>

      <Band tone="alt" aria-labelledby="therapy-fees-heading">
        <h2 id="therapy-fees-heading" className="section-title">
          Insurance for therapy
        </h2>
        <p className="muted">
          In-network status can change; confirmation before your first session is important. Being listed does not
          ensure your plan will cover a given service or visit.
        </p>
        <InsuranceList embedded />
      </Band>

      <Band aria-labelledby="assessment-insurance-heading">
        <h2 id="assessment-insurance-heading" className="section-title">
          Assessment and insurance
        </h2>
        <p>
          Many neuropsychological evaluations are billed as out-of-network or self-pay depending on the payer and
          plan type. If you hope to use insurance for testing, ask your carrier about out-of-network medical or
          psychological testing benefits and any prior authorization rules. We do not imply guaranteed coverage for
          assessment services.
        </p>
      </Band>

      <Band tone="alt" aria-labelledby="fees-contact-heading">
        <h2 id="fees-contact-heading" className="section-title">
          Ask a billing question
        </h2>
        <p>
          For questions that are not appropriate for the general contact form, call the office during business hours.
        </p>
        <Link className="button button--secondary" href={CONTACT_HREF}>
          Contact the office
        </Link>
      </Band>
    </>
  );
}
