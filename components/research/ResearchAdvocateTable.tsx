type ResearchAdvocateTableProps = {
  title?: string;
  attribution?: string;
  columns: string[];
  rows: string[][];
  /** When set, only this many rows show until the user expands. */
  initialVisibleRows?: number;
};

function TableBody({ rows }: { rows: string[][] }) {
  return (
    <tbody>
      {rows.map((row, i) => (
        <tr key={i}>
          {row.map((cell, ci) => (
            <td key={ci}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export function ResearchAdvocateTable({
  title,
  attribution,
  columns,
  rows,
  initialVisibleRows,
}: ResearchAdvocateTableProps) {
  const isCollapsible = initialVisibleRows != null && rows.length > initialVisibleRows;
  const previewRows = isCollapsible ? rows.slice(0, initialVisibleRows) : rows;
  const hiddenRows = isCollapsible ? rows.slice(initialVisibleRows!) : [];
  const hiddenCount = hiddenRows.length;

  const table = (visibleRows: string[][]) => (
    <div className="research-advocate-table-scroll">
      <table className="research-advocate-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} scope="col">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <TableBody rows={visibleRows} />
      </table>
    </div>
  );

  return (
    <div className="research-advocate-table-wrap">
      {title ? <h4 className="research-advocate-table__title">{title}</h4> : null}
      {isCollapsible ? (
        <>
          {table(previewRows)}
          <details className="research-collapsible research-advocate-table__expand">
            <summary>Show all {rows.length} advocates ({hiddenCount} more)</summary>
            {table(hiddenRows)}
          </details>
        </>
      ) : (
        table(rows)
      )}
      {attribution ? <p className="research-advocate-table__attribution">{attribution}</p> : null}
    </div>
  );
}
