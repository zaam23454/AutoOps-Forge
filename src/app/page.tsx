"use client";

import { Box, Container, Grid, Stack } from "@mui/material";
import {
  Bot,
  Braces,
  CloudUpload,
  Code2,
  Gauge,
  Rocket,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { HudPanel } from "@/components/ui/HudPanel";
import { IconBox } from "@/components/ui/IconBox";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusPill } from "@/components/ui/StatusPill";
import { TechBadge } from "@/components/ui/TechBadge";
import { fadeUp, staggerContainer } from "@/lib/motion";
import styles from "./page.module.css";

const capabilityCards = [
  {
    title: "DevOps-Backed",
    body: "CI/CD, release structure, cloud deployment, monitoring, and rollback-ready delivery.",
    icon: <CloudUpload size={28} />
  },
  {
    title: "Automation First",
    body: "PowerShell, Bash, Python, API workflows, and one-click utilities for real operations.",
    icon: <Workflow size={28} />
  },
  {
    title: "Agentic Systems",
    body: "AI-assisted planning, debugging, and implementation support with a practical delivery lens.",
    icon: <Bot size={28} />
  }
];

export default function FoundationPreviewPage() {
  return (
    <PageShell>
      <section className={styles.hero}>
        <Container maxWidth={false} className={styles.container}>
          <motion.div initial={false} animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp}>
              <SectionHeader
                eyebrow="Foundation Preview"
                title={"WE BUILD SYSTEMS.\nWE AUTOMATE WORK.\nWE DEPLOY IMPACT."}
                subtitle="A restrained preview of the AutoOps Forge visual language: dark mecha-tech surfaces, cyan command-center glow, forge orange accents, and reusable UI primitives."
              />
            </motion.div>

            <motion.div className={styles.heroActions} variants={fadeUp}>
              <GlowButton href="/contact">Start a Project</GlowButton>
              <GlowButton href="/projects" variant="secondary">
                View Our Work
              </GlowButton>
              <GlowButton href="/contact" variant="accent">
                Request a Quote
              </GlowButton>
            </motion.div>

            <motion.div className={styles.signalRow} variants={fadeUp}>
              <span>
                <Braces size={18} /> DevOps-Backed
              </span>
              <span>
                <Gauge size={18} /> Automation First
              </span>
              <span>
                <ShieldCheck size={18} /> Reliable Delivery
              </span>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Container maxWidth={false} className={styles.container}>
        <HudPanel title="Core Component System">
          <Grid container spacing={2}>
            {capabilityCards.map((card, index) => (
              <Grid key={card.title} size={{ xs: 12, md: 4 }}>
                <GlassCard accent={index === 1 ? "orange" : "cyan"} className={styles.featureCard}>
                  <IconBox icon={card.icon} accent={index === 1 ? "orange" : "cyan"} />
                  <h2>{card.title}</h2>
                  <p>{card.body}</p>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </HudPanel>

        <Box className={styles.previewGrid}>
          <HudPanel title="Buttons & Badges">
            <Stack direction="row" flexWrap="wrap" gap={1.2} className={styles.buttonStack}>
              <GlowButton>Primary Button</GlowButton>
              <GlowButton variant="secondary">Outline Button</GlowButton>
              <GlowButton variant="accent">Accent Button</GlowButton>
              <GlowButton variant="ghost" icon={<Code2 size={17} />}>
                Ghost Button
              </GlowButton>
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={1} className={styles.badgeStack}>
              <TechBadge tone="cyan">Next.js</TechBadge>
              <TechBadge>TypeScript</TechBadge>
              <TechBadge tone="orange">DevOps</TechBadge>
              <StatusPill state="live">Live</StatusPill>
              <StatusPill state="production">Production</StatusPill>
              <StatusPill state="processing">Processing</StatusPill>
            </Stack>
          </HudPanel>

          <HudPanel title="Metrics">
            <div className={styles.metricsGrid}>
              <MetricCard value="50+" label="Projects Delivered" detail="Built with practical outcomes in mind." />
              <MetricCard value="24/7" label="Automation First" detail="Systems that keep moving after launch." />
              <MetricCard value="100%" label="Client Focused" detail="Clear delivery, strong handoff, reliable support." />
            </div>
          </HudPanel>
        </Box>

        <HudPanel title="Visual Direction Check" className={styles.directionPanel}>
          <div className={styles.directionContent}>
            <IconBox icon={<Rocket size={30} />} accent="orange" />
            <div>
              <h2>Foundation only, built for the approved mockups.</h2>
              <p>
                This page exists to prove the system: typography, dark layered backgrounds,
                HUD borders, glow states, responsive layout, and reusable components. The
                full homepage and content-heavy sections intentionally come later.
              </p>
            </div>
          </div>
        </HudPanel>
      </Container>
    </PageShell>
  );
}
