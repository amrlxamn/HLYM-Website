import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DesktopModelScroller } from "./desktop-model-scroller";
import { useModelCatalogState } from "./use-model-catalog-state";
import { ModelsSectionRoot } from "./models.styles";

export function ModelsSection() {
  const modelsCopy = SITE_COPY.models;
  const { activeCategory, visibleModels } = useModelCatalogState();

  return (
    <ModelsSectionRoot id="models" aria-label={toSentenceCase(modelsCopy.ariaLabel)}>
      <DesktopModelScroller activeCategory={activeCategory} models={visibleModels} />
    </ModelsSectionRoot>
  );
}
