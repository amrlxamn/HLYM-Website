import { DOC_LAST_UPDATED, DOC_VERSION } from "../constants/doc-nav.constants";
import {
  FooterInner,
  FooterLogo,
  FooterLogoMark,
  FooterMetaText,
  FooterRoot
} from "../styles/doc-footer.styles";

export function DocFooter() {
  return (
    <FooterRoot>
      <FooterInner>
        <FooterLogo>
          <FooterLogoMark>H</FooterLogoMark>
          HLYM Design System
        </FooterLogo>
        <FooterMetaText>
          v{DOC_VERSION} / Updated {DOC_LAST_UPDATED}
        </FooterMetaText>
      </FooterInner>
    </FooterRoot>
  );
}
