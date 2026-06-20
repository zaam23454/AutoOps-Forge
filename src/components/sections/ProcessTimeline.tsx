import { Container } from "@mui/material";
import { IconBox } from "@/components/ui/IconBox";
import { processSteps } from "@/data/process";
import { processIconMap } from "./homeData";
import styles from "./HomeSections.module.css";

export function ProcessTimeline() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <div className={styles.sectionGrid}>
          <header>
            <span className={styles.sectionEyebrow}>Deck Process</span>
            <h2 className={styles.sectionTitle}>Simple. Clear. Effective.</h2>
          </header>

          <div className={styles.timeline}>
            {processSteps.map((step, index) => {
              const Icon = processIconMap[step.icon as keyof typeof processIconMap];
              return (
                <div className={styles.step} key={step.title}>
                  <IconBox icon={<Icon />} accent={index === 4 ? "orange" : "cyan"} />
                  <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
