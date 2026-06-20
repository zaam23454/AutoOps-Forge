import { ArrowRight } from "lucide-react";
import { Container } from "@mui/material";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { IconBox } from "@/components/ui/IconBox";
import { TechBadge } from "@/components/ui/TechBadge";
import { featuredProject } from "@/data/projects";
import { projectFeatureIconMap } from "./homeData";
import styles from "./HomeSections.module.css";

export function FeaturedProject() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.projectGrid}>
          <div className={styles.projectIntro}>
            <span className={styles.sectionEyebrow}>Featured Project</span>
            <h3>{featuredProject.name}</h3>
            <p>{featuredProject.description}</p>
            <p>{featuredProject.summary}</p>
            <GlowButton href={featuredProject.href} variant="secondary" icon={<ArrowRight size={17} />}>
              View Case Study
            </GlowButton>
          </div>

          <div>
            <div className={styles.projectVisual}>
              <strong>
                Project Highlight
                <br />
                Built to Scale. Engineered to Perform.
              </strong>
            </div>
            <GlassCard className={styles.techPanel} accent="orange" hover={false}>
              <h4>Tech Stack</h4>
              <div className={styles.badgeWrap}>
                {featuredProject.stack.map((item) => (
                  <TechBadge key={item} tone={item.includes("Google") ? "orange" : "cyan"}>
                    {item}
                  </TechBadge>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className={styles.projectDetails}>
            {featuredProject.features.map((feature, index) => {
              const Icon = projectFeatureIconMap[index];
              return (
                <div className={styles.projectFeature} key={feature.title}>
                  <IconBox icon={<Icon />} accent={index === 1 ? "orange" : "cyan"} />
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
            <GlassCard className={styles.outcomes} accent="cyan" hover={false}>
              <h4>Outcomes</h4>
              <ul>
                {featuredProject.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
