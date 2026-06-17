import { GlassCard } from "./GlassCard";
import styles from "./MetricCard.module.css";

type MetricCardProps = {
  value: string;
  label: string;
  detail?: string;
};

export function MetricCard({ value, label, detail }: MetricCardProps) {
  return (
    <GlassCard className={styles.metric} hover={false} accent="cyan">
      <strong>{value}</strong>
      <span>{label}</span>
      {detail ? <p>{detail}</p> : null}
    </GlassCard>
  );
}
