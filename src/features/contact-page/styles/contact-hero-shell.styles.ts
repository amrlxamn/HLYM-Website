import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ContactHeroRoot = styled.section`
  background: var(--color-bg-canvas);
  color: var(--color-text-inverse);
  min-height: 720px;
  overflow: hidden;
  position: relative;
`;

export const ContactHeroBackground = styled.img`
  height: 550px;
  inset: 0;
  object-position: center;
  position: absolute;
  width: 100%;
`;

export const ContactHeroGradient = styled.div`
  background: var(--contact-hero-gradient-left);
  height: 550px;
  inset: 0;
  position: absolute;
`;

export const ContactHeroVerticalShade = styled.div`
  background: var(--contact-hero-gradient-vertical);
  height: 550px;
  inset: 0;
  position: absolute;
`;

export const ContactHeroInner = styled(Container)`
  display: grid;
  gap: var(--space-12);
  padding: var(--space-24) 0;
  position: relative;
  z-index: 1;
`;

export const ContactHeroContentPanel = styled.div`
  display: grid;
  gap: var(--space-6);
  max-width: 600px;
`;

export const ContactHeroTitle = styled.h1`
  align-items: center;
  display: flex;
  font-size: 56px;
  font-weight: var(--font-weight-light);
  gap: var(--space-4);
  letter-spacing: -2px;
  line-height: 1.05;
  margin: 0;
  text-transform: uppercase;

  &::before {
    background: var(--red);
    content: "";
    flex: 0 0 2px;
    height: 52px;
  }

  @media (max-width: 980px) {
    font-size: 40px;
  }

  @media (max-width: 640px) {
    font-size: 28px;

    &::before {
      height: 32px;
    }
  }
`;

export const ContactHeroCopy = styled.p`
  color: var(--color-text-neutral-dark);
  font-size: var(--font-size-description);
  line-height: var(--leading-relaxed);
  margin: 0;
  max-width: 600px;
`;

export const ContactHeroCardGrid = styled.div`
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
