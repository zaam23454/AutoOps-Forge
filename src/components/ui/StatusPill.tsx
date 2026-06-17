import clsx from "clsx";
import styles from "./StatusPill.module.css";

type StatusPillProps = {
  children: React.ReactNode;
  state?: "live" | "production" | "operational" | "processing";
};

export function StatusPill({ children, state = "operational" }: StatusPillProps) {
  return (
    <span className={clsx(styles.pill, styles[state])}>
      <span className={styles.dot} />
      {children}
    </span>
  );
}
