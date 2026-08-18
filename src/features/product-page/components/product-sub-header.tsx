import { ChevronRight } from "lucide-react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { PRODUCT_SUB_HEADER_COPY, PRODUCT_SUB_NAV_TABS } from "../constants/product-page.constants";
import {
  ProductSubHeaderActions,
  ProductSubHeaderCta
} from "../styles/product-sub-header-actions.styles";
import {
  ProductSubHeaderName,
  ProductSubHeaderNameMark
} from "../styles/product-sub-header-name.styles";
import {
  ProductSubHeaderInner,
  ProductSubHeaderRoot
} from "../styles/product-sub-header-shell.styles";
import {
  ProductSubHeaderTab,
  ProductSubHeaderTabs
} from "../styles/product-sub-header-tabs.styles";
import { scrollToProductSection } from "../utils/scroll-to-product-section";
import { useProductPageState } from "../hooks/use-product-page-state";

const SUB_HEADER_SLIDE_DISTANCE = 100;

export function ProductSubHeader() {
  const [activeTabId, setActiveTabId] = useState<string>(PRODUCT_SUB_NAV_TABS[0]?.id ?? "overview");
  const [isPastHero, setIsPastHero] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setIsPastHero(window.scrollY > 0);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const { activeModel } = useProductPageState();
  const product = activeModel;
  const productMark = product?.posterMark;

  return (
    <AnimatePresence>
      {isPastHero && (
        <ProductSubHeaderRoot
          animate={{ opacity: 1, x: "-50%", y: 0 }}
          aria-label={toSentenceCase(PRODUCT_SUB_HEADER_COPY.ariaLabel)}
          exit={{ opacity: 0, x: "-50%", y: shouldReduceMotion ? 0 : SUB_HEADER_SLIDE_DISTANCE }}
          initial={{ opacity: 0, x: "-50%", y: shouldReduceMotion ? 0 : SUB_HEADER_SLIDE_DISTANCE }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <ProductSubHeaderInner>
            <ProductSubHeaderName>
              {productMark ? (
                <ProductSubHeaderNameMark alt={productMark.alt} src={productMark.src} />
              ) : (
                product?.name
              )}
            </ProductSubHeaderName>

            <ProductSubHeaderTabs aria-label={toSentenceCase(PRODUCT_SUB_HEADER_COPY.ariaLabel)}>
              {PRODUCT_SUB_NAV_TABS.map((tab) => (
                <ProductSubHeaderTab
                  $active={tab.id === activeTabId}
                  aria-current={tab.id === activeTabId ? "true" : undefined}
                  key={tab.id}
                  onClick={() => {
                    setActiveTabId(tab.id);
                    scrollToProductSection(tab.targetId);
                  }}
                  type="button"
                >
                  {toSentenceCase(tab.label)}
                </ProductSubHeaderTab>
              ))}
            </ProductSubHeaderTabs>

            <ProductSubHeaderActions>
              <ProductSubHeaderCta
                aria-label={toSentenceCase(PRODUCT_SUB_HEADER_COPY.contactDealerAriaLabel)}
                href={product?.ctaHref ?? "#"}
              >
                {toSentenceCase(PRODUCT_SUB_HEADER_COPY.contactDealerLabel)}
                <ChevronRight aria-hidden="true" size={16} strokeWidth={2.4} />
              </ProductSubHeaderCta>
            </ProductSubHeaderActions>
          </ProductSubHeaderInner>
        </ProductSubHeaderRoot>
      )}
    </AnimatePresence>
  );
}
