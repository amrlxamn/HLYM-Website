import { Menu, Search, X } from "lucide-react";
import { useRef, useState } from "react";
import { NAV_LINKS } from "@/data/navigation.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { getAssetUrl } from "@/lib/get-asset-url";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { getMenuToggleLabel } from "./get-menu-toggle-label";
import { getNavLinkActive } from "./get-nav-link-active";
import { ProductMegaMenu } from "./product-mega-menu";
import { ProductNavTrigger } from "./product-nav-trigger";
import { useProductCurtainScrollLock } from "./use-product-curtain-scroll-lock";
import { useMainNavigationState } from "./use-main-navigation-state";
import {
  MainLogo,
  MainNavBar,
  MainNavContent,
  MainNavInner,
  MainNavigationRoot,
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

type MainNavigationProps = {
  fullWidth?: boolean;
};

export function MainNavigation({ fullWidth = false }: MainNavigationProps) {
  const { isMenuOpen, setIsMenuOpen } = useMainNavigationState();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [curtainContentTop, setCurtainContentTop] = useState(0);
  const navigationRef = useRef<HTMLDivElement>(null);
  useProductCurtainScrollLock(isProductsOpen);
  const headerCopy = SITE_COPY.header;
  const menuToggleLabel = getMenuToggleLabel(headerCopy, isMenuOpen);
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;

  return (
    <MainNavigationRoot
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsProductsOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setIsProductsOpen(false);
        }
      }}
      onMouseLeave={() => setIsProductsOpen(false)}
    >
      <MainNavBar onMouseEnter={() => setIsProductsOpen(false)} ref={navigationRef}>
        <MainNavInner $curtainActive={isProductsOpen} $fullWidth={fullWidth}>
          <MainNavContent>
            <NavLeft href="/" aria-label={toSentenceCase(headerCopy.logoLinkAriaLabel)}>
              <MainLogo
                src={getAssetUrl("hlym/image.png")}
                alt={toSentenceCase(headerCopy.logoAlt)}
              />
            </NavLeft>
            <NavRight $isOpen={isMenuOpen} id="primaryNav">
              <NavLinks aria-label={toSentenceCase(headerCopy.mainNavigationAriaLabel)}>
                {NAV_LINKS.map((item) => {
                  const dropdownItems = item.children ?? [];
                  const hasDropdown = dropdownItems.length > 0;

                  if (item.label === "products") {
                    return (
                      <ProductNavTrigger
                        item={item}
                        key={item.label}
                        onOpen={() => {
                          setCurtainContentTop(
                            navigationRef.current?.getBoundingClientRect().bottom ?? 0
                          );
                          setIsProductsOpen(true);
                        }}
                        pathname={pathname}
                      />
                    );
                  }

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
            <SearchButton
              type="button"
              aria-label={toSentenceCase(headerCopy.searchButtonAriaLabel)}
            >
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
          </MainNavContent>
        </MainNavInner>
      </MainNavBar>
      <ProductMegaMenu
        contentTop={curtainContentTop}
        fullWidth={fullWidth}
        onClose={() => setIsProductsOpen(false)}
        open={isProductsOpen}
      />
    </MainNavigationRoot>
  );
}
