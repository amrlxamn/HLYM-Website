import { DOC_SHADOW_SCALE } from "../constants/doc-foundation.constants";
import {
  ReferenceGrid,
  ReferenceItem,
  ReferenceName,
  ReferencePreview,
  ReferenceValue,
  ShadowPreview
} from "../styles/doc-token-reference.styles";
import {
  SectionBody,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTagline,
  SectionTitle
} from "../styles/doc-section.styles";

export function DocShadowsSection() {
  return (
    <SectionRoot id="shadows">
      <SectionBody>
        <SectionHeader>
          <SectionTagline>Foundation / Elevation</SectionTagline>
          <SectionTitle>Depth without decoration</SectionTitle>
          <SectionDescription>
            Shadows communicate hierarchy and temporary elevation. Most surfaces should remain flat
            and separated by space or hairlines.
          </SectionDescription>
        </SectionHeader>
        <ReferenceGrid>
          {DOC_SHADOW_SCALE.map((shadow) => (
            <ReferenceItem key={shadow.token}>
              <ReferencePreview>
                <ShadowPreview $shadow={shadow.value} />
              </ReferencePreview>
              <div>
                <ReferenceName>{shadow.name}</ReferenceName>
                <ReferenceValue>
                  {shadow.token} / {shadow.value}
                </ReferenceValue>
              </div>
            </ReferenceItem>
          ))}
        </ReferenceGrid>
      </SectionBody>
    </SectionRoot>
  );
}
