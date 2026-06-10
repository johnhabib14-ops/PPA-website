import { getInsuranceContent } from "@/lib/insurance";

type InsuranceListProps = {
  /** When true, omits outer `<section>` and duplicate page title so a parent can own landmarks. */
  embedded?: boolean;
};

export function InsuranceList({ embedded }: InsuranceListProps) {
  const data = getInsuranceContent();

  const core = (
    <>
      <div className="text-block stack-tight">
        <p className="insurance-intro">{data.intro}</p>
        <p className="muted">Last reviewed: {data.lastUpdated}</p>
      </div>
      <div className="card card--insurance">
        <ul className="insurance-list" aria-label="Insurance carriers we may accept for therapy">
          {data.therapyPayers.map((payer) => (
            <li key={payer}>{payer}</li>
          ))}
        </ul>
      </div>
      <div className="notice-box" role="note">
        <p>{data.disclaimer}</p>
      </div>
      <p>{data.notListed}</p>
    </>
  );

  if (embedded) {
    return <div className="insurance-embed">{core}</div>;
  }

  return (
    <section aria-labelledby="insurance-plans-heading" className="section">
      <h2 id="insurance-plans-heading" className="section-title">
        Therapy plans we commonly work with
      </h2>
      {core}
    </section>
  );
}
