import { HERO_SLIDES } from "@/data/hero-slides.constants";
import { HeroDot, HeroPaginationRoot } from "./hero.styles";

type HeroPaginationProps = {
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
};

export function HeroPagination({ currentSlideIndex, setCurrentSlideIndex }: HeroPaginationProps) {
  return (
    <HeroPaginationRoot aria-label="Choose carousel slide">
      {HERO_SLIDES.map((slide, index) => (
        <HeroDot
          $active={index === currentSlideIndex}
          aria-label={`Show ${slide.alt}`}
          aria-pressed={index === currentSlideIndex}
          key={slide.image}
          onClick={() => setCurrentSlideIndex(index)}
          type="button"
        />
      ))}
    </HeroPaginationRoot>
  );
}
