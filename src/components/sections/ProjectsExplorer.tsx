"use client";

import { type ReactNode, useId, useState } from "react";
import { Container } from "@mui/material";
import { HudPanel } from "@/components/ui/HudPanel";
import styles from "./Prompt3Pages.module.css";

type FilteredProjectItem = {
  id: string;
  categories: readonly string[];
  content: ReactNode;
};

type ProjectsExplorerProps = {
  categories: readonly string[];
  featured: ReactNode;
  featuredCategories: readonly string[];
  workflow: ReactNode;
  items: readonly FilteredProjectItem[];
};

export function ProjectsExplorer({
  categories,
  featured,
  featuredCategories,
  workflow,
  items
}: ProjectsExplorerProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "All Projects");
  const resultsId = useId();
  const showAll = activeCategory === "All Projects";
  const showFeatured = showAll || featuredCategories.includes(activeCategory);
  const filteredItems = showAll
    ? items
    : items.filter((item) => item.categories.includes(activeCategory));

  return (
    <>
      <section className={styles.section}>
        <Container maxWidth={false} className={styles.container}>
          <HudPanel>
            <div className={styles.tabs} aria-label="Project categories">
              {categories.map((category) => {
                const active = category === activeCategory;
                return (
                  <button
                    className={`${styles.tab} ${active ? styles.activeTab : ""}`}
                    key={category}
                    type="button"
                    aria-controls={resultsId}
                    aria-pressed={active}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            <div id={resultsId} aria-live="polite">
              {showFeatured ? (
                featured
              ) : (
                <p className={styles.filterSummary}>
                  Showing {filteredItems.length} {activeCategory.toLowerCase()} project
                  {filteredItems.length === 1 ? "" : "s"} below.
                </p>
              )}
            </div>
          </HudPanel>
        </Container>
      </section>

      {showFeatured ? workflow : null}

      <section className={styles.section}>
        <Container maxWidth={false} className={styles.container}>
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.eyebrow}>Filtered Work</span>
              <h2>
                {showAll ? "Selected Capability Examples" : `${activeCategory} Examples`}
              </h2>
            </div>
          </div>
          <div className={styles.moreGrid}>
            {filteredItems.map((item) => (
              <div className={styles.filteredItem} key={item.id}>
                {item.content}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
