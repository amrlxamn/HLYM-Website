import { DOC_STATS } from "../constants/doc-stats.constants";
import { DOC_SUBTITLE, DOC_TITLE } from "../constants/doc-nav.constants";
import {
  HeroCtaGhost,
  HeroCtaPrimary,
  HeroCtaRow,
  HeroDescription,
  HeroEyebrow,
  HeroInner,
  HeroRoot,
  HeroStat,
  HeroStatLabel,
  HeroStatValue,
  HeroStatsRow,
  HeroTitle
} from "../styles/doc-hero.styles";

export function DocHero() {
  return (
    <HeroRoot id="overview">
      <HeroInner>
        <HeroEyebrow>Design System v1.0</HeroEyebrow>
        <HeroTitle>{DOC_TITLE}</HeroTitle>
        <HeroDescription>{DOC_SUBTITLE}</HeroDescription>
        <HeroCtaRow>
          <HeroCtaPrimary href="#colors">Explore tokens</HeroCtaPrimary>
          <HeroCtaGhost href="/">Back to site</HeroCtaGhost>
        </HeroCtaRow>
      </HeroInner>
      <HeroStatsRow>
        {DOC_STATS.map((stat) => (
          <HeroStat key={stat.label}>
            <HeroStatValue>{stat.value}</HeroStatValue>
            <HeroStatLabel>{stat.label}</HeroStatLabel>
          </HeroStat>
        ))}
      </HeroStatsRow>
    </HeroRoot>
  );
}
