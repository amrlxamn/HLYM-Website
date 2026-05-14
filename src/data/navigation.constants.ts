import type { LanguageOption, LinkItem, NavItem, SocialLink } from "@/data/site-content.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const LANGUAGE_OPTIONS: readonly LanguageOption[] = [
  {
    code: "en",
    icon: getAssetUrl("hlym/generated-1771862940399.png"),
    isActive: true,
    label: "english flag"
  },
  {
    code: "bm",
    icon: getAssetUrl("hlym/generated-1771862950783.png"),
    isActive: false,
    label: "bahasa malaysia flag"
  }
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { href: "https://www.facebook.com/", label: "facebook", platform: "facebook" },
  { href: "https://www.instagram.com/", label: "instagram", platform: "instagram" },
  { href: "https://www.youtube.com/", label: "youtube", platform: "youtube" }
] as const;

export const UTILITY_LINKS: readonly LinkItem[] = [
  { href: "/#featured-model", label: "lifestyle station tour" },
  { href: "/#site-footer", label: "e-daftar login" },
  { href: "/#site-footer", label: "after sales" },
  { href: "/#models", label: "yamaha endorsed zone (yez)" },
  { href: "/#latest-news", label: "y-connect" },
  { href: "/#latest-news", label: "motorsports" },
  { href: "/#site-footer", label: "resources" },
  { href: "/#site-footer", label: "career" }
] as const;

export const NAV_LINKS: readonly NavItem[] = [
  { href: "/", isActive: true, label: "home" },
  { hasDropdown: true, href: "/#site-footer", label: "corporate" },
  { href: "/products", label: "products" },
  { hasDropdown: true, href: "/#latest-news", label: "news & events" },
  { href: "/#dealer-locator", label: "yamaha network" },
  { href: "/#featured-model", label: "merchandise" },
  { href: "/#site-footer", label: "contact us" }
] as const;
