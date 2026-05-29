import { CustomCursor } from "@/components/cursor/custom-cursor";
import { HomePage } from "@/app/home-page";
import { ProductsPage } from "@/app/products-page";
import { ContactPage } from "@/features/contact-page";

export function App() {
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;
  let page = <HomePage />;

  if (pathname.startsWith("/products")) {
    page = <ProductsPage />;
  }

  if (pathname.startsWith("/contact-us")) {
    page = <ContactPage />;
  }

  return (
    <>
      <CustomCursor />
      {page}
    </>
  );
}
