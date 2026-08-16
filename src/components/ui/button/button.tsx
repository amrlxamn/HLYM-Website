import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonRoot, type ButtonSize, type ButtonVariant } from "./button.styles";

type ButtonOnlyProps = {
  children: ReactNode;
  fullWidth?: boolean;
  iconPosition?: "left" | "right";
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export type ButtonAsButton = ButtonOnlyProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

export type ButtonAsLink = ButtonOnlyProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  fullWidth = false,
  iconPosition = "right",
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps): ReactElement {
  const Icon = iconPosition === "left" ? ArrowLeft : ArrowRight;
  const isLink = (props as ButtonAsLink).as === "a";

  return (
    <ButtonRoot
      $fullWidth={fullWidth}
      $iconPosition={iconPosition}
      $size={size}
      $variant={variant}
      {...(isLink ? {} : { type: type as "button" | "submit" | "reset" })}
      {...(props as Record<string, unknown>)}
    >
      {iconPosition === "left" && <Icon aria-hidden="true" />}
      <span>{children}</span>
      {iconPosition === "right" && <Icon aria-hidden="true" />}
    </ButtonRoot>
  );
}
