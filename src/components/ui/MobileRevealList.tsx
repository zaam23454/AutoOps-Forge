"use client";

import { Children, isValidElement, type ReactNode, useId, useState } from "react";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./MobileRevealList.module.css";

type MobileRevealListProps = {
  children: ReactNode;
  className?: string;
  initialVisible?: number;
  showLabel?: string;
  hideLabel?: string;
};

export function MobileRevealList({
  children,
  className,
  initialVisible = 3,
  showLabel = "Show more",
  hideLabel = "Show less"
}: MobileRevealListProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const items = Children.toArray(children);
  const hasHiddenItems = items.length > initialVisible;

  return (
    <div className={styles.reveal}>
      <div className={clsx(className, styles.list)} id={contentId}>
        {items.map((item, index) => {
          const itemKey = isValidElement(item) && item.key ? item.key : `static-item-${index}`;

          return (
            <div
              className={styles.listItem}
              data-mobile-hidden={!expanded && index >= initialVisible ? "true" : undefined}
              key={itemKey}
            >
              {item}
            </div>
          );
        })}
      </div>
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
