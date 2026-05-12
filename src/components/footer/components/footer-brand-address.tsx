import { SITE_COPY } from "@/data/site-copy.constants";
import { FooterBrandAddress } from "../styles/footer-brand.styles";

export function FooterBrandAddressBlock() {
  const { brandAddressLines } = SITE_COPY.footer;

  return (
    <FooterBrandAddress>
      {brandAddressLines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </FooterBrandAddress>
  );
}
