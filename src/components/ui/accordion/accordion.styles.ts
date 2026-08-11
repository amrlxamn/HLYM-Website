import { motion } from "framer-motion";
import styled from "styled-components";

export const AccordionRoot = styled.div`
  border-bottom: 1px solid var(--alpha-white-12);
  border-top: 1px solid var(--alpha-white-12);
`;

export const AccordionItemRoot = styled.div`
  border-bottom: 1px solid var(--alpha-white-12);

  &:last-child {
    border-bottom: 0;
  }
`;

export const AccordionTrigger = styled.button`
  align-items: center;
  color: var(--color-text-inverse);
  display: flex;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  gap: var(--space-4);
  justify-content: space-between;
  padding: var(--space-4) 0;
  text-align: left;
  width: 100%;
`;

export const AccordionIcon = styled.span<{ $open: boolean }>`
  color: var(--color-brand-400);
  display: inline-flex;
  transform: rotate(${({ $open }) => ($open ? "45deg" : "0")});
  transition: transform var(--duration-base) var(--easing-out);
`;

export const AccordionPanel = styled(motion.div)`
  overflow: hidden;
`;

export const AccordionContent = styled.div`
  color: var(--color-text-readable-dark);
  font-size: var(--font-size-md);
  line-height: var(--leading-relaxed);
  padding: 0 0 var(--space-4);
`;
