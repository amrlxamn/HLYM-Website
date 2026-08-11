import { DOC_SPACING_SCALE } from "../constants/doc-foundation.constants";
import {
  ReferenceGrid,
  ReferenceItem,
  ReferenceName,
  ReferencePreview,
  ReferenceValue,
  SpacingBar
} from "../styles/doc-token-reference.styles";
import {
  SectionBody,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTagline,
  SectionTitle
} from "../styles/doc-section.styles";

export function DocSpacingSection() {
  return (
    <SectionRoot id="spacing">
      <SectionBody>
        <SectionHeader>
          <SectionTagline>Foundation / Spacing</SectionTagline>
          <SectionTitle>One rhythm, every surface</SectionTitle>
          <SectionDescription>
            The spacing scale is anchored to 4px, with deliberate intermediate and macro steps for
            controls, component composition, and cinematic sections.
          </SectionDescription>
        </SectionHeader>
        <ReferenceGrid>
          {DOC_SPACING_SCALE.map((space) => (
            <ReferenceItem key={space.token}>
              <ReferencePreview>
                <SpacingBar $width={space.value} />
              </ReferencePreview>
              <div>
                <ReferenceName>{space.name}</ReferenceName>
                <ReferenceValue>
                  {space.token} / {space.value}
                </ReferenceValue>
              </div>
            </ReferenceItem>
          ))}
        </ReferenceGrid>
      </SectionBody>
    </SectionRoot>
  );
}
