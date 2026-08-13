import { AnimatePresence, motion } from "framer-motion";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { HeroPagination } from "./hero-pagination";
import { HeroImage, HeroLink, HeroSectionRoot } from "./hero.styles";
import { useHeroCarouselState } from "./use-hero-carousel-state";

const HERO_FADE_TRANSITION = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
};

export function HeroSection() {
  const { currentSlide, currentSlideIndex, setCurrentSlideIndex } = useHeroCarouselState();

  if (!currentSlide) {
    return null;
  }

  return (
    <HeroSectionRoot aria-label={toSentenceCase(SITE_COPY.hero.ariaLabel)}>
      <AnimatePresence initial={false} mode="wait">
        <HeroLink
          animate={{ opacity: 1 }}
          as={motion.a}
          exit={{ opacity: 0 }}
          href={currentSlide.href}
          initial={{ opacity: 0 }}
          key={currentSlide.image}
          transition={HERO_FADE_TRANSITION}
        >
          <HeroImage alt={toSentenceCase(currentSlide.alt)} src={currentSlide.image} />
        </HeroLink>
      </AnimatePresence>
      <HeroPagination
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
    </HeroSectionRoot>
  );
}
