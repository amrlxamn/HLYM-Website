import type { DocNavGroupLink } from "../types/design-system-docs.types";

export const DOC_NAV_LINKS: readonly DocNavGroupLink[] = [
  { href: "#overview", label: "Overview", number: "01" },
  { href: "#colors", label: "Color Tokens", number: "02" },
  { href: "#typography", label: "Typography", number: "03" },
  { href: "#spacing", label: "Spacing", number: "04" },
  { href: "#radii", label: "Border Radius", number: "05" },
  { href: "#shadows", label: "Shadows", number: "06" },
  { href: "#responsive", label: "Responsive", number: "07" },
  { href: "#z-index", label: "Z-Index", number: "08" },
  { href: "#motion", label: "Motion System", number: "09" },
  {
    href: "#components",
    label: "Components",
    number: "10",
    subLinks: [
      { href: "#components-actions", label: "Actions" },
      { href: "#components-form-controls", label: "Form Controls" },
      { href: "#components-status-feedback", label: "Status & Feedback" },
      { href: "#components-overlays", label: "Overlays" },
      { href: "#components-disclosure", label: "Disclosure" },
      { href: "#components-media", label: "Media" },
      { href: "#components-layout", label: "Layout" },
      { href: "#components-navigation", label: "Navigation" },
      { href: "#components-content", label: "Content" },
      { href: "#components-cards", label: "Cards" },
      { href: "#components-forms", label: "Feature Forms" },
      { href: "#components-product", label: "Product" }
    ]
  },
  { href: "#principles", label: "Principles", number: "11" }
] as const;

export const DOC_VERSION = "1.0.0";
export const DOC_LAST_UPDATED = "August 2026";
export const DOC_TITLE = "HLYM Design System";
export const DOC_SUBTITLE = "The visual language powering Yamaha motorcycles in Malaysia";
export const DOC_CANONICAL_URL = "/design-system";
