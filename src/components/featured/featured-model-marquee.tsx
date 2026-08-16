import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FEATURED_MODEL_MARQUEE_ROWS } from "./featured-model-marquee.constants";
import {
  FeaturedModelMarqueeItem,
  FeaturedModelMarqueeRail,
  FeaturedModelMarqueeRoot,
  FeaturedModelMarqueeRows,
  FeaturedModelMarqueeSequence,
  FeaturedModelMarqueeTrack
} from "./featured-model-marquee.styles";

export function FeaturedModelMarquee() {
  const rootRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: rootRef
  });
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const right = useTransform(scrollYProgress, [0, 1], ["-18%", "0%"]);

  return (
    <FeaturedModelMarqueeRoot aria-label="Yamaha motorcycle range" ref={rootRef}>
      <FeaturedModelMarqueeRows>
        {FEATURED_MODEL_MARQUEE_ROWS.map((models, rowIndex) => (
          <FeaturedModelMarqueeRail key={models[0]}>
            <FeaturedModelMarqueeTrack
              style={{ x: reduceMotion ? "-9%" : rowIndex === 1 ? right : left }}
            >
              {[false, true].map((duplicate) => (
                <FeaturedModelMarqueeSequence aria-hidden={duplicate} key={String(duplicate)}>
                  {models.map((model, modelIndex) => (
                    <FeaturedModelMarqueeItem
                      $accent={(modelIndex + rowIndex) % 2 === 0}
                      key={model}
                    >
                      {model}
                    </FeaturedModelMarqueeItem>
                  ))}
                </FeaturedModelMarqueeSequence>
              ))}
            </FeaturedModelMarqueeTrack>
          </FeaturedModelMarqueeRail>
        ))}
      </FeaturedModelMarqueeRows>
    </FeaturedModelMarqueeRoot>
  );
}
