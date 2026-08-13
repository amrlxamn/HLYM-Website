import type { NavItem } from "@/data/site-content.types";
import { getNavLinkActive } from "./get-nav-link-active";
import { NavLink, ProductNavItem } from "./header.styles";

type ProductNavTriggerProps = {
  item: NavItem;
  onOpen: () => void;
  pathname: string;
};

export function ProductNavTrigger({ item, onOpen, pathname }: ProductNavTriggerProps) {
  return (
    <ProductNavItem onFocus={onOpen} onMouseEnter={onOpen}>
      <NavLink
        as="button"
        $active={getNavLinkActive(item, pathname)}
        aria-haspopup="true"
        type="button"
      >
        <span>{item.label}</span>
      </NavLink>
      <NavLink $active={false} href={item.href}>
        <span>{item.label}</span>
      </NavLink>
    </ProductNavItem>
  );
}
