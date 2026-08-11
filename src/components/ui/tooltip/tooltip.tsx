import type { ReactElement } from "react";
import { cloneElement, useId } from "react";
import { TooltipBubble, TooltipRoot } from "./tooltip.styles";

export type TooltipProps = {
  children: ReactElement<{ "aria-describedby"?: string }>;
  content: string;
  placement?: "top" | "bottom";
};

export function Tooltip({ children, content, placement = "top" }: TooltipProps) {
  const tooltipId = useId();

  return (
    <TooltipRoot>
      {cloneElement(children, { "aria-describedby": tooltipId })}
      <TooltipBubble $placement={placement} id={tooltipId} role="tooltip">
        {content}
      </TooltipBubble>
    </TooltipRoot>
  );
}
