import { MainNavigation } from "@/components/header/main-navigation";
import { UtilityBar } from "@/components/header/utility-bar";
import { HeaderShell } from "./header.styles";

type SiteHeaderProps = {
  overlay?: boolean;
  reveal?: boolean;
};

export function SiteHeader({ overlay = false, reveal = true }: SiteHeaderProps) {
  return (
    <HeaderShell $overlay={overlay} $reveal={reveal}>
      <UtilityBar />
      <MainNavigation />
    </HeaderShell>
  );
}
