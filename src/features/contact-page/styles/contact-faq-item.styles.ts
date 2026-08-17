import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactFaqItemRoot = styled.article`
  border-top: 1px solid var(--color-border-muted);
  padding: var(--space-6) 0 0;

  &:first-child {
    border-top: 0;
    padding-top: 0;
  }
`;

export const ContactFaqSummary = styled.button`
  align-items: flex-start;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: flex;
  gap: var(--space-6);
  justify-content: space-between;
  list-style: none;
  padding: 0;
  text-align: left;
  width: 100%;
`;

export const ContactFaqQuestion = styled.h2`
  color: var(--color-text-primary);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
`;

export const ContactFaqIcon = styled.span`
  align-items: center;
  border: 1px solid var(--red);
  border-radius: 0;
  color: var(--red);
  display: inline-flex;
  flex: 0 0 auto;
  height: 24px;
  justify-content: center;
  width: 24px;

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const ContactFaqPanel = styled(motion.div)`
  overflow: hidden;
`;

export const ContactFaqPanelInner = styled.div`
  padding-top: var(--space-2);
`;

export const ContactFaqAnswer = styled.p`
  color: var(--color-text-dim);
  font-size: var(--font-size-lg);
  line-height: 23px;
  margin: 0 var(--space-12) 0 0;
`;

export const ContactFaqHelpful = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-5);

  > span {
    color: var(--color-text-neutral-dark);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
