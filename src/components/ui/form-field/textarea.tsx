import type { TextareaHTMLAttributes } from "react";
import { FieldHint, FieldLabel, FieldRoot, TextareaControl } from "./form-field.styles";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
  hint?: string;
  label: string;
};

export function Textarea({ error, hint, id, label, ...props }: TextareaProps) {
  const fieldId = id ?? props.name ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <FieldRoot>
      <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>
      <TextareaControl
        $invalid={Boolean(error)}
        aria-describedby={error || hint ? `${fieldId}-hint` : undefined}
        aria-invalid={Boolean(error)}
        id={fieldId}
        {...props}
      />
      {error || hint ? (
        <FieldHint $invalid={Boolean(error)} id={`${fieldId}-hint`}>
          {error ?? hint}
        </FieldHint>
      ) : null}
    </FieldRoot>
  );
}
