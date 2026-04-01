import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { SectionTag } from "@/components/shared/section-tag";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { ModelCard } from "./model-card";
import {
  ModelsCardArea,
  ModelsDesktopRunway,
  ModelsDesktopStickyView,
  ModelsProgressDot,
  ModelsProgressIndicator
} from "./models-desktop.styles";
import { ModelTabs } from "./model-tabs";
import { useModelCatalogState } from "./use-model-catalog-state";
import { useScrollCardIndex } from "./use-scroll-card-index";
import {
  ModelCount,
  ModelCountDot,
  ModelsBackground,
  ModelsDesktopLayout,
  ModelsHeader,
  ModelsHeaderRow,
  ModelsHeading,
  ModelsSectionRoot,
  ModelsStack,
  ModelsStackWrap,
  ModelsTabsMobileShell,
  ModelsTabsShell
} from "./models.styles";

const SLIDE_DISTANCE = 40;

const CARD_TRANSITION = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
};

export function ModelsSection() {
  const modelsCopy = SITE_COPY.models;
  const { activeCategory, visibleModels } = useModelCatalogState();
  const runwayRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"]
  });

  const count = visibleModels.length;
  const { activeIndex, direction } = useScrollCardIndex(scrollYProgress, count);
  const activeModel = visibleModels[activeIndex] ?? visibleModels[0];
  const scrollCategory = activeModel?.category ?? null;
  const dirNum = direction === "down" ? 1 : -1;

  return (
    <ModelsSectionRoot id="models" aria-label={toSentenceCase(modelsCopy.ariaLabel)}>
      <ModelsBackground aria-hidden="true" />

      {/* Desktop: header sits at the top of the section and scrolls away naturally. */}
      {count > 0 && (
        <ModelsHeader>
          <ModelsHeading>{modelsCopy.heading}</ModelsHeading>
          <ModelsHeaderRow>
            <SectionTag label={modelsCopy.tagLabel} />
            <ModelCount>
              <ModelCountDot />
              <span>
                {visibleModels.length} {modelsCopy.modelCountSuffix}
              </span>
            </ModelCount>
          </ModelsHeaderRow>
        </ModelsHeader>
      )}

      {/* Desktop: scroll-driven card display within a fixed-height viewport.
          The runway is tall (count * 100vh) but the visible content is sticky,
          so the user only sees one screen while cards animate on scroll. */}
      {count > 0 && (
        <ModelsDesktopRunway ref={runwayRef} style={{ height: `${count * 100}vh` }}>
          <ModelsDesktopStickyView>
            <ModelsDesktopLayout>
              <ModelsTabsShell>
                <ModelTabs
                  activeCategory={activeCategory}
                  orientation="vertical"
                  scrollCategory={scrollCategory}
                />
              </ModelsTabsShell>
              <ModelsCardArea>
                {activeModel && (
                  <motion.div
                    key={activeModel.name}
                    initial={{ opacity: 0, y: dirNum * SLIDE_DISTANCE }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={CARD_TRANSITION}
                    style={{ width: "100%" }}
                  >
                    <ModelCard eager={activeIndex === 0} index={activeIndex} model={activeModel} />
                  </motion.div>
                )}
                {count > 1 && (
                  <ModelsProgressIndicator aria-hidden="true">
                    {Array.from({ length: count }, (_, i) => (
                      <ModelsProgressDot key={i} $isActive={i === activeIndex} />
                    ))}
                  </ModelsProgressIndicator>
                )}
              </ModelsCardArea>
            </ModelsDesktopLayout>
          </ModelsDesktopStickyView>
        </ModelsDesktopRunway>
      )}

      {/* Mobile: simple stacked grid */}
      <ModelsStackWrap>
        <ModelsStack>
          <ModelsTabsMobileShell>
            <ModelTabs
              activeCategory={activeCategory}
              orientation="horizontal"
            />
          </ModelsTabsMobileShell>
          {visibleModels.map((model, index) => (
            <ModelCard index={index} key={model.name} model={model} />
          ))}
        </ModelsStack>
      </ModelsStackWrap>
    </ModelsSectionRoot>
  );
}
