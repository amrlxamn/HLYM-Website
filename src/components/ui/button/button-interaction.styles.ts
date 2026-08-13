import { css } from "styled-components";

export const BUTTON_INTERACTION_STYLES = css`
  &::after,
  &::before {
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &::after {
    background: var(--button-rule);
  }

  &::before {
    background: var(--color-brand-500);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 360ms var(--easing-out);
    z-index: 1;
  }

  > span {
    background: linear-gradient(90deg, var(--color-brand-500) 0 50%, var(--button-color) 50% 100%);
    background-clip: text;
    background-position: 100% 0;
    background-size: 200% 100%;
    color: transparent;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background-position 360ms var(--easing-out);
    -webkit-background-clip: text;
  }

  &:focus-visible::before,
  &:hover:not(:disabled)::before {
    transform: scaleX(1);
  }

  &:focus-visible > span,
  &:hover:not(:disabled) > span {
    background-position: 0 0;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    > span {
      transition-duration: 0ms;
    }
  }
`;
