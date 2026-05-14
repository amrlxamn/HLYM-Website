import { ChevronDown, Menu, Search, X } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { getAssetUrl } from "@/lib/get-asset-url";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { getMenuToggleLabel } from "./get-menu-toggle-label";
import { useMainNavigationState } from "./use-main-navigation-state";
import {
  MainLogo,
  MainNavBar,
  MainNavInner,
  MenuToggle,
  NavLeft,
  NavLink,
  NavLinks,
  NavRight,
  SearchButton
} from "./header.styles";

export function MainNavigation() {
  const { isMenuOpen, setIsMenuOpen } = useMainNavigationState();
  const headerCopy = SITE_COPY.header;
  const menuToggleLabel = getMenuToggleLabel(headerCopy, isMenuOpen);
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;
  const isProductsPage = pathname.startsWith("/products");

  return (
    <MainNavBar>
      <MainNavInner>
        <NavLeft href="/" aria-label={toSentenceCase(headerCopy.logoLinkAriaLabel)}>
          <MainLogo src={getAssetUrl("hlym/image.png")} alt={toSentenceCase(headerCopy.logoAlt)} />
        </NavLeft>
        <NavRight $isOpen={isMenuOpen} id="primaryNav">
          <NavLinks aria-label={toSentenceCase(headerCopy.mainNavigationAriaLabel)}>
            {NAV_LINKS.map((item) => (
              <NavLink
                $active={
                  isProductsPage
                    ? item.href === "/products"
                    : Boolean(item.isActive && item.href === "/")
                }
                href={item.href}
                key={item.label}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown />}
              </NavLink>
            ))}
          </NavLinks>
        </NavRight>
        <SearchButton type="button" aria-label={toSentenceCase(headerCopy.searchButtonAriaLabel)}>
          <Search />
        </SearchButton>
        <MenuToggle
          aria-controls="primaryNav"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
        >
          {isMenuOpen ? <X /> : <Menu />}
          <span>{menuToggleLabel}</span>
        </MenuToggle>
      </MainNavInner>
    </MainNavBar>
  );
}
