import { motion } from "framer-motion";
import styled from "styled-components";

export const FeaturedModelMarqueeRoot = styled.section`
  background: var(--color-bg-primary);
  overflow: hidden;
  padding: 75vh 0 var(--space-24);

  @media (max-width: 980px) {
    padding-top: 55vh;
  }

  @media (max-width: 640px) {
    padding-bottom: var(--space-16);
    padding-top: 42vh;
  }
`;

export const FeaturedModelMarqueeRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);

  @media (max-width: 980px) {
    gap: var(--space-6);
  }

  @media (max-width: 640px) {
    gap: var(--space-4);
  }
`;

export const FeaturedModelMarqueeRail = styled.div`
  overflow: visible;
  white-space: nowrap;
`;

export const FeaturedModelMarqueeTrack = styled(motion.div)`
  display: inline-flex;
  width: max-content;
  will-change: transform;
`;

export const FeaturedModelMarqueeSequence = styled.div`
  align-items: center;
  display: inline-flex;
`;

export const FeaturedModelMarqueeItem = styled.span<{ $accent: boolean }>`
  color: ${({ $accent }) => ($accent ? "var(--red)" : "var(--color-text-inverse)")};
  font-size: 110px;
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-tight);
  line-height: 0.9;
  text-transform: uppercase;

  &::after {
    color: var(--color-text-muted-dark);
    content: "|";
    display: inline-block;
    margin: 0 42px;
  }

  @media (max-width: 980px) {
    font-size: 72px;

    &::after {
      margin: 0 28px;
    }
  }

  @media (max-width: 640px) {
    font-size: 48px;

    &::after {
      margin: 0 18px;
    }
  }
`;
