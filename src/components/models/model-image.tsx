import type { ModelCard } from "@/data/site-content.types";
import { ProductRotationViewer } from "@/features/product-page/components/product-rotation-viewer";
import {
  ModelImage as ModelImageRoot,
  ModelRotationCue,
  ModelRotationStage
} from "./model-card.styles";
import { RotationCueIcon } from "./rotation-cue-icon";

type ModelImageProps = {
  eager?: boolean;
  model: ModelCard;
};

export function ModelImage({ eager = false, model }: ModelImageProps) {
  return (
    <ModelImageRoot>
      {model.frames ? (
        <ModelRotationStage>
          <ProductRotationViewer alt={model.alt} frames={model.frames} normalize />
          <ModelRotationCue aria-hidden="true">
            <RotationCueIcon />
            <span>DRAG TO ROTATE</span>
          </ModelRotationCue>
        </ModelRotationStage>
      ) : (
        <img loading={eager ? "eager" : "lazy"} src={model.image} alt={model.alt} />
      )}
    </ModelImageRoot>
  );
}
