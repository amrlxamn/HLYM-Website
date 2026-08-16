import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/data/hero-slides.constants";

export const HERO_AUTO_ADVANCE_MS = 12000;

export function useHeroCarouselState() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = HERO_SLIDES[currentSlideIndex];

  useEffect(() => {
    if (HERO_SLIDES.length <= 1) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setCurrentSlideIndex((currentIndex) => {
        return (currentIndex + 1) % HERO_SLIDES.length;
      });
    }, HERO_AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  return {
    currentSlide,
    currentSlideIndex,
    setCurrentSlideIndex
  };
}
