import { SocialLinks } from "@/components/common/social-links";
import { SITE_COPY } from "@/data/site-copy.constants";
import { getAssetUrl } from "@/lib/get-asset-url";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { FooterBrandAddressBlock } from "./footer-brand-address";
import { FooterBrandColumn, FooterBrandLogo } from "../styles/footer-brand.styles";

export function FooterBrand() {
  const footerCopy = SITE_COPY.footer;

  return (
    <FooterBrandColumn>
      <FooterBrandLogo
        alt={toSentenceCase(footerCopy.brandTitle)}
        src={getAssetUrl("hlym/image.png")}
      />
      <FooterBrandAddressBlock />
      <SocialLinks tone="primary" variant="round" />
    </FooterBrandColumn>
  );
}
