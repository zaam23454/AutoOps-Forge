"use client";

import { Container } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { trustIndicators } from "./homeData";
import styles from "./HomeSections.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroVisual} aria-hidden="true">
        <Image
          src="/brand/main-hero-image.png"
          alt="AutoOps Forge AOF emblem glowing inside a futuristic robotics lab"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
      </div>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.heroGrid}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p className={styles.eyebrow} variants={fadeUp}>
              Software & Automation Studio
            </motion.p>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              WE BUILD SOFTWARE.
              <br />
              WE AUTOMATE WORK.
              <br />
              WE <span className={styles.cyanWord}>DEPLOY</span> IMPACT.
            </motion.h1>
            <motion.p className={styles.heroText} variants={fadeUp}>
              Custom software, automation-first engineering, DevOps-backed delivery,
              and agentic solutions for modern teams that move fast and scale smarter.
            </motion.p>

            <motion.div className={styles.heroActions} variants={fadeUp}>
              <GlowButton href="/contact">Start a Project</GlowButton>
              <GlowButton href="/projects" variant="secondary">
                View Our Work
              </GlowButton>
            </motion.div>

            <motion.div className={styles.trustRow} variants={fadeUp}>
              {trustIndicators.map((item) => {
                const Icon = item.icon;
                return (
                  <span className={styles.trustItem} key={item.label}>
                    <Icon size={18} />
                    {item.label}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>

          <div className={styles.heroSpacer} aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
