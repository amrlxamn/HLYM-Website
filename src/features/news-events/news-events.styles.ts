import styled from "styled-components";
import { NewsGrid } from "@/components/news/news.styles";
import {
  ContactHeroInner,
  ContactHeroTitle
} from "@/features/contact-page/styles/contact-hero-shell.styles";
import { CorporateHero } from "@/features/corporate-page/corporate-page.styles";

export const NewsPageMain = styled.main`
  background: var(--color-bg-canvas);
  color: var(--color-text-primary);
  padding-bottom: var(--space-24);
`;

export const NewsHero = styled(CorporateHero)`
  @media (max-width: 640px) {
    ${ContactHeroInner} {
      padding-bottom: var(--space-4);
    }
  }
`;

export const NewsHeroTitle = styled(ContactHeroTitle)`
  letter-spacing: -0.025em;

  @media (max-width: 640px) {
    font-size: 26px;
  }
`;

export const NewsPageGrid = styled(NewsGrid)`
  margin-top: 0;
  width: calc(100% - 80px);

  @media (max-width: 760px) {
    margin-top: 0;
    width: calc(100% - 32px);
  }
`;

export const NewsPageHeader = styled.header`
  padding: clamp(100px, 10vw, 148px) 0 var(--space-16);

  @media (max-width: 760px) {
    padding: 100px 0 var(--space-12);
  }
`;

export const ContestHeroAction = styled.div`
  margin-top: var(--space-1);

  p {
    color: var(--color-text-inverse);
    font-size: 16px;
    margin: 0;
  }
`;

export const NewsPageSection = styled.section`
  border-top: 1px solid var(--color-border-subtle);
  margin-top: var(--space-20);
  padding-top: var(--space-16);

  h2 {
    font-size: clamp(28px, 3vw, 38px);
    font-weight: 500;
    margin: 0 0 var(--space-5);
    text-transform: uppercase;
  }

  > p {
    color: var(--color-text-dim);
    font-size: 16px;
    line-height: 1.5;
    margin: 0 0 var(--space-8);
  }

  @media (max-width: 760px) {
    margin-top: var(--space-16);
    padding-top: var(--space-12);
  }
`;

export const ContestWinnersSection = styled.section`
  padding-top: 0;
`;

export const WinnerArchive = styled.ol`
  list-style: none;
  margin: 0;
  max-width: 780px;
  padding: 0;

  li {
    display: grid;
    gap: var(--space-5);
    grid-template-columns: 54px minmax(0, 1fr);
    margin-bottom: var(--space-16);
  }

  .winner-date {
    color: var(--color-text-dim);
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;
    padding-top: 5px;
    text-align: right;
    text-transform: uppercase;
  }

  .winner-date small {
    display: block;
    font-size: 11px;
    font-weight: 400;
  }

  li > div {
    border-left: 1px solid var(--color-border-subtle);
    padding-left: var(--space-6);
  }

  a {
    color: var(--color-text-primary);
    display: inline-block;
    font-size: clamp(20px, 2.4vw, 30px);
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover,
  a:focus-visible {
    color: var(--red);
  }

  a:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: 4px;
  }

  @media (max-width: 760px) {
    li {
      gap: var(--space-3);
      grid-template-columns: 42px minmax(0, 1fr);
      margin-bottom: var(--space-12);
    }

    li > div {
      padding-left: var(--space-4);
    }
  }
`;
