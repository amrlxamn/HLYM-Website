import { PRODUCT_PAGE_MODELS } from "@/features/product-page";
import type { ProductPageModel } from "@/features/product-page";
import type { ProductShowcaseWebflowProps } from "./product-showcase.types";

export function createProductPageModel(props: ProductShowcaseWebflowProps): ProductPageModel {
  const fallback = PRODUCT_PAGE_MODELS[0]!;
  const frames = [
    props.frame01?.src,
    props.frame02?.src,
    props.frame03?.src,
    props.frame04?.src,
    props.frame05?.src,
    props.frame06?.src,
    props.frame07?.src,
    props.frame08?.src
  ].filter((frame): frame is string => Boolean(frame));
  const resolvedFrames = frames.length > 0 ? frames : fallback.frames;

  return {
    alt: props.alt || props.primaryImage?.alt || fallback.alt,
    category: props.category || fallback.category,
    ctaHref: props.ctaLink?.href || fallback.ctaHref,
    ctaLabel: props.ctaLabel || fallback.ctaLabel,
    image: props.primaryImage?.src || fallback.image,
    name: props.name || fallback.name,
    posterLabel: props.posterLabel || fallback.posterLabel,
    price: props.price || fallback.price,
    specs: [
      {
        label: props.spec1Label || fallback.specs[0]!.label,
        value: props.spec1Value || fallback.specs[0]!.value
      },
      {
        label: props.spec2Label || fallback.specs[1]!.label,
        value: props.spec2Value || fallback.specs[1]!.value
      },
      {
        label: props.spec3Label || fallback.specs[2]!.label,
        value: props.spec3Value || fallback.specs[2]!.value
      },
      {
        label: props.spec4Label || fallback.specs[3]!.label,
        value: props.spec4Value || fallback.specs[3]!.value
      }
    ],
    ...(props.showRotation === false || !resolvedFrames ? {} : { frames: resolvedFrames })
  };
}
