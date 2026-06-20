import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@mui/material";
import { GlassCard } from "@/components/ui/GlassCard";
import { IconBox } from "@/components/ui/IconBox";
import { servicePreviews } from "@/data/services";
import { serviceIconMap } from "./homeData";
import styles from "./HomeSections.module.css";

export function ServicesPreview() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.sectionGrid}>
          <header>
            <span className={styles.sectionEyebrow}>What We Do</span>
            <h2 className={styles.sectionTitle}>Services</h2>
          </header>

          <div className={styles.servicesGrid}>
            {servicePreviews.map((service, index) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <GlassCard
                  key={service.title}
                  accent={index === 2 ? "orange" : "cyan"}
                  className={styles.serviceCard}
                >
                  <IconBox icon={<Icon />} accent={index === 2 ? "orange" : "cyan"} />
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardText}>{service.description}</p>
                  <Link className={styles.learnLink} href={service.href} prefetch={false}>
                    Learn more <ArrowRight size={16} />
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
