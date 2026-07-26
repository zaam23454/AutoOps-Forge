import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";
import { contactDetails, navigationItems } from "@/data/navigation";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.brand} aria-label="AutoOps Forge home">
            <span className={styles.logoMark} aria-hidden="true">
              <Image src="/brand/autoops-forge-mark.png" alt="" fill sizes="62px" />
            </span>
            <span className={styles.brandText}>
              <strong>AutoOps Forge</strong>
              <small>Develop. Automate. Deploy.</small>
            </span>
          </Link>
          <p>
            We build custom software, automate workflows, and deliver impact with
            DevOps-backed engineering.
          </p>
        </div>

        <div>
          <h2>Menu</h2>
          <nav className={styles.linkGrid} aria-label="Footer navigation">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2>Get in Touch</h2>
          <ul className={styles.contactList}>
            <li>
              <Mail size={16} />
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </li>
            <li>
              <Phone size={16} />
              <span>{contactDetails.whatsapp}</span>
            </li>
            <li>
              <Linkedin size={16} />
              <span>{contactDetails.linkedin}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2>Follow Us</h2>
          <a className={styles.socialLink} href="https://www.linkedin.com/in/maaz-khalid">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>(c) 2025 AutoOps Forge. All rights reserved.</span>
        <span>Privacy Policy | Terms of Service</span>
      </div>
    </footer>
  );
}
