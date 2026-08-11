import type { SelectHTMLAttributes } from "react";
import { FieldHint, FieldLabel, FieldRoot, SelectControl } from "./form-field.styles";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  hint?: string;
  label: string;
  options: readonly SelectOption[];
};

export function Select({ error, hint, id, label, options, ...props }: SelectProps) {
  const fieldId = id ?? props.name ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <FieldRoot>
      <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>
      <SelectControl
        $invalid={Boolean(error)}
        aria-describedby={error || hint ? `${fieldId}-hint` : undefined}
        aria-invalid={Boolean(error)}
        id={fieldId}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectControl>
      {error || hint ? (
        <FieldHint $invalid={Boolean(error)} id={`${fieldId}-hint`}>
          {error ?? hint}
        </FieldHint>
      ) : null}
    </FieldRoot>
  );
}
