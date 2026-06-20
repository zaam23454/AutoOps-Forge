import { MessageCircle } from "lucide-react";
import { Container } from "@mui/material";
import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";
import { HudPanel } from "@/components/ui/HudPanel";
import styles from "./HomeSections.module.css";

export function FinalCTA() {
  return (
    <Container maxWidth={false} className={styles.container}>
      <HudPanel className={styles.finalCta}>
        <div className={styles.ctaGrid}>
          <div className={styles.ctaMark}>
            <Image src="/brand/autoops-forge-mark.png" alt="" width={86} height={66} />
          </div>
          <div className={styles.ctaCopy}>
            <h2>Ready to Build, Automate & Deploy Impact?</h2>
            <p>
              Whether you need a website, custom system, automation, deployment
              help, or technical troubleshooting, AutoOps Forge is the right place
              to start.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <GlowButton href="/contact">Start a Project</GlowButton>
            <GlowButton
              href="https://wa.me/923082310366"
              variant="accent"
              icon={<MessageCircle size={17} />}
            >
              Chat on WhatsApp
            </GlowButton>
          </div>
        </div>
      </HudPanel>
    </Container>
  );
}
