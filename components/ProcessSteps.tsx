export type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  sectionId: string;
  sectionTitle: string;
  steps: ProcessStep[];
  /** Appended to the section wrapper (spacing variants). */
  className?: string;
};

export function ProcessSteps({ sectionId, sectionTitle, steps, className }: ProcessStepsProps) {
  const sectionClass = ["process-steps-wrap", className].filter(Boolean).join(" ");
  return (
    <section className={sectionClass} aria-labelledby={sectionId}>
      <h2 id={sectionId} className="section-title">
        {sectionTitle}
      </h2>
      <ol className="process-steps" aria-label={sectionTitle}>
        {steps.map((step, index) => (
          <li key={step.title} className="process-steps__item">
            <span className="process-steps__num" aria-hidden="true">
              {index + 1}
            </span>
            <div className="process-steps__body">
              <h3 className="process-steps__title">{step.title}</h3>
              <p className="process-steps__desc">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
