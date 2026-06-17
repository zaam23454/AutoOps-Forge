import clsx from "clsx";
import styles from "./IconBox.module.css";

type IconBoxProps = {
  icon: React.ReactNode;
  accent?: "cyan" | "orange" | "green";
  className?: string;
};

export function IconBox({ icon, accent = "cyan", className }: IconBoxProps) {
  return <span className={clsx(styles.box, styles[accent], className)}>{icon}</span>;
}
