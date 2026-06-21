import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ProcessPageContent } from "@/components/sections/Prompt5Sections";

export const metadata: Metadata = {
  title: "Process | AutoOps Forge",
  description:
    "See how AutoOps Forge moves from discovery to design, development, automation, deployment, and support with a practical engineering-led process."
};

export default function ProcessPage() {
  return (
    <PageShell>
      <ProcessPageContent />
    </PageShell>
  );
}
