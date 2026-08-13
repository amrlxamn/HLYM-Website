import { animate, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { ModelCounterDigit } from "./model-counter-digit";
import { ModelTrendValueRoot } from "./model-trend-value.styles";

type ModelTrendValueProps = {
  value: string;
};

export function ModelTrendValue({ value }: ModelTrendValueProps) {
  const reduceMotion = useReducedMotion();
  const match = value.toUpperCase().match(/^(\d+(?:\.\d+)?)(.*)$/);
  const numberText = match?.[1] ?? value;
  const suffix = match?.[2] ?? "";
  const number = Number(numberText);
  const animatedValue = useMotionValue(Number.isFinite(number) ? number : 0);
  const decimalIndex = numberText.indexOf(".");

  useEffect(() => {
    if (reduceMotion) {
      animatedValue.set(number);
      return;
    }

    const controls = animate(animatedValue, number, {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1]
    });

    return () => controls.stop();
  }, [animatedValue, number, reduceMotion]);

  return (
    <ModelTrendValueRoot aria-label={value}>
      {Array.from(numberText).map((character, index) => {
        if (character === ".") {
          return (
            <span aria-hidden="true" data-counter-static="" key={index}>
              {character}
            </span>
          );
        }

        const exponent =
          decimalIndex === -1 || index < decimalIndex
            ? (decimalIndex === -1 ? numberText.length : decimalIndex) - index - 1
            : decimalIndex - index;

        return (
          <ModelCounterDigit animatedValue={animatedValue} key={index} place={10 ** exponent} />
        );
      })}
      {suffix && (
        <span aria-hidden="true" data-counter-static="">
          {suffix}
        </span>
      )}
    </ModelTrendValueRoot>
  );
}
