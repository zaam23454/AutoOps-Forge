import { Container } from "@mui/material";
import { HudPanel } from "@/components/ui/HudPanel";
import { problemItems } from "./homeData";
import styles from "./HomeSections.module.css";

export function ProblemStrip() {
  return (
    <Container maxWidth={false} className={styles.container}>
      <HudPanel className={styles.problemStrip}>
        <div className={styles.problemGrid}>
          <div className={styles.problemLead}>
            <span>Broken Systems</span>
            <strong>Slow You Down</strong>
          </div>

          {problemItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className={styles.problemItem} key={item.title}>
                <Icon size={30} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}

          <div className={styles.fixBlock}>
            <span>We&apos;re Here</span>
            <strong>To Fix That.</strong>
          </div>
        </div>
      </HudPanel>
    </Container>
  );
}
