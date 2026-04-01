import { DEFAULT_MODEL_CATEGORY } from "@/data/models.constants";
import { getVisibleModels } from "./get-visible-models";

export function useModelCatalogState() {
  const visibleModels = getVisibleModels(DEFAULT_MODEL_CATEGORY);

  return {
    activeCategory: DEFAULT_MODEL_CATEGORY,
    visibleModels
  };
}
