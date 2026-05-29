import { DealerLocatorSection } from "@/components/dealer-locator/dealer-locator-section";
import { FeaturedModelSpotlight } from "@/components/featured/featured-model-spotlight";
import { FeaturedSection } from "@/components/featured/featured-section";
import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import { HeroSection } from "@/components/hero/hero-section";
import { ModelsSection } from "@/components/models/models-section";
import { NewsSection } from "@/components/news/news-section";
import { PageShell } from "@/styles/layout";
import { useHomeHeroIntro } from "./use-home-hero-intro";

export function HomePage() {
  const isHeroIntroComplete = useHomeHeroIntro();

  return (
    <PageShell id="top">
      <SiteHeader overlay reveal={isHeroIntroComplete} />
      <main>
        <HeroSection revealContent={isHeroIntroComplete} />
        <ModelsSection />
        <FeaturedSection />
        <FeaturedModelSpotlight />
        <NewsSection />
        <DealerLocatorSection />
      </main>
      <FooterSection />
    </PageShell>
  );
}
