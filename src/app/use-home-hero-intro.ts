import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const HOME_HERO_INTRO_DELAY_MS = 1100;

export function useHomeHeroIntro() {
  const shouldReduceMotion = useReducedMotion();
  const [isHeroIntroComplete, setIsHeroIntroComplete] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsHeroIntroComplete(true);

      return;
    }

    const timerId = window.setTimeout(() => {
      setIsHeroIntroComplete(true);
    }, HOME_HERO_INTRO_DELAY_MS);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [shouldReduceMotion]);

  return isHeroIntroComplete;
}
