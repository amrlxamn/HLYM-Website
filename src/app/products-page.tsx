import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import {
  ProductFullSpecificationSection,
  ProductOverviewSection,
  ProductShowcasePage,
  ProductSubHeader,
  ProductVideoHero
} from "@/features/product-page";
import { ProductPageAnchor } from "@/features/product-page/styles/product-page-anchor.styles";
import { PageShell } from "@/styles/layout";

export function ProductsPage() {
  return (
    <PageShell>
      <SiteHeader />
      <ProductSubHeader />
      <main>
        <ProductPageAnchor id="product-overview">
          <ProductVideoHero />
        </ProductPageAnchor>
        <ProductPageAnchor id="product-models" />
        <ProductPageAnchor id="product-specification">
          <ProductShowcasePage />
        </ProductPageAnchor>
        <ProductOverviewSection />
        <ProductPageAnchor id="product-features">
          <ProductFullSpecificationSection />
        </ProductPageAnchor>
      </main>
      <ProductPageAnchor id="product-accessories">
        <FooterSection />
      </ProductPageAnchor>
    </PageShell>
  );
}
