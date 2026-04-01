import type { DealerRegion, LinkItem } from "@/data/site-content.types";

export type DealerLocatorCopy = {
  ariaLabel: string;
  description: string;
  headingLines: string;
  mapAriaLabel: string;
  panelEyebrow: string;
  panelHint: string;
  panelHoursLabel: string;
  panelNextDealerLabel: string;
  panelPreviousDealerLabel: string;
  panelViewAllLabel: string;
  regionLabels: Record<DealerRegion, string>;
  regionTabsAriaLabel: string;
  panelServicesLabel: string;
  tagLabel: string;
};

export type FooterCopy = {
  ariaLabel: string;
  brandAddressLines: readonly string[];
  brandTagline: string;
  brandTitle: string;
  copyright: string;
  policyLinks: readonly LinkItem[];
  watermark: string;
};

export type HeaderCopy = {
  languageOptionsAriaLabel: string;
  logoAlt: string;
  logoLinkAriaLabel: string;
  mainNavigationAriaLabel: string;
  menuToggleClosedLabel: string;
  menuToggleOpenLabel: string;
  searchButtonAriaLabel: string;
  utilityNavigationAriaLabel: string;
};

export type HeroCopy = {
  ariaLabel: string;
  nextSlideAriaLabel: string;
  previousSlideAriaLabel: string;
  scrollLabel: string;
  startingFromLabel: string;
};

export type ModelsCopy = {
  ariaLabel: string;
  detailsLabel: string;
  heading: string;
  modelCountSuffix: string;
  specLabels: {
    engine: string;
    power: string;
    weight: string;
  };
  tabListAriaLabel: string;
  tagLabel: string;
};

export type FeaturedEditorialCopy = {
  description: string;
  headingLines: readonly [string, string, string];
  imageAlt: string;
  price: string;
  tagLabel: string;
  watermark: string;
};

export type FeaturedCopy = {
  ariaLabel: string;
  bottomCtaLabel: string;
  bottomDescription: string;
  bottomTitle: string;
  editorial: FeaturedEditorialCopy;
  headingAccent: string;
  headingBottom: string;
  headingLead: string;
  intro: string;
  tileLinkLabelPrefix: string;
  tagLabel: string;
};

export type NewsCopy = {
  ariaLabel: string;
  featuredBadgeLabel: string;
  heading: string;
  nextMiniNewsLabel: string;
  previousMiniNewsLabel: string;
  tagLabel: string;
  viewAllLabel: string;
};

export type SiteCopy = {
  dealerLocator: DealerLocatorCopy;
  featured: FeaturedCopy;
  footer: FooterCopy;
  header: HeaderCopy;
  hero: HeroCopy;
  models: ModelsCopy;
  news: NewsCopy;
};
