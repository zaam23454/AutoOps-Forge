import { Container } from "@mui/material";
import { ArrowRight, CheckCircle2, Cpu, ListChecks, Radar, Wrench } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { HudPanel } from "@/components/ui/HudPanel";
import { IconBox } from "@/components/ui/IconBox";
import { TechBadge } from "@/components/ui/TechBadge";
import type { ServiceDetail } from "@/data/services";
import { PageHero } from "@/components/sections/Prompt3Sections";
import styles from "@/components/sections/Prompt3Pages.module.css";

type ServiceDetailTemplateProps = {
  service: ServiceDetail;
};

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  return (
    <div className={styles.page}>
      <PageHero eyebrow="Service" title={service.title} text={service.heroText}>
        <div className={styles.heroActions}>
          <GlowButton href="/contact">Start a Project</GlowButton>
          <GlowButton href="/services" variant="secondary">
            Back to Services
          </GlowButton>
        </div>
      </PageHero>

      <section className={styles.section}>
        <Container maxWidth={false} className={styles.container}>
          <div className={styles.detailGrid}>
            <HudPanel title="Problems We Solve">
              <ul className={styles.checkList}>
                {service.problems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </HudPanel>
            <HudPanel title="What We Provide">
              <ul className={styles.checkList}>
                {service.provides.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </HudPanel>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container maxWidth={false} className={styles.container}>
          <div className={styles.detailColumns}>
            <GlassCard accent="cyan" className={styles.serviceCard}>
              <IconBox icon={<Cpu size={28} />} />
              <h3>Technologies & Tools</h3>
              <div className={styles.techRow}>
                {service.tools.map((tool) => (
                  <TechBadge key={tool}>{tool}</TechBadge>
                ))}
              </div>
            </GlassCard>

            <GlassCard accent="orange" className={styles.serviceCard}>
              <IconBox icon={<ListChecks size={28} />} accent="orange" />
              <h3>Example Use Cases</h3>
              <ul className={styles.bulletList}>
                {service.useCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard accent="cyan" className={styles.serviceCard}>
              <IconBox icon={<Radar size={28} />} />
              <h3>Delivery Process</h3>
              <ul className={styles.bulletList}>
                <li>Diagnose your current workflow and technical blockers.</li>
                <li>Design the simplest reliable architecture and delivery path.</li>
                <li>Build, automate, test, deploy, and hand over clearly.</li>
              </ul>
            </GlassCard>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container maxWidth={false} className={styles.container}>
          <HudPanel className={styles.ctaPanel}>
            <IconBox icon={<Wrench size={32} />} accent="orange" />
            <div>
              <h2 className={styles.detailTitle}>{service.ctaHeading}</h2>
              <p className={styles.copy}>
                Tell us what is slowing you down. We&apos;ll help you choose the
                right technical path and turn it into a reliable delivered system.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <GlowButton href="/contact" icon={<ArrowRight size={17} />}>
                Start a Project
              </GlowButton>
              <GlowButton href="/services" variant="secondary" icon={<CheckCircle2 size={17} />}>
                View All Services
              </GlowButton>
            </div>
          </HudPanel>
        </Container>
      </section>
    </div>
  );
}
