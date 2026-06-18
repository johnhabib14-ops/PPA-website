type ResearchAdvocateTableProps = {
  title?: string;
  attribution?: string;
  columns: string[];
  rows: string[][];
};

export function ResearchAdvocateTable({
  title,
  attribution,
  columns,
  rows,
}: ResearchAdvocateTableProps) {
  return (
    <div className="research-advocate-table-wrap">
      {title ? <h4 className="research-advocate-table__title">{title}</h4> : null}
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
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, ci) => (
                  <td key={ci}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {attribution ? <p className="research-advocate-table__attribution">{attribution}</p> : null}
    </div>
  );
}
