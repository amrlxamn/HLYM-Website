import styled from "styled-components";
import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import { PRODUCT_CATALOG } from "@/features/product-page/constants/product-catalog.constants";
import { PageShell } from "@/styles/layout";

const CatalogMain = styled.main`
  background: var(--color-bg-canvas);
  color: var(--color-text-primary);
  padding: clamp(64px, 9vw, 140px) max(24px, calc((100vw - 1280px) / 2)) 120px;
`;

const CatalogHeading = styled.header`
  margin-bottom: clamp(48px, 7vw, 88px);

  p {
    color: var(--red);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(60px, 11vw, 150px);
    font-weight: 900;
    letter-spacing: -0.065em;
    line-height: 0.9;
    margin: 18px 0 0;
    text-transform: uppercase;
  }
`;

const CatalogGrid = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background: var(--color-border-muted);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CatalogCard = styled.a`
  background: var(--color-bg-canvas);
  color: inherit;
  display: grid;
  gap: 12px;
  padding: clamp(20px, 3vw, 40px);
  text-decoration: none;
  transition: background 200ms ease;

  &:hover,
  &:focus-visible {
    background: var(--color-bg-surface);
  }

  &:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: -2px;
  }

  img {
    aspect-ratio: 4 / 3;
    height: auto;
    object-fit: contain;
    transition: transform 300ms ease;
    width: 100%;
  }

  &:hover img {
    transform: scale(1.035);
  }

  small {
    color: var(--red);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  strong {
    font-size: clamp(23px, 2.6vw, 38px);
    font-weight: 900;
    letter-spacing: -0.035em;
    line-height: 1.08;
    text-transform: uppercase;
  }

  span {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    img {
      transition: none;
    }
  }
`;

export function ProductsCatalogPage() {
  return (
    <PageShell>
      <SiteHeader />
      <CatalogMain>
        <CatalogHeading>
          <p>Find your ride / {PRODUCT_CATALOG.length} models</p>
          <h1>Our motorcycles.</h1>
        </CatalogHeading>
        <CatalogGrid>
          {PRODUCT_CATALOG.map((product) => (
            <CatalogCard href={`/products/${product.slug}`} key={product.slug}>
              <img alt={`Yamaha ${product.name}`} loading="lazy" src={product.image} />
              <small>{product.category}</small>
              <strong>{product.name}</strong>
              <span>Explore model ↗</span>
            </CatalogCard>
          ))}
        </CatalogGrid>
      </CatalogMain>
      <FooterSection />
    </PageShell>
  );
}
