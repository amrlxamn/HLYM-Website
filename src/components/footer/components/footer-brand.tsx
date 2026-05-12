import { SocialLinks } from "@/components/common/social-links";
import { SITE_COPY } from "@/data/site-copy.constants";
import { FooterBrandAddressBlock } from "./footer-brand-address";
import { FooterBrandColumn, FooterBrandTitle } from "../styles/footer-brand.styles";

export function FooterBrand() {
  const footerCopy = SITE_COPY.footer;

  return (
    <FooterBrandColumn>
      <FooterBrandTitle>{footerCopy.brandTitle}</FooterBrandTitle>
      <FooterBrandAddressBlock />
      <SocialLinks tone="primary" variant="round" />
    </FooterBrandColumn>
  );
}
