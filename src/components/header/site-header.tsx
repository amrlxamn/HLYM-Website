import { MainNavigation } from "@/components/header/main-navigation";
import { UtilityBar } from "@/components/header/utility-bar";
import { HeaderShell } from "./header.styles";

export function SiteHeader() {
  return (
    <HeaderShell>
      <UtilityBar />
      <MainNavigation />
    </HeaderShell>
  );
}
