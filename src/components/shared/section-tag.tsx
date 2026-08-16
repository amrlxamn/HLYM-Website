import { SectionTagRoot } from "./section-tag.styles";

type SectionTagProps = {
  accent?: boolean;
  category?: boolean;
  centered?: boolean;
  label: string;
  lineWidth?: "default" | "medium" | "wide";
};

export function SectionTag({
  accent = false,
  category = false,
  centered = false,
  label,
  lineWidth = "default"
}: SectionTagProps) {
  return (
    <SectionTagRoot
      $accent={accent}
      $category={category}
      $centered={centered}
      $lineWidth={lineWidth}
    >
      <span />
      <p>{label}</p>
      {category ? null : <span />}
    </SectionTagRoot>
  );
}
