import { MODEL_TABS } from "@/data/models.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import type { ModelCategory } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { ModelTabButton, ModelTabDivider, ModelTabRow, ModelTabsRoot } from "./model-tabs.styles";

type ModelTabsProps = {
  activeCategory: ModelCategory;
  orientation: "horizontal" | "vertical";
  scrollCategory?: Exclude<ModelCategory, "all models"> | null;
};

export function ModelTabs({ activeCategory, orientation, scrollCategory }: ModelTabsProps) {
  const modelsCopy = SITE_COPY.models;
  const highlightedCategory =
    activeCategory === "all models" && scrollCategory ? scrollCategory : activeCategory;

  return (
    <ModelTabsRoot
      $orientation={orientation}
      aria-label={toSentenceCase(modelsCopy.tabListAriaLabel)}
    >
      {MODEL_TABS.map((tab, index) => {
        const isScrollHighlighted = highlightedCategory === tab;

        return (
          <ModelTabRow $active={isScrollHighlighted} $orientation={orientation} key={tab}>
            <ModelTabButton
              $active={isScrollHighlighted}
              $orientation={orientation}
              aria-current={isScrollHighlighted ? "true" : undefined}
              disabled
              type="button"
            >
              {tab}
            </ModelTabButton>
            {index < MODEL_TABS.length - 1 && (
              <ModelTabDivider $orientation={orientation} aria-hidden="true" />
            )}
          </ModelTabRow>
        );
      })}
    </ModelTabsRoot>
  );
}
