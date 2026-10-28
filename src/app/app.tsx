import { lazy, Suspense } from "react";
import { SplashScreen } from "@/components/splash/splash-screen";
import { useSplashScreen } from "@/components/splash/use-splash-screen";
import { HomePage } from "@/app/home-page";
import { ProductsPage } from "@/app/products-page";
import { ProductsCatalogPage } from "@/app/products-catalog-page";
import { ContactPage } from "@/features/contact-page";

const YamahaNetworkPage = lazy(() =>
  import("@/features/yamaha-network").then((module) => ({ default: module.YamahaNetworkPage }))
);

const CorporatePage = lazy(() =>
  import("@/features/corporate-page/corporate-page").then((module) => ({
    default: module.CorporatePage
  }))
);

const NewsEventsPage = lazy(() =>
  import("@/features/news-events/news-events-pages").then((module) => ({
    default: module.NewsEventsPage
  }))
);

const YamalubeScanPage = lazy(() =>
  import("@/features/news-events/news-events-pages").then((module) => ({
    default: module.YamalubeScanPage
  }))
);

const SitePages = lazy(() =>
  import("@/features/site-pages/site-pages").then((module) => ({ default: module.SitePages }))
);

const DesignSystemPage = lazy(() =>
  import("@/docs/design-system-docs").then((module) => ({ default: module.DesignSystemPage }))
);

export function App() {
  const { isVisible, isRemoved, onComplete } = useSplashScreen();
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;
  let page = <HomePage />;

  if (pathname === "/products" || pathname === "/products/") {
    page = <ProductsCatalogPage />;
  } else if (pathname === "/nvx" || pathname === "/nvx/") {
    page = <ProductsPage slug="nvx" />;
  } else if (pathname.startsWith("/products/")) {
    page = <ProductsPage slug={pathname.split("/")[2] ?? ""} />;
  }

  if (pathname.startsWith("/contact-us")) {
    page = <ContactPage />;
  }

  if (pathname.startsWith("/yamaha-network")) {
    page = <YamahaNetworkPage />;
  }

  if (
    [
      "/corporate",
      "/company-introduction",
      "/4-millionth-rollout",
      "/social-responsibility",
      "/principal-policies"
    ].includes(pathname.replace(/\/$/, ""))
  ) {
    page = <CorporatePage path={pathname.replace(/\/$/, "")} />;
  }

  if (pathname === "/news-events" || pathname === "/news-events/") {
    page = <NewsEventsPage />;
  }

  if (pathname === "/yamalube-scan" || pathname === "/yamalube-scan/") {
    page = <YamalubeScanPage />;
  }

  const sitePagePath = pathname.replace(/\/$/, "");
  if (
    ["/after-sales", "/yez", "/y-connect", "/motorsports", "/resources", "/career"].includes(
      sitePagePath
    )
  ) {
    page = <SitePages path={sitePagePath} />;
  }

  if (pathname.startsWith("/design-system")) {
    return (
      <>
        {!isRemoved && <SplashScreen isVisible={isVisible} onComplete={onComplete} />}
        <Suspense fallback={null}>
          <DesignSystemPage />
        </Suspense>
      </>
    );
  }

  return (
    <>
      {!isRemoved && <SplashScreen isVisible={isVisible} onComplete={onComplete} />}
      <Suspense fallback={null}>{page}</Suspense>
    </>
  );
}
