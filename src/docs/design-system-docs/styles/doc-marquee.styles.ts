import styled from "styled-components";

export const MarqueeRoot = styled.div`
  border-bottom: 1px solid var(--color-border-inverse);
  overflow: hidden;
  padding: 16px 0;
  position: relative;
`;

export const MarqueeTrack = styled.div<{ $duration: string }>`
  animation: marqueeScroll ${({ $duration }) => $duration} linear infinite;
  display: flex;
  gap: 32px;
  white-space: nowrap;
  width: fit-content;

  @keyframes marqueeScroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const MarqueeItem = styled.span`
  color: var(--color-text-soft-dark);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

export const MarqueeDot = styled.span`
  color: var(--red);
  font-size: 15px;
  font-weight: 600;
`;
