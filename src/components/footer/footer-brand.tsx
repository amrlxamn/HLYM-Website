import { SocialLinks } from "@/components/common/social-links";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { FooterBrandAddressBlock } from "./footer-brand-address";
import { FooterBrandColumn, FooterBrandTagline, FooterBrandTitle } from "./footer-brand.styles";

export function FooterBrand() {
  const footerCopy = SITE_COPY.footer;

  return (
    <FooterBrandColumn>
      <FooterBrandTitle>{footerCopy.brandTitle}</FooterBrandTitle>
      <FooterBrandTagline>{toSentenceCase(footerCopy.brandTagline)}</FooterBrandTagline>
      <FooterBrandAddressBlock />
      <SocialLinks variant="round" />
    </FooterBrandColumn>
  );
}
