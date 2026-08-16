import { Button } from "@/components/ui/button/button";
import { SITE_COPY } from "@/data/site-copy.constants";
import type { ModelCard } from "@/data/site-content.types";
import { ModelTrendValue } from "./model-trend-value";
import {
  ModelCategory,
  ModelCategoryAccent,
  ModelCopy,
  ModelDivider,
  ModelName,
  ModelNumber,
  ModelPriceRow,
  ModelSpecGroup,
  ModelSpecs
} from "./model-card.styles";

type ModelInformationProps = {
  index: number;
  model: ModelCard;
};

export function ModelInformation({ index, model }: ModelInformationProps) {
  const modelsCopy = SITE_COPY.models;

  return (
    <ModelCopy $compact={Boolean(model.compact)}>
      <ModelNumber>
        <ModelTrendValue value={String(index + 1).padStart(2, "0")} />
      </ModelNumber>
      <ModelCategory>
        <ModelCategoryAccent />
        <p>{model.category}</p>
      </ModelCategory>
      <ModelName>{model.name}</ModelName>
      <ModelSpecs>
        <ModelSpecGroup>
          <ModelTrendValue value={model.engine} />
          <span>{modelsCopy.specLabels.engine}</span>
        </ModelSpecGroup>
        <ModelDivider />
        <ModelSpecGroup>
          <ModelTrendValue value={model.power} />
          <span>{modelsCopy.specLabels.power}</span>
        </ModelSpecGroup>
        <ModelDivider />
        <ModelSpecGroup>
          <ModelTrendValue value={model.weight} />
          <span>{modelsCopy.specLabels.weight}</span>
        </ModelSpecGroup>
      </ModelSpecs>
      <ModelPriceRow>
        <Button onClick={() => window.location.assign(model.detailHref)} size="sm" variant="light">
          {modelsCopy.detailsLabel}
        </Button>
      </ModelPriceRow>
    </ModelCopy>
  );
}
