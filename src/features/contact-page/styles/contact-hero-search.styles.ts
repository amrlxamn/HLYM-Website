import styled from "styled-components";

type ContactHeroSearchRootProps = {
  $backgroundImage: string;
};

export const ContactHeroSearchRoot = styled.div<ContactHeroSearchRootProps>`
  align-items: center;
  background: rgba(12, 12, 14, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow:
    0 20px 12px rgba(0, 0, 0, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(255, 255, 255, 0.08);
  display: flex;
  isolation: isolate;
  max-width: 600px;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before {
    background:
      linear-gradient(rgba(12, 12, 14, 0.06), rgba(12, 12, 14, 0.18)),
      url("${({ $backgroundImage }) => $backgroundImage}") center / cover no-repeat;
    content: "";
    filter: blur(20px) saturate(130%);
    inset: -24px;
    opacity: 0.82;
    pointer-events: none;
    position: absolute;
    transform: scale(1.08);
    z-index: 0;
  }

  &::after {
    background:
      linear-gradient(90deg, rgba(255, 255, 255, 0.08), transparent 32%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(8, 8, 10, 0.2)),
      rgba(10, 10, 12, 0.18);
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 0;
  }

  @supports ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    -webkit-backdrop-filter: blur(8px) saturate(115%);
    backdrop-filter: blur(8px) saturate(115%);
  }
`;

export const ContactHeroSearchIcon = styled.span`
  align-items: center;
  background: rgba(10, 10, 10, 0.16);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-inverse);
  display: inline-flex;
  flex: 0 0 auto;
  padding: 14px 16px;
  position: relative;
  z-index: 1;

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const ContactHeroSearchInput = styled.input`
  background: transparent;
  border: 0;
  color: var(--color-text-inverse);
  flex: 1;
  font-size: 14px;
  line-height: 23px;
  min-width: 0;
  padding: 14px 16px;
  position: relative;
  z-index: 1;

  &::placeholder {
    color: var(--color-text-inverse);
    opacity: 0.9;
  }
`;
