import { SITE_COPY } from "@/data/site-copy.constants";
import {
  FooterBottomDot,
  FooterBottomLink,
  FooterBottomLinks
} from "../styles/footer-links.styles";

export function FooterPolicyLinks() {
  const { policyLinks } = SITE_COPY.footer;

  return (
    <FooterBottomLinks>
      {policyLinks.map((link, index) => (
        <span key={link.label}>
          <FooterBottomLink href={link.href}>{link.label}</FooterBottomLink>
          {index < policyLinks.length - 1 && <FooterBottomDot />}
        </span>
      ))}
    </FooterBottomLinks>
  );
}
