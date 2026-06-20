import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ServicesPageContent } from "@/components/sections/Prompt3Sections";

export const metadata: Metadata = {
  title: "Services | AutoOps Forge",
  description:
    "Explore AutoOps Forge services including DevOps deployment, custom software development, automation scripting, and agentic engineering."
};

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesPageContent />
    </PageShell>
  );
}
