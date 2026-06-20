import { Container } from "@mui/material";
import { HudPanel } from "@/components/ui/HudPanel";
import { homepageTestimonial } from "@/data/testimonials";
import styles from "./HomeSections.module.css";

export function TestimonialSection() {
  return (
    <section className={styles.section}>
      <Container maxWidth={false} className={styles.container}>
        <HudPanel title="Client Testimonial">
          <div className={styles.testimonialGrid}>
            <div>
              <div className={styles.quoteMark}>&quot;</div>
              <p className={styles.quote}>{homepageTestimonial.quote}</p>
            </div>
            <div className={styles.client}>
              <strong>{homepageTestimonial.client}</strong>
              <span>{homepageTestimonial.location}</span>
              <div className={styles.rating}>{homepageTestimonial.rating}</div>
            </div>
          </div>
        </HudPanel>
      </Container>
    </section>
  );
}
