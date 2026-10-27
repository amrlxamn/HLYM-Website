import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import {
  PRODUCT_HERO_VIDEO,
  ProductOverviewSection,
  ProductShowcasePage,
  ProductVideoHero
} from "@/features/product-page";
import { PRODUCT_CATALOG } from "@/features/product-page/constants/product-catalog.constants";
import officialFeatures from "@/features/product-page/constants/product-official-features.json";
import { PRODUCT_FULL_SPECIFICATION_CONTENT } from "@/features/product-page/constants/product-full-specification.constants";
import { PRODUCT_OVERVIEW_CONTENT } from "@/features/product-page/constants/product-overview.constants";
import { ProductPageAnchor } from "@/features/product-page/styles/product-page-anchor.styles";
import { PageShell } from "@/styles/layout";

export function ProductsPage({ slug = "nvx" }: { slug?: string }) {
  const product = PRODUCT_CATALOG.find((item) => item.slug === slug);

  if (!product) {
    return (
      <PageShell>
        <SiteHeader />
        <main style={{ padding: "8rem 2rem" }}>
          <h1>Model not found</h1>
          <a href="/products">Explore all motorcycles</a>
        </main>
        <FooterSection />
      </PageShell>
    );
  }

  const { model, content } = product;
  const officialItems = officialFeatures[slug as keyof typeof officialFeatures];
  const features =
    slug === "nvx"
      ? PRODUCT_FULL_SPECIFICATION_CONTENT
      : {
          titleLines: ["Built to move.", "Made for the ride."] as [string, string],
          items: officialItems?.length
            ? officialItems
            : content?.features.length
              ? content.features
              : [
                  {
                    title: model.name,
                    description: `Explore the Yamaha ${model.name}.`,
                    image: { alt: model.alt, src: product.image }
                  }
                ]
        };

  return (
    <PageShell>
      <SiteHeader />
      <main>
        <ProductVideoHero
          video={
            slug === "nvx"
              ? PRODUCT_HERO_VIDEO
              : {
                  ...PRODUCT_HERO_VIDEO,
                  alt: `Yamaha NVX film, shown as a placeholder for the ${model.name}`,
                  ariaLabel: `Yamaha ${model.name} hero video`,
                  copy: `Discover the Yamaha ${model.name}.`
                }
          }
        />
        <ProductPageAnchor id="product-models">
          <ProductShowcasePage colors={product.colors} model={model} />
        </ProductPageAnchor>
        <ProductPageAnchor id="product-overview">
          <ProductOverviewSection
            description={
              slug === "nvx"
                ? PRODUCT_OVERVIEW_CONTENT.description
                : `Explore the Yamaha ${model.name} and the details that make it distinctive.`
            }
            features={features}
            gallery={slug === "nvx" ? undefined : product.overview}
            model={model}
            specifications={product.specifications}
          />
        </ProductPageAnchor>
      </main>
      <ProductPageAnchor id="product-accessories">
        <FooterSection />
      </ProductPageAnchor>
    </PageShell>
  );
}
