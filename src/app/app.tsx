import { DealerLocatorSection } from "@/components/dealer-locator/dealer-locator-section";
import { FooterSection } from "@/components/footer/footer-section";
import { FeaturedSection } from "@/components/featured/featured-section";
import { SiteHeader } from "@/components/header/site-header";
import { HeroSection } from "@/components/hero/hero-section";
import { ModelsSection } from "@/components/models/models-section";
import { NewsSection } from "@/components/news/news-section";
import { SplashScreen } from "@/components/splash/splash-screen";
import { useSplashScreen } from "@/components/splash/use-splash-screen";
import { PageShell } from "@/styles/layout";

export function App() {
  const { isVisible, isRemoved, onComplete } = useSplashScreen();

  return (
    <>
      {!isRemoved && <SplashScreen isVisible={isVisible} onComplete={onComplete} />}
      <PageShell id="top">
        <SiteHeader />
        <main>
          <HeroSection />
          <ModelsSection />
          <FeaturedSection />
          <NewsSection />
          <DealerLocatorSection />
          <FooterSection />
        </main>
      </PageShell>
    </>
  );
}
