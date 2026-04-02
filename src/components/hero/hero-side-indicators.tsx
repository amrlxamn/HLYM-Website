import type { HeroCopy } from "@/data/site-copy.types";
import type { HeroSlide } from "@/data/site-content.types";
import { HeroIndicatorLine, HeroMutedText, HeroScrollText, HeroSideIndicator } from "./hero.styles";

type HeroSideIndicatorsProps = {
  heroCopy: HeroCopy;
  slide: HeroSlide;
};

export function HeroSideIndicators({ heroCopy, slide }: HeroSideIndicatorsProps) {
  return (
    <>
      <HeroSideIndicator $gap="8px" $position="left" aria-hidden="true">
        <span>{slide.indexLabel}</span>
        <HeroIndicatorLine $color="var(--red)" $height="60px" />
        <HeroMutedText>{slide.totalLabel}</HeroMutedText>
      </HeroSideIndicator>
      <HeroSideIndicator $gap="10px" $position="right" aria-hidden="true">
        <HeroIndicatorLine $color="#ffffff20" $height="50px" />
        <HeroScrollText>{heroCopy.scrollLabel}</HeroScrollText>
      </HeroSideIndicator>
    </>
  );
}
