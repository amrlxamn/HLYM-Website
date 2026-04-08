import { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { FEATURED_MODEL_SPOTLIGHT } from "@/data/featured.constants";
import { useCanvasFrameRenderer } from "@/hooks/use-canvas-frame-renderer";
import { useImageSequence } from "@/hooks/use-image-sequence";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  FeaturedModelSpotlightCallout,
  FeaturedModelSpotlightCalloutDescription,
  FeaturedModelSpotlightCalloutNumber,
  FeaturedModelSpotlightCalloutTitle,
  FeaturedModelSpotlightGrid,
  FeaturedModelSpotlightImageWrap,
  FeaturedModelSpotlightRoot,
  FeaturedModelSpotlightStage
} from "./featured.styles";

const SPOTLIGHT_SPRING = {
  damping: 24,
  mass: 0.2,
  stiffness: 180
} as const;

const CALLOUT_POSITIONS = ["top-left", "right", "bottom-left", "right", "bottom-left"] as const;

export function FeaturedModelSpotlight() {
  const spotlight = FEATURED_MODEL_SPOTLIGHT;
  const frames = spotlight.frames ?? [];
  const frameCount = frames.length;

  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrameRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const { images, isLoaded } = useImageSequence(frames);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const scaleTarget = shouldReduceMotion ? [1, 1, 1] : [0.92, 1.08, 0.92];
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], scaleTarget),
    SPOTLIGHT_SPRING
  );

  // Stepped frame mapping — each frame holds during its paired callout window
  const rawFrameIndex = useTransform(scrollYProgress, (progress) => {
    if (progress < 0.2) return 0; // front — callout 01
    if (progress < 0.39) return 1; // front 3/4 — callout 02
    if (progress < 0.4) return 2; // transition
    if (progress < 0.59) return 2; // left side — callout 03
    if (progress < 0.6) return 3; // transition
    if (progress < 0.79) return 3; // rear — callout 04
    if (progress < 0.8) return 4; // transition
    return 5; // right side — callout 05
  });

  // Callout fade helper — returns 0 outside the window, fades in/out at edges
  const calloutWindow = (p: number, enter: number, holdEnd: number, exit: number) => {
    const fadeIn = enter + 0.02;
    if (p < enter) return 0;
    if (p < fadeIn) return (p - enter) / 0.02;
    if (p < holdEnd) return 1;
    if (p < exit) return 1 - (p - holdEnd) / (exit - holdEnd);
    return 0;
  };

  const calloutY = (p: number, enter: number, holdEnd: number, exit: number) => {
    const fadeIn = enter + 0.02;
    if (p < enter) return 30;
    if (p < fadeIn) return 30 * (1 - (p - enter) / 0.02);
    if (p < holdEnd) return 0;
    if (p < exit) return -30 * ((p - holdEnd) / (exit - holdEnd));
    return -30;
  };

  // Callout 01: fades in 0.05–0.07, holds 0.07–0.15, fades out 0.15–0.18
  const c1Opacity = useTransform(scrollYProgress, (p) => calloutWindow(p, 0.05, 0.15, 0.18));
  const c1Y = useTransform(scrollYProgress, (p) => calloutY(p, 0.05, 0.15, 0.18));

  // Callout 02: fades in 0.22–0.24, holds 0.24–0.34, fades out 0.34–0.37
  const c2Opacity = useTransform(scrollYProgress, (p) => calloutWindow(p, 0.22, 0.34, 0.37));
  const c2Y = useTransform(scrollYProgress, (p) => calloutY(p, 0.22, 0.34, 0.37));

  // Callout 03: fades in 0.40–0.42, holds 0.42–0.54, fades out 0.54–0.57
  const c3Opacity = useTransform(scrollYProgress, (p) => calloutWindow(p, 0.4, 0.54, 0.57));
  const c3Y = useTransform(scrollYProgress, (p) => calloutY(p, 0.4, 0.54, 0.57));

  // Callout 04: fades in 0.60–0.62, holds 0.62–0.74, fades out 0.74–0.77
  const c4Opacity = useTransform(scrollYProgress, (p) => calloutWindow(p, 0.6, 0.74, 0.77));
  const c4Y = useTransform(scrollYProgress, (p) => calloutY(p, 0.6, 0.74, 0.77));

  // Callout 05: fades in at 0.80–0.82, stays visible through end of section
  const c5Opacity = useTransform(scrollYProgress, (p) => {
    if (p < 0.8) return 0;
    if (p < 0.82) return (p - 0.8) / 0.02;
    return 1;
  });
  const c5Y = useTransform(scrollYProgress, (p) => {
    if (p < 0.8) return 30;
    if (p < 0.82) return 30 * (1 - (p - 0.8) / 0.02);
    return 0;
  });

  const calloutOpacities = [c1Opacity, c2Opacity, c3Opacity, c4Opacity, c5Opacity] as const;
  const calloutYTransforms = [c1Y, c2Y, c3Y, c4Y, c5Y] as const;

  // Initial draw when images finish loading
  useCanvasFrameRenderer(canvasRef, images, 0, isLoaded);

  // Clean frame swap — no React re-renders on the hot path
  useMotionValueEvent(rawFrameIndex, "change", (latest) => {
    if (shouldReduceMotion || frameCount === 0) return;

    const index = Math.round(latest);
    if (index === currentFrameRef.current) return;
    currentFrameRef.current = index;

    const canvas = canvasRef.current;
    const image = images[index];
    if (!canvas || !image?.complete) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (canvas.width !== image.naturalWidth) {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);
  });

  const showCanvas = !shouldReduceMotion && frameCount > 0 && isLoaded;

  return (
    <FeaturedModelSpotlightRoot aria-label={toSentenceCase(spotlight.name)} ref={sectionRef}>
      <FeaturedModelSpotlightGrid>
        {spotlight.callouts.map((callout, index) => {
          const position = CALLOUT_POSITIONS[index];
          const opacity = calloutOpacities[index];
          const y = calloutYTransforms[index];

          if (!position || !opacity || !y) {
            return null;
          }

          return (
            <FeaturedModelSpotlightCallout
              key={callout.numberLabel}
              $position={position}
              as={motion.div}
              style={{
                opacity: shouldReduceMotion ? 1 : opacity,
                y: shouldReduceMotion ? 0 : y
              }}
            >
              <FeaturedModelSpotlightCalloutNumber>
                {callout.numberLabel}
              </FeaturedModelSpotlightCalloutNumber>
              <FeaturedModelSpotlightCalloutTitle>
                {callout.title}
              </FeaturedModelSpotlightCalloutTitle>
              <FeaturedModelSpotlightCalloutDescription>
                {callout.description}
              </FeaturedModelSpotlightCalloutDescription>
            </FeaturedModelSpotlightCallout>
          );
        })}

        <FeaturedModelSpotlightStage>
          <FeaturedModelSpotlightImageWrap>
            <motion.div style={{ scale }}>
              {showCanvas ? (
                <canvas ref={canvasRef} aria-label={toSentenceCase(spotlight.alt)} role="img" />
              ) : (
                <img loading="lazy" src={spotlight.image} alt={toSentenceCase(spotlight.alt)} />
              )}
            </motion.div>
          </FeaturedModelSpotlightImageWrap>
        </FeaturedModelSpotlightStage>
      </FeaturedModelSpotlightGrid>
    </FeaturedModelSpotlightRoot>
  );
}
