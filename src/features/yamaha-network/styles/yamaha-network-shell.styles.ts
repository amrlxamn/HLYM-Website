import styled from "styled-components";

export const NetworkPageRoot = styled.div`
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
  position: fixed;
  inset: 0;
  z-index: 0;
`;

export const NetworkMapWrapper = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: var(--z-base);
`;

export const NetworkListPanel = styled.div`
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(28px) saturate(170%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  left: 16px;
  max-height: calc(100% - var(--header-height-total) - var(--space-8));
  overflow: hidden;
  position: absolute;
  top: calc(var(--header-height-total) + var(--space-4));
  max-width: calc(100vw - 32px);
  width: 480px;
  z-index: 10;

  @media (max-width: 980px) {
    border-radius: 0;
    bottom: 0;
    box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.12);
    left: 0;
    max-height: min(42dvh, 340px);
    right: 0;
    top: auto;
    max-width: none;
    width: 100%;
  }
`;

export const NetworkListHeader = styled.header`
  border-bottom: 1px solid #e8e9e5;
  flex: 0 0 auto;
  padding: 22px 24px 14px;
`;

export const NetworkSearchRow = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const NetworkCategoryRow = styled.div`
  display: grid;
  gap: 8px;
`;

export const NetworkCategoryScroll = styled.div<{
  $canScrollLeft: boolean;
  $canScrollRight: boolean;
}>`
  -webkit-mask-image: linear-gradient(
    to right,
    ${({ $canScrollLeft }) => ($canScrollLeft ? "transparent 0, #000 12px," : "#000 0,")}
      ${({ $canScrollRight }) =>
        $canScrollRight ? "#000 calc(100% - 12px), transparent 100%" : "#000 100%"}
  );
  display: flex;
  flex: 1 1 auto;
  gap: 6px;
  mask-image: linear-gradient(
    to right,
    ${({ $canScrollLeft }) => ($canScrollLeft ? "transparent 0, #000 12px," : "#000 0,")}
      ${({ $canScrollRight }) =>
        $canScrollRight ? "#000 calc(100% - 12px), transparent 100%" : "#000 100%"}
  );
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: none;
  transition:
    -webkit-mask-image 200ms ease-out,
    mask-image 200ms ease-out;

  &::-webkit-scrollbar {
    display: none;
  }
`;
