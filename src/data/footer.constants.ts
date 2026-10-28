import type { FooterColumn } from "@/data/site-content.types";

export const FOOTER_LINK_GROUPS: readonly FooterColumn[] = [
  {
    links: [
      { href: "/", label: "home" },
      { href: "/corporate", label: "corporate" },
      { href: "/career", label: "career" },
      { href: "/#site-footer", label: "contact us" },
      { href: "/news-events", label: "news & events" },
      { href: "/motorsports", label: "motorsports" },
      { href: "/#dealer-locator", label: "yamaha network" },
      { href: "https://shoponline.yamaha-motor.com.my/", label: "merchandise" }
    ],
    title: "explore site"
  }
] as const;
