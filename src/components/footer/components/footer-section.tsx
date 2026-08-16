import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { FooterBrand } from "./footer-brand";
import { FooterColumns } from "./footer-columns";
import { FooterLegalLinks } from "./footer-legal-links";
import {
  FooterBottom,
  FooterBottomText,
  FooterContent,
  FooterSectionRoot,
  FooterTop,
  MainFooter
} from "../styles/footer-shell.styles";

export function FooterSection() {
  const footerCopy = SITE_COPY.footer;

  return (
    <FooterSectionRoot aria-label={toSentenceCase(footerCopy.ariaLabel)}>
      <MainFooter id="site-footer">
        <FooterContent>
          <FooterTop>
            <FooterBrand />
            <FooterColumns />
          </FooterTop>
          <FooterBottom>
            <FooterBottomText>{toSentenceCase(footerCopy.copyright)}</FooterBottomText>
            <FooterLegalLinks />
          </FooterBottom>
        </FooterContent>
      </MainFooter>
    </FooterSectionRoot>
  );
}
