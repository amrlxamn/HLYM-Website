import { Check } from "lucide-react";
import type { ChangeEventHandler } from "react";
import { CheckboxBox, CheckboxInput, CheckboxLabel } from "./checkbox.styles";

export type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  label: string;
  name?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function Checkbox({ checked, disabled, label, name, onChange }: CheckboxProps) {
  return (
    <CheckboxLabel>
      <CheckboxInput
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        type="checkbox"
      />
      <CheckboxBox $checked={checked} aria-hidden="true">
        <Check size={13} strokeWidth={2.5} />
      </CheckboxBox>
      {label}
    </CheckboxLabel>
  );
}
