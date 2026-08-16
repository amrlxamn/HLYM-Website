import { useState } from "react";
import { SectionTag } from "@/components/shared/section-tag";
import { SectionHeader } from "@/components/shared/section-header";
import { SearchField } from "@/components/shared/search-field";
import { SocialLinks } from "@/components/common/social-links";
import { ModelCard } from "@/components/models/model-card";
import { FeaturedCard } from "@/components/featured/featured-card";
import { CategoryTile } from "@/components/featured/category-tile";
import { DealerRegionTabs } from "@/components/dealer-locator/dealer-region-tabs";
import { YamahaNetworkLayoutToggle } from "@/features/yamaha-network/components/yamaha-network-layout-toggle";
import { YamahaNetworkDealerCard } from "@/features/yamaha-network/components/yamaha-network-dealer-card";
import { ContactSupportCard } from "@/features/contact-page/components/contact-support-card";
import { ContactFaqItem } from "@/features/contact-page/components/contact-faq-item";
import { ProductOverviewSpecRow } from "@/features/product-page/components/product-overview-spec-row";
import type { DocComponentEntry } from "../types/design-system-docs.types";
import {
  MOCK_CATEGORY_TILE,
  MOCK_CONTACT_FAQ_ITEM,
  MOCK_CONTACT_HERO_CARD,
  MOCK_DEALER_REGION,
  MOCK_FEATURED_CARD,
  MOCK_MODEL_CARD,
  MOCK_PRODUCT_SPEC,
  MOCK_YAMAHA_DEALER
} from "../constants/doc-mock-data.constants";
import { PreviewFrame, PreviewNote } from "../styles/doc-component-card.styles";
import { DocPrimitivePreview } from "./doc-primitive-preview";

export function DocLivePreview({ entry }: { entry: DocComponentEntry }) {
  if (entry.id.startsWith("ui-")) {
    return (
      <PreviewFrame $tone={entry.previewTone}>
        <DocPrimitivePreview entry={entry} />
      </PreviewFrame>
    );
  }

  if (entry.tier === 3) {
    return (
      <PreviewFrame $tone={entry.previewTone}>
        <PreviewNote>{entry.note ?? "Requires parent context"}</PreviewNote>
      </PreviewFrame>
    );
  }

  return (
    <PreviewFrame $tone={entry.previewTone}>
      <PreviewContent entry={entry} />
    </PreviewFrame>
  );
}

function PreviewContent({ entry }: { entry: DocComponentEntry }) {
  switch (entry.componentName) {
    case "Container":
      return <ContainerPreview />;
    case "MainNavigation":
      return <NavigationPreview />;
    case "UtilityBar":
      return <UtilityBarPreview />;
    case "DealerRegionTabs":
      return <DealerRegionTabsPreview />;
    case "YamahaNetworkLayoutToggle":
      return <LayoutTogglePreview />;
    case "SectionTag":
      return <SectionTag accent label="Featured" lineWidth="wide" />;
    case "SectionHeader":
      return <SectionHeaderPreview />;
    case "SearchField":
      return <SearchField ariaLabel="Search" placeholder="Search models..." variant="plain" />;
    case "SocialLinks":
      return <SocialLinks variant="round" />;
    case "ModelCard":
      return <ModelCard model={MOCK_MODEL_CARD} index={0} />;
    case "FeaturedCard":
      return <FeaturedCard card={MOCK_FEATURED_CARD} />;
    case "CategoryTile":
      return <CategoryTile index={0} tile={MOCK_CATEGORY_TILE} />;
    case "ContactSupportCard":
      return <ContactSupportCard card={MOCK_CONTACT_HERO_CARD} />;
    case "YamahaNetworkDealerCard":
      return (
        <YamahaNetworkDealerCard
          dealer={MOCK_YAMAHA_DEALER}
          isGrid={true}
          isSelected={false}
          onSelect={() => {}}
          origin={null}
        />
      );
    case "ContactFaqItem":
      return <ContactFaqItem item={MOCK_CONTACT_FAQ_ITEM} />;
    case "ProductOverviewSpecRow":
      return <ProductOverviewSpecRow spec={MOCK_PRODUCT_SPEC} index={0} />;
    case "SplashScreen":
      return <PreviewNote>{entry.note ?? "Full-screen overlay"}</PreviewNote>;
    case "CustomCursor":
      return <PreviewNote>{entry.note ?? "Requires cursor context"}</PreviewNote>;
    case "ProductOverviewColorCard":
      return <PreviewNote>{entry.note ?? "Requires scroll context"}</PreviewNote>;
    default:
      return <PreviewNote>Preview not available</PreviewNote>;
  }
}

function ContainerPreview() {
  return (
    <div
      style={{
        border: "1px dashed var(--color-border-inverse)",
        borderRadius: 0,
        color: "var(--color-text-muted-dark)",
        fontSize: "12px",
        margin: "0 auto",
        maxWidth: "400px",
        padding: "16px 24px",
        textAlign: "center",
        width: "100%"
      }}
    >
      max-width: 1240px / margin: 0 auto
    </div>
  );
}

function NavigationPreview() {
  return (
    <div
      style={{
        alignItems: "center",
        border: "1px solid var(--color-border-inverse)",
        borderRadius: 0,
        color: "var(--color-text-muted-dark)",
        display: "flex",
        fontSize: "12px",
        gap: "16px",
        justifyContent: "center",
        padding: "12px 16px",
        width: "100%"
      }}
    >
      <span style={{ color: "var(--red)", fontWeight: 800 }}>HLYM</span>
      <span>Home</span>
      <span>Products</span>
      <span>Network</span>
      <span>Contact</span>
    </div>
  );
}

function UtilityBarPreview() {
  return (
    <div
      style={{
        alignItems: "center",
        background: "#111",
        borderRadius: 0,
        color: "var(--color-text-muted-dark)",
        display: "flex",
        fontSize: "11px",
        gap: "12px",
        justifyContent: "center",
        padding: "8px 16px",
        width: "100%"
      }}
    >
      <span>EN</span>
      <span>|</span>
      <span>Find Dealer</span>
      <span>|</span>
      <SocialLinks variant="compact" />
    </div>
  );
}

function DealerRegionTabsPreview() {
  const [region, setRegion] = useState(MOCK_DEALER_REGION);
  return <DealerRegionTabs selectedRegion={region} onSelectRegion={setRegion} />;
}

function LayoutTogglePreview() {
  const [isGrid, setIsGrid] = useState(true);
  return <YamahaNetworkLayoutToggle isGrid={isGrid} onToggle={setIsGrid} />;
}

function SectionHeaderPreview() {
  return (
    <div style={{ maxWidth: "400px", width: "100%" }}>
      <SectionHeader
        heading="Color System"
        tagLabel="02"
        intro="Every color is a CSS custom property."
        tone="light"
      />
    </div>
  );
}
