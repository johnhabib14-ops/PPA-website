export type TocItem = {
  id: string;
  label: string;
};

type RegionPageTocProps = {
  items: TocItem[];
};

export function RegionPageToc({ items }: RegionPageTocProps) {
  if (items.length < 3) return null;

  return (
    <nav className="region-toc" aria-label="On this page">
      <p className="region-toc__heading">On this page</p>
      <ul className="region-toc__list">
        {items.map((item) => (
          <li key={item.id}>
            <a className="region-toc__link" href={`#${item.id}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
