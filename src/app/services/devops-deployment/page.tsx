import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { serviceDetails } from "@/data/services";

const service = serviceDetails.find((item) => item.slug === "devops-deployment")!;

export const metadata: Metadata = {
  title: "DevOps & Deployment | AutoOps Forge",
  description: service.heroText
};

export default function DevOpsDeploymentPage() {
  return (
    <PageShell>
      <ServiceDetailTemplate service={service} />
    </PageShell>
  );
}
