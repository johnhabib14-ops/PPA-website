type ChartType = "bar" | "groupedBar" | "line" | "diverging";

const W = 320;
const H = 160;
const PAD = 24;

const NAVY = "#1b2a4a";
const ACCENT = "#b8893b";
const GRID = "rgba(15, 26, 48, 0.08)";
const AXIS = "rgba(15, 26, 48, 0.15)";

function BarChart() {
  const values = [62, 78, 45, 88, 56];
  const max = 100;
  const slot = (W - PAD * 2) / values.length;
  const barW = slot * 0.5;
  return (
    <g>
      {values.map((v, i) => {
        const h = ((H - PAD * 2) * v) / max;
        const x = PAD + i * slot + (slot - barW) / 2;
        const y = H - PAD - h;
        return (
          <rect key={i} x={x} y={y} width={barW} height={h} rx={3} fill={i % 2 === 0 ? NAVY : ACCENT} />
        );
      })}
    </g>
  );
}

function GroupedBarChart() {
  const groups = [
    [70, 52],
    [58, 74],
    [82, 60],
  ];
  const max = 100;
  const slot = (W - PAD * 2) / groups.length;
  const barW = slot * 0.22;
  const gap = slot * 0.06;
  return (
    <g>
      {groups.map((pair, gi) => {
        const groupStart = PAD + gi * slot + slot / 2 - barW - gap / 2;
        return pair.map((v, bi) => {
          const h = ((H - PAD * 2) * v) / max;
          const x = groupStart + bi * (barW + gap);
          const y = H - PAD - h;
          return (
            <rect key={`${gi}-${bi}`} x={x} y={y} width={barW} height={h} rx={3} fill={bi === 0 ? NAVY : ACCENT} />
          );
        });
      })}
    </g>
  );
}

function LineChart() {
  const a = [30, 45, 38, 60, 55, 72];
  const b = [55, 48, 62, 50, 66, 58];
  const max = 100;
  const stepX = (W - PAD * 2) / (a.length - 1);
  const toPoints = (arr: number[]) =>
    arr
      .map((v, i) => {
        const x = PAD + i * stepX;
        const y = H - PAD - ((H - PAD * 2) * v) / max;
        return `${x},${y}`;
      })
      .join(" ");
  return (
    <g>
      <polyline points={toPoints(a)} fill="none" stroke={NAVY} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      <polyline
        points={toPoints(b)}
        fill="none"
        stroke={ACCENT}
        strokeWidth={2.5}
        strokeDasharray="5 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function DivergingChart() {
  const values = [40, -28, 55, -45, 30];
  const max = 60;
  const mid = H / 2;
  const slot = (W - PAD * 2) / values.length;
  const barW = slot * 0.5;
  return (
    <g>
      <line x1={PAD} y1={mid} x2={W - PAD} y2={mid} stroke={AXIS} strokeWidth={1} />
      {values.map((v, i) => {
        const h = ((mid - PAD) * Math.abs(v)) / max;
        const x = PAD + i * slot + (slot - barW) / 2;
        const y = v >= 0 ? mid - h : mid;
        return <rect key={i} x={x} y={y} width={barW} height={h} rx={3} fill={v >= 0 ? NAVY : ACCENT} />;
      })}
    </g>
  );
}

export function MockChart({ type }: { type: ChartType }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ height: "100%", width: "100%" }}
      role="img"
      aria-label="Placeholder visualization"
      preserveAspectRatio="xMidYMid meet"
    >
      <g aria-hidden="true">
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={PAD} y1={PAD + (H - PAD * 2) * f} x2={W - PAD} y2={PAD + (H - PAD * 2) * f} stroke={GRID} strokeWidth={1} />
        ))}
        <line x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} stroke={AXIS} strokeWidth={1} />
      </g>
      {type === "bar" && <BarChart />}
      {type === "groupedBar" && <GroupedBarChart />}
      {type === "line" && <LineChart />}
      {type === "diverging" && <DivergingChart />}
    </svg>
  );
}
