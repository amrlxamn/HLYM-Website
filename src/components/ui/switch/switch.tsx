import type { ChangeEventHandler } from "react";
import { SwitchInput, SwitchLabel, SwitchTrack } from "./switch.styles";

export type SwitchProps = {
  checked: boolean;
  disabled?: boolean;
  label: string;
  name?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function Switch({ checked, disabled, label, name, onChange }: SwitchProps) {
  return (
    <SwitchLabel>
      <SwitchInput
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        role="switch"
        type="checkbox"
      />
      <SwitchTrack $checked={checked} aria-hidden="true" />
      {label}
    </SwitchLabel>
  );
}
