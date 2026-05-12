import { props } from "@webflow/data-types";
import { PRODUCT_PAGE_COPY, PRODUCT_PAGE_MODELS } from "@/features/product-page";
import { toSentenceCase } from "@/lib/to-sentence-case";

const CONTENT_GROUP = "content";
const FRAMES_GROUP = "360 frames";
const MEDIA_GROUP = "media";
const SPECS_GROUP = "specs";
const fallback = PRODUCT_PAGE_MODELS[0]!;

export const PRODUCT_SHOWCASE_WEBFLOW_PROPS = {
  ariaLabel: props.Text({
    name: toSentenceCase("aria label"),
    group: CONTENT_GROUP,
    defaultValue: PRODUCT_PAGE_COPY.ariaLabel
  }),
  brandLabel: props.Text({
    name: toSentenceCase("brand label"),
    group: CONTENT_GROUP,
    defaultValue: "YAMAHA"
  }),
  name: props.Text({
    name: toSentenceCase("product name"),
    group: CONTENT_GROUP,
    defaultValue: fallback.name
  }),
  posterLabel: props.Text({
    name: toSentenceCase("poster label"),
    group: CONTENT_GROUP,
    defaultValue: fallback.posterLabel
  }),
  category: props.Variant({
    name: toSentenceCase("category"),
    group: CONTENT_GROUP,
    options: ["moped", "automatic", "street", "big bikes"],
    defaultValue: fallback.category
  }),
  price: props.Text({
    name: toSentenceCase("price"),
    group: CONTENT_GROUP,
    defaultValue: fallback.price
  }),
  ctaLabel: props.Text({
    name: toSentenceCase("cta label"),
    group: CONTENT_GROUP,
    defaultValue: fallback.ctaLabel
  }),
  ctaLink: props.Link({
    name: toSentenceCase("cta link"),
    group: CONTENT_GROUP
  }),
  alt: props.Text({
    name: toSentenceCase("image alt text"),
    group: MEDIA_GROUP,
    defaultValue: fallback.alt
  }),
  primaryImage: props.Image({
    name: toSentenceCase("primary image"),
    group: MEDIA_GROUP
  }),
  showRotation: props.Boolean({
    name: toSentenceCase("show 360 rotation"),
    group: FRAMES_GROUP,
    defaultValue: true,
    trueLabel: toSentenceCase("on"),
    falseLabel: toSentenceCase("off")
  }),
  frame01: props.Image({ name: "Frame 01", group: FRAMES_GROUP }),
  frame02: props.Image({ name: "Frame 02", group: FRAMES_GROUP }),
  frame03: props.Image({ name: "Frame 03", group: FRAMES_GROUP }),
  frame04: props.Image({ name: "Frame 04", group: FRAMES_GROUP }),
  frame05: props.Image({ name: "Frame 05", group: FRAMES_GROUP }),
  frame06: props.Image({ name: "Frame 06", group: FRAMES_GROUP }),
  frame07: props.Image({ name: "Frame 07", group: FRAMES_GROUP }),
  frame08: props.Image({ name: "Frame 08", group: FRAMES_GROUP }),
  spec1Label: props.Text({
    name: toSentenceCase("spec 1 label"),
    group: SPECS_GROUP,
    defaultValue: fallback.specs[0]!.label
  }),
  spec1Value: props.Text({
    name: toSentenceCase("spec 1 value"),
    group: SPECS_GROUP,
    defaultValue: fallback.specs[0]!.value
  }),
  spec2Label: props.Text({
    name: toSentenceCase("spec 2 label"),
    group: SPECS_GROUP,
    defaultValue: fallback.specs[1]!.label
  }),
  spec2Value: props.Text({
    name: toSentenceCase("spec 2 value"),
    group: SPECS_GROUP,
    defaultValue: fallback.specs[1]!.value
  }),
  spec3Label: props.Text({
    name: toSentenceCase("spec 3 label"),
    group: SPECS_GROUP,
    defaultValue: fallback.specs[2]!.label
  }),
  spec3Value: props.Text({
    name: toSentenceCase("spec 3 value"),
    group: SPECS_GROUP,
    defaultValue: fallback.specs[2]!.value
  }),
  spec4Label: props.Text({
    name: toSentenceCase("spec 4 label"),
    group: SPECS_GROUP,
    defaultValue: fallback.specs[3]!.label
  }),
  spec4Value: props.Text({
    name: toSentenceCase("spec 4 value"),
    group: SPECS_GROUP,
    defaultValue: fallback.specs[3]!.value
  })
};
