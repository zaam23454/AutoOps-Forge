import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectsPageContent } from "@/components/sections/Prompt3Sections";

export const metadata: Metadata = {
  title: "Projects | AutoOps Forge",
  description:
    "Explore selected AutoOps Forge work including Shiraz AC Fix, automation examples, DevOps delivery, and custom software solutions."
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <ProjectsPageContent />
    </PageShell>
  );
}
