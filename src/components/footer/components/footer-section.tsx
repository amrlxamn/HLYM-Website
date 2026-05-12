import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { FooterBrand } from "./footer-brand";
import { FooterColumns } from "./footer-columns";
import { FooterPolicyLinks } from "./footer-policy-links";
import { FooterVideoWordmark } from "./footer-video-wordmark";
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
            <FooterPolicyLinks />
          </FooterBottom>
          <FooterVideoWordmark
            label={footerCopy.watermark}
            poster="/assets/hlym/nvx-360/frame-01.jpg"
            src="/assets/hlym/nvx-hero.mp4"
          />
        </FooterContent>
      </MainFooter>
    </FooterSectionRoot>
  );
}
