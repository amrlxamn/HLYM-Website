import { DocColorsSection } from "./doc-colors-section";
import { DocComponentsSection } from "./doc-components-section";
import { DocFooter } from "./doc-footer";
import { DocHero } from "./doc-hero";
import { DocMarquee } from "./doc-marquee";
import { DocMotionSection } from "./doc-motion-section";
import { DocPrinciplesSection } from "./doc-principles-section";
import { DocRadiiSection } from "./doc-radii-section";
import { DocResponsiveSection } from "./doc-responsive-section";
import { DocShadowsSection } from "./doc-shadows-section";
import { DocSidebar } from "./doc-sidebar";
import { DocSpacingSection } from "./doc-spacing-section";
import { DocTypographySection } from "./doc-typography-section";
import { DocZIndexSection } from "./doc-z-index-section";
import { DocContent, DocShell } from "../styles/doc-shell.styles";

export function DesignSystemPage() {
  return (
    <DocShell>
      <DocSidebar />
      <DocContent>
        <DocHero />
        <DocMarquee />
        <DocColorsSection />
        <DocTypographySection />
        <DocSpacingSection />
        <DocRadiiSection />
        <DocShadowsSection />
        <DocResponsiveSection />
        <DocZIndexSection />
        <DocMotionSection />
        <DocComponentsSection />
        <DocPrinciplesSection />
        <DocFooter />
      </DocContent>
    </DocShell>
  );
}
