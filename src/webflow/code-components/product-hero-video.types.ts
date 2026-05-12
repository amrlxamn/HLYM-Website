import type { WebflowImageAsset } from "./webflow-asset.types";

export type ProductHeroVideoWebflowProps = {
  alt?: string;
  ariaLabel?: string;
  brandMark?: WebflowImageAsset;
  copy?: string;
  poster?: WebflowImageAsset;
  sourceType?: "video/mp4" | "video/webm";
  sourceUrl?: string;
};
