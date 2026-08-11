import styled from "styled-components";

export const ColorGroupRoot = styled.div`
  margin-bottom: 40px;
`;

export const ColorGroupName = styled.h3`
  color: var(--color-text-muted-dark);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 0 12px;
  text-transform: uppercase;
`;

export const ColorGrid = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;

export const ColorCard = styled.div`
  border: 1px solid var(--color-border-inverse);
  margin: -1px 0 0 -1px;
  overflow: hidden;
`;

export const ColorSwatch = styled.div<{ $bg: string }>`
  background: ${({ $bg }) => $bg};
  height: 88px;
  width: 100%;
`;

export const ColorCardBody = styled.div`
  padding: 14px 14px 16px;
`;

export const ColorCardName = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 2px;
`;

export const ColorCardRaw = styled.code`
  color: var(--color-text-soft-dark);
  display: block;
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 11px;
  margin-bottom: 8px;
`;

export const ColorCardVariable = styled.code`
  background: rgba(236, 28, 36, 0.06);
  border: 1px solid rgba(236, 28, 36, 0.1);
  border-radius: var(--radius-none);
  color: var(--red);
  display: inline-block;
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 10px;
  padding: 2px 6px;
`;
