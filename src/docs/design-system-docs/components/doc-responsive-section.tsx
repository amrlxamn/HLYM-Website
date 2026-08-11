import { DOC_BREAKPOINTS, DOC_CONTAINERS } from "../constants/doc-foundation.constants";
import {
  BreakpointBar,
  ReferenceGrid,
  ReferenceItem,
  ReferenceName,
  ReferencePreview,
  ReferenceValue,
  TokenGroup,
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

export function DocResponsiveSection() {
  return (
    <SectionRoot id="responsive">
      <SectionBody>
        <SectionHeader>
          <SectionTagline>Foundation / Responsive</SectionTagline>
          <SectionTitle>Four intentional thresholds</SectionTitle>
          <SectionDescription>
            Use the shared media helper instead of inventing viewport widths. Layouts collapse
            decisively below 768px.
          </SectionDescription>
        </SectionHeader>
        <TokenGroup>
          <TokenGroupHeader>
            <TokenGroupTitle>Breakpoints</TokenGroupTitle>
          </TokenGroupHeader>
          <ReferenceGrid>
            {DOC_BREAKPOINTS.map((breakpoint) => (
              <ReferenceItem key={breakpoint.name}>
                <ReferencePreview>
                  <BreakpointBar $percentage={Number.parseInt(breakpoint.value, 10) / 13.6} />
                </ReferencePreview>
                <div>
                  <ReferenceName>{breakpoint.name}</ReferenceName>
                  <ReferenceValue>
                    {breakpoint.value} / {breakpoint.usage}
                  </ReferenceValue>
                </div>
              </ReferenceItem>
            ))}
          </ReferenceGrid>
        </TokenGroup>
        <TokenGroup>
          <TokenGroupHeader>
            <TokenGroupTitle>Containers</TokenGroupTitle>
          </TokenGroupHeader>
          <ReferenceGrid>
            {DOC_CONTAINERS.map((container) => (
              <ReferenceItem key={container.name}>
                <ReferencePreview>
                  <BreakpointBar $percentage={Number.parseInt(container.value, 10) / 13.6} />
                </ReferencePreview>
                <div>
                  <ReferenceName>{container.name}</ReferenceName>
                  <ReferenceValue>
                    {container.token} / {container.value}
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
