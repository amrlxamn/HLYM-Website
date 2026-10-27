import { useEffect, useRef, useState } from "react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { PRODUCT_SUB_HEADER_COPY, PRODUCT_SUB_NAV_TABS } from "../constants/product-page.constants";
import {
  ProductSubHeaderInner,
  ProductSubHeaderRoot
} from "../styles/product-sub-header-shell.styles";
import {
  ProductSubHeaderTab,
  ProductSubHeaderTabs
} from "../styles/product-sub-header-tabs.styles";

const PRODUCT_TABS = PRODUCT_SUB_NAV_TABS.map((tab) => ({
  href: `#product-${tab.id}`,
  label: toSentenceCase(tab.label)
}));

type ProductSubHeaderProps = {
  activeHref?: string;
  ariaLabel?: string;
  tabs?: readonly { href: string; label: string }[];
};

export function ProductSubHeader({
  activeHref,
  ariaLabel = PRODUCT_SUB_HEADER_COPY.ariaLabel,
  tabs = PRODUCT_TABS
}: ProductSubHeaderProps) {
  const [selectedHref, setSelectedHref] = useState(PRODUCT_TABS[0]!.href);
  const activeTabRef = useRef<HTMLAnchorElement>(null);
  const tabsRef = useRef<HTMLElement>(null);
  const label = toSentenceCase(ariaLabel);

  useEffect(() => {
    if (!activeHref || !activeTabRef.current || !tabsRef.current) return;

    const tab = activeTabRef.current.getBoundingClientRect();
    const tabs = tabsRef.current.getBoundingClientRect();
    if (tab.left < tabs.left) tabsRef.current.scrollLeft += tab.left - tabs.left;
    if (tab.right > tabs.right) tabsRef.current.scrollLeft += tab.right - tabs.right;
  }, [activeHref]);

  return (
    <ProductSubHeaderRoot aria-label={label}>
      <ProductSubHeaderInner>
        <ProductSubHeaderTabs aria-label={label} ref={tabsRef}>
          {tabs.map((tab) => (
            <ProductSubHeaderTab
              aria-current={
                (activeHref ?? selectedHref) === tab.href
                  ? activeHref
                    ? "page"
                    : "location"
                  : undefined
              }
              href={tab.href}
              key={tab.href}
              onClick={() => setSelectedHref(tab.href)}
              ref={activeHref === tab.href ? activeTabRef : undefined}
            >
              {tab.label}
            </ProductSubHeaderTab>
          ))}
        </ProductSubHeaderTabs>
      </ProductSubHeaderInner>
    </ProductSubHeaderRoot>
  );
}
