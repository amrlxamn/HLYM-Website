import { DOC_Z_INDEX } from "../constants/doc-foundation.constants";
import {
  ReferenceGrid,
  ReferenceItem,
  ReferenceName,
  ReferencePreview,
  ReferenceValue,
  ZLayer,
  ZStack
} from "../styles/doc-token-reference.styles";
import {
  SectionBody,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTagline,
  SectionTitle
} from "../styles/doc-section.styles";

export function DocZIndexSection() {
  return (
    <SectionRoot id="z-index">
      <SectionBody>
        <SectionHeader>
          <SectionTagline>Foundation / Stacking</SectionTagline>
          <SectionTitle>Named layers, no guesses</SectionTitle>
          <SectionDescription>
            Use semantic stacking roles. Never add arbitrary z-index values to win a local layering
            conflict.
          </SectionDescription>
        </SectionHeader>
        <ReferenceGrid>
          {DOC_Z_INDEX.map((layer, index) => (
            <ReferenceItem key={layer.token}>
              <ReferencePreview>
                <ZStack>
                  {[0, 1, 2].map((item) => (
                    <ZLayer $index={item} key={item} />
                  ))}
                </ZStack>
              </ReferencePreview>
              <div>
                <ReferenceName>{layer.name}</ReferenceName>
                <ReferenceValue>
                  {layer.token} / {layer.value} / order {index + 1}
                </ReferenceValue>
              </div>
            </ReferenceItem>
          ))}
        </ReferenceGrid>
      </SectionBody>
    </SectionRoot>
  );
}
