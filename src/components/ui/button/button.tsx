import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonRoot, type ButtonSize, type ButtonVariant } from "./button.styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export function Button({
  children,
  fullWidth = false,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <ButtonRoot $fullWidth={fullWidth} $size={size} $variant={variant} type={type} {...props}>
      {children}
    </ButtonRoot>
  );
}
