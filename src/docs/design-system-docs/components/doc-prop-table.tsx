import type { DocPropDef } from "../types/design-system-docs.types";
import {
  PropDefault,
  PropName,
  PropRequired,
  PropRow,
  PropTable,
  PropType
} from "../styles/doc-component-card.styles";

export function DocPropTable({ props }: { props: readonly DocPropDef[] }) {
  if (props.length === 0) {
    return (
      <PropTable>
        <PropRow>
          <PropName>No props</PropName>
          <PropType>Self-contained</PropType>
        </PropRow>
      </PropTable>
    );
  }

  return (
    <PropTable>
      {props.map((prop) => (
        <PropRow key={prop.name}>
          <PropName>{prop.name}</PropName>
          <PropType>{prop.type}</PropType>
          <PropRequired $required={prop.required}>{prop.required ? "Req" : "Opt"}</PropRequired>
          {prop.default ? <PropDefault>{prop.default}</PropDefault> : null}
        </PropRow>
      ))}
    </PropTable>
  );
}
