import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactPageContent } from "@/components/sections/Prompt5Sections";

export const metadata: Metadata = {
  title: "Contact | AutoOps Forge",
  description:
    "Contact AutoOps Forge for custom software, automation, DevOps delivery, technical troubleshooting, and AI-assisted engineering solutions."
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactPageContent />
    </PageShell>
  );
}
