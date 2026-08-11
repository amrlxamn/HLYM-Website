import type { HTMLAttributes, ReactNode } from "react";
import { BadgeRoot, type BadgeVariant } from "./badge.styles";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: BadgeVariant;
};

export function Badge({ children, variant = "default", ...props }: BadgeProps) {
  return (
    <BadgeRoot $variant={variant} {...props}>
      {children}
    </BadgeRoot>
  );
}
