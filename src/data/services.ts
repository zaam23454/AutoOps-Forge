export type ServicePreview = {
  title: string;
  description: string;
  href: string;
  icon: "cloud" | "code" | "automation" | "agentic";
};

export const servicePreviews: ServicePreview[] = [
  {
    title: "DevOps & Deployment",
    description:
      "CI/CD pipelines, infrastructure support, cloud deployment, monitoring, and reliable releases.",
    href: "/services",
    icon: "cloud"
  },
  {
    title: "Custom Software Development",
    description:
      "Scalable, secure, and performant web applications tailored to your business.",
    href: "/services",
    icon: "code"
  },
  {
    title: "Automation & Scripting",
    description: "Automate workflows, data processing, and business operations.",
    href: "/services",
    icon: "automation"
  },
  {
    title: "Agentic Engineering",
    description: "AI-powered systems and agentic workflows that think, act, and improve.",
    href: "/services",
    icon: "agentic"
  }
];
