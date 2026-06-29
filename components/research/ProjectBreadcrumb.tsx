import Link from "next/link";
import { maternalAdvocacyProject, maternalAdvocacyRoutes } from "@/lib/research";

type ProjectBreadcrumbProps = {
  current: string;
};

export function ProjectBreadcrumb({ current }: ProjectBreadcrumbProps) {
  return (
    <nav className="project-breadcrumb" aria-label="Breadcrumb">
      <ol className="project-breadcrumb__list">
        <li className="project-breadcrumb__item">
          <Link className="project-breadcrumb__link" href={maternalAdvocacyRoutes.hub}>
            {maternalAdvocacyProject.title}
          </Link>
        </li>
        <li className="project-breadcrumb__item" aria-current="page">
          <span className="project-breadcrumb__current">{current}</span>
        </li>
      </ol>
    </nav>
  );
}
