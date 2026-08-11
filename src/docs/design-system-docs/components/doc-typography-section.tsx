import {
  DOC_FONT_FAMILIES,
  DOC_FONT_SIZES,
  DOC_FONT_WEIGHTS,
  DOC_LETTER_SPACINGS,
  DOC_LINE_HEIGHTS
} from "../constants/doc-typography.constants";
import {
  ReferenceGrid,
  ReferenceItem,
  ReferenceName,
  ReferencePreview,
  ReferenceValue,
  TokenGroup,
  TokenGroupDescription,
  TokenGroupHeader,
  TokenGroupTitle
} from "../styles/doc-token-reference.styles";
import {
  SectionBody,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTagline,
  SectionTitle
} from "../styles/doc-section.styles";

export function DocTypographySection() {
  return (
    <SectionRoot id="typography">
      <SectionBody>
        <SectionHeader>
          <SectionTagline>Foundation / Typography</SectionTagline>
          <SectionTitle>Type carries the machine</SectionTitle>
          <SectionDescription>
            Lato is the product voice. A 13-step scale supports dense controls through cinematic
            display copy, with fixed weight, leading, and tracking vocabularies.
          </SectionDescription>
        </SectionHeader>
        <TokenGroup>
          <TokenGroupHeader>
            <TokenGroupTitle>Font families</TokenGroupTitle>
          </TokenGroupHeader>
          <ReferenceGrid>
            {DOC_FONT_FAMILIES.map((font) => (
              <ReferenceItem key={font.name}>
                <ReferencePreview style={{ fontFamily: font.value, fontSize: 24 }}>
                  Yamaha moves you
                </ReferencePreview>
                <div>
                  <ReferenceName>{font.name}</ReferenceName>
                  <ReferenceValue>{font.token}</ReferenceValue>
                </div>
              </ReferenceItem>
            ))}
          </ReferenceGrid>
        </TokenGroup>
        <TokenGroup>
          <TokenGroupHeader>
            <TokenGroupTitle>Size scale</TokenGroupTitle>
            <TokenGroupDescription>
              Use named steps. Do not introduce one-off font sizes.
            </TokenGroupDescription>
          </TokenGroupHeader>
          {DOC_FONT_SIZES.map((size) => (
            <ReferenceItem
              key={size.name}
              style={{ gridTemplateColumns: "120px 1fr", marginBottom: -1 }}
            >
              <div>
                <ReferenceName>{size.name}</ReferenceName>
                <ReferenceValue>
                  {size.token} / {size.value}
                </ReferenceValue>
              </div>
              <ReferencePreview style={{ fontSize: size.value, lineHeight: 1.1 }}>
                Aa
              </ReferencePreview>
            </ReferenceItem>
          ))}
        </TokenGroup>
        <TokenGroup>
          <TokenGroupHeader>
            <TokenGroupTitle>Weight, leading, tracking</TokenGroupTitle>
          </TokenGroupHeader>
          <ReferenceGrid>
            {[...DOC_FONT_WEIGHTS, ...DOC_LINE_HEIGHTS, ...DOC_LETTER_SPACINGS].map((token) => (
              <ReferenceItem key={token.token}>
                <ReferencePreview>Ride with precision</ReferencePreview>
                <div>
                  <ReferenceName>{token.name}</ReferenceName>
                  <ReferenceValue>
                    {token.token} / {token.value}
                  </ReferenceValue>
                </div>
              </ReferenceItem>
            ))}
          </ReferenceGrid>
        </TokenGroup>
      </SectionBody>
    </SectionRoot>
  );
}
