import clsx from "clsx";
import styles from "./TechBadge.module.css";

type TechBadgeProps = {
  children: React.ReactNode;
  tone?: "cyan" | "orange" | "neutral";
};

export function TechBadge({ children, tone = "neutral" }: TechBadgeProps) {
  return <span className={clsx(styles.badge, styles[tone])}>{children}</span>;
}
