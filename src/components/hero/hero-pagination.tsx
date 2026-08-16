import { useEffect, useRef, useState } from "react";
import { HERO_SLIDES } from "@/data/hero-slides.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  HeroMeasureSpan,
  HeroPaginationInner,
  HeroPaginationRoot,
  HeroProgressBar,
  HeroSlideName,
  HeroSlideNumber
} from "./hero-pagination.styles";

type HeroPaginationProps = {
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
};

const NAME_WIDTH_REFERENCE = HERO_SLIDES[HERO_SLIDES.length - 1]!.alt;

export function HeroPagination({ currentSlideIndex, setCurrentSlideIndex }: HeroPaginationProps) {
  const currentSlide = HERO_SLIDES[currentSlideIndex];
  const nextSlideIndex = (currentSlideIndex + 1) % HERO_SLIDES.length;
  const measureRef = useRef<HTMLSpanElement>(null);
  const [nameWidth, setNameWidth] = useState<number | null>(null);

  useEffect(() => {
    const measureEl = measureRef.current;

    if (!measureEl) {
      return undefined;
    }

    let cancelled = false;
    const measure = () => {
      if (!cancelled) {
        setNameWidth(Math.ceil(measureEl.getBoundingClientRect().width) + 1);
      }
    };

    measure();
    void document.fonts?.ready.then(measure);

    return () => {
      cancelled = true;
    };
  }, []);

  if (!currentSlide) {
    return null;
  }

  return (
    <HeroPaginationRoot aria-label="Choose carousel slide">
      <HeroPaginationInner>
        <HeroProgressBar
          key={currentSlideIndex}
          onClick={() => setCurrentSlideIndex(nextSlideIndex)}
          type="button"
        >
          <HeroSlideName style={nameWidth === null ? undefined : { width: nameWidth }}>
            {toSentenceCase(currentSlide.alt)}
          </HeroSlideName>
          <HeroSlideNumber aria-hidden="true">
            {String(currentSlideIndex + 1).padStart(2, "0")}
          </HeroSlideNumber>
          <HeroMeasureSpan aria-hidden="true" ref={measureRef}>
            {toSentenceCase(NAME_WIDTH_REFERENCE)}
          </HeroMeasureSpan>
        </HeroProgressBar>
      </HeroPaginationInner>
    </HeroPaginationRoot>
  );
}
