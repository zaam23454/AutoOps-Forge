import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { serviceDetails } from "@/data/services";

const service = serviceDetails.find((item) => item.slug === "agentic-engineering")!;

export const metadata: Metadata = {
  title: "Agentic Engineering | AutoOps Forge",
  description: service.heroText
};

export default function AgenticEngineeringPage() {
  return (
    <PageShell>
      <ServiceDetailTemplate service={service} />
    </PageShell>
  );
}
