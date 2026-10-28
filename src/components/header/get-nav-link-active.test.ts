import { describe, expect, it } from "vitest";
import { NAV_LINKS } from "@/data/navigation.constants";
import { getNavLinkActive } from "./get-nav-link-active";

describe("getNavLinkActive", () => {
  it("marks top-level route links active without matching hash links", () => {
    const homeLink = NAV_LINKS[0];
    const productsLink = NAV_LINKS[2];
    const contactLink = NAV_LINKS[6];

    if (!homeLink || !productsLink || !contactLink) {
      throw new Error("Expected primary navigation links to exist");
    }

    expect(getNavLinkActive(homeLink, "/")).toBe(true);
    expect(getNavLinkActive(homeLink, "/contact-us")).toBe(false);
    expect(getNavLinkActive(productsLink, "/products/nvx")).toBe(true);
    expect(getNavLinkActive(contactLink, "/contact-us")).toBe(true);
    expect(getNavLinkActive(NAV_LINKS[1]!, "/corporate")).toBe(true);
    expect(getNavLinkActive(NAV_LINKS[1]!, "/social-responsibility")).toBe(true);
    expect(getNavLinkActive(NAV_LINKS[1]!, "/4-millionth-rollout")).toBe(true);
    expect(getNavLinkActive(NAV_LINKS[1]!, "/principal-policies")).toBe(true);
    expect(getNavLinkActive(NAV_LINKS[3]!, "/news-events")).toBe(true);
    expect(getNavLinkActive(NAV_LINKS[3]!, "/yamalube-scan")).toBe(true);
  });
});
