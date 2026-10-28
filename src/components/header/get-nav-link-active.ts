import type { NavItem } from "@/data/site-content.types";

export function getNavLinkActive(item: NavItem, pathname: string): boolean {
  if (item.href === "/") {
    return pathname === "/";
  }

  if (item.href.startsWith("/#")) {
    return Boolean(item.isActive && pathname === "/");
  }

  if (item.href === "/corporate") {
    return [
      "/corporate",
      "/company-introduction",
      "/4-millionth-rollout",
      "/social-responsibility",
      "/principal-policies"
    ].some((route) => pathname === route || pathname === `${route}/`);
  }

  if (item.href === "/news-events") {
    return ["/news-events", "/yamalube-scan"].some(
      (route) => pathname === route || pathname === `${route}/`
    );
  }

  return pathname.startsWith(item.href);
}
