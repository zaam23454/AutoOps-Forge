import clsx from "clsx";
import styles from "./HudPanel.module.css";

type HudPanelProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export function HudPanel({ children, title, className }: HudPanelProps) {
  return (
    <section className={clsx(styles.panel, className)}>
      {title ? <div className={styles.title}>{title}</div> : null}
      {children}
    </section>
  );
}
