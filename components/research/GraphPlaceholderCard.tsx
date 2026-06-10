import { MockChart } from "./MockChart";
import type { GraphCard } from "@/lib/research";

export function GraphPlaceholderCard({ card }: { card: GraphCard }) {
  return (
    <article className="graph-card">
      <header>
        <h3 className="graph-card__title">{card.title}</h3>
        <p className="graph-card__desc">{card.description}</p>
      </header>

      <div className="graph-card__figure">
        <span className="graph-card__badge">Placeholder</span>
        <div className="graph-card__figure-inner">
          <MockChart type={card.chart} />
        </div>
      </div>

      <p className="graph-card__note">Final LIWC results will be inserted here.</p>
    </article>
  );
}
