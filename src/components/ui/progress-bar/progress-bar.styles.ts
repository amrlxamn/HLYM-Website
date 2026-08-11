import styled from "styled-components";

export const ProgressRoot = styled.div`
  display: grid;
  gap: var(--space-2);
  width: 100%;
`;

export const ProgressMeta = styled.div`
  align-items: center;
  color: var(--color-text-readable-dark);
  display: flex;
  font-size: var(--font-size-sm);
  justify-content: space-between;
`;

export const ProgressTrack = styled.div`
  background: var(--alpha-white-08);
  border-radius: var(--radius-none);
  height: 6px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ $percentage: number }>`
  background: var(--color-brand-500);
  border-radius: var(--radius-none);
  height: 100%;
  transform: scaleX(${({ $percentage }) => $percentage / 100});
  transform-origin: left center;
  transition: transform var(--duration-slow) var(--easing-out);
  width: 100%;
`;
