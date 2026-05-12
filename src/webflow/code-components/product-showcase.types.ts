import type { ProductPageModel } from "@/features/product-page";
import type { WebflowImageAsset, WebflowLinkValue } from "./webflow-asset.types";

type ProductCategory = ProductPageModel["category"];

export type ProductShowcaseWebflowProps = {
  alt?: string;
  ariaLabel?: string;
  brandLabel?: string;
  category?: ProductCategory;
  ctaLabel?: string;
  ctaLink?: WebflowLinkValue;
  frame01?: WebflowImageAsset;
  frame02?: WebflowImageAsset;
  frame03?: WebflowImageAsset;
  frame04?: WebflowImageAsset;
  frame05?: WebflowImageAsset;
  frame06?: WebflowImageAsset;
  frame07?: WebflowImageAsset;
  frame08?: WebflowImageAsset;
  name?: string;
  posterLabel?: string;
  price?: string;
  primaryImage?: WebflowImageAsset;
  showRotation?: boolean;
  spec1Label?: string;
  spec1Value?: string;
  spec2Label?: string;
  spec2Value?: string;
  spec3Label?: string;
  spec3Value?: string;
  spec4Label?: string;
  spec4Value?: string;
};
