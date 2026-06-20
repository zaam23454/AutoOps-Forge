import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { serviceDetails } from "@/data/services";

const service = serviceDetails.find((item) => item.slug === "automation-scripting")!;

export const metadata: Metadata = {
  title: "Automation & Scripting | AutoOps Forge",
  description: service.heroText
};

export default function AutomationScriptingPage() {
  return (
    <PageShell>
      <ServiceDetailTemplate service={service} />
    </PageShell>
  );
}
