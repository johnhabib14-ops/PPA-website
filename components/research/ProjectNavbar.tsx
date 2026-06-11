import Link from "next/link";
import { maternalAdvocacyChrome, maternalAdvocacyNav } from "@/lib/research";

export function ProjectNavbar() {
  return (
    <header className="project-nav">
      <div className="project-nav__inner">
        <div className="project-nav__brand">
          <Link className="project-nav__parent" href={maternalAdvocacyChrome.parentHref}>
            <span aria-hidden="true">&larr;</span> {maternalAdvocacyChrome.parentBrand}
          </Link>
          <Link className="project-nav__title" href={maternalAdvocacyChrome.navBrandHref}>
            {maternalAdvocacyChrome.navBrand}
          </Link>
        </div>
        <nav className="project-nav__links" aria-label="Project sections">
          <ul>
            {maternalAdvocacyNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
