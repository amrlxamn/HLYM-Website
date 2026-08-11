import type { DocComponentEntry } from "../types/design-system-docs.types";
import {
  CardBody,
  CardDescription,
  CardName,
  CardShell,
  CardTag,
  CodeBlock
} from "../styles/doc-component-card.styles";
import { DocLivePreview } from "./doc-live-preview";
import { DocPropTable } from "./doc-prop-table";

export function DocComponentCard({ entry }: { entry: DocComponentEntry }) {
  return (
    <CardShell id={`component-${entry.id}`}>
      <DocLivePreview entry={entry} />
      <CardBody>
        <CardTag>{entry.category}</CardTag>
        <CardName>{entry.name}</CardName>
        <CardDescription>{entry.description}</CardDescription>
        <CodeBlock>{entry.code}</CodeBlock>
        <DocPropTable props={entry.props} />
      </CardBody>
    </CardShell>
  );
}
