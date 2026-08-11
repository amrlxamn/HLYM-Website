import styled from "styled-components";

export const MotionCard = styled.div`
  border: 1px solid var(--color-border-inverse);
  border-radius: var(--radius-none);
  margin-bottom: 12px;
  overflow: hidden;
`;

export const MotionCardHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--color-border-inverse);
  display: flex;
  gap: 12px;
  justify-content: space-between;
  padding: 10px 16px;
`;

export const MotionCardName = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

export const MotionCardDuration = styled.code`
  background: rgba(236, 28, 36, 0.08);
  border: 1px solid rgba(236, 28, 36, 0.15);
  border-radius: var(--radius-none);
  color: var(--red);
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 11px;
  padding: 2px 8px;
`;

export const MotionCardDescription = styled.p`
  color: var(--color-text-readable-dark);
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
  padding: 12px 16px 0;
`;

export const MotionDemoBox = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  height: 72px;
  justify-content: center;
  margin: 12px 16px 16px;
  overflow: hidden;
  position: relative;
  border-radius: var(--radius-none);
`;

export const MotionDemoOrb = styled.div<{ $duration: string; $easing: string }>`
  background: var(--red);
  border-radius: var(--radius-none);
  cursor: pointer;
  height: 32px;
  transition:
    transform ${({ $duration }) => $duration} ${({ $easing }) => $easing},
    opacity ${({ $duration }) => $duration} ${({ $easing }) => $easing};
  width: 32px;

  &:active {
    transform: scale(0.9);
    opacity: 0.8;
  }
`;

export const MotionDemoLabel = styled.span`
  bottom: 6px;
  color: var(--color-text-soft-dark);
  font-size: 10px;
  font-weight: 600;
  left: 10px;
  position: absolute;
  text-transform: uppercase;
`;

export const EasingRow = styled.div`
  align-items: center;
  border: 1px solid var(--color-border-inverse);
  border-radius: var(--radius-none);
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
  padding: 10px 14px;
`;

export const EasingName = styled.span`
  font-size: 13px;
  font-weight: 600;
  min-width: 160px;
`;

export const EasingValue = styled.code`
  color: var(--color-text-soft-dark);
  flex: 1;
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 11px;
`;

export const EasingTrack = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border-radius: var(--radius-none);
  height: 3px;
  overflow: hidden;
  position: relative;
  width: 100px;
`;

export const EasingTrackFill = styled.div<{ $easing: string }>`
  animation: easingSlide 2.4s ${({ $easing }) => $easing} infinite alternate;
  background: var(--red);
  height: 100%;
  width: 40%;

  @keyframes easingSlide {
    from {
      margin-left: 0;
    }
    to {
      margin-left: 60%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
