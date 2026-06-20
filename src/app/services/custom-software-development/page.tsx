import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { serviceDetails } from "@/data/services";

const service = serviceDetails.find((item) => item.slug === "custom-software-development")!;

export const metadata: Metadata = {
  title: "Custom Software Development | AutoOps Forge",
  description: service.heroText
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <PageShell>
      <ServiceDetailTemplate service={service} />
    </PageShell>
  );
}
