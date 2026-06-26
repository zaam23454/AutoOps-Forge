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
  "CI/CD pipelines, cloud deployments, infrastructure automation, containerized environments, monitoring, and reliable release support.",
overviewDescription:
  "CI/CD pipelines, cloud deployments, infrastructure automation, containerized environments, monitoring, and reliable release support",
    href: "/services/devops-deployment",
    icon: "cloud",
    bullets: [
        "CI/CD Pipeline Design",
        "Infrastructure as Code",
        "Cloud & Server Deployment",
        "Containerization",
        "Release Troubleshooting",
        "Rollback & Recovery"
      ],
    heroText:
         "Modern teams need more than deployment buttons. I help fix broken pipelines, automate release workflows, stabilize environments, and build reliable delivery systems across cloud, servers, containers, and CI/CD platforms.",
    problems: [
          "Failed or unreliable deployments",
          "Broken CI/CD pipelines",
          "Manual release steps and human errors",
          "Environment mismatch between local, staging, and production",
          "Missing rollback and recovery process",
          "Poor monitoring, logs, and deployment visibility",
          "Post-deployment cache, routing, or content refresh issues",
          "Cloud/server configuration drift"
        ],
    provides: [
        "CI/CD setup with GitHub Actions, Jenkins, Azure DevOps, and CircleCI",
        "Cloud deployment support across AWS, Azure, GCP, JAMstack Platforms, Static/Edge Hosting",
        "Infrastructure automation with Terraform and ARM templates",
        "Configuration management with Ansible",
        "Containerization with Docker and Docker Compose",
        "Nginx Plus, IIS, and reverse proxy configuration",
        "Release troubleshooting, rollback planning, and production support",
        "API, webhook, Postman, and automation workflow support"
      ],
    tools: [
       "Terraform",
       "Ansible",
       "Ansible Tower",
       "Azure",
       "AWS",
       "GCP",
       "S3",
       "Vercel",
       "Docker",
       "Docker Compose",
       "Jenkins",
       "GitHub Actions",
       "Azure DevOps",
       "Bitbucket",
       "CircleCI",
       "Nginx",
       "Nginx Plus",
       "IIS",
       "Datadog",
       "Grafana",
       "Postman",
       "REST APIs",
       "PowerShell",
       "Bash",
       "Google Apps Script",
       "PostgreSQL",
       "SQL Server"
          ],
    useCases: [
       "Fix a failing GitHub Actions, Jenkins, or Azure DevOps pipeline",
       "Move manual deployments into automated CI/CD workflows",
       "Deploy a Next.js or business app to Vercel, cloud, or server infrastructure",
       "Automate infrastructure provisioning with Terraform",
       "Run repeatable server configuration through Ansible playbooks",
       "Containerize applications with Docker and Docker Compose",
       "Troubleshoot failed production releases and rollback safely",
       "Build API, webhook, and Postman-based automation workflows"
       ],
    ctaHeading: "Need reliable DevOps and deployment support?"
  },
  {
  slug: "custom-software-development",
  title: "Custom Software Development",
  description:
    "Custom web apps, .NET systems, REST APIs, dashboards, portals, database-backed tools, and workflow automation built around real business needs.",
  overviewDescription:
    "Custom web apps, .NET systems, REST APIs, dashboards, portals, database-backed tools, and workflow automation built around real business needs.",
  href: "/services/custom-software-development",
  icon: "code",
  bullets: [
    "Web Applications",
    ".NET & Legacy Systems",
    "REST APIs & Integrations",
    "Dashboards & Portals",
    "Database-Backed Tools",
    "Feature Development"
  ],
  heroText:
    "I build practical software that solves real business problems: custom websites, internal tools, .NET applications, REST APIs, dashboards, portals, automation systems, and database-backed workflows.",
  problems: [
    "Business relies on spreadsheets or manual processes",
    "Existing application needs new features or modernization",
    "Legacy .NET Framework app needs maintenance or migration",
    "No dashboard or portal for operations, users, or reporting",
    "Teams repeat manual work that can be automated",
    "Systems do not connect through APIs or integrations",
    "Website does not capture leads or support business workflow",
    "Database and application workflows are hard to manage"
  ],
  provides: [
    "Custom business websites and one-page service sites",
    ".NET Framework, .NET MVC, .NET 8, and .NET 10 application support",
    "Legacy application maintenance, modernization, and migration",
    "REST API development for automation and internal workflows",
    "Custom dashboards, admin panels, and customer portals",
    "Database-backed applications using SQL Server, PostgreSQL, and MySQL",
    "Feature development for existing applications",
    "Google Apps Script, PowerShell, Windows Forms, and workflow automation"
  ],
  tools: [
    ".NET Framework",
    ".NET MVC",
    ".NET 8",
    ".NET 10",
    "C#",
    "REST APIs",
    "React",
    "Next.js",
    "TypeScript",
    "HTML",
    "CSS",
    "Node.js",
    "PowerShell",
    "Windows Forms",
    "Google Apps Script",
    "Azure",
    "Active Directory",
    "SQL Server",
    "PostgreSQL",
    "MySQL",
    "Vercel",
    "Git",
    "Postman"
  ],
  useCases: [
    "Build a custom business website or service landing page",
    "Create REST APIs to reduce manual team workflows",
    "Add new features to an existing application",
    "Modernize or migrate a legacy .NET Framework application",
    "Build internal dashboards, admin panels, or customer portals",
    "Create inventory, e-commerce, booking, or lead capture systems",
    "Automate user management workflows with Azure Active Directory",
    "Connect business workflows with databases, APIs, and automation scripts"
  ],
  ctaHeading: "Need custom software built around your workflow?"
},
  {
  slug: "automation-scripting",
  title: "Automation & Scripting",
  description:
    "PowerShell, Bash, scheduled jobs, APIs, one-click tools, browser automation, and workflow scripts that reduce manual work.",
  overviewDescription:
    "PowerShell, Bash, scheduled jobs, APIs, one-click tools, browser automation, and workflow scripts that reduce manual work.",
  href: "/services/automation-scripting",
  icon: "automation",
  bullets: [
    "PowerShell Automation",
    "Bash & Cron Jobs",
    "Task Scheduler Workflows",
    "REST API Automation",
    "One-Click EXE Tools",
    "Browser & Macro Automation"
  ],
  heroText:
    "I build practical automation for real business operations: PowerShell scripts, Bash jobs, scheduled tasks, Azure Functions, REST APIs, one-click internal tools, browser automation, and workflow scripts that save time and reduce human error.",
  problems: [
    "Repetitive manual tasks slowing the team down",
    "Support work requires logging into servers manually",
    "Daily, weekly, or monthly tasks are not scheduled",
    "Manual password rotation, checks, or admin operations",
    "Teams depend on copy-paste workflows and repeated clicks",
    "No internal tool or API to trigger common operations",
    "Dashboards, reports, or monitoring tasks need manual updates",
    "Browser or legacy workflows have no direct API available"
  ],
  provides: [
    "PowerShell automation for Windows systems and admin workflows",
    "Bash scripting, cron jobs, and Linux task automation",
    "Windows Task Scheduler workflows and one-click EXE utilities",
    "Azure Functions for scheduled cloud automation tasks",
    "REST API and middleware automation for internal team operations",
    "Ansible jobs and playbooks for repeatable workflow execution",
    "Playwright browser automation for workflows without APIs",
    "Macro-style automation for approved keystroke, mouse, and desktop workflows"
  ],
  tools: [
    "PowerShell",
    "Bash",
    "Cron Jobs",
    "Task Scheduler",
    "Azure Functions",
    "REST APIs",
    "Postman",
    "Ansible",
    "Ansible Tower",
    "Playwright",
    "Windows Forms",
    "One-Click EXEs",
    "Macros",
    "Datadog",
    "Google Apps Script",
    "Python",
    "YAML",
    "GitHub",
    "Linux",
    "Windows Server"
  ],
  useCases: [
    "Automate monthly password rotation through Azure Functions",
    "Create one-click EXE tools for internal support teams",
    "Expose server/admin tasks through secure REST APIs",
    "Automate Linux jobs with Bash scripts and cron schedules",
    "Run Windows operational workflows through Task Scheduler",
    "Update or maintain Datadog dashboards through automation",
    "Automate browser-based workflows with Playwright",
    "Capture approved macro-style desktop workflows into repeatable tools"
  ],
  ctaHeading: "Need automation that removes manual work?"
},
  {
  slug: "agentic-engineering",
  title: "Agentic Engineering",
  description:
    "AI-assisted workflows, prompt systems, RCA agents, automation agents, and product delivery pipelines built with human control.",
  overviewDescription:
    "AI-assisted workflows, prompt systems, RCA agents, automation agents, and product delivery pipelines built with human control.",
  href: "/services/agentic-engineering",
  icon: "agentic",
  bullets: [
    "AI-Agent Workflows",
    "Prompt Engineering",
    "RCA & Debug Agents",
    "MCP Integrations",
    "AI-Assisted Delivery",
    "Human-in-the-Loop Systems"
  ],
  heroText:
    "I design and use AI-assisted engineering workflows that turn ideas, bugs, requirements, and delivery tasks into structured execution. From RCA agents to product builds, I use AI as a controlled engineering accelerator, not a replacement for judgment.",
  problems: [
    "Teams use AI tools without a clear workflow",
    "Prompts produce inconsistent or low-quality results",
    "Pipeline failures and technical issues take too long to analyze",
    "Requirements are unclear before development starts",
    "Research, debugging, documentation, and handoff tasks are repetitive",
    "AI-generated output needs human review, structure, and quality control",
    "Teams want faster delivery without losing engineering standards",
    "No reusable prompt, agent, or automation system exists"
  ],
  provides: [
    "Prompt engineering for reliable technical output",
    "RCA agents for failed pipelines, bugs, and technical incidents",
    "AI-assisted planning, debugging, coding, review, and documentation workflows",
    "Agentic workflows using GPT, Codex, Claude, Gemini, and Google AI Studio",
    "MCP-style integrations to connect AI workflows with tools and systems",
    "AI-assisted product design, UI direction, content, and delivery planning",
    "Reusable prompts, skills, handoff flows, and troubleshooting agents",
    "Human-in-the-loop systems that keep quality, review, and control in place"
  ],
  tools: [
    "GPT",
    "Codex",
    "Claude",
    "Gemini",
    "Google AI Studio",
    "Blackbox",
    "MCP",
    "Prompt Engineering",
    "AI Agents",
    "RCA Agents",
    "GitHub",
    "TypeScript",
    "DevOps Workflows",
    "CI/CD Analysis",
    "Documentation Systems",
    "Testing Loops",
    "Code Review",
    "Product Handoffs"
  ],
  useCases: [
    "Create RCA agents that analyze failed pipelines and summarize likely causes",
    "Turn client requirements into structured implementation plans",
    "Build AI-assisted workflows for debugging, documentation, and handoff",
    "Ship websites and internal tools using Codex-style development workflows",
    "Design reusable prompts for planning, coding, review, and troubleshooting",
    "Connect AI workflows with external tools through MCP-style integrations",
    "Create UI, content, and product direction with AI-assisted design workflows",
    "Build human-controlled agent workflows for faster technical delivery"
  ],
  ctaHeading: "Want AI-assisted delivery without losing engineering control?"
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
  },
  {
  title: "Terraform IaC",
  description: "Provision cloud and server infrastructure reliably.",
  icon: "settings"
  },
  {
    title: "Ansible Automation",
    description: "Repeatable playbooks, jobs, and server workflows.",
    icon: "pipeline"
  },
  {
    title: "Azure DevOps",
    description: "Pipelines, repos, boards, and release support.",
    icon: "branch"
  },
  {
    title: "Datadog & Grafana",
    description: "Dashboards, monitoring, alerts, and visibility.",
    icon: "chart"
  },
  {
    title: ".NET Applications",
    description: "Modern, MVC, and legacy .NET application support.",
    icon: "code"
  },
  {
    title: "Database Systems",
    description: "PostgreSQL, SQL Server, MySQL-backed workflows.",
    icon: "database"
  },
  {
    title: "Azure Functions",
    description: "Scheduled cloud tasks and event-driven automation.",
    icon: "automation"
  },
  {
    title: "RCA Agents",
    description: "AI-assisted root-cause analysis for failures.",
    icon: "agentic"
  }
] as const;

export const capabilityGroups = [
  {
    title: "DevOps & Cloud",
    description: "Delivery, infrastructure, versioning, and cloud release operations.",
    icon: "cloud",
    items: [
      "CI/CD Pipelines",
      "Cloud Deployment",
      "Terraform IaC",
      "Azure DevOps",
      "Ansible Automation",
      "Containerization",
      "Git & Versioning"
    ]
  },
  {
    title: "Software & Data",
    description: "Business apps, dashboards, databases, APIs, and web systems.",
    icon: "code",
    items: [
      "Websites",
      "Dashboards",
      "Management Systems",
      "Ecommerce",
      ".NET Applications",
      "Database Systems",
      "REST API Automation"
    ]
  },
  {
    title: "Automation & Support",
    description: "Scripts, support workflows, scheduled jobs, monitoring, and tools.",
    icon: "automation",
    items: [
      "PowerShell",
      "Bash",
      "Python",
      "One-Click EXEs",
      "Azure Functions",
      "Logging & Monitoring",
      "L3 Support"
    ]
  },
  {
    title: "AI & Agentic",
    description: "AI-assisted delivery, RCA workflows, and intelligent automation.",
    icon: "agentic",
    items: [
      "AI-Agent-Powered Delivery",
      "RCA Agents",
      "Prompt Workflows",
      "Human-in-the-Loop Review"
    ]
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
