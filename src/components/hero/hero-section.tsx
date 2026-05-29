import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { HeroBottomPanel } from "./hero-bottom-panel";
import { HeroSideIndicators } from "./hero-side-indicators";
import { useHeroCarouselState } from "./use-hero-carousel-state";
import {
  HeroBackground,
  HeroBottomGradient,
  HeroCenter,
  HeroCtaLink,
  HeroCtaRow,
  HeroDescription,
  HeroRedLine,
  HeroSectionRoot,
  HeroTagRow,
  HeroTitle,
  HeroTitleAccent,
  HeroTopGradient,
  HeroVignette
} from "./hero.styles";

const HERO_FADE_TRANSITION = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
};

export function HeroSection() {
  const { currentSlide, currentSlideIndex, setCurrentSlideIndex } = useHeroCarouselState();
  const heroCopy = SITE_COPY.hero;

  if (!currentSlide) {
    return null;
  }

  return (
    <HeroSectionRoot aria-label={toSentenceCase(heroCopy.ariaLabel)}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          key={currentSlide.image}
          style={{ inset: 0, position: "absolute" }}
          transition={HERO_FADE_TRANSITION}
        >
          <HeroBackground src={currentSlide.image} alt={toSentenceCase(currentSlide.alt)} />
        </motion.div>
      </AnimatePresence>
      <HeroTopGradient />
      <HeroBottomGradient />
      <HeroVignette />
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          key={`${currentSlide.image}-content`}
          style={{ inset: 0, position: "absolute" }}
          transition={HERO_FADE_TRANSITION}
        >
          <HeroSideIndicators heroCopy={heroCopy} slide={currentSlide} />
          <HeroCenter>
            <HeroTagRow>
              <span />
              <p>{currentSlide.eyebrow}</p>
              <span />
            </HeroTagRow>
            <HeroTitle>
              <span>{currentSlide.titleLead}</span>
              <HeroTitleAccent>{currentSlide.titleAccent}</HeroTitleAccent>
            </HeroTitle>
            <HeroDescription>{toSentenceCase(currentSlide.description)}</HeroDescription>
            <HeroCtaRow>
              <HeroCtaLink href={currentSlide.ctaHref}>
                {currentSlide.ctaLabel}
                <ArrowRight />
              </HeroCtaLink>
            </HeroCtaRow>
          </HeroCenter>
          <HeroBottomPanel
            currentSlideIndex={currentSlideIndex}
            heroCopy={heroCopy}
            setCurrentSlideIndex={setCurrentSlideIndex}
            slide={currentSlide}
          />
        </motion.div>
      </AnimatePresence>
      <HeroRedLine />
    </HeroSectionRoot>
  );
}
