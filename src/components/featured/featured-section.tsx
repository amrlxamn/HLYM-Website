"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { CategoryTile } from "@/components/featured/category-tile";
import { FeaturedModelMarquee } from "@/components/featured/featured-model-marquee";
import { FeaturedVideo } from "@/components/featured/featured-video";
import { SectionHeader, SectionHeaderAccent } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button/button";
import { FEATURED_GALLERY_TILES } from "@/data/featured-gallery.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  BeamTrails,
  BornToPerformStage,
  FeaturedMediaSection,
  FeaturedSectionRoot,
  HorizontalPinSection,
  HorizontalPinSticky,
  HorizontalTrack,
  SliderControl
} from "./featured.styles";

export function FeaturedSection() {
  const featuredCopy = SITE_COPY.featured;
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  const hasAnimated = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      setOffset(0);
      return;
    }

    const checkInView = () => {
      if (hasAnimated.current) return;
      const el = sectionRef.current;
      const header = headerRef.current;

      if (!el || !header) return;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight * 0.7) {
        hasAnimated.current = true;
        const headerRect = header.getBoundingClientRect();
        const cardWidth = trackRef.current?.firstElementChild?.clientWidth ?? 0;
        const isMobile = window.innerWidth <= 980;
        const target = isMobile ? 0 : headerRect.left + (headerRect.width - cardWidth) / 2;
        animate(offset, target, {
          duration: 1.2,
          ease: [0.23, 1, 0.32, 1],
          onUpdate: (v) => setOffset(v)
        });
        window.removeEventListener("scroll", checkInView);
        window.removeEventListener("resize", checkInView);
      }
    };

    checkInView();
    window.addEventListener("scroll", checkInView, { passive: true });
    window.addEventListener("resize", checkInView);

    return () => {
      window.removeEventListener("scroll", checkInView);
      window.removeEventListener("resize", checkInView);
    };
  }, [reduceMotion]);

  function scrollByCard(direction: 1 | -1) {
    const slider = trackRef.current;

    if (!slider) return;

    const cardWidth = slider.firstElementChild?.clientWidth ?? 0;
    const step = cardWidth + 16;

    if (window.innerWidth <= 980) {
      slider.scrollBy({ behavior: "smooth", left: direction * step });
      return;
    }

    const header = headerRef.current;
    const controls = controlsRef.current;

    if (!header || !controls) return;
    const headerRect = header.getBoundingClientRect();
    const initialOffset = headerRect.left + (headerRect.width - cardWidth) / 2;
    const controlsRight = controls.getBoundingClientRect().right;
    const maxOffset = headerRect.left - (slider.scrollWidth - controlsRight);
    const clamped = Math.min(initialOffset, Math.max(maxOffset, offset - direction * step));

    animate(offset, clamped, {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setOffset(v)
    });
  }

  return (
    <FeaturedSectionRoot aria-label={toSentenceCase(featuredCopy.ariaLabel)}>
      <BornToPerformStage>
        <BeamTrails aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </BeamTrails>
        <div ref={headerRef}>
          <SectionHeader
            action={
              <SliderControl ref={controlsRef}>
                <Button
                  aria-label="previous slide"
                  iconPosition="left"
                  onClick={() => scrollByCard(-1)}
                  size="sm"
                  variant="secondary"
                >
                  {featuredCopy.previousSlideLabel}
                </Button>
                <Button
                  aria-label="next slide"
                  onClick={() => scrollByCard(1)}
                  size="sm"
                  variant="secondary"
                >
                  {featuredCopy.nextSlideLabel}
                </Button>
              </SliderControl>
            }
            align="left"
            heading={
              <>
                <span>{featuredCopy.headingLead}</span>
                <SectionHeaderAccent> {featuredCopy.headingAccent}</SectionHeaderAccent>
              </>
            }
            tone="dark"
          />
        </div>
        <HorizontalPinSection ref={sectionRef}>
          <HorizontalPinSticky>
            <HorizontalTrack ref={trackRef} style={{ x: reduceMotion ? 0 : offset }}>
              {FEATURED_GALLERY_TILES.map((tile, index) => (
                <CategoryTile index={index} key={tile.name} tile={tile} />
              ))}
            </HorizontalTrack>
          </HorizontalPinSticky>
        </HorizontalPinSection>
      </BornToPerformStage>
      <FeaturedMediaSection>
        <FeaturedModelMarquee />
        <FeaturedVideo />
      </FeaturedMediaSection>
    </FeaturedSectionRoot>
  );
}
