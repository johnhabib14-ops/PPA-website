import Link from "next/link";
import { CONTACT_HREF } from "@/lib/nav";
import { maternalAdvocacyChrome, maternalAdvocacyNav, maternalAdvocacyProject } from "@/lib/research";

export function ProjectFooter() {
  return (
    <footer className="project-footer">
      <div className="project-footer__inner">
        <div className="project-footer__brand">
          <p className="project-footer__title">{maternalAdvocacyProject.title}</p>
          <p className="project-footer__blurb">{maternalAdvocacyChrome.footerBlurb}</p>
        </div>
        <nav aria-label="Project sections" className="project-footer__nav">
          <p className="project-footer__heading">Sections</p>
          <ul>
            {maternalAdvocacyNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Pacific Psychological Associates" className="project-footer__nav">
          <p className="project-footer__heading">Pacific Psychological Associates</p>
          <ul>
            <li>
              <Link href={maternalAdvocacyChrome.parentHref}>Main practice site</Link>
            </li>
            <li>
              <Link href={maternalAdvocacyChrome.parentResearchHref}>All research</Link>
            </li>
            <li>
              <Link href={CONTACT_HREF}>Contact the practice</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="project-footer__base">
        <p>{maternalAdvocacyChrome.footerNote}</p>
        <p className="project-footer__copy">
          © {new Date().getFullYear()} Pacific Psychological Associates
        </p>
      </div>
    </footer>
  );
}
