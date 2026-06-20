export type ServicePreview = {
  title: string;
  description: string;
  href: string;
  icon: "cloud" | "code" | "automation" | "agentic";
};

export type ServiceDetail = ServicePreview & {
  slug: string;
  overviewDescription: string;
  bullets: string[];
  heroText: string;
  problems: string[];
  provides: string[];
  tools: string[];
  useCases: string[];
  ctaHeading: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "devops-deployment",
    title: "DevOps & Deployment",
    description:
      "CI/CD pipelines, infrastructure support, cloud deployment, environments, rollback planning, and reliable release operations.",
    overviewDescription:
      "CI/CD pipelines, infrastructure support, cloud deployment, environments, rollback planning, and reliable release operations.",
    href: "/services/devops-deployment",
    icon: "cloud",
    bullets: [
      "CI/CD Pipeline Design",
      "Infrastructure as Code",
      "Cloud Deployment",
      "Environments & Releases",
      "Rollback & Recovery",
      "Monitoring & Troubleshooting"
    ],
    heroText:
      "Reliable releases, cloud environments, CI/CD pipelines, and deployment support for teams that need systems to ship safely.",
    problems: [
      "Failed deployments",
      "Manual release steps",
      "Unstable environments",
      "Missing rollback process",
      "Poor monitoring visibility",
      "Slow delivery cycles"
    ],
    provides: [
      "CI/CD pipeline setup",
      "Cloud deployment support",
      "Vercel / Azure / AWS deployment",
      "Docker and environment setup",
      "Release troubleshooting",
      "Monitoring and log review",
      "Rollback/recovery planning"
    ],
    tools: [
      "Azure",
      "AWS",
      "Vercel",
      "Docker",
      "Jenkins",
      "Ansible",
      "GitHub",
      "Azure DevOps",
      "Linux",
      "Windows Server",
      "IIS",
      "Nginx"
    ],
    useCases: [
      "Deploy a new Next.js website",
      "Fix failing pipeline",
      "Stabilize production release",
      "Move app from local/manual deployment to Vercel/cloud",
      "Improve server reliability"
    ],
    ctaHeading: "Need reliable deployment support?"
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Scalable, secure, and performant web applications tailored to your business needs.",
    overviewDescription:
      "Scalable, secure, and performant web applications tailored to your business needs.",
    href: "/services/custom-software-development",
    icon: "code",
    bullets: [
      "Web Applications",
      "APIs & Integrations",
      "Dashboards & Portals",
      "Business Systems",
      "Management Systems",
      "Database Design"
    ],
    heroText:
      "Business websites, dashboards, portals, APIs, and management systems built around your real workflow.",
    problems: [
      "Business has no proper system",
      "Manual spreadsheet-heavy operations",
      "Website does not convert leads",
      "Existing app needs new features",
      "No dashboard for operations",
      "Poor user experience"
    ],
    provides: [
      "Business websites",
      "Web applications",
      "Dashboards and portals",
      "API development and integration",
      "Management systems",
      "Booking/lead capture flows",
      "Database-backed applications"
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Google Sheets",
      "Google Apps Script",
      "Vercel",
      "PostgreSQL",
      "MySQL"
    ],
    useCases: [
      "Business service website",
      "Inventory management system",
      "Internal dashboard",
      "Customer portal",
      "Lead capture system",
      "Feature extension for an existing product"
    ],
    ctaHeading: "Have a software idea or business system to build?"
  },
  {
    slug: "automation-scripting",
    title: "Automation & Scripting",
    description:
      "Automate workflows, data processing, repetitive tasks, and business operations.",
    overviewDescription:
      "Automate workflows, data processing, repetitive tasks, and business operations.",
    href: "/services/automation-scripting",
    icon: "automation",
    bullets: [
      "PowerShell Automation",
      "Bash & Shell Scripting",
      "Python Automation",
      "Task & Job Scheduling",
      "One-Click EXE Tools",
      "REST API Automation"
    ],
    heroText:
      "Turn repetitive manual work into scripts, tools, workflows, and one-click utilities your team can rely on.",
    problems: [
      "Repetitive manual tasks",
      "Human error in daily operations",
      "Slow reporting or data processing",
      "Manual deployment or support steps",
      "No simple internal tools",
      "Teams wasting time on copy-paste work"
    ],
    provides: [
      "PowerShell automation",
      "Bash scripting",
      "Python scripting",
      "One-click EXE tools",
      "API automation",
      "Data processing workflows",
      "Task scheduling",
      "System administration automation"
    ],
    tools: [
      "PowerShell",
      "Bash",
      "Python",
      "REST APIs",
      "YAML",
      "Google Apps Script",
      "Windows",
      "Linux",
      "GitHub",
      "Jenkins"
    ],
    useCases: [
      "Automate daily support checks",
      "Create one-click internal utility",
      "Process data from files/APIs",
      "Automate server/admin tasks",
      "Build team productivity scripts"
    ],
    ctaHeading: "Want to remove repetitive manual work?"
  },
  {
    slug: "agentic-engineering",
    title: "Agentic Engineering",
    description:
      "AI-powered systems and agentic workflows that help plan, build, debug, automate, and improve technical delivery.",
    overviewDescription:
      "AI-powered systems and agentic workflows that help plan, build, debug, automate, and improve technical delivery.",
    href: "/services/agentic-engineering",
    icon: "agentic",
    bullets: [
      "AI-Agent Development",
      "Intelligent Workflows",
      "Decision Automation",
      "AI-Assisted Debugging",
      "Continuous Improvement",
      "Agentic Delivery"
    ],
    heroText:
      "AI-assisted planning, debugging, automation, and delivery workflows for faster technical execution without losing engineering control.",
    problems: [
      "Slow technical planning",
      "Repeated debugging cycles",
      "Unclear implementation approach",
      "Manual research and repetitive coding tasks",
      "No structured AI-assisted workflow",
      "Teams want speed without sacrificing quality"
    ],
    provides: [
      "AI-assisted planning",
      "Agentic workflow design",
      "Technical debugging support",
      "Prompt/workflow engineering",
      "Automation-assisted development",
      "Code review and delivery support",
      "Documentation and handover workflows"
    ],
    tools: [
      "AI agents",
      "Codex-style workflows",
      "GitHub",
      "TypeScript",
      "DevOps workflows",
      "Automation pipelines",
      "Documentation systems",
      "Testing and review loops"
    ],
    useCases: [
      "Plan a new technical product",
      "Convert requirements into implementation tasks",
      "Debug complex errors faster",
      "Create development handoff prompts",
      "Build automation-assisted delivery workflow"
    ],
    ctaHeading: "Want smarter technical delivery with human control?"
  }
];

export const servicePreviews: ServicePreview[] = serviceDetails.map(
  ({ title, description, href, icon }) => ({ title, description, href, icon })
);

export const capabilities = [
  {
    title: "CI/CD Pipelines",
    description: "Automate build, test, and deploy.",
    icon: "pipeline"
  },
  {
    title: "Cloud Deployment",
    description: "Azure, AWS, Vercel, and cloud-native delivery.",
    icon: "cloud"
  },
  {
    title: "Infrastructure Troubleshooting",
    description: "Resolve issues, restore stability.",
    icon: "settings"
  },
  {
    title: "Containerization",
    description: "Docker, images, and orchestration readiness.",
    icon: "database"
  },
  {
    title: "Git & Versioning",
    description: "Branch, merge, release with confidence.",
    icon: "branch"
  },
  {
    title: "Logging & Monitoring",
    description: "Centralized logs, alerts, and insights.",
    icon: "lock"
  },
  {
    title: "L3 Support",
    description: "Advanced diagnosis and resolution.",
    icon: "terminal"
  },
  {
    title: "Websites",
    description: "Fast, secure, and business-ready.",
    icon: "layout"
  },
  {
    title: "Dashboards",
    description: "Real-time data and clearer decisions.",
    icon: "chart"
  },
  {
    title: "Management Systems",
    description: "Internal tools that run your business.",
    icon: "server"
  },
  {
    title: "Ecommerce",
    description: "Stores that convert and scale.",
    icon: "cart"
  },
  {
    title: "PowerShell",
    description: "Automate Windows like a pro.",
    icon: "terminal"
  },
  {
    title: "Bash",
    description: "Unix automation done right.",
    icon: "terminal"
  },
  {
    title: "Python",
    description: "Powerful scripts, smart solutions.",
    icon: "code"
  },
  {
    title: "One-Click EXEs",
    description: "Tools your team can run easily.",
    icon: "package"
  },
  {
    title: "REST API Automation",
    description: "Connect, orchestrate, and automate APIs.",
    icon: "network"
  },
  {
    title: "AI-Agent-Powered Delivery",
    description: "Intelligent agents, real outcomes.",
    icon: "agentic"
  }
] as const;

export const whyChooseUs = [
  {
    title: "Practical Solutions",
    description: "We solve real problems with practical, reliable engineering.",
    icon: "settings"
  },
  {
    title: "Scalable Delivery",
    description: "Built to scale with your team, systems, and growth.",
    icon: "layers"
  },
  {
    title: "Business-Focused",
    description: "We align tech with outcomes that move your business forward.",
    icon: "briefcase"
  },
  {
    title: "Modern Tooling",
    description: "We use best-in-class tools and proven practices.",
    icon: "tool"
  },
  {
    title: "Support You Can Count On",
    description: "Responsive, proactive, and here when you need us.",
    icon: "shield"
  }
] as const;
