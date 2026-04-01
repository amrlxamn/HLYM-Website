import { DEFAULT_MODEL_CATEGORY, MODELS, MODEL_TABS } from "@/data/models.constants";
import type { ModelCategory } from "@/data/site-content.types";

const ORDERED_MODEL_CATEGORIES = MODEL_TABS.filter((tab) => tab !== DEFAULT_MODEL_CATEGORY);

export function getVisibleModels(activeCategory: ModelCategory) {
  if (activeCategory === DEFAULT_MODEL_CATEGORY) {
    return ORDERED_MODEL_CATEGORIES.flatMap((category) =>
      MODELS.filter((model) => model.category === category)
    );
  }

  return MODELS.filter((model) => model.category === activeCategory);
}
