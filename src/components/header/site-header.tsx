import { MainNavigation } from "@/components/header/main-navigation";
import { UtilityBar } from "@/components/header/utility-bar";
import { HeaderShell } from "./header.styles";

type SiteHeaderProps = {
  fullWidthNavigation?: boolean;
  overlay?: boolean;
};

export function SiteHeader({ fullWidthNavigation = false, overlay = false }: SiteHeaderProps) {
  return (
    <HeaderShell $overlay={overlay}>
      <UtilityBar />
      <MainNavigation fullWidth={fullWidthNavigation} />
    </HeaderShell>
  );
}
