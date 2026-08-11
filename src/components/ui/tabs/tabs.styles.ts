import styled from "styled-components";

export const TabsRoot = styled.div`
  width: 100%;
`;

export const TabList = styled.div`
  border-bottom: 1px solid var(--alpha-white-12);
  display: flex;
  gap: var(--space-1);
  overflow-x: auto;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  color: ${({ $active }) =>
    $active ? "var(--color-text-inverse)" : "var(--color-text-muted-dark)"};
  flex-shrink: 0;
  font-size: var(--font-size-md);
  font-weight: ${({ $active }) =>
    $active ? "var(--font-weight-semibold)" : "var(--font-weight-normal)"};
  padding: var(--space-3) var(--space-4);
  position: relative;
  transition: color var(--duration-press) var(--easing-out);

  &::after {
    background: var(--color-brand-500);
    bottom: -1px;
    content: "";
    height: 2px;
    left: var(--space-4);
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    position: absolute;
    right: var(--space-4);
    transform: scaleX(${({ $active }) => ($active ? 1 : 0.7)});
    transition:
      opacity var(--duration-press) var(--easing-out),
      transform var(--duration-press) var(--easing-out);
  }
`;

export const TabPanel = styled.div`
  color: var(--color-text-readable-dark);
  font-size: var(--font-size-md);
  line-height: var(--leading-relaxed);
  padding: var(--space-5) 0;
`;
