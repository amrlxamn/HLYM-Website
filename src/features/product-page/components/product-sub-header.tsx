import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  PRODUCT_PAGE_MODELS,
  PRODUCT_SUB_HEADER_COPY,
  PRODUCT_SUB_NAV_TABS
} from "../constants/product-page.constants";
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

export function ProductSubHeader() {
  const [activeTabId, setActiveTabId] = useState<string>(PRODUCT_SUB_NAV_TABS[0]?.id ?? "overview");

  const product = PRODUCT_PAGE_MODELS[0];
  const productMark = product?.posterMark;

  return (
    <ProductSubHeaderRoot aria-label={toSentenceCase(PRODUCT_SUB_HEADER_COPY.ariaLabel)}>
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
  );
}
