import { SITE_COPY } from "@/data/site-copy.constants";
import {
  FooterBottomDot,
  FooterBottomLink,
  FooterBottomLinks
} from "../styles/footer-links.styles";

export function FooterLegalLinks() {
  const { legalLinks } = SITE_COPY.footer;

  return (
    <FooterBottomLinks>
      {legalLinks.map((link, index) => (
        <span key={link.label}>
          <FooterBottomLink href={link.href}>{link.label}</FooterBottomLink>
          {index < legalLinks.length - 1 && <FooterBottomDot />}
        </span>
      ))}
    </FooterBottomLinks>
  );
}
