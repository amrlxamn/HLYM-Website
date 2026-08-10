import { lazy, Suspense } from "react";
import { CustomCursor } from "@/components/cursor/custom-cursor";
import { SplashScreen } from "@/components/splash/splash-screen";
import { useSplashScreen } from "@/components/splash/use-splash-screen";
import { HomePage } from "@/app/home-page";
import { ProductsPage } from "@/app/products-page";
import { ContactPage } from "@/features/contact-page";

const YamahaNetworkPage = lazy(() =>
  import("@/features/yamaha-network").then((module) => ({ default: module.YamahaNetworkPage }))
);

export function App() {
  const { isVisible, isRemoved, onComplete } = useSplashScreen();
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;
  let page = <HomePage />;

  if (pathname.startsWith("/products")) {
    page = <ProductsPage />;
  }

  if (pathname.startsWith("/contact-us")) {
    page = <ContactPage />;
  }

  if (pathname.startsWith("/yamaha-network")) {
    page = <YamahaNetworkPage />;
  }

  return (
    <>
      <CustomCursor />
      {!isRemoved && <SplashScreen isVisible={isVisible} onComplete={onComplete} />}
      <Suspense fallback={null}>{page}</Suspense>
    </>
  );
}
