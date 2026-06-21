import Image from "next/image";
import Link from "next/link";
import { Container } from "@mui/material";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Code2,
  FileText,
  LayoutDashboard,
  Linkedin,
  Mail,
  MessageCircle,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Users,
  Wrench
} from "lucide-react";
import { ContactForm } from "./ContactForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { HudPanel } from "@/components/ui/HudPanel";
import { IconBox } from "@/components/ui/IconBox";
import { TechBadge } from "@/components/ui/TechBadge";
import { clientExpectations, deliveryPrinciples, processSteps } from "@/data/process";
import { contactCards, reassuranceCards } from "@/data/contactOptions";
import styles from "./Prompt5Pages.module.css";

const icons = {
  calendar: CalendarDays,
  clock: Clock,
  code: Code2,
  file: FileText,
  layout: LayoutDashboard,
  linkedin: Linkedin,
  mail: Mail,
  message: MessageCircle,
  rocket: Rocket,
  search: Search,
  settings: Settings,
  shield: ShieldCheck,
  tool: Wrench,
  users: Users,
  whatsapp: MessageCircle
};

function iconFor(name: string) {
  return icons[name as keyof typeof icons] ?? Settings;
}

export function PageHero({
  eyebrow,
  title,
  text,
  children
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  children?: React.ReactNode;
}) {
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

export function ProcessPageContent() {
  return (
    <div className={styles.page}>
      <PageHero
        eyebrow="Process"
        title={
          <>
            How We Build,
            <br />
            Automate & <span className={styles.cyan}>Deploy.</span>
          </>
        }
        text="A clear, practical delivery process that helps us move from requirements to real working systems with less confusion, less risk, and better outcomes."
      >
        <div className={styles.actions}>
          <GlowButton href="/contact">Start a Project</GlowButton>
          <GlowButton href="/contact" variant="secondary">Let&apos;s Talk</GlowButton>
        </div>
      </PageHero>
      <ProcessTimeline />
      <DeliveryPrinciples />
      <ClientExpectations />
      <ProcessCTA />
    </div>
  );
}

function ProcessTimeline() {
  const stepIcons = [Search, LayoutDashboard, Code2, Settings, Rocket, MessageCircle];
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>Delivery Path</span>
            <h2>Six Clear Stages</h2>
          </div>
        </div>
        <div className={styles.timeline}>
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] ?? CheckCircle2;
            return (
              <GlassCard key={step.title} className={styles.stepCard} accent={index === 4 ? "orange" : "cyan"}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <IconBox icon={<Icon size={26} />} accent={index === 4 ? "orange" : "cyan"} />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function DeliveryPrinciples() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel title="How We Work">
          <div className={styles.principleGrid}>
            {deliveryPrinciples.map((principle) => {
              const Icon = iconFor(principle.icon);
              return (
                <GlassCard key={principle.title} className={styles.principleCard} accent="orange">
                  <IconBox icon={<Icon size={25} />} accent="orange" />
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </HudPanel>
      </Container>
    </section>
  );
}

function ClientExpectations() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel title="What Clients Can Expect">
          <div className={styles.expectGrid}>
            {clientExpectations.map((item) => (
              <GlassCard key={item} className={styles.expectCard} hover={false}>
                <IconBox icon={<CheckCircle2 size={24} />} />
                <h3>{item}</h3>
              </GlassCard>
            ))}
          </div>
        </HudPanel>
      </Container>
    </section>
  );
}

function ProcessCTA() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel className={styles.ctaPanel}>
          <Image src="/brand/autoops-forge-mark.png" alt="" width={120} height={92} className={styles.ctaLogo} />
          <div>
            <h2 className={styles.title}>Ready to Move from Idea to Execution?</h2>
            <p className={styles.copy}>
              Whether you need software, automation, DevOps delivery, or technical
              problem-solving, AutoOps Forge follows a structured process built for real outcomes.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <GlowButton href="/contact">Start a Project</GlowButton>
            <GlowButton href="/contact" variant="secondary">Contact Us</GlowButton>
          </div>
        </HudPanel>
      </Container>
    </section>
  );
}

export function ContactPageContent() {
  return (
    <div className={styles.page}>
      <PageHero
        eyebrow="Contact AutoOps Forge"
        title={
          <>
            Let&apos;s Build Your
            <br />
            Next <span className={styles.cyan}>Solution</span>
          </>
        }
        text="Whether you need a website, custom system, automation, deployment help, or technical troubleshooting - AutoOps Forge is the right place to start."
      />
      <ContactMain />
      <TrustCards />
      <AlternativeMethods />
      <ContactBottomCTA />
    </div>
  );
}

function ContactMain() {
  return (
    <section className={styles.section} id="contact-form">
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.contactGrid}>
          <HudPanel title="Tell Us About Your Project">
            <p className={styles.copy}>Share your requirements and we&apos;ll get back within 24 hours.</p>
            <ContactForm />
          </HudPanel>
          <ContactInfoPanel />
        </div>
      </Container>
    </section>
  );
}

function ContactInfoPanel() {
  return (
    <HudPanel title="Contact Information">
      <div className={styles.infoStack}>
        {contactCards.map((card) => {
          const Icon = iconFor(card.icon);
          return (
            <GlassCard key={card.label} className={styles.infoCard} hover={false}>
              <IconBox icon={<Icon size={25} />} accent={card.icon === "whatsapp" ? "green" : "cyan"} />
              <div>
                <span className={styles.smallLabel}>{card.label}</span>
                <h3><a href={card.href}>{card.value}</a></h3>
              </div>
            </GlassCard>
          );
        })}
        <GlassCard className={styles.leadFlow} accent="cyan" hover={false}>
          <span className={styles.smallLabel}>Smart Lead Management</span>
          <p>All leads are securely captured with instant email notification support.</p>
          <div className={styles.flowRow}>
            <TechBadge tone="cyan">Google Sheets Captured</TechBadge>
            <ArrowRight size={16} />
            <TechBadge tone="orange">Email Alerts Instant</TechBadge>
          </div>
        </GlassCard>
      </div>
    </HudPanel>
  );
}

function TrustCards() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel title="We Make It Easy & Reliable">
          <div className={styles.trustGrid}>
            {reassuranceCards.map((card) => {
              const Icon = iconFor(card.icon);
              return (
                <GlassCard key={card.title} className={styles.trustCard}>
                  <IconBox icon={<Icon size={26} />} />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </HudPanel>
      </Container>
    </section>
  );
}

function AlternativeMethods() {
  const methods = [
    {
      title: "Chat on WhatsApp",
      text: "Get instant help and discuss your project in real-time.",
      href: "https://wa.me/923082310366",
      action: "Start Chat",
      icon: MessageCircle
    },
    {
      title: "Send an Email",
      text: "Drop us an email and we'll get back to you shortly.",
      href: "mailto:maazkhalid308@gmail.com",
      action: "Send Email",
      icon: Mail
    },
    {
      title: "Schedule a Discussion",
      text: "Book a time that suits you for a detailed discussion.",
      href: "/contact",
      action: "Schedule Now",
      icon: CalendarDays
    }
  ];

  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>Prefer an Alternative?</span>
            <h2>Choose the way that works best for you.</h2>
          </div>
        </div>
        <div className={styles.altGrid}>
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <GlassCard key={method.title} className={styles.altCard} accent={index === 0 ? "orange" : "cyan"}>
                <IconBox icon={<Icon size={28} />} accent={index === 0 ? "orange" : "cyan"} />
                <h3>{method.title}</h3>
                <p>{method.text}</p>
                <Link href={method.href} className={styles.link} prefetch={false}>
                  {method.action} <ArrowRight size={16} />
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ContactBottomCTA() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel className={styles.ctaPanel}>
          <Image src="/brand/autoops-forge-mark.png" alt="" width={120} height={92} className={styles.ctaLogo} />
          <div>
            <h2 className={styles.title}>Develop. Automate. Deploy.</h2>
            <p className={styles.copy}>Let&apos;s turn your ideas into powerful, real-world solutions.</p>
          </div>
          <div className={styles.ctaActions}>
            <GlowButton href="#contact-form">Start Your Project</GlowButton>
            <GlowButton href="https://wa.me/923082310366" variant="accent" icon={<MessageCircle size={17} />}>
              Chat on WhatsApp
            </GlowButton>
          </div>
        </HudPanel>
      </Container>
    </section>
  );
}
