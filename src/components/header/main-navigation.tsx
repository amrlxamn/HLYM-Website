import { Menu, Search, X } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { getAssetUrl } from "@/lib/get-asset-url";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { getMenuToggleLabel } from "./get-menu-toggle-label";
import { getNavLinkActive } from "./get-nav-link-active";
import { useMainNavigationState } from "./use-main-navigation-state";
import {
  MainLogo,
  MainNavBar,
  MainNavInner,
  DropdownLink,
  DropdownMenu,
  MenuToggle,
  NavLeft,
  NavItemWrap,
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

  return (
    <MainNavBar>
      <MainNavInner>
        <NavLeft href="/" aria-label={toSentenceCase(headerCopy.logoLinkAriaLabel)}>
          <MainLogo src={getAssetUrl("hlym/image.png")} alt={toSentenceCase(headerCopy.logoAlt)} />
        </NavLeft>
        <NavRight $isOpen={isMenuOpen} id="primaryNav">
          <NavLinks aria-label={toSentenceCase(headerCopy.mainNavigationAriaLabel)}>
            {NAV_LINKS.map((item) => {
              const dropdownItems = item.children ?? [];
              const hasDropdown = dropdownItems.length > 0;

              return (
                <NavItemWrap key={item.label}>
                  <NavLink
                    $active={getNavLinkActive(item, pathname)}
                    aria-haspopup={hasDropdown ? "true" : undefined}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                  </NavLink>
                  {hasDropdown && (
                    <DropdownMenu aria-label={`${toSentenceCase(item.label)} submenu`}>
                      {dropdownItems.map((dropdownItem) => (
                        <DropdownLink
                          href={dropdownItem.href}
                          key={dropdownItem.label}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </DropdownLink>
                      ))}
                    </DropdownMenu>
                  )}
                </NavItemWrap>
              );
            })}
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
