import type { SiteCopy } from "@/data/site-copy.types";

export const SITE_COPY: SiteCopy = {
  dealerLocator: {
    ariaLabel: "dealer locator section",
    description: "locate authorized dealers and service centers across malaysia.",
    headingLines: "search your nearest yamaha dealer",
    mapAriaLabel: "dealer locator map background",
    networkCta: {
      actionLabel: "find a dealer",
      ariaLabel: "explore the yamaha dealer network"
    },
    panelEyebrow: "selected dealer",
    panelHint: "select another red marker to compare nearby support.",
    panelHoursLabel: "hours",
    panelNextDealerLabel: "show next dealer",
    panelPreviousDealerLabel: "show previous dealer",
    panelViewAllLabel: "view all",
    regionLabels: {
      central: "central",
      northern: "northern",
      sabah: "sabah",
      sarawak: "sarawak",
      southern: "southern"
    },
    regionTabsAriaLabel: "dealer regions",
    panelServicesLabel: "available support",
    tagLabel: "find a dealer"
  },
  featured: {
    ariaLabel: "featured model section",
    banner: {
      specs: {
        engine: "890cc",
        power: "119 ps",
        weight: "193 kg"
      }
    },
    bottomCtaLabel: "see more",
    bottomDescription: "discover the complete yamaha malaysia lineup from mopeds to superbikes.",
    bottomTitle: "explore all models",
    detailsLabel: "discover more",
    editorial: {
      description:
        "the mt-09 is a torque-rich hyper naked that delivers pure riding excitement. " +
        "powered by an 890cc cp3 engine with aggressive styling that demands attention.",
      headingLines: ["the new", "dark side", "of japan"],
      imageAlt: "mt-09",
      price: "from rm57,998",
      tagLabel: "mt series",
      watermark: "mt"
    },
    headingAccent: "perform",
    headingLead: "born to",
    intro: "performance, style, and innovation. yamaha's latest lineup pushes boundaries.",
    nextSlideLabel: "next",
    previousSlideLabel: "prev",
    tileLinkLabelPrefix: "open",
    tagLabel: "featured model"
  },
  footer: {
    ariaLabel: "footer section",
    brandAddressLines: [
      "Hong Leong Yamaha Motor Sdn. Bhd. (HLYM) Co.",
      "number: 197901002563 (46829-P), a company incorporated",
      "in Malaysia in 1978, is a joint venture between Hong Leong",
      "Industries Bhd and Yamaha Motor Co., Ltd , Japan"
    ],
    brandTitle: "yamaha",
    copyright:
      "Copyright © 2021 Hong Leong Yamaha Motor Sdn. Bhd 197901002563 (46829-P). All Rights Reserved.",
    legalLinks: [
      { href: "/terms-of-use", label: "terms of use" },
      { href: "/privacy-policy", label: "privacy policy" }
    ]
  },
  header: {
    languageOptionsAriaLabel: "language options",
    logoAlt: "yamaha logo",
    logoLinkAriaLabel: "go to homepage",
    mainNavigationAriaLabel: "main navigation",
    menuToggleClosedLabel: "menu",
    menuToggleOpenLabel: "close",
    searchButtonAriaLabel: "search options",
    utilityNavigationAriaLabel: "utility navigation"
  },
  hero: {
    ariaLabel: "featured Yamaha promotions"
  },
  models: {
    ariaLabel: "stacked models section",
    detailsLabel: "discover more",
    heading: "compare",
    modelCountSuffix: "models",
    specLabels: {
      engine: "engine",
      power: "power",
      weight: "weight"
    },
    tabListAriaLabel: "model tabs",
    tagLabel: "our models"
  },
  news: {
    ariaLabel: "latest news section",
    featuredBadgeLabel: "featured",
    heading: "stories that move",
    nextMiniNewsLabel: "show next news cards",
    previousMiniNewsLabel: "show previous news cards",
    tagLabel: "latest news",
    viewAllLabel: "view all"
  }
};
