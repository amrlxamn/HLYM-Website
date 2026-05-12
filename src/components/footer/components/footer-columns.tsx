import { FOOTER_LINK_GROUPS } from "@/data/footer.constants";
import {
  FooterColumnLink,
  FooterColumnRoot,
  FooterColumnTitle,
  FooterLinksGrid
} from "../styles/footer-links.styles";

export function FooterColumns() {
  return (
    <FooterLinksGrid>
      {FOOTER_LINK_GROUPS.map((group) => (
        <FooterColumnRoot key={group.title}>
          <FooterColumnTitle>{group.title}</FooterColumnTitle>
          {group.links.map((link) => (
            <FooterColumnLink href={link.href} key={link.label}>
              {link.label}
            </FooterColumnLink>
          ))}
        </FooterColumnRoot>
      ))}
    </FooterLinksGrid>
  );
}
