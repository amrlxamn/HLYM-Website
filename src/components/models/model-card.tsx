import type { ModelCard as ModelCardType } from "@/data/site-content.types";
import { ModelCardRoot, ModelLeftAccent } from "./model-card.styles";
import { ModelImage } from "./model-image";
import { ModelInformation } from "./model-information";

type ModelCardProps = {
  eager?: boolean;
  index: number;
  model: ModelCardType;
};

export function ModelCard({ eager = false, index, model }: ModelCardProps) {
  return (
    <ModelCardRoot>
      <ModelInformation index={index} model={model} />
      <ModelImage eager={eager} model={model} />
      <ModelLeftAccent />
    </ModelCardRoot>
  );
}
