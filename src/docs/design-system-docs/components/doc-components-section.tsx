import type { DocComponentCategory, DocComponentEntry } from "../types/design-system-docs.types";
import { DOC_COMPONENT_CATALOG } from "../constants/doc-components-catalog.constants";
import { DOC_PRIMITIVE_CATALOG } from "../constants/doc-primitives-catalog.constants";
import {
  SectionBody,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTagline,
  SectionTitle
} from "../styles/doc-section.styles";
import {
  CategoryCount,
  CategoryHeader,
  CategorySection,
  CategoryTitle,
  ComponentGrid
} from "../styles/doc-category-section.styles";
import { DocComponentCard } from "./doc-component-card";

const CATEGORY_ORDER: readonly DocComponentCategory[] = [
  "Actions",
  "Form Controls",
  "Status & Feedback",
  "Overlays",
  "Disclosure",
  "Media",
  "Layout",
  "Navigation",
  "Content",
  "Cards",
  "Forms & Feedback",
  "Product"
];

const CATEGORY_SLUGS: Record<DocComponentCategory, string> = {
  Actions: "actions",
  Disclosure: "disclosure",
  "Form Controls": "form-controls",
  Media: "media",
  Overlays: "overlays",
  "Status & Feedback": "status-feedback",
  Cards: "cards",
  "Forms & Feedback": "forms",
  Layout: "layout",
  Navigation: "navigation",
  Content: "content",
  Product: "product"
};

export function DocComponentsSection() {
  return (
    <SectionRoot id="components">
      <SectionBody>
        <SectionHeader>
          <SectionTagline>Components</SectionTagline>
          <SectionTitle>Shared, typed, accessible</SectionTitle>
          <SectionDescription>
            styled-components + TypeScript. Every component reads from CSS variables, supports
            light/dark tones, and ships with visible focus states.
          </SectionDescription>
        </SectionHeader>
        {CATEGORY_ORDER.map((category) => (
          <CategorySection key={category} id={`components-${CATEGORY_SLUGS[category]}`}>
            <CategoryHeader>
              <CategoryTitle>{category}</CategoryTitle>
              <CategoryCount>
                {countByCategory(category)}{" "}
                {countByCategory(category) === 1 ? "component" : "components"}
              </CategoryCount>
            </CategoryHeader>
            <ComponentGrid>
              {getByCategory(category).map((entry) => (
                <DocComponentCard key={entry.id} entry={entry} />
              ))}
            </ComponentGrid>
          </CategorySection>
        ))}
      </SectionBody>
    </SectionRoot>
  );
}

function countByCategory(category: DocComponentCategory): number {
  return [...DOC_PRIMITIVE_CATALOG, ...DOC_COMPONENT_CATALOG].filter(
    (entry) => entry.category === category
  ).length;
}

function getByCategory(category: DocComponentCategory): readonly DocComponentEntry[] {
  return [...DOC_PRIMITIVE_CATALOG, ...DOC_COMPONENT_CATALOG].filter(
    (entry) => entry.category === category
  );
}
