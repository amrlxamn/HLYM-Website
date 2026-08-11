import { DOC_LAST_UPDATED, DOC_NAV_LINKS, DOC_VERSION } from "../constants/doc-nav.constants";
import { useScrollSpy } from "../hooks/use-scroll-spy";
import {
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarLink,
  SidebarLogo,
  SidebarLogoMark,
  SidebarNav,
  SidebarShell,
  SidebarSubLink,
  SidebarVersion
} from "../styles/doc-sidebar.styles";

const GROUPED_LINKS = [
  {
    label: "Getting Started",
    indexes: [0]
  },
  {
    label: "Foundation",
    indexes: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    label: "System",
    indexes: [9, 10]
  }
] as const;

export function DocSidebar() {
  const allHrefs = DOC_NAV_LINKS.flatMap((link) => [
    link.href,
    ...(link.subLinks ?? []).map((sub) => sub.href)
  ]).map((href) => href.replace("#", ""));
  const { activeId } = useScrollSpy(allHrefs);

  return (
    <SidebarShell>
      <SidebarLogo href="#overview">
        <SidebarLogoMark>H</SidebarLogoMark>
        HLYM Design System
      </SidebarLogo>
      <SidebarNav>
        {GROUPED_LINKS.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            {group.indexes.map((index) => {
              const link = DOC_NAV_LINKS[index];
              if (!link) {
                return null;
              }
              const id = link.href.replace("#", "");
              return (
                <div key={link.href}>
                  <SidebarLink href={link.href} $active={activeId === id}>
                    {link.label}
                  </SidebarLink>
                  {link.subLinks?.map((sub) => {
                    const subId = sub.href.replace("#", "");
                    return (
                      <SidebarSubLink key={sub.href} href={sub.href} $active={activeId === subId}>
                        {sub.label}
                      </SidebarSubLink>
                    );
                  })}
                </div>
              );
            })}
          </SidebarGroup>
        ))}
      </SidebarNav>
      <SidebarFooter>
        <SidebarVersion>
          v{DOC_VERSION} / {DOC_LAST_UPDATED}
        </SidebarVersion>
      </SidebarFooter>
    </SidebarShell>
  );
}
