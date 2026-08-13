import { type MotionValue, useTransform } from "framer-motion";
import { ModelCounterFigureRoot } from "./model-trend-value.styles";

type ModelCounterFigureProps = {
  animatedValue: MotionValue<number>;
  digit: number;
  place: number;
};

export function ModelCounterFigure({ animatedValue, digit, place }: ModelCounterFigureProps) {
  const y = useTransform(animatedValue, (latest) => {
    const currentDigit = Math.floor(latest / place) % 10;
    let offset = (10 + digit - currentDigit) % 10;

    if (offset > 5) {
      offset -= 10;
    }

    return `${offset * 100}%`;
  });

  return <ModelCounterFigureRoot style={{ y }}>{digit}</ModelCounterFigureRoot>;
}
