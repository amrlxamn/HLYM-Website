import { declareComponent } from "@webflow/react";
import { ProductColorsWebflow } from "./product-colors.webflow-component";
import { PRODUCT_COLORS_WEBFLOW_PROPS } from "./product-colors.webflow-props";

export default declareComponent(ProductColorsWebflow, {
  name: "HLYM Product Colors",
  description: "CMS-bindable product color selector with up to four color options.",
  props: PRODUCT_COLORS_WEBFLOW_PROPS,
  options: {
    ssr: true
  }
});
