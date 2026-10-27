import styled from "styled-components";
import { ButtonRoot } from "@/components/ui/button/button.styles";
import {
  ContactHeroBackground,
  ContactHeroGradient,
  ContactHeroInner,
  ContactHeroRoot
} from "@/features/contact-page/styles/contact-hero-shell.styles";
import { ProductFeatureTitle } from "@/features/product-page/styles/product-features-section.styles";
import {
  ProductOverviewDescription,
  ProductOverviewTitle
} from "@/features/product-page/styles/product-overview-copy.styles";

export const CorporateRoot = styled.div`
  background: #fff;
  color: #101216;
`;

export const CorporateContainer = styled.div`
  margin-inline: auto;
  max-width: 1280px;
  width: calc(100% - 80px);

  @media (max-width: 760px) {
    width: calc(100% - 32px);
  }
`;

export const CorporateHero = styled(ContactHeroRoot)`
  min-height: 650px;

  ${ContactHeroBackground} {
    object-fit: cover;
    object-position: center 40%;
  }

  ${ContactHeroGradient} {
    background: linear-gradient(
      90deg,
      rgba(10, 10, 10, 0.86),
      rgba(10, 10, 10, 0.64) 46%,
      rgba(10, 10, 10, 0.12) 82%,
      transparent
    );
  }

  ${ContactHeroInner} {
    padding-top: calc(var(--header-height-total) + var(--space-30) + var(--space-16));
    padding-bottom: var(--space-16);
  }

  @media (max-width: 980px) {
    min-height: 480px;

    ${ContactHeroInner} {
      padding-top: calc(var(--header-height-total) + var(--space-16) + var(--space-6));
    }
  }

  @media (max-width: 640px) {
    min-height: 380px;

    ${ContactHeroBackground} {
      object-position: 62% center;
    }

    ${ContactHeroGradient} {
      background: linear-gradient(90deg, rgba(10, 10, 10, 0.82), rgba(10, 10, 10, 0.48));
    }

    ${ContactHeroInner} {
      padding-top: calc(var(--header-height-total) + var(--space-12));
      padding-bottom: var(--space-8);
    }
  }
`;

export const CorporateTabBar = styled.div`
  background: #fff;
  position: relative;
  z-index: 2;
`;

export const CorporateSection = styled.section`
  padding: clamp(80px, 10vw, 148px) 0;

  @media (max-width: 760px) {
    padding: 72px 0;
  }

  ${CorporateTabBar} + & {
    padding-top: clamp(100px, 10vw, 148px);

    @media (max-width: 760px) {
      padding-top: 100px;
    }
  }
`;

export const CorporateLead = styled(ProductOverviewTitle)`
  align-items: flex-start;
  line-height: 1.2;
  margin-bottom: var(--space-6);
  max-width: none;
  text-wrap: balance;

  &::before {
    margin-top: 3px;
  }
`;

export const CorporateCopy = styled(ProductOverviewDescription)`
  color: var(--color-text-dim);
  line-height: 1.45;
  max-width: none;

  & + & {
    margin-top: var(--space-5);
  }
`;

export const CorporateStatement = styled.section`
  background:
    linear-gradient(180deg, rgba(5, 5, 8, 0.12), rgba(5, 5, 8, 0.72)),
    linear-gradient(90deg, rgba(5, 5, 8, 0.88), rgba(5, 5, 8, 0.28)),
    url("/assets/hlym/contact/contact-enquiry-card-bg.webp") center / cover no-repeat;
  color: #fff;
  padding: 96px 0;
`;

export const CorporateStatementCopy = styled.p`
  color: var(--color-text-inverse);
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
  max-width: none;
  text-wrap: balance;
  text-transform: uppercase;
`;

export const CorporateStory = styled.article`
  align-items: center;
  display: grid;
  gap: clamp(40px, 6vw, 110px);
  grid-template-columns: minmax(0, 1.12fr) minmax(0, 1fr);
  padding: clamp(56px, 7vw, 112px) 0;

  & + & {
    border-top: 1px solid #d9dcde;
  }

  img {
    aspect-ratio: 1.35;
    object-fit: cover;
    width: 100%;
  }

  p {
    color: var(--color-text-dim);
    font-size: 18px;
    font-weight: 300;
    line-height: 1.45;
    margin: 0 0 28px;

    @media (max-width: 760px) {
      font-size: 16px;
    }
  }

  ${ButtonRoot} {
    max-width: 100%;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const CorporateStoryTitle = styled(ProductFeatureTitle)`
  color: var(--color-text-primary);
  line-height: 1.2;
  margin: 0 0 var(--space-4);
`;

export const CorporateWideImage = styled.figure`
  margin: 0;

  img {
    display: block;
    height: auto;
    max-height: 720px;
    object-fit: cover;
    width: 100%;
  }
`;

export const CorporateGallery = styled.div`
  display: grid;
  gap: 16px;
  grid-auto-columns: 220px;
  grid-auto-flow: column;
  overflow-x: auto;
  padding: 24px 0;
  scroll-snap-type: x mandatory;

  figure {
    margin: 0;
    scroll-snap-align: start;
  }

  img {
    aspect-ratio: 3 / 2;
    display: block;
    object-fit: cover;
    width: 100%;
  }

  figcaption {
    font-size: var(--font-size-sm);
    font-weight: 500;
    letter-spacing: var(--tracking-wider);
    padding-top: 12px;
    text-transform: uppercase;
  }
`;

export const CorporateRolloutGallery = styled.div`
  align-items: start;
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: var(--space-16);

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  a:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: 3px;
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const CorporatePolicyList = styled.div`
  margin-top: 48px;

  ${CorporateStory} {
    border-top: 1px solid #d9dcde;
  }
`;

export const CorporatePolicyBullets = styled.ul`
  color: var(--color-text-dim);
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  margin: 24px 0;
  max-width: none;
  padding-left: 24px;

  li + li {
    margin-top: 10px;
  }
`;
