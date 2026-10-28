import styled from "styled-components";
import { CorporateStory } from "@/features/corporate-page/corporate-page.styles";
import {
  NewsPageHeader,
  NewsPageMain,
  NewsPageSection
} from "@/features/news-events/news-events.styles";

export const UtilityMain = styled(NewsPageMain)`
  padding-bottom: clamp(80px, 10vw, 148px);
`;

export const UtilityIntro = styled(NewsPageHeader)`
  max-width: 780px;

  h1 {
    letter-spacing: -0.03em;
    margin-bottom: var(--space-6);
  }
`;

export const UtilitySection = styled(NewsPageSection)`
  > h2 {
    margin-bottom: var(--space-6);
  }

  > p {
    font-weight: 300;
    max-width: 66ch;
  }

  > p a {
    color: var(--color-text-primary);
    text-decoration-color: var(--red);
    text-underline-offset: 4px;
  }
`;

export const UtilitySplit = styled(CorporateStory)`
  padding: var(--space-12) 0 var(--space-16);

  img {
    aspect-ratio: 4 / 3;
    display: block;
    height: auto;
  }

  @media (max-width: 760px) {
    padding: var(--space-12) 0;
  }
`;

export const UtilityLogo = styled.div`
  align-items: center;
  background: #f3f4f5;
  display: flex;
  justify-content: center;
  min-height: 360px;
  padding: var(--space-12);

  img {
    height: auto;
    max-width: 420px;
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: 760px) {
    min-height: 240px;
  }
`;

export const UtilityImageLinks = styled.div`
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(2, minmax(0, 1fr));

  a {
    border-bottom: 1px solid var(--color-border-subtle);
    color: var(--color-text-primary);
    display: block;
    font-size: clamp(20px, 2vw, 28px);
    font-weight: 500;
    padding-bottom: var(--space-6);
    text-decoration: none;
    text-transform: uppercase;
  }

  img {
    aspect-ratio: 16 / 9;
    display: block;
    margin-bottom: var(--space-6);
    object-fit: cover;
    width: 100%;
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
    grid-template-columns: 1fr;
  }
`;

export const UtilityBenefits = styled.ul`
  display: grid;
  gap: var(--space-8) var(--space-6);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  list-style: none;
  margin: var(--space-12) 0 0;
  padding: 0;

  li {
    border-top: 1px solid var(--color-border-subtle);
    padding-top: var(--space-6);
  }

  img {
    height: 96px;
    object-fit: contain;
    object-position: left center;
    width: 96px;
  }

  h3 {
    font-size: 17px;
    line-height: 1.4;
    margin: var(--space-6) 0 0;
    text-transform: uppercase;
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const UtilityDetailList = styled.dl`
  display: grid;
  gap: 0 var(--space-12);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: var(--space-12) 0 0;

  div {
    border-top: 1px solid var(--color-border-subtle);
    padding: var(--space-6) 0;
  }

  dt {
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
  }

  dd {
    color: var(--color-text-dim);
    font-size: 16px;
    line-height: 1.5;
    margin: var(--space-3) 0 0;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const UtilityQuestions = styled.div`
  border-top: 1px solid var(--color-border-subtle);
  margin-top: var(--space-8);

  details {
    border-bottom: 1px solid var(--color-border-subtle);
  }

  summary {
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    padding: var(--space-6) 0;
  }

  summary:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: 2px;
  }

  p {
    color: var(--color-text-dim);
    line-height: 1.5;
    margin: 0;
    max-width: 70ch;
    padding-bottom: var(--space-6);
  }
`;

export const UtilitySchedule = styled.div`
  margin-top: var(--space-12);

  > img {
    aspect-ratio: 2.5 / 1;
    display: block;
    margin-bottom: var(--space-8);
    object-fit: cover;
    width: 100%;
  }

  h3 {
    font-size: clamp(22px, 2.6vw, 32px);
    font-weight: 500;
    margin: 0 0 var(--space-6);
    text-transform: uppercase;
  }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    border-top: 1px solid var(--color-border-subtle);
    display: grid;
    gap: var(--space-4);
    grid-template-columns: 64px minmax(120px, 0.5fr) minmax(0, 1fr);
    padding: var(--space-5) 0;
  }

  li:last-child {
    border-bottom: 1px solid var(--color-border-subtle);
  }

  li span:first-child {
    color: var(--red);
    font-weight: 700;
  }

  @media (max-width: 760px) {
    > img {
      aspect-ratio: 4 / 3;
    }

    li {
      grid-template-columns: 36px minmax(0, 1fr);
    }

    li span:last-child {
      grid-column: 2;
    }
  }
`;

export const UtilityDirectory = styled.div`
  margin-top: var(--space-8);

  details {
    border-top: 1px solid var(--color-border-subtle);
  }

  details:last-child {
    border-bottom: 1px solid var(--color-border-subtle);
  }

  summary {
    cursor: pointer;
    font-size: clamp(22px, 3vw, 32px);
    font-weight: 500;
    padding: var(--space-6) 0;
    text-transform: uppercase;
  }

  summary:focus-visible,
  a:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: 3px;
  }

  details[open] summary {
    color: var(--red);
  }

  ul {
    list-style: none;
    margin: 0 0 var(--space-8);
    padding: 0;
  }

  li {
    align-items: baseline;
    border-top: 1px solid var(--color-border-subtle);
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    justify-content: space-between;
    padding: var(--space-5) 0;
  }

  strong {
    font-size: 17px;
    font-weight: 700;
  }

  li div {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-5);
  }

  a {
    color: var(--color-text-primary);
    font-size: 12px;
    font-weight: 700;
    text-decoration-color: var(--red);
    text-underline-offset: 4px;
    text-transform: uppercase;
  }

  a:hover {
    color: var(--red);
  }
`;

export const UtilityCareers = styled.ul`
  border-top: 1px solid var(--color-border-subtle);
  list-style: none;
  margin: var(--space-8) 0 var(--space-8);
  padding: 0;

  li {
    align-items: center;
    border-bottom: 1px solid var(--color-border-subtle);
    display: grid;
    gap: var(--space-5);
    grid-template-columns: minmax(0, 1fr) auto;
    padding: var(--space-7) 0;
  }

  strong {
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 500;
  }

  span {
    color: var(--color-text-dim);
    font-size: 14px;
  }

  @media (max-width: 760px) {
    li {
      align-items: start;
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }
  }
`;
