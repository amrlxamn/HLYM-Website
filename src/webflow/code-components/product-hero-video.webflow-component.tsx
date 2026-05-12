import { ProductVideoHero } from "@/features/product-page";
import { createProductHeroVideo } from "./create-product-hero-video";
import type { ProductHeroVideoWebflowProps } from "./product-hero-video.types";

export function ProductHeroVideoWebflow(props: ProductHeroVideoWebflowProps) {
  return <ProductVideoHero video={createProductHeroVideo(props)} />;
}
