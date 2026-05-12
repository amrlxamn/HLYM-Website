import { PRODUCT_HERO_VIDEO } from "@/features/product-page";
import type { ProductHeroVideo } from "@/features/product-page";
import type { ProductHeroVideoWebflowProps } from "./product-hero-video.types";

export function createProductHeroVideo(props: ProductHeroVideoWebflowProps): ProductHeroVideo {
  const fallbackSource = PRODUCT_HERO_VIDEO.sources[0]!;
  const poster = props.poster?.src ?? PRODUCT_HERO_VIDEO.poster;

  return {
    alt: props.alt || props.poster?.alt || PRODUCT_HERO_VIDEO.alt,
    ariaLabel: props.ariaLabel || PRODUCT_HERO_VIDEO.ariaLabel,
    brandMark: {
      alt: props.brandMark?.alt ?? PRODUCT_HERO_VIDEO.brandMark.alt,
      src: props.brandMark?.src ?? PRODUCT_HERO_VIDEO.brandMark.src
    },
    copy: props.copy || PRODUCT_HERO_VIDEO.copy,
    poster,
    sources: [
      {
        src: props.sourceUrl || fallbackSource.src,
        type: props.sourceType || fallbackSource.type
      }
    ]
  };
}
