import { declareComponent } from "@webflow/react";
import { ProductShowcaseWebflow } from "./product-showcase.webflow-component";
import { PRODUCT_SHOWCASE_WEBFLOW_PROPS } from "./product-showcase.webflow-props";

export default declareComponent(ProductShowcaseWebflow, {
  name: "HLYM Product Showcase",
  description: "CMS-bindable product showcase with specs and optional 360 frame viewer.",
  props: PRODUCT_SHOWCASE_WEBFLOW_PROPS,
  options: {
    ssr: true
  }
});
