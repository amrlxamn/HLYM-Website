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

const DesignSystemPage = lazy(() =>
  import("@/docs/design-system-docs").then((module) => ({ default: module.DesignSystemPage }))
);

const SupportPortalPage = lazy(() =>
  import("@/features/support-portal").then((module) => ({ default: module.SupportPortalPage }))
);

const SupportAccessPage = lazy(() =>
  import("@/features/support-portal").then((module) => ({ default: module.SupportAccessPage }))
);

const SupportTicketPage = lazy(() =>
  import("@/features/support-portal").then((module) => ({ default: module.SupportTicketPage }))
);

const SupportAdminPage = lazy(() =>
  import("@/features/support-portal").then((module) => ({ default: module.SupportAdminPage }))
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

  if (pathname === "/support" || pathname === "/support/") {
    page = <SupportPortalPage />;
  }

  if (pathname.startsWith("/support/access")) {
    page = <SupportAccessPage />;
  }

  if (pathname.startsWith("/support/ticket")) {
    page = <SupportTicketPage />;
  }

  if (pathname.startsWith("/support/admin")) {
    page = <SupportAdminPage />;
  }

  if (pathname.startsWith("/design-system")) {
    return (
      <>
        <CustomCursor />
        {!isRemoved && <SplashScreen isVisible={isVisible} onComplete={onComplete} />}
        <Suspense fallback={null}>
          <DesignSystemPage />
        </Suspense>
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      {!isRemoved && <SplashScreen isVisible={isVisible} onComplete={onComplete} />}
      <Suspense fallback={null}>{page}</Suspense>
    </>
  );
}
