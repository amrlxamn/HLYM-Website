import type { ReactNode } from "react";
import {
  SectionHeaderAccent,
  SectionHeaderAction,
  SectionHeaderCopy,
  SectionHeaderIntro,
  SectionHeaderRoot,
  SectionHeaderTitle
} from "./section-header.styles";
import { SectionTag } from "./section-tag";

type SectionHeaderProps = {
  action?: ReactNode;
  align?: "center" | "left";
  heading: ReactNode;
  intro?: ReactNode;
  tagLabel?: string;
  tagVariant?: "accent" | "category";
  tone?: "dark" | "light";
};

export function SectionHeader({
  action,
  align = "left",
  heading,
  intro,
  tagLabel,
  tagVariant = "accent",
  tone = "light"
}: SectionHeaderProps) {
  return (
    <SectionHeaderRoot $align={align} $hasAction={Boolean(action)}>
      <SectionHeaderCopy $align={align}>
        {tagLabel ? (
          <SectionTag
            accent={tagVariant === "accent"}
            category={tagVariant === "category"}
            centered={align === "center"}
            label={tagLabel}
            lineWidth="wide"
          />
        ) : null}
        <SectionHeaderTitle $tone={tone}>{heading}</SectionHeaderTitle>
        {intro ? <SectionHeaderIntro $tone={tone}>{intro}</SectionHeaderIntro> : null}
      </SectionHeaderCopy>
      {action ? <SectionHeaderAction>{action}</SectionHeaderAction> : null}
    </SectionHeaderRoot>
  );
}

export { SectionHeaderAccent };
