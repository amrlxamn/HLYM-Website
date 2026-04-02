import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/hero-slides.constants";
import type { HeroCopy } from "@/data/site-copy.types";
import type { HeroSlide } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { getNextHeroSlideIndex } from "./get-next-hero-slide-index";
import { getPreviousHeroSlideIndex } from "./get-previous-hero-slide-index";
import {
  HeroArrowButton,
  HeroArrowWrap,
  HeroBottomBar,
  HeroBottomInner,
  HeroDivider,
  HeroPriceWrap,
  HeroRightMeta,
  HeroStat,
  HeroStatGroup,
  HeroStats
} from "./hero.styles";

type HeroBottomPanelProps = {
  currentSlideIndex: number;
  heroCopy: HeroCopy;
  setCurrentSlideIndex: (slideIndex: number) => void;
  slide: HeroSlide;
};

export function HeroBottomPanel({
  currentSlideIndex,
  heroCopy,
  setCurrentSlideIndex,
  slide
}: HeroBottomPanelProps) {
  return (
    <HeroBottomBar>
      <HeroBottomInner>
        <HeroStats>
          {slide.stats.map((stat, index) => (
            <HeroStatGroup key={stat.label}>
              <HeroStat>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </HeroStat>
              {index < slide.stats.length - 1 && <HeroDivider aria-hidden="true" />}
            </HeroStatGroup>
          ))}
        </HeroStats>
        <HeroRightMeta>
          <HeroPriceWrap>
            <span>{heroCopy.startingFromLabel}</span>
            <strong>{slide.price}</strong>
          </HeroPriceWrap>
          <HeroDivider aria-hidden="true" />
          <HeroArrowWrap>
            <HeroArrowButton
              $active={false}
              aria-label={toSentenceCase(heroCopy.previousSlideAriaLabel)}
              onClick={() =>
                setCurrentSlideIndex(
                  getPreviousHeroSlideIndex(currentSlideIndex, HERO_SLIDES.length)
                )
              }
              type="button"
            >
              <ChevronLeft />
            </HeroArrowButton>
            <HeroArrowButton
              $active
              aria-label={toSentenceCase(heroCopy.nextSlideAriaLabel)}
              onClick={() =>
                setCurrentSlideIndex(getNextHeroSlideIndex(currentSlideIndex, HERO_SLIDES.length))
              }
              type="button"
            >
              <ChevronRight />
            </HeroArrowButton>
          </HeroArrowWrap>
        </HeroRightMeta>
      </HeroBottomInner>
    </HeroBottomBar>
  );
}
