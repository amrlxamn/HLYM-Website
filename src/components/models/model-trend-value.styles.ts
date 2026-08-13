import { motion } from "framer-motion";
import styled from "styled-components";

export const ModelTrendValueRoot = styled.span`
  display: inline-flex;
  font-variant-numeric: tabular-nums;
  vertical-align: bottom;

  white-space: pre;
`;

export const ModelCounterDigitRoot = styled.span`
  display: inline-grid;
  height: 1em;
  overflow: hidden;
  width: 0.62em;
`;

export const ModelCounterFigureRoot = styled(motion.span)`
  align-items: center;
  display: flex;
  grid-area: 1 / 1;
  height: 1em;
  justify-content: center;
  will-change: transform;
`;
