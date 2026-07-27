import Image from "next/image";
import Link from "next/link";
import { Container } from "@mui/material";
import {
  ArrowRight,
  Bot,
  Box,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileText,
  GitBranch,
  Headphones,
  LayoutDashboard,
  Layers3,
  LineChart,
  Lock,
  Network,
  PackageCheck,
  Rocket,
  Server,
  Settings,
  ShieldCheck,
  ShoppingCart,
  TerminalSquare,
  Wrench
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { HudPanel } from "@/components/ui/HudPanel";
import { IconBox } from "@/components/ui/IconBox";
import { MetricCard } from "@/components/ui/MetricCard";
import { MobileCollapsibleList } from "@/components/ui/MobileCollapsibleList";
import { MobileRevealList } from "@/components/ui/MobileRevealList";
import { StatusPill } from "@/components/ui/StatusPill";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectsExplorer } from "./ProjectsExplorer";
import { capabilityGroups, serviceDetails, whyChooseUs } from "@/data/services";
import {
  featuredProject,
  moreWork,
  projectCategories,
  projectStats
} from "@/data/projects";
import { projectsTestimonial } from "@/data/testimonials";
import styles from "./Prompt3Pages.module.css";

const iconMap = {
  agentic: Bot,
  automation: Settings,
  branch: GitBranch,
  briefcase: BriefcaseBusiness,
  cart: ShoppingCart,
  chart: LineChart,
  cloud: Cloud,
  code: Code2,
  database: Database,
  file: FileText,
  layout: LayoutDashboard,
  layers: Layers3,
  lock: Lock,
  network: Network,
  package: PackageCheck,
  pipeline: Box,
  rocket: Rocket,
  server: Server,
  settings: Settings,
  shield: ShieldCheck,
  terminal: TerminalSquare,
  tool: Wrench
};

const projectCategoryAssignments: Record<string, readonly string[]> = {
  "Deployment Automation Toolkit": ["DevOps", "Automation"],
  "Cloud Migration & Environment Setup": ["DevOps", "Support Systems"],
  "Internal Ops Dashboard": ["Web Apps", "Support Systems"],
  "CI/CD Pipeline Optimization": ["DevOps", "Automation"]
};

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] ?? Settings;
}

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, text, children }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </div>
      </Container>
    </section>
  );
}

export function ServicesPageContent() {
  return (
    <div className={styles.page}>
      <PageHero
        eyebrow="Services"
        title="Services"
        text="Custom software, automation-first systems, DevOps-backed delivery, and agentic engineering that moves fast and scales smarter."
      >
        <div className={styles.heroActions}>
          <GlowButton href="/contact">Start a Project</GlowButton>
          <GlowButton href="/contact" variant="secondary">
            Request a Quote
          </GlowButton>
        </div>
      </PageHero>

      <section className={styles.section}>
        <Container maxWidth={false} className={styles.container}>
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.eyebrow}>Our Core Services</span>
              <h2>Build. Automate. Deploy.</h2>
            </div>
            <p className={styles.copy}>
              Focused technical services for teams that need practical delivery,
              reliable systems, and clean execution.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {serviceDetails.map((service, index) => {
              const Icon = getIcon(service.icon);
              const accent = index === 2 ? "orange" : "cyan";
              return (
                <GlassCard key={service.slug} accent={accent} className={styles.serviceCard}>
                  <IconBox icon={<Icon />} accent={accent} />
                  <h3>{service.title}</h3>
                  <p className={styles.cardText}>{service.overviewDescription}</p>
                  <MobileCollapsibleList
                    items={service.bullets}
                    className={styles.bulletList}
                  />
                  <Link className={styles.link} href={service.href}>
                    Explore Service <ArrowRight size={16} />
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      <CapabilitiesSection />
      <WhyChooseSection />
      <ServicesCTA />
    </div>
  );
}

export function CapabilitiesSection() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel title="Capabilities & Technologies">
          <MobileRevealList
            className={styles.capabilityGrid}
            initialVisible={2}
            showLabel="Show all capabilities"
          >
            {capabilityGroups.map((group) => {
              const Icon = getIcon(group.icon);
              return (
                <GlassCard key={group.title} className={styles.capabilityGroup} hover={false}>
                  <IconBox icon={<Icon size={24} />} />
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                    <div className={styles.capabilityTags}>
                      {group.items.map((item) => (
                        <TechBadge key={item} tone="cyan">
                          {item}
                        </TechBadge>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </MobileRevealList>
        </HudPanel>
      </Container>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel title="Why Clients Choose AutoOps Forge">
          <MobileRevealList
            className={styles.whyGrid}
            initialVisible={3}
            showLabel="Show all reasons"
          >
            {whyChooseUs.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <GlassCard key={item.title} accent="orange" className={styles.whyCard}>
                  <IconBox icon={<Icon size={25} />} accent="orange" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </MobileRevealList>
        </HudPanel>
      </Container>
    </section>
  );
}

export function ServicesCTA() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel className={styles.ctaPanel}>
          <Image
            src="/brand/autoops-forge-mark.png"
            alt=""
            width={120}
            height={92}
            className={styles.ctaLogo}
          />
          <div>
            <h2 className={styles.detailTitle}>Let&apos;s Solve Your Next Technical Problem</h2>
            <p className={styles.copy}>
              From custom software to automation and DevOps, we&apos;ll help you
              build, automate, and deploy with confidence.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <GlowButton href="/contact">Start a Project</GlowButton>
            <GlowButton href="/contact" variant="secondary">
              Request a Quote
            </GlowButton>
          </div>
        </HudPanel>
      </Container>
    </section>
  );
}

export function ProjectsPageContent() {
  return (
    <div className={styles.page}>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Selected Work.
            <br />
            Real <span className={styles.cyan}>Impact.</span>
          </>
        }
        text="We build, automate, and deploy practical solutions that solve real-world problems and deliver results."
      >
        <div className={styles.statsRow}>
          {projectStats.map((stat) => (
            <MetricCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </PageHero>

      <ProjectsExplorer
        categories={projectCategories}
        featured={<FeaturedProjectCase />}
        featuredCategories={["Web Apps", "Automation"]}
        workflow={<ProjectWorkflow />}
        items={moreWork.map((item, index) => ({
          id: item.title,
          categories: projectCategoryAssignments[item.title] ?? ["DevOps", "Automation"],
          content: (
            <GlassCard
              className={styles.workCard}
              accent={index === 3 ? "orange" : "cyan"}
            >
              <IconBox
                icon={<Layers3 size={28} />}
                accent={index === 3 ? "orange" : "cyan"}
              />
              <TechBadge tone={index === 3 ? "orange" : "cyan"}>
                {item.category}
              </TechBadge>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link className={styles.link} href="/contact">
                Discuss Similar Work <ArrowRight size={16} />
              </Link>
            </GlassCard>
          )
        }))}
      />
      <ProjectsTestimonial />
      <ProjectsCTA />
    </div>
  );
}

function FeaturedProjectCase() {
  return (
    <div className={styles.featured}>
      <div className={styles.projectIntro}>
        <span className={styles.eyebrow}>Featured Project</span>
        <div className={styles.titleRow}>
          <h2>{featuredProject.name}</h2>
          <StatusPill state="live">{featuredProject.status}</StatusPill>
        </div>
        <p className={styles.copy}>{featuredProject.description}</p>
        <div className={styles.tagRow}>
          {featuredProject.tags.map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>
        <p className={styles.copy}>{featuredProject.summary}</p>
        <ul className={styles.checkList}>
          {featuredProject.publicFeatures.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.heroActions}>
          <GlowButton href={featuredProject.href}>View Live Site</GlowButton>
          <GlowButton href="/projects" variant="secondary">
            View Case Study
          </GlowButton>
        </div>
      </div>

      <div>
        <div className={styles.browser}>
          <div className={styles.browserTop}>
            <span />
          </div>
          <div className={styles.projectScreen}>
            <div className={styles.screenCard}>
              <span className={styles.smallLabel}>Shiraz AC Fix</span>
              <h3 className={styles.detailTitle}>Booking + Lead Automation</h3>
              <p className={styles.muted}>
                Website, WhatsApp conversion, Google Sheets capture, and Vercel
                deployment in one focused delivery.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.detailGrid}>
          <GlassCard hover={false}>
            <span className={styles.panelTitle}>Tech Stack</span>
            <div className={styles.techRow}>
              {featuredProject.stack.map((item) => (
                <TechBadge key={item}>{item}</TechBadge>
              ))}
            </div>
          </GlassCard>
          <GlassCard hover={false}>
            <span className={styles.panelTitle}>Outcomes</span>
            <ul className={styles.checkList}>
              {featuredProject.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function ProjectWorkflow() {
  const icons = [CalendarCheck, FileText, Headphones, Rocket];
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel title="Project Details">
          <div className={styles.workflowGrid}>
            {featuredProject.features.map((step, index) => {
              const Icon = icons[index] ?? CheckCircle2;
              return (
                <GlassCard key={step.title} className={styles.workflowCard} hover={false}>
                  <IconBox icon={<Icon size={27} />} />
                  <h3>
                    {index + 1}. {step.title}
                  </h3>
                  <p>{step.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </HudPanel>
      </Container>
    </section>
  );
}

function ProjectsTestimonial() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.testimonialGrid}>
          <HudPanel title="Client Testimonial">
            <p className={styles.quote}>&ldquo;{projectsTestimonial.quote}&rdquo;</p>
          </HudPanel>
          <GlassCard accent="cyan" className={styles.client}>
            <span className={styles.panelTitle}>{projectsTestimonial.client}</span>
            <p className={styles.muted}>{projectsTestimonial.location}</p>
            <TechBadge tone="orange">{projectsTestimonial.rating}</TechBadge>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}

function ProjectsCTA() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel className={styles.ctaPanel}>
          <Image
            src="/brand/autoops-forge-mark.png"
            alt=""
            width={120}
            height={92}
            className={styles.ctaLogo}
          />
          <div>
            <h2 className={styles.detailTitle}>Have a Project in Mind?</h2>
            <p className={styles.copy}>
              Let&apos;s build, automate, and deploy a solution that drives real
              impact for your business.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <GlowButton href="/contact">Start a Project</GlowButton>
            <GlowButton href="https://wa.me/923082310366" variant="accent">
              Chat on WhatsApp
            </GlowButton>
          </div>
        </HudPanel>
      </Container>
    </section>
  );
}
