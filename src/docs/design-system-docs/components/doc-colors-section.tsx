import { DOC_COLOR_SCALES, DOC_SEMANTIC_COLORS } from "../constants/doc-colors.constants";
import {
  ColorScaleGrid,
  ColorScaleItem,
  ColorScaleMeta,
  ColorScaleSwatch,
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

export function DocColorsSection() {
  return (
    <SectionRoot id="colors">
      <SectionBody>
        <SectionHeader>
          <SectionTagline>Foundation / Color</SectionTagline>
          <SectionTitle>A controlled spectrum</SectionTitle>
          <SectionDescription>
            Two foundational scales and four semantic roles cover every interface state. Brand 500
            is the canonical Yamaha red; neutral 950 is the primary canvas.
          </SectionDescription>
        </SectionHeader>
        {DOC_COLOR_SCALES.map((scale) => (
          <TokenGroup key={scale.name}>
            <TokenGroupHeader>
              <TokenGroupTitle>{scale.name}</TokenGroupTitle>
              <TokenGroupDescription>{scale.description}</TokenGroupDescription>
            </TokenGroupHeader>
            <ColorScaleGrid>
              {Object.entries(scale.values).map(([step, value]) => (
                <ColorScaleItem key={step}>
                  <ColorScaleSwatch $color={value} />
                  <ColorScaleMeta>
                    <strong>{step}</strong>
                    <code>{value}</code>
                  </ColorScaleMeta>
                </ColorScaleItem>
              ))}
            </ColorScaleGrid>
          </TokenGroup>
        ))}
        <TokenGroup>
          <TokenGroupHeader>
            <TokenGroupTitle>Semantic roles</TokenGroupTitle>
            <TokenGroupDescription>
              Use semantic names for feedback. Do not infer meaning from raw palette steps.
            </TokenGroupDescription>
          </TokenGroupHeader>
          <ReferenceGrid>
            {DOC_SEMANTIC_COLORS.map((color) => (
              <ReferenceItem key={color.name}>
                <ReferencePreview>
                  <ColorScaleSwatch $color={color.value} style={{ height: 48, width: 72 }} />
                </ReferencePreview>
                <div>
                  <ReferenceName>{color.name}</ReferenceName>
                  <ReferenceValue>
                    {color.token} / {color.value}
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
