import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PortfolioPageContent } from "@/components/sections/PortfolioSections";

export const metadata: Metadata = {
  title: "Portfolio | Maaz Khalid | AutoOps Forge",
  description:
    "Explore the portfolio of Maaz Khalid, a DevOps Engineer, Automation Specialist, and AI-Assisted Developer building scalable systems, cloud solutions, and automation-first delivery."
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <PortfolioPageContent />
    </PageShell>
  );
}
