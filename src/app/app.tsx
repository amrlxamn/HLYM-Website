import { CustomCursor } from "@/components/cursor/custom-cursor";
import { SplashScreen } from "@/components/splash/splash-screen";
import { useSplashScreen } from "@/components/splash/use-splash-screen";
import { HomePage } from "@/app/home-page";
import { ProductsPage } from "@/app/products-page";

export function App() {
  const { isVisible, isRemoved, onComplete } = useSplashScreen();
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;
  const isProductsPage = pathname.startsWith("/products");

  return (
    <>
      <CustomCursor />
      {!isRemoved && <SplashScreen isVisible={isVisible} onComplete={onComplete} />}
      {isProductsPage ? <ProductsPage /> : <HomePage />}
    </>
  );
}
