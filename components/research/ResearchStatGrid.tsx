export type StatItem = {
  value: string;
  label: string;
};

type ResearchStatGridProps = {
  title?: string;
  items: StatItem[];
};

export function ResearchStatGrid({ title, items }: ResearchStatGridProps) {
  return (
    <div className="research-stat-grid">
      {title ? <h4 className="research-stat-grid__title">{title}</h4> : null}
      <ul className="research-stat-grid__list">
        {items.map((item) => (
          <li key={item.label} className="research-stat-grid__item">
            <span className="research-stat-grid__value">{item.value}</span>
            <span className="research-stat-grid__label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
