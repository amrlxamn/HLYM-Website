import { Pause, Play } from "lucide-react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { PRODUCT_HERO_VIDEO } from "../constants/product-page.constants";
import {
  ProductVideoControl,
  ProductVideoHeroCaption,
  ProductVideoHeroContent,
  ProductVideoHeroCopy,
  ProductVideoHeroMedia,
  ProductVideoHeroRoot,
  ProductVideoHeroShade
} from "../styles/product-video-hero.styles";
import { useProductVideoPlayback } from "../hooks/use-product-video-playback";
import type { ProductHeroVideo } from "../types/product-page.types";

type ProductVideoHeroProps = {
  video?: ProductHeroVideo;
};

export function ProductVideoHero({ video = PRODUCT_HERO_VIDEO }: ProductVideoHeroProps) {
  const { isPaused, onControlClick, onTogglePlayback, onVideoPause, onVideoPlay, videoRef } =
    useProductVideoPlayback();
  const ControlIcon = isPaused ? Play : Pause;
  const controlLabel = isPaused ? "Play Yamaha NVX video" : "Pause Yamaha NVX video";
  const cursorLabel = isPaused ? "Play" : "Pause";

  return (
    <ProductVideoHeroRoot
      aria-label={toSentenceCase(video.ariaLabel)}
      data-cursor-label={cursorLabel}
      data-cursor-tone="dark"
      onClick={onTogglePlayback}
    >
      <ProductVideoHeroMedia
        ref={videoRef}
        aria-label={toSentenceCase(video.alt)}
        autoPlay
        loop
        muted
        onPause={onVideoPause}
        onPlay={onVideoPlay}
        playsInline
        poster={video.poster}
        preload="metadata"
      >
        {video.sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </ProductVideoHeroMedia>
      <ProductVideoHeroShade />
      <ProductVideoHeroContent>
        <ProductVideoHeroCaption>
          <ProductVideoHeroCopy>{video.copy}</ProductVideoHeroCopy>
        </ProductVideoHeroCaption>
      </ProductVideoHeroContent>
      <ProductVideoControl aria-label={controlLabel} onClick={onControlClick} type="button">
        <ControlIcon aria-hidden="true" />
      </ProductVideoControl>
    </ProductVideoHeroRoot>
  );
}
