"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Box, Container, Drawer, Stack } from "@mui/material";
import { Menu, X } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { navigationItems } from "@/data/navigation";
import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = navigationItems.map((item) => {
    const active = pathname === item.href;

    return (
      <Link
        key={item.href}
        href={item.href}
        prefetch={false}
        className={active ? styles.activeLink : styles.navLink}
        onClick={() => setOpen(false)}
      >
        {item.label}
      </Link>
    );
  });

  return (
    <header className={styles.header}>
      <Container maxWidth={false} className={styles.container}>
        <Link href="/" className={styles.brand} aria-label="AutoOps Forge home">
          <Image
            src="/brand/autoops-forge-wide-wordmark.png"
            alt="AutoOps Forge"
            width={210}
            height={64}
            priority
            className={styles.brandLogo}
          />
        </Link>

        <Box component="nav" className={styles.desktopNav} aria-label="Primary navigation">
          {navLinks}
        </Box>

        <Stack direction="row" alignItems="center" gap={1.5}>
          <GlowButton href="/contact" variant="secondary" className={styles.desktopCta}>
            Start a Project
          </GlowButton>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </Stack>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ className: styles.drawerPaper }}
      >
        <div className={styles.drawerHead}>
          <span className={styles.drawerTitle}>AutoOps Forge</span>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          >
            <X size={21} />
          </button>
        </div>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks}
        </nav>
        <GlowButton href="/contact" variant="primary" onClick={() => setOpen(false)}>
          Start a Project
        </GlowButton>
      </Drawer>
    </header>
  );
}
