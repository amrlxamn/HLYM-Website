import { DOC_RADIUS_SCALE } from "../constants/doc-foundation.constants";
import {
  RadiusPreview,
  ReferenceGrid,
  ReferenceItem,
  ReferenceName,
  ReferencePreview,
  ReferenceValue
} from "../styles/doc-token-reference.styles";
import {
  SectionBody,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTagline,
  SectionTitle
} from "../styles/doc-section.styles";

export function DocRadiiSection() {
  return (
    <SectionRoot id="radii">
      <SectionBody>
        <SectionHeader>
          <SectionTagline>Foundation / Radius</SectionTagline>
          <SectionTitle>Square by design</SectionTitle>
          <SectionDescription>
            HLYM surfaces, controls, media, and feedback remain angular. Border radius is always
            zero; shape hierarchy comes from proportion, lines, spacing, and contrast.
          </SectionDescription>
        </SectionHeader>
        <ReferenceGrid>
          {DOC_RADIUS_SCALE.map((radius) => (
            <ReferenceItem key={radius.token}>
              <ReferencePreview>
                <RadiusPreview />
              </ReferencePreview>
              <div>
                <ReferenceName>{radius.name}</ReferenceName>
                <ReferenceValue>
                  {radius.token} / {radius.value}
                </ReferenceValue>
              </div>
            </ReferenceItem>
          ))}
        </ReferenceGrid>
      </SectionBody>
    </SectionRoot>
  );
}
