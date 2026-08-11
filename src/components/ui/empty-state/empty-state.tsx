import type { ReactNode } from "react";
import {
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateRoot,
  EmptyStateTitle
} from "./empty-state.styles";

export type EmptyStateProps = {
  action?: ReactNode;
  description: string;
  icon: ReactNode;
  title: string;
};

export function EmptyState({ action, description, icon, title }: EmptyStateProps) {
  return (
    <EmptyStateRoot>
      <EmptyStateIcon aria-hidden="true">{icon}</EmptyStateIcon>
      <EmptyStateTitle>{title}</EmptyStateTitle>
      <EmptyStateDescription>{description}</EmptyStateDescription>
      {action}
    </EmptyStateRoot>
  );
}
