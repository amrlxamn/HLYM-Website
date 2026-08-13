import type { MotionValue } from "framer-motion";
import { ModelCounterDigitRoot } from "./model-trend-value.styles";
import { ModelCounterFigure } from "./model-counter-figure";

type ModelCounterDigitProps = {
  animatedValue: MotionValue<number>;
  place: number;
};

export function ModelCounterDigit({ animatedValue, place }: ModelCounterDigitProps) {
  return (
    <ModelCounterDigitRoot aria-hidden="true" data-counter-digit="">
      {Array.from({ length: 10 }, (_, digit) => (
        <ModelCounterFigure animatedValue={animatedValue} digit={digit} key={digit} place={place} />
      ))}
    </ModelCounterDigitRoot>
  );
}
