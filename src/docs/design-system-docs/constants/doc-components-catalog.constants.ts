import type { DocComponentEntry } from "../types/design-system-docs.types";

export const DOC_COMPONENT_CATALOG: readonly DocComponentEntry[] = [
  {
    category: "Layout",
    code: "<Container>...</Container>",
    componentName: "Container",
    description:
      "Primary content wrapper. Centers horizontally with 1240px max-width and responsive side padding.",
    id: "container",
    name: "Container",
    previewTone: "dark",
    props: [
      { name: "children", required: true, type: "ReactNode" },
      { name: "as", required: false, type: "ElementType", default: "div" }
    ],
    tier: 1
  },
  {
    category: "Navigation",
    code: "<MainNavigation />",
    componentName: "MainNavigation",
    description:
      "Sticky site header with logo, primary nav links, dropdown menus, and mobile toggle. Reads NAV_LINKS and SITE_COPY internally.",
    id: "main-navigation",
    name: "Main Navigation",
    previewTone: "dark",
    props: [],
    tier: 1
  },
  {
    category: "Navigation",
    code: "<UtilityBar />",
    componentName: "UtilityBar",
    description:
      "Thin utility bar above the main nav with language switcher, social links, and utility links.",
    id: "utility-bar",
    name: "Utility Bar",
    previewTone: "dark",
    props: [],
    tier: 1
  },
  {
    category: "Navigation",
    code: '<DealerRegionTabs selectedRegion="central" onSelectRegion={fn} />',
    componentName: "DealerRegionTabs",
    description:
      "Tab list for switching between 5 Malaysian regions. Uses role=tablist with full keyboard support.",
    id: "dealer-region-tabs",
    name: "Dealer Region Tabs",
    previewTone: "dark",
    props: [
      { name: "selectedRegion", required: true, type: "DealerRegion" },
      { name: "onSelectRegion", required: true, type: "(region) => void" }
    ],
    tier: 1
  },
  {
    category: "Navigation",
    code: "<YamahaNetworkLayoutToggle isGrid={true} onToggle={fn} />",
    componentName: "YamahaNetworkLayoutToggle",
    description:
      "Grid/list view toggle with lucide icons. Pure presentational — receives boolean state and a setter.",
    id: "layout-toggle",
    name: "Layout Toggle",
    previewTone: "dark",
    props: [
      { name: "isGrid", required: true, type: "boolean" },
      { name: "onToggle", required: true, type: "(isGrid) => void" }
    ],
    tier: 1
  },
  {
    category: "Content",
    code: '<SectionTag label="Featured" accent />',
    componentName: "SectionTag",
    description:
      "Small uppercase label with red accent lines. The atomic unit of every section header in the system.",
    id: "section-tag",
    name: "Section Tag",
    previewTone: "dark",
    props: [
      { name: "label", required: true, type: "string" },
      { name: "accent", required: false, type: "boolean", default: "false" },
      { name: "centered", required: false, type: "boolean", default: "false" },
      {
        name: "lineWidth",
        required: false,
        type: '"default" | "medium" | "wide"',
        default: '"default"'
      }
    ],
    tier: 1
  },
  {
    category: "Content",
    code: '<SectionHeader heading="Colors" tagLabel="02" intro="..." />',
    componentName: "SectionHeader",
    description:
      "Full section header combining SectionTag, bold uppercase title, and optional intro. Supports left/center alignment and dark/light tones.",
    id: "section-header",
    name: "Section Header",
    previewTone: "light",
    props: [
      { name: "heading", required: true, type: "ReactNode" },
      { name: "tagLabel", required: true, type: "string" },
      { name: "intro", required: false, type: "ReactNode" },
      { name: "align", required: false, type: '"center" | "left"', default: '"left"' },
      { name: "tone", required: false, type: '"dark" | "light"', default: '"light"' },
      { name: "action", required: false, type: "ReactNode" }
    ],
    tier: 1
  },
  {
    category: "Content",
    code: '<SearchField variant="plain" placeholder="Search..." />',
    componentName: "SearchField",
    description:
      "Search input with leading icon. Two variants: gloss (glassmorphic on dark images) and plain (standard input).",
    id: "search-field",
    name: "Search Field",
    previewTone: "dark",
    props: [
      { name: "variant", required: true, type: '"gloss" | "plain"' },
      { name: "placeholder", required: true, type: "string" },
      { name: "ariaLabel", required: true, type: "string" },
      { name: "value", required: false, type: "string" },
      { name: "onChange", required: false, type: "ChangeEventHandler" },
      { name: "backgroundImage", required: false, type: "string" }
    ],
    tier: 1
  },
  {
    category: "Content",
    code: '<SocialLinks variant="round" />',
    componentName: "SocialLinks",
    description:
      "Social media link row for Facebook, Instagram, and YouTube. Two visual variants and inverse/primary tone options.",
    id: "social-links",
    name: "Social Links",
    previewTone: "dark",
    props: [
      { name: "variant", required: true, type: '"compact" | "round"' },
      { name: "tone", required: false, type: '"inverse" | "primary"', default: '"inverse"' }
    ],
    tier: 1
  },
  {
    category: "Cards",
    code: "<ModelCard model={model} index={0} />",
    componentName: "ModelCard",
    description:
      "Product card with image, category badge, name, spec highlights (engine/power/weight), and price row with detail link.",
    id: "model-card",
    name: "Model Card",
    previewTone: "dark",
    props: [
      { name: "model", required: true, type: "ModelCard" },
      { name: "index", required: true, type: "number" },
      { name: "eager", required: false, type: "boolean", default: "false" }
    ],
    tier: 1
  },
  {
    category: "Cards",
    code: "<FeaturedCard card={card} />",
    componentName: "FeaturedCard",
    description:
      "Image-forward card with overlay gradient, tag, title, description, and price. Used in the featured products showcase.",
    id: "featured-card",
    name: "Featured Card",
    previewTone: "dark",
    props: [{ name: "card", required: true, type: "FeaturedCard" }],
    tier: 1
  },
  {
    category: "Cards",
    code: "<CategoryTile tile={tile} />",
    componentName: "CategoryTile",
    description:
      "Compact category tile with image, tag, name, price, and arrow link. Used in the featured bottom grid.",
    id: "category-tile",
    name: "Category Tile",
    previewTone: "dark",
    props: [{ name: "tile", required: true, type: "CategoryTile" }],
    tier: 1
  },
  {
    category: "Cards",
    code: "<ContactSupportCard card={card} />",
    componentName: "ContactSupportCard",
    description:
      "Contact page support card with numbered title and CTA. Featured variant shows a button, standard variant shows a link.",
    id: "contact-support-card",
    name: "Contact Support Card",
    previewTone: "dark",
    props: [
      { name: "card", required: true, type: "ContactHeroCard" },
      { name: "onEnquiryClick", required: false, type: "() => void" }
    ],
    tier: 1
  },
  {
    category: "Cards",
    code: "<YamahaNetworkDealerCard dealer={d} isGrid={true} isSelected={false} onSelect={fn} />",
    componentName: "YamahaNetworkDealerCard",
    description:
      "Dealer directory card with image, name, locality, and expandable category badges. Grid and list layouts.",
    id: "dealer-card",
    name: "Dealer Card",
    previewTone: "dark",
    props: [
      { name: "dealer", required: true, type: "YamahaDealerLocation" },
      { name: "isGrid", required: true, type: "boolean" },
      { name: "isSelected", required: true, type: "boolean" },
      { name: "onSelect", required: true, type: "(id) => void" }
    ],
    tier: 1
  },
  {
    category: "Cards",
    code: "<NewsFeaturedCard item={news} ... />",
    componentName: "NewsFeaturedCard",
    description:
      "Scroll-linked featured news card with mini carousel. Requires MotionValue instances from a parent useScroll context.",
    id: "news-featured-card",
    name: "News Featured Card",
    note: "Requires framer-motion MotionValue instances from a parent scroll context. Shown as static preview.",
    previewTone: "dark",
    props: [
      { name: "item", required: true, type: "NewsCard" },
      { name: "railItems", required: true, type: "readonly NewsCard[]" },
      { name: "width", required: true, type: "MotionValue<number>" },
      { name: "height", required: true, type: "MotionValue<number>" },
      { name: "y", required: true, type: "MotionValue<number>" },
      { name: "borderRadius", required: true, type: "MotionValue<number>" },
      { name: "miniCardsY", required: true, type: "MotionValue<number>" },
      { name: "miniCardsOpacity", required: true, type: "MotionValue<number>" },
      { name: "selectedNewsIndex", required: true, type: "number" },
      { name: "onSelectNews", required: true, type: "(index) => void" }
    ],
    tier: 3
  },
  {
    category: "Forms & Feedback",
    code: "<ContactFaqItem item={faq} />",
    componentName: "ContactFaqItem",
    description:
      "Expandable FAQ accordion item with framer-motion animated open/close. Respects prefers-reduced-motion.",
    id: "contact-faq-item",
    name: "Contact FAQ Item",
    previewTone: "light",
    props: [{ name: "item", required: true, type: "ContactFaqItem" }],
    tier: 2
  },
  {
    category: "Forms & Feedback",
    code: "<SplashScreen isVisible={true} onComplete={fn} />",
    componentName: "SplashScreen",
    description:
      "Full-screen intro splash with Yamaha logo and animated red line. Fades out on exit via framer-motion AnimatePresence.",
    id: "splash-screen",
    name: "Splash Screen",
    note: "Renders as a full-screen overlay. Preview shows a static snapshot of the splash state.",
    previewTone: "dark",
    props: [
      { name: "isVisible", required: true, type: "boolean" },
      { name: "onComplete", required: true, type: "() => void" }
    ],
    tier: 2
  },
  {
    category: "Forms & Feedback",
    code: "<CustomCursor />",
    componentName: "CustomCursor",
    description:
      "Custom mouse cursor with play/pause labels for video contexts. Requires useCustomCursor context provider to be active.",
    id: "custom-cursor",
    name: "Custom Cursor",
    note: "Requires useCustomCursor context provider and desktop pointer. Shown as static preview.",
    previewTone: "dark",
    props: [],
    tier: 3
  },
  {
    category: "Product",
    code: "<ProductOverviewSpecRow spec={spec} index={0} />",
    componentName: "ProductOverviewSpecRow",
    description:
      "Single specification row with label and value. Used in the product overview spec list.",
    id: "product-spec-row",
    name: "Product Spec Row",
    previewTone: "light",
    props: [
      { name: "spec", required: true, type: "ProductOverviewSpec" },
      { name: "index", required: true, type: "number" }
    ],
    tier: 1
  },
  {
    category: "Product",
    code: "<ProductOverviewColorCard color={color} index={0} />",
    componentName: "ProductOverviewColorCard",
    description:
      "Color option card with image and scroll-linked reveal animation. Requires MotionValue from parent useScroll context.",
    id: "product-color-card",
    name: "Product Color Card",
    note: "Requires scrollYProgress MotionValue from a parent scroll container. Shown as static preview.",
    previewTone: "dark",
    props: [
      { name: "color", required: true, type: "ProductOverviewColor" },
      { name: "index", required: true, type: "number" },
      { name: "count", required: true, type: "number" },
      { name: "scrollYProgress", required: true, type: "MotionValue<number>" }
    ],
    tier: 3
  }
] as const;
