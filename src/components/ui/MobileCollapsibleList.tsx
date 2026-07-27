"use client";

import { useId, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./MobileRevealList.module.css";

type MobileCollapsibleListProps = {
  items: readonly string[];
  className?: string;
  initialVisible?: number;
  showLabel?: string;
  hideLabel?: string;
};

export function MobileCollapsibleList({
  items,
  className,
  initialVisible = 3,
  showLabel = "Show all details",
  hideLabel = "Show fewer details"
}: MobileCollapsibleListProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const hasHiddenItems = items.length > initialVisible;

  return (
    <div className={styles.reveal}>
      <ul className={className} id={contentId}>
        {items.map((item, index) => (
          <li
            data-mobile-hidden={!expanded && index >= initialVisible ? "true" : undefined}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
      {hasHiddenItems ? (
        <button
          type="button"
          className={styles.toggle}
          aria-controls={contentId}
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          <span>{expanded ? hideLabel : showLabel}</span>
          {expanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
        </button>
      ) : null}
    </div>
  );
}
