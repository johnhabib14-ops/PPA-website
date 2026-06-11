import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/Band";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy & website notice",
  description:
    "Privacy practices and website disclaimers for Pacific Psychological Associates, El Segundo and greater Los Angeles. Emergencies: 911 or nearest emergency room.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        titleId="privacy-hero-heading"
        eyebrow="Policies"
        title="Privacy & website notice"
        lead="This page summarizes how we treat website communications. It does not replace a formal Notice of Privacy Practices for established patients, which the office provides separately when required."
      />

      <Band aria-labelledby="emergency-heading">
        <h2 id="emergency-heading" className="section-title">
          Emergencies
        </h2>
        <div className="notice-box" role="alert">
          <p>
            If you or someone else is in immediate danger or a mental health crisis, call <strong>911</strong>{" "}
            (or your local emergency number) or go to the nearest emergency department. This website and our
            contact form are <strong>not</strong> monitored for emergencies.
          </p>
        </div>
      </Band>

      <Band tone="alt" aria-labelledby="website-privacy-heading">
        <h2 id="website-privacy-heading" className="section-title">
          Website &amp; contact form
        </h2>
        <p>
          This site is intended to share general information about Pacific Psychological Associates. It does
          not create a provider–patient relationship by itself.
        </p>
        <p>
          Messages you send through the contact form may be stored or transmitted using systems your practice
          configures (for example, email or a HIPAA-aligned form vendor). Your organization should review data
          handling with qualified legal and compliance advisors, including whether a Business Associate Agreement
          (BAA) is required.
        </p>
        <p>
          For billing and insurance questions, see <Link href="/fees">Fees and insurance</Link>. For secure intake
          configuration notes, see <code>.env.example</code> in the project repository or ask your web developer.
        </p>
      </Band>

      <Band aria-labelledby="access-heading">
        <h2 id="access-heading" className="section-title">
          Accessibility
        </h2>
        <p>
          We strive to meet WCAG 2.2 Level AA for this marketing site, including keyboard access, readable
          contrast, visible focus indicators, and descriptive control labels. If you encounter a barrier, please
          tell us so we can correct it.
        </p>
      </Band>
    </>
  );
}
