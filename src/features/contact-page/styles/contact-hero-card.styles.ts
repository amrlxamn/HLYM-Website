import styled, { css } from "styled-components";

type ContactHeroCardRootProps = {
  $backgroundImage: string | undefined;
  $comingSoon: boolean;
  $featured: boolean;
};

export const ContactHeroCardRoot = styled.article<ContactHeroCardRootProps>`
  --contact-card-accent: var(--red);
  --contact-card-bg: var(--color-bg-canvas);
  --contact-card-border: var(--color-border-subtle);
  --contact-card-border-width: 1px;
  --contact-card-number: var(--color-text-muted-light);
  --contact-card-text: var(--color-text-primary);

  background: ${({ $backgroundImage }) =>
    $backgroundImage
      ? css`
          linear-gradient(180deg, rgba(5, 5, 8, 0.12), rgba(5, 5, 8, 0.72)),
          linear-gradient(90deg, rgba(5, 5, 8, 0.88), rgba(5, 5, 8, 0.28)),
          url(${$backgroundImage}) center / cover no-repeat
        `
      : css`
          var(--contact-card-bg)
        `};
  border: var(--contact-card-border-width) solid var(--contact-card-border);
  color: var(--contact-card-text);
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
  overflow: hidden;
  padding: var(--space-8);
  position: relative;
  transition:
    border-color var(--duration-base) var(--easing-standard),
    transform var(--duration-base) var(--easing-standard);

  ${({ $featured }) =>
    $featured &&
    css`
      --contact-card-accent: var(--red);
      --contact-card-bg: var(--color-text-primary);
      --contact-card-border: var(--red);
      --contact-card-border-width: 2px;
      --contact-card-number: var(--red);
      --contact-card-text: var(--color-text-inverse);

      &::before {
        background: color-mix(in srgb, var(--red) 35%, transparent);
        border-radius: var(--radius-pill);
        content: "";
        filter: blur(45px);
        height: 220px;
        left: 40%;
        mix-blend-mode: screen;
        pointer-events: none;
        position: absolute;
        top: -52px;
        width: 423px;
      }
    `}

  ${({ $comingSoon }) =>
    $comingSoon &&
    css`
      --contact-card-bg: #f2f3f3;
      --contact-card-border: #cdd1d2;
      --contact-card-number: var(--red);
      --contact-card-text: #60656a;
    `}

  > * {
    position: relative;
  }
`;

export const ContactHeroCardNumber = styled.p`
  color: var(--contact-card-number);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  margin: 0;
`;

export const ContactHeroCardTitle = styled.h2`
  display: grid;
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0;
  line-height: 1.12;
  margin: 0 0 var(--space-4);
  text-transform: uppercase;
`;

export const ContactHeroCardStatus = styled.span`
  border-bottom: 1px solid #aeb4b6;
  color: var(--color-text-dim);
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  padding-bottom: var(--space-3);
  text-transform: uppercase;
`;
