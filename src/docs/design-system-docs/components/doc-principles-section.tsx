import { DOC_PRINCIPLES } from "../constants/doc-principles.constants";
import {
  SectionBody,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTagline,
  SectionTitle
} from "../styles/doc-section.styles";
import {
  PrincipleCard,
  PrincipleDescription,
  PrinciplesGrid,
  PrincipleTitle
} from "../styles/doc-principles.styles";

export function DocPrinciplesSection() {
  return (
    <SectionRoot id="principles">
      <SectionBody>
        <SectionHeader>
          <SectionTagline>Principles</SectionTagline>
          <SectionTitle>The law, not guidelines</SectionTitle>
          <SectionDescription>
            Six principles govern every decision. Break them and the system breaks.
          </SectionDescription>
        </SectionHeader>
        <PrinciplesGrid>
          {DOC_PRINCIPLES.map((principle) => (
            <PrincipleCard key={principle.title}>
              <PrincipleTitle>{principle.title}</PrincipleTitle>
              <PrincipleDescription>{principle.description}</PrincipleDescription>
            </PrincipleCard>
          ))}
        </PrinciplesGrid>
      </SectionBody>
    </SectionRoot>
  );
}
