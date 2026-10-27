import { useState } from "react";
import { Button } from "@/components/ui/button/button";
import { PRODUCT_OVERVIEW_GALLERY_SLIDES } from "../constants/product-overview-gallery.constants";
import { ProductOverviewGalleryImage } from "../styles/product-overview-gallery.styles";
import {
  ProductOverviewSlidingCarouselControls,
  ProductOverviewSlidingCarouselMedia,
  ProductOverviewSlidingCarouselRoot,
  ProductOverviewSlidingCarouselSlide,
  ProductOverviewSlidingCarouselTrack
} from "../styles/product-overview-sliding-carousel.styles";

export function ProductOverviewSlidingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<-1 | 0 | 1>(0);
  const slides = PRODUCT_OVERVIEW_GALLERY_SLIDES;
  const previous = slides[activeIndex - 1];
  const active = slides[activeIndex]!;
  const next = slides[activeIndex + 1];

  function changeSlide(step: -1 | 1, instant = false) {
    if (direction || activeIndex + step < 0 || activeIndex + step >= slides.length) return;
    if (instant || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setActiveIndex((index) => index + step);
    } else {
      setDirection(step);
    }
  }

  return (
    <ProductOverviewSlidingCarouselRoot>
      <ProductOverviewSlidingCarouselControls>
        <Button
          aria-label="Previous NVX SP photo"
          disabled={activeIndex === 0}
          icon="left"
          onClick={() => changeSlide(-1)}
          size="sm"
          variant="light"
        >
          prev
        </Button>
        <Button
          aria-label="Next NVX SP photo"
          disabled={activeIndex === slides.length - 1}
          onClick={() => changeSlide(1)}
          size="sm"
          variant="light"
        >
          next
        </Button>
      </ProductOverviewSlidingCarouselControls>
      <ProductOverviewSlidingCarouselMedia
        aria-label="Yamaha NVX SP sliding photo gallery"
        aria-roledescription="carousel"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            changeSlide(event.key === "ArrowLeft" ? -1 : 1, true);
          }
        }}
        tabIndex={0}
      >
        <ProductOverviewSlidingCarouselTrack
          $direction={direction}
          onTransitionEnd={(event) => {
            if (event.target !== event.currentTarget || !direction) return;
            setActiveIndex((index) => index + direction);
            setDirection(0);
          }}
        >
          <ProductOverviewSlidingCarouselSlide aria-hidden="true">
            {previous && (
              <ProductOverviewGalleryImage
                alt=""
                src={`/assets/hlym/nvx-gallery/${previous.src}`}
              />
            )}
          </ProductOverviewSlidingCarouselSlide>
          <ProductOverviewSlidingCarouselSlide aria-live="polite">
            <ProductOverviewGalleryImage
              alt={active.alt}
              src={`/assets/hlym/nvx-gallery/${active.src}`}
            />
          </ProductOverviewSlidingCarouselSlide>
          <ProductOverviewSlidingCarouselSlide aria-hidden="true">
            {next && (
              <ProductOverviewGalleryImage alt="" src={`/assets/hlym/nvx-gallery/${next.src}`} />
            )}
          </ProductOverviewSlidingCarouselSlide>
        </ProductOverviewSlidingCarouselTrack>
      </ProductOverviewSlidingCarouselMedia>
    </ProductOverviewSlidingCarouselRoot>
  );
}
