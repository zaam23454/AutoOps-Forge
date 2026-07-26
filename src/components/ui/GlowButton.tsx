import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import styles from "./GlowButton.module.css";

type GlowButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function GlowButton({
  children,
  variant = "primary",
  href,
  icon,
  onClick,
  className,
  type = "button",
  ariaLabel
}: GlowButtonProps) {
  const isInternalPageLink =
    href?.startsWith("/") &&
    !href.startsWith("/docs/") &&
    !/\.[a-z0-9]+(?:[?#]|$)/i.test(href);

  const content = (
    <>
      <span>{children}</span>
      <span className={styles.icon}>{icon ?? <ArrowRight size={17} />}</span>
    </>
  );

  const classes = clsx(styles.button, styles[variant], className);

  if (href) {
    if (!isInternalPageLink) {
      return (
        <a className={classes} href={href} aria-label={ariaLabel} onClick={onClick}>
          {content}
        </a>
      );
    }

    return (
      <Link className={classes} href={href} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
