import { useEffect, useRef } from "react";
import { useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { FeaturedBanner } from "@/components/featured/featured-banner";
import { getAssetUrl } from "@/lib/get-asset-url";
import { FEATURED_VIDEO_PATH, FEATURED_VIDEO_TITLE } from "./featured-video.constants";
import {
  FeaturedVideoFrame,
  FeaturedVideoRoot,
  FeaturedVideoSticky
} from "./featured-video.styles";
import { useFeaturedVideoAudio } from "./use-featured-video-audio";

const BANNER_REVEAL_START = 0.7;
const BANNER_REVEAL_END = 0.85;
const BANNER_SLIDE_DISTANCE_PX = 48;

export function FeaturedVideo() {
  const rootRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: rootRef
  });
  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 1],
    reduceMotion ? [1, 1, 1, 1] : [0.58, 1, 1, 1]
  );
  const scale = useSpring(rawScale, { damping: 60, mass: 1, stiffness: 500 });
  const volume = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.9, 1], [0, 0, 1, 1, 0]);
  useFeaturedVideoAudio(videoRef, volume);

  useEffect(() => {
    const updateBanner = (progress: number) => {
      const banner = bannerRef.current;

      if (!banner) return;

      const ramp = Math.min(
        1,
        Math.max(0, (progress - BANNER_REVEAL_START) / (BANNER_REVEAL_END - BANNER_REVEAL_START))
      );
      banner.style.opacity = ramp.toFixed(3);
      banner.style.pointerEvents = ramp >= 1 ? "auto" : "none";

      if (reduceMotion) {
        banner.style.transform = "";
      } else {
        const slide = (1 - ramp) * BANNER_SLIDE_DISTANCE_PX;
        banner.style.transform = `translateY(${slide.toFixed(1)}px)`;
      }
    };

    updateBanner(scrollYProgress.get());
    return scrollYProgress.on("change", updateBanner);
  }, [reduceMotion, scrollYProgress]);

  return (
    <FeaturedVideoRoot aria-label={FEATURED_VIDEO_TITLE} ref={rootRef}>
      <FeaturedVideoSticky>
        <FeaturedVideoFrame style={{ scale }}>
          <video
            aria-label={FEATURED_VIDEO_TITLE}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            ref={videoRef}
            src={getAssetUrl(FEATURED_VIDEO_PATH)}
          />
        </FeaturedVideoFrame>
        <FeaturedBanner bannerRef={bannerRef} />
      </FeaturedVideoSticky>
    </FeaturedVideoRoot>
  );
}
