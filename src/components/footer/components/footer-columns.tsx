import { FOOTER_LINK_GROUPS } from "@/data/footer.constants";
import {
  FooterColumnLink,
  FooterColumnRoot,
  FooterColumnTitle,
  FooterLinksGrid
} from "../styles/footer-links.styles";

export function FooterColumns() {
  const group = FOOTER_LINK_GROUPS[0] ?? { links: [], title: "" };

  return (
    <FooterColumnRoot>
      <FooterColumnTitle>{group.title}</FooterColumnTitle>
      <FooterLinksGrid>
        {group.links.map((link) => (
          <FooterColumnLink href={link.href} key={link.label}>
            {link.label}
          </FooterColumnLink>
        ))}
      </FooterLinksGrid>
    </FooterColumnRoot>
  );
}
