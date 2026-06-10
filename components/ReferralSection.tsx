export function ReferralSection() {
  return (
    <section className="referral-section section section--alt" aria-labelledby="referral-heading">
      <h2 id="referral-heading" className="section-title">
        Referrals for assessment
      </h2>
      <p className="lead referral-section__lead">
        We welcome referrals from physicians, therapists, schools, attorneys, and families when neuropsychological
        evaluation may help clarify cognitive and emotional functioning, refine diagnostic questions, or inform
        treatment planning. Written products may summarize findings and practical recommendations when clinically
        appropriate. We do not guarantee specific diagnoses, accommodations, legal outcomes, or coverage decisions.
      </p>
      <h3 className="referral-section__subhead">What evaluation may support</h3>
      <ul className="referral-section__list">
        <li>
          <strong>Diagnostic clarification:</strong> hypotheses grounded in testing and interview that may guide
          medical or psychiatric care when findings support them.
        </li>
        <li>
          <strong>Treatment planning:</strong> discussion of patterns and recommendations that therapists or
          prescribers can integrate with their own judgment and scope.
        </li>
        <li>
          <strong>Cognitive and emotional functioning:</strong> description of strengths and weaknesses relevant to
          the referral question, without overstating precision beyond the methods used.
        </li>
        <li>
          <strong>Academic or workplace recommendations:</strong> discussion of supports or accommodations may
          occur when data align with institutional or employer criteria; final decisions rest with schools, testing
          boards, or employers.
        </li>
        <li>
          <strong>Practical recommendations:</strong> suggestions for follow-up services, strategies, or referrals
          consistent with results and professional standards.
        </li>
      </ul>
      <h3 className="referral-section__subhead">Limits of evaluation</h3>
      <p>
        Neuropsychological testing does not replace emergency care, legal advice, or educational placement
        decisions. It cannot predict job performance or future functioning with certainty. Findings are one part of
        a broader clinical picture and should be interpreted in context.
      </p>
      <h3 className="referral-section__subhead">By referral source</h3>
      <ul className="referral-section__list">
        <li>
          <strong>Medical providers:</strong> added context for cognitive or emotional factors that may affect
          diagnosis, adherence, or recovery when outpatient testing is indicated.
        </li>
        <li>
          <strong>Schools and universities:</strong> evidence-based hypotheses regarding learning, attention, or
          related profiles when assessment is clinically indicated—not every academic concern requires testing.
        </li>
        <li>
          <strong>Therapists and counselors:</strong> consultation when standardized assessment would inform
          psychotherapy goals or decisions made in collaboration with prescribers.
        </li>
        <li>
          <strong>Attorneys and case-related inquiries:</strong> clinical evaluation only; scope, records, and
          limitations are discussed before scheduling.
        </li>
        <li>
          <strong>Families:</strong> support in understanding whether assessment is an appropriate next step and what
          the process typically involves.
        </li>
      </ul>
      <p>
        For non-urgent referral questions, contact our office. If this is an emergency, call 911 or go to the nearest
        emergency department.
      </p>
    </section>
  );
}
