import styled, { keyframes } from "styled-components";

export const MILESTONE_ADVANCE_MS = 8000;

const fillProgress = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

export const MilestoneTimelineRoot = styled.section`
  background: #253b39;
  color: #f7f8f6;
  margin-top: var(--space-16);
  overflow: hidden;
  padding: var(--space-16) 0;

  @media (max-width: 760px) {
    margin-top: var(--space-12);
    padding: var(--space-12) 0;
  }
`;

export const MilestoneTimelineTop = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1280px;
  width: calc(100% - 80px);

  > p {
    color: #d6ddda;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    margin: 0;
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    width: calc(100% - 32px);
  }
`;

export const MilestoneTimelineActions = styled.div`
  display: flex;
  flex: none;
  gap: 8px;

  button {
    align-items: center;
    background: transparent;
    border: 1px solid #ffffff66;
    color: #fff;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
  }

  button:hover:not(:disabled) {
    background: #ffffff1f;
  }

  button:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: 3px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.35;
  }
`;

export const MilestoneTimelineStage = styled.div`
  cursor: grab;
  display: grid;
  margin: 0 auto;
  max-width: 1280px;
  min-height: 610px;
  outline: none;
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
  user-select: none;
  width: calc(100% - 80px);

  &:active {
    cursor: grabbing;
  }

  &:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: -3px;
  }

  @media (max-width: 760px) {
    min-height: 650px;
    width: calc(100% - 32px);
  }
`;

export const MilestoneTimelineSlide = styled.div<{ $active: boolean }>`
  align-items: center;
  display: grid;
  gap: clamp(40px, 6vw, 100px);
  grid-area: 1 / 1;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
  transform: translate3d(0, ${({ $active }) => ($active ? "0" : "16px")}, 0);
  transition:
    opacity 420ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 520ms cubic-bezier(0.16, 1, 0.3, 1),
    visibility 0s linear ${({ $active }) => ($active ? "0ms" : "420ms")};
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};

  [data-keyboard] & {
    transition: none;
  }

  @media (max-width: 760px) {
    align-content: center;
    gap: 10px;
    grid-template-columns: 1fr;
    padding: 20px 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }
`;

export const MilestoneTimelineCopy = styled.div`
  min-width: 0;

  h3 {
    font-size: clamp(22px, 2.4vw, 30px);
    font-weight: 600;
    line-height: 1.2;
    margin: 0 0 18px;
    text-transform: uppercase;
  }

  > p:last-child {
    color: #d6ddda;
    font-size: clamp(16px, 1.4vw, 20px);
    font-weight: 300;
    line-height: 1.55;
    margin: 0;
    max-width: 44ch;
  }
`;

export const MilestoneTimelineDate = styled.p`
  font-size: clamp(88px, 9vw, 136px);
  font-weight: 300;
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 24px 0 28px;

  @media (max-width: 760px) {
    font-size: clamp(68px, 18vw, 100px);
    margin: 16px 0;
  }
`;

export const MilestoneTimelineVisual = styled.div`
  aspect-ratio: 1.35;
  max-width: 600px;
  position: relative;
  width: 100%;

  img {
    filter: grayscale(1);
    height: 62%;
    left: 4%;
    object-fit: cover;
    position: absolute;
    top: 8%;
    width: 70%;
  }

  img:only-of-type {
    height: 74%;
    left: 7%;
    top: 12%;
    width: 84%;
  }

  img.secondary {
    height: 58%;
    left: 32%;
    top: 32%;
    width: 67%;
  }

  @media (max-width: 760px) {
    aspect-ratio: 1.9;
    max-height: 250px;
  }
`;

export const MilestoneTimelineMotif = styled.div`
  aspect-ratio: 1;
  border: 2px solid var(--red);
  opacity: 0.85;
  position: absolute;
  right: 8%;
  top: 6%;
  transform: rotate(45deg);
  width: 35%;
`;

export const MilestoneTimelineGhostYear = styled.div`
  align-items: center;
  color: #ffffff24;
  display: flex;
  font-size: clamp(140px, 20vw, 300px);
  font-weight: 700;
  height: 100%;
  justify-content: center;
  letter-spacing: -0.07em;
  line-height: 1;
  position: relative;

  @media (max-width: 760px) {
    font-size: clamp(120px, 38vw, 200px);
  }
`;

export const MilestoneTimelineYears = styled.nav`
  display: flex;
  gap: 16px;
  margin: 0 auto;
  max-width: 1280px;
  width: calc(100% - 80px);

  @media (max-width: 760px) {
    gap: 8px;
    width: calc(100% - 32px);
  }
`;

export const MilestoneTimelineYear = styled.button<{ $active: boolean }>`
  background: none;
  border: 0;
  color: ${({ $active }) => ($active ? "#ff5b5f" : "#d6ddda")};
  cursor: pointer;
  flex: 1;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  min-width: 0;
  padding: 10px 0 18px;
  position: relative;
  text-align: left;
  transition: color 200ms ease;

  &::before {
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &::before {
    background: #ffffff45;
  }

  &:hover {
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: 4px;
  }

  [data-keyboard] & {
    transition: none;
  }

  @media (max-width: 760px) {
    font-size: 11px;
    min-height: 50px;
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const MilestoneTimelineProgress = styled.span<{ $playing: boolean }>`
  animation: ${fillProgress} ${MILESTONE_ADVANCE_MS}ms linear forwards;
  animation-play-state: ${({ $playing }) => ($playing ? "running" : "paused")};
  background: var(--red);
  bottom: 0;
  height: 3px;
  left: 0;
  position: absolute;
  transform-origin: left;
  width: 100%;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: scaleX(1);
  }
`;
