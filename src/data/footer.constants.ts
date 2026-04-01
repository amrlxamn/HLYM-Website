import type { FooterColumn } from "@/data/site-content.types";

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    links: [
      { href: "#latest-news", label: "latest news" },
      { href: "#latest-news", label: "events" },
      { href: "#latest-news", label: "promotions" },
      { href: "#latest-news", label: "racing" }
    ],
    title: "discover"
  },
  {
    links: [
      { href: "#site-footer", label: "service & maintenance" },
      { href: "#site-footer", label: "genuine parts" },
      { href: "#site-footer", label: "warranty" },
      { href: "#site-footer", label: "owner's manual" },
      { href: "#site-footer", label: "y-connect app" }
    ],
    title: "owners"
  },
  {
    links: [
      { href: "#site-footer", label: "about hlym" },
      { href: "#site-footer", label: "careers" },
      { href: "#site-footer", label: "contact us" },
      { href: "#site-footer", label: "privacy policy" },
      { href: "#site-footer", label: "terms of use" }
    ],
    title: "company"
  }
] as const;
