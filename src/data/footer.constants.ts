import type { FooterColumn } from "@/data/site-content.types";

export const FOOTER_LINK_GROUPS: readonly FooterColumn[] = [
  {
    links: [
      { href: "/", label: "home" },
      { href: "/#site-footer", label: "corporate" },
      { href: "/#site-footer", label: "career" },
      { href: "/#site-footer", label: "contact us" },
      { href: "/#latest-news", label: "news & events" },
      { href: "/#latest-news", label: "motorsports" },
      { href: "/#dealer-locator", label: "yamaha network" },
      { href: "/#featured-model", label: "merchandise" }
    ],
    title: "explore site"
  }
] as const;
