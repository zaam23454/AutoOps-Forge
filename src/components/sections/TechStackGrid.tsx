import { Container } from "@mui/material";
import { HudPanel } from "@/components/ui/HudPanel";
import { TechBadge } from "@/components/ui/TechBadge";
import { techStackGroups } from "@/data/techStack";
import styles from "./HomeSections.module.css";

export function TechStackGrid() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.sectionGrid}>
          <header>
            <span className={styles.sectionEyebrow}>Tech Stack</span>
            <h2 className={styles.sectionTitle}>Tools We Trust</h2>
          </header>

          <HudPanel>
            <div className={styles.techGrid}>
              {techStackGroups.map((group, index) => (
                <div className={styles.techGroup} key={group.category}>
                  <h3>{group.category}</h3>
                  <div className={styles.badgeWrap}>
                    {group.items.map((item) => (
                      <TechBadge key={item} tone={index === 2 ? "orange" : "cyan"}>
                        {item}
                      </TechBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </HudPanel>
        </div>
      </Container>
    </section>
  );
}
