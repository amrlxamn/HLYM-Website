import styled from "styled-components";

export const MegaCategoryList = styled.div`
  display: flex;
  gap: 0;
  justify-content: flex-start;
  padding-inline: var(--space-5);
`;

export const MegaCategoryButton = styled.button<{ $active: boolean }>`
  align-items: flex-start;
  color: ${({ $active }) => ($active ? "var(--color-brand-500)" : "var(--color-text-primary)")};
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-height: 64px;
  padding: var(--space-3) var(--space-2);
  position: relative;
  text-align: left;
  text-transform: uppercase;
  width: 180px;

  small {
    color: ${({ $active }) => ($active ? "var(--color-brand-500)" : "var(--color-text-subtle)")};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.4px;
  }

  span {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
  }

  &::after {
    background: var(--color-brand-500);
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: left;
    transition: transform var(--duration-fast) var(--easing-out);
    width: 100%;
  }
`;

export const MegaModelList = styled.div<{ $categoryIndex: number }>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: var(--space-4) calc(var(--space-5) + var(--space-2));
  padding-left: calc(
    var(--space-5) + var(--space-2) + ${({ $categoryIndex }) => $categoryIndex * 180}px
  );
`;

export const MegaModelButton = styled.button<{ $active: boolean }>`
  align-items: center;
  color: ${({ $active }) => ($active ? "var(--color-brand-500)" : "var(--color-text-primary)")};
  display: flex;
  gap: var(--space-4);
  min-height: 40px;
  padding: var(--space-2) 0;
  text-align: left;
  text-transform: uppercase;
  width: 180px;

  &:focus-visible,
  &:hover {
    color: var(--color-brand-500);
  }

  span {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
