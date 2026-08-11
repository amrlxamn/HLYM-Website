import type { InputHTMLAttributes } from "react";
import { FieldHint, FieldLabel, FieldRoot, InputControl } from "./form-field.styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  hint?: string;
  label: string;
};

export function Input({ error, hint, id, label, ...props }: InputProps) {
  const fieldId = id ?? props.name ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <FieldRoot>
      <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>
      <InputControl
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
