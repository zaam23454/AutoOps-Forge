import { PageShell } from "@/components/layout/PageShell";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProblemStrip } from "@/components/sections/ProblemStrip";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TechStackGrid } from "@/components/sections/TechStackGrid";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import styles from "@/components/sections/HomeSections.module.css";

export default function HomePage() {
  return (
    <PageShell>
      <div className={styles.home}>
        <HomeHero />
        <ProblemStrip />
        <ServicesPreview />
        <FeaturedProject />
        <ProcessTimeline />
        <TechStackGrid />
        <TestimonialSection />
        <FinalCTA />
      </div>
    </PageShell>
  );
}
