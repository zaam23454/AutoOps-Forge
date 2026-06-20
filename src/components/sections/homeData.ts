import {
  Bot,
  BrainCircuit,
  CalendarCheck,
  CloudUpload,
  Code2,
  FileSpreadsheet,
  Gauge,
  Headphones,
  LayoutTemplate,
  MessageCircle,
  Rocket,
  Search,
  ServerCrash,
  Settings,
  ShieldCheck,
  TerminalSquare,
  Workflow,
  Wrench
} from "lucide-react";

export const trustIndicators = [
  { label: "DevOps-Backed", icon: CloudUpload },
  { label: "Automation First", icon: Settings },
  { label: "Agentic Systems", icon: BrainCircuit },
  { label: "Reliable Delivery", icon: ShieldCheck }
];

export const problemItems = [
  {
    title: "Broken Systems",
    description: "Outdated, unreliable software holding you back.",
    icon: ServerCrash
  },
  {
    title: "Manual Workflows",
    description: "Repetitive tasks drain time and increase errors.",
    icon: Workflow
  },
  {
    title: "Deployment Pain",
    description: "Slow releases, failed deploys, and late nights.",
    icon: TerminalSquare
  },
  {
    title: "Need a Custom Solution?",
    description: "You need software that fits your business, not the other way around.",
    icon: Wrench
  }
];

export const serviceIconMap = {
  cloud: CloudUpload,
  code: Code2,
  automation: Settings,
  agentic: Bot
} as const;

export const projectFeatureIconMap = [CalendarCheck, FileSpreadsheet, MessageCircle, Rocket];

export const processIconMap = {
  search: Search,
  layout: LayoutTemplate,
  code: Code2,
  settings: Settings,
  rocket: Rocket,
  headset: Headphones
} as const;

export const heroMetrics = [
  { value: "CI/CD", label: "Release Systems" },
  { value: "24/7", label: "Operational Thinking" },
  { value: "AOF", label: "Build. Automate. Deploy." }
];

export const techVisualIcons = [CloudUpload, Code2, Settings, Gauge];
