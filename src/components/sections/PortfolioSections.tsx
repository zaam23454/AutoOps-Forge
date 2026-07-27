import Image from "next/image";
import Link from "next/link";
import { Container } from "@mui/material";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  Download,
  Headphones,
  MessageCircle,
  Settings,
  ShieldCheck
} from "lucide-react";
import { certifications } from "@/data/certifications";
import { experienceEntries } from "@/data/experience";
import { portfolioProjects } from "@/data/portfolioProjects";
import { portfolioExpertise, summaryCapabilities } from "@/data/skills";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { HudPanel } from "@/components/ui/HudPanel";
import { IconBox } from "@/components/ui/IconBox";
import { MobileRevealList } from "@/components/ui/MobileRevealList";
import { TechBadge } from "@/components/ui/TechBadge";
import styles from "./PortfolioSections.module.css";

const iconMap = {
  agentic: Bot,
  automation: Settings,
  cloud: Cloud,
  code: Code2,
  qa: ShieldCheck,
  support: Headphones
};

function IconFor({ name, size = 27 }: { name: string; size?: number }) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? Settings;
  return <Icon size={size} />;
}

export function PortfolioPageContent() {
  return (
    <div className={styles.page}>
      <PortfolioHero />
      <ProfessionalSummary />
      <ExpertiseGrid />
      <ExperienceTimeline />
      <CertificationsGrid />
      <PortfolioProjects />
      <PortfolioCTA />
    </div>
  );
}

function PortfolioHero() {
  const metrics = [
    ["8+", "Years Experience"],
    ["50+", "Projects Delivered"],
    ["24/7", "Automation First"],
    ["100%", "Client Focused"]
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.mobileArtwork} aria-hidden="true">
        <Image
          src="/portfolio/mobile-portrait-hero.png"
          alt=""
          fill
          priority
          quality={72}
          sizes="(max-width: 760px) 100vw, 1px"
        />
      </div>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.intro}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>Portfolio</span>
              <h1>
                Maaz <span className={styles.cyan}>Khalid</span>
              </h1>
              <p className={styles.subtitle}>
                DevOps Engineer, Automation Specialist, and AI-Assisted Developer.
              </p>
              <p className={styles.introText}>
                I build and automate modern systems that scale. From infrastructure
                to code, workflows to agentic solutions - turning ideas into
                reliable, high-performance outcomes.
              </p>
            </div>
            <div className={styles.actions}>
              <GlowButton href="/docs/maaz-khalid-cv.pdf" icon={<Download size={17} />}>
                Download CV
              </GlowButton>
              <GlowButton href="/contact" variant="secondary">
                Let&apos;s Work Together
              </GlowButton>
            </div>
            <div className={styles.metrics}>
              {metrics.map(([value, label]) => (
                <GlassCard key={label} className={styles.metric} hover={false}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProfessionalSummary() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel className={styles.summaryPanel}>
          <div className={styles.summaryText}>
            <span className={styles.sectionLabel}>Professional Summary</span>
            <h2>DevOps, Automation & AI-Assisted Software Engineer</h2>
            <p className={styles.copy}>
              I&apos;m Maaz Khalid, a DevOps Engineer, Automation Specialist, and Software Engineer focused on reliable delivery, practical automation, and AI-assisted engineering.
              I work across CI/CD pipelines, cloud infrastructure, .NET applications, REST APIs, scripting, monitoring, support, 
              and agentic workflows to turn complex technical problems into stable, usable systems.
            </p>
          </div>
          <MobileRevealList
            className={styles.capabilityRow}
            initialVisible={3}
            showLabel="Show all capabilities"
          >
            {summaryCapabilities.map((item) => (
              <GlassCard key={item.title} className={styles.capability} hover={false}>
                <IconBox icon={<IconFor name={item.icon} />} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </GlassCard>
            ))}
          </MobileRevealList>
        </HudPanel>
      </Container>
    </section>
  );
}

function ExpertiseGrid() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>Tech Stack & Expertise</span>
            <h2>Systems, Automation, Cloud, and Quality</h2>
          </div>
        </div>
        <MobileRevealList
          className={styles.expertiseGrid}
          initialVisible={4}
          showLabel="Show all expertise"
        >
          {portfolioExpertise.map((group, index) => (
            <GlassCard
              key={group.title}
              className={styles.expertiseCard}
              accent={index === 2 ? "orange" : "cyan"}
            >
              <IconBox
                icon={<IconFor name={group.icon} />}
                accent={index === 2 ? "orange" : "cyan"}
              />
              <h3>{group.title}</h3>
              <MobileRevealList
                className={styles.tagList}
                initialVisible={8}
                showLabel="Show all tools"
              >
                {group.items.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </MobileRevealList>
            </GlassCard>
          ))}
        </MobileRevealList>
      </Container>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>Professional Experience</span>
            <h2>Career Progression</h2>
          </div>
        </div>
        <MobileRevealList
          className={styles.timeline}
          initialVisible={2}
          showLabel="Show earlier experience"
        >
          {experienceEntries.map((entry) => (
            <div className={styles.experienceRow} key={`${entry.period}-${entry.company}`}>
              <div className={styles.period}>{entry.period}</div>
                <GlassCard className={styles.experienceCard} hover={false}>
                  <div>
                    <span className={styles.company}>
                      {entry.company}
                      {"division" in entry && entry.division ? ` · ${entry.division}` : ""}
                    </span>
                    <h3>{entry.role}</h3>
                    <p>{entry.summary}</p>
                    {"phases" in entry && entry.phases ? (
                      <div className={styles.phaseGrid}>
                        {entry.phases.map((phase) => (
                          <div className={styles.phaseCard} key={phase.title}>
                            <span>{phase.period}</span>
                            <h4>{phase.title}</h4>
                            <p>{phase.summary}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <div className={styles.tagList}>
                    {entry.tags.map((tag) => (
                    <TechBadge key={tag}>{tag}</TechBadge>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </MobileRevealList>
      </Container>
    </section>
  );
}

function CertificationsGrid() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>Certifications & Training</span>
            <h2>Verified Learning Track</h2>
          </div>
        </div>
        <MobileRevealList
          className={styles.certGrid}
          initialVisible={3}
          showLabel="Show all certifications"
        >
          {certifications.map((cert, index) => (
            <GlassCard
              key={`${cert.issuer}-${cert.title}`}
              className={styles.certCard}
              accent={index === 3 ? "orange" : "cyan"}
            >
              <IconBox
                icon={<ShieldCheck size={25} />}
                accent={index === 3 ? "orange" : "cyan"}
              />
              <span className={styles.smallLabel}>{cert.issuer}</span>
              <h3>{cert.title}</h3>
              <p>{cert.detail}</p>
            </GlassCard>
          ))}
        </MobileRevealList>
      </Container>
    </section>
  );
}

function PortfolioProjects() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>Selected Projects</span>
            <h2>Practical Delivery Examples</h2>
          </div>
        </div>
        <MobileRevealList
          className={styles.projectGrid}
          initialVisible={2}
          showLabel="Show all projects"
        >
          {portfolioProjects.map((project, index) => (
            <GlassCard
              key={project.title}
              className={styles.projectCard}
              accent={index === 3 ? "orange" : "cyan"}
            >
              <div className={styles.projectVisual}>
                <span>{project.title.slice(0, 2).toUpperCase()}</span>
              </div>
              <div className={styles.tagList}>
                {project.tags.map((tag) => (
                  <TechBadge key={tag} tone={tag === "Automation" ? "orange" : "cyan"}>
                    {tag}
                  </TechBadge>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link className={styles.link} href="/projects">
                {project.cta} <ArrowRight size={16} />
              </Link>
            </GlassCard>
          ))}
        </MobileRevealList>
      </Container>
    </section>
  );
}

function PortfolioCTA() {
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
          <div className={styles.ctaCopy}>
            <h2>
              Let&apos;s Build, Automate & Deploy <span className={styles.cyan}>Impact.</span>
            </h2>
            <p className={styles.copy}>
              Open to technical collaborations, subcontracting, and consulting
              engagements. Have a project or need an expert? Let&apos;s connect.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <GlowButton href="/contact">Let&apos;s Work Together</GlowButton>
            <GlowButton href="https://wa.me/923082310366" variant="accent" icon={<MessageCircle size={17} />}>
              Chat on WhatsApp
            </GlowButton>
          </div>
        </HudPanel>
      </Container>
    </section>
  );
}
