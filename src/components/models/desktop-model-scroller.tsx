import {
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useRef } from "react";
import type { ModelCard as ModelCardType, ModelCategory } from "@/data/site-content.types";
import { clampScrollProgress } from "./clamp-scroll-progress";
import { ModelImage } from "./model-image";
import { ModelInformation } from "./model-information";
import { ModelTabs } from "./model-tabs";
import {
  ModelsDesktopCard,
  ModelsDesktopLayout,
  ModelsDesktopProgressRail,
  ModelsDesktopRunway,
  ModelsDesktopStickyView,
  ModelsDesktopTabs,
  ModelsImageTransition,
  ModelsImageViewport,
  ModelsResponsiveNavigation,
  ModelsResponsiveProgressRail,
  ModelsResponsiveProgressTrack
} from "./models-desktop.styles";
import { useScrollCardIndex } from "./use-scroll-card-index";

type DesktopModelScrollerProps = {
  activeCategory: ModelCategory;
  models: readonly ModelCardType[];
};

export function DesktopModelScroller({ activeCategory, models }: DesktopModelScrollerProps) {
  const runwayRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const count = models.length;
  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"]
  });
  const initialRailProgress = 0.004;
  const clampedRailProgress = useTransform(scrollYProgress, clampScrollProgress);
  const railProgress = useTransform(clampedRailProgress, [0, 1], [initialRailProgress, 1]);
  const progress = useTransform(
    scrollYProgress,
    [0, 1 / (count + 1), count / (count + 1), 1],
    [0, 0, 1, 1]
  );
  const smoothProgress = useSpring(progress, {
    bounce: 0,
    damping: 30,
    stiffness: 75
  });
  const modelProgress = reduceMotion ? progress : smoothProgress;
  const activeIndex = useScrollCardIndex(modelProgress, count);
  const activeModel = models[activeIndex] ?? models[0];
  if (!activeModel) {
    return null;
  }

  return (
    <ModelsDesktopRunway ref={runwayRef} style={{ height: `${(count + 1) * 150}vh` }}>
      <ModelsDesktopStickyView>
        <ModelsDesktopProgressRail
          aria-hidden="true"
          data-model-progress-rail=""
          style={{ scaleY: railProgress }}
        />
        <ModelsDesktopLayout>
          <ModelsDesktopTabs>
            <ModelTabs
              activeCategory={activeCategory}
              orientation="vertical"
              scrollCategory={activeModel.category}
            />
          </ModelsDesktopTabs>
          <ModelsResponsiveNavigation>
            <ModelTabs
              activeCategory={activeCategory}
              orientation="horizontal"
              scrollCategory={activeModel.category}
            />
            <ModelsResponsiveProgressTrack>
              <ModelsResponsiveProgressRail
                aria-hidden="true"
                data-model-responsive-progress=""
                style={{ scaleX: railProgress }}
              />
            </ModelsResponsiveProgressTrack>
          </ModelsResponsiveNavigation>
          <ModelsDesktopCard>
            <ModelInformation index={activeIndex} model={activeModel} />
            <ModelsImageViewport>
              <AnimatePresence initial={false} mode="sync">
                <ModelsImageTransition
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  data-model-image-transition=""
                  exit={{ filter: reduceMotion ? "blur(0px)" : "blur(6px)", opacity: 0 }}
                  initial={{ filter: reduceMotion ? "blur(0px)" : "blur(6px)", opacity: 0 }}
                  key={activeModel.name}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <ModelImage eager={activeIndex === 0} model={activeModel} />
                </ModelsImageTransition>
              </AnimatePresence>
            </ModelsImageViewport>
          </ModelsDesktopCard>
        </ModelsDesktopLayout>
      </ModelsDesktopStickyView>
    </ModelsDesktopRunway>
  );
}
