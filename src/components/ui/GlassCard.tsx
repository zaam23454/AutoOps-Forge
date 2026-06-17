import clsx from "clsx";
import styles from "./GlassCard.module.css";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: "cyan" | "orange" | "neutral";
};

export function GlassCard({
  children,
  className,
  hover = true,
  accent = "neutral"
}: GlassCardProps) {
  return (
    <article
      className={clsx(
        styles.card,
        styles[accent],
        hover && styles.hover,
        className
      )}
    >
      {children}
    </article>
  );
}
