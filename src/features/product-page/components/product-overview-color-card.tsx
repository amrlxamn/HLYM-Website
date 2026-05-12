import type { MotionValue } from "framer-motion";
import { useReducedMotion, useSpring, useTransform } from "framer-motion";
import {
  ProductOverviewColorCardRoot,
  ProductOverviewColorDescription,
  ProductOverviewColorHeader,
  ProductOverviewColorImage,
  ProductOverviewColorInfo,
  ProductOverviewColorName,
  ProductOverviewColorSwatch
} from "../styles/product-overview-colors.styles";
import type { ProductOverviewColor } from "../types/product-page.types";
import { getProductOverviewRevealRange } from "../utils/get-product-overview-reveal-range";

type ProductOverviewColorCardProps = {
  color: ProductOverviewColor;
  count: number;
  index: number;
  scrollYProgress: MotionValue<number>;
};

const PRODUCT_OVERVIEW_CARD_SPRING = {
  damping: 28,
  mass: 0.18,
  stiffness: 170
} as const;

export function ProductOverviewColorCard({
  color,
  count,
  index,
  scrollYProgress
}: ProductOverviewColorCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isFirstCard = index === 0;
  const revealRange = getProductOverviewRevealRange(index, count);
  const opacityTarget = shouldReduceMotion || isFirstCard ? [1, 1, 1] : [0, 1, 1];
  const scaleTarget = shouldReduceMotion || isFirstCard ? [1, 1, 1] : [0.96, 1, 1];
  const yTarget = shouldReduceMotion || isFirstCard ? [0, 0, 0] : [56, 0, 0];
  const opacity = useSpring(
    useTransform(scrollYProgress, revealRange, opacityTarget),
    PRODUCT_OVERVIEW_CARD_SPRING
  );
  const scale = useSpring(
    useTransform(scrollYProgress, revealRange, scaleTarget),
    PRODUCT_OVERVIEW_CARD_SPRING
  );
  const y = useSpring(
    useTransform(scrollYProgress, revealRange, yTarget),
    PRODUCT_OVERVIEW_CARD_SPRING
  );

  return (
    <ProductOverviewColorCardRoot
      $isFeatured={Boolean(color.isFeatured)}
      style={{ opacity, scale, y }}
    >
      <ProductOverviewColorImage>
        <img alt={color.alt} src={color.image} />
      </ProductOverviewColorImage>
      <ProductOverviewColorInfo>
        <ProductOverviewColorHeader>
          <ProductOverviewColorName>{color.label}</ProductOverviewColorName>
          <ProductOverviewColorSwatch $accentColor={color.accentColor} aria-hidden="true" />
        </ProductOverviewColorHeader>
        <ProductOverviewColorDescription>{color.description}</ProductOverviewColorDescription>
      </ProductOverviewColorInfo>
    </ProductOverviewColorCardRoot>
  );
}
