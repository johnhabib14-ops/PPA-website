import type { ReactNode } from "react";
import { ProjectNavbar } from "@/components/research/ProjectNavbar";
import { ProjectFooter } from "@/components/research/ProjectFooter";

export default function ProjectLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="layout-shell">
      <ProjectNavbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <ProjectFooter />
    </div>
  );
}
