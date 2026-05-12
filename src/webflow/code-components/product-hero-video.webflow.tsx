import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import { PRODUCT_HERO_VIDEO } from "@/features/product-page";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { ProductHeroVideoWebflow } from "./product-hero-video.webflow-component";

const CONTENT_GROUP = "content";
const MEDIA_GROUP = "media";

export default declareComponent(ProductHeroVideoWebflow, {
  name: "HLYM Product Hero Video",
  description: "CMS-bindable product hero video for motorcycle version pages.",
  props: {
    copy: props.TextNode({
      name: toSentenceCase("copy"),
      group: CONTENT_GROUP,
      defaultValue: PRODUCT_HERO_VIDEO.copy,
      multiline: true
    }),
    ariaLabel: props.Text({
      name: toSentenceCase("aria label"),
      group: CONTENT_GROUP,
      defaultValue: PRODUCT_HERO_VIDEO.ariaLabel
    }),
    alt: props.Text({
      name: toSentenceCase("video alt text"),
      group: MEDIA_GROUP,
      defaultValue: PRODUCT_HERO_VIDEO.alt
    }),
    sourceUrl: props.Text({
      name: toSentenceCase("video source url"),
      group: MEDIA_GROUP,
      defaultValue: PRODUCT_HERO_VIDEO.sources[0]!.src
    }),
    sourceType: props.Variant({
      name: toSentenceCase("video source type"),
      group: MEDIA_GROUP,
      options: ["video/mp4", "video/webm"],
      defaultValue: "video/mp4"
    }),
    poster: props.Image({
      name: toSentenceCase("poster image"),
      group: MEDIA_GROUP
    }),
    brandMark: props.Image({
      name: toSentenceCase("brand mark image"),
      group: MEDIA_GROUP
    })
  },
  options: {
    ssr: true
  }
});
