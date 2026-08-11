import styled from "styled-components";

export const SpacingTable = styled.div`
  border: 1px solid var(--color-border-inverse);
  border-radius: var(--radius-none);
  overflow: hidden;
`;

export const SpacingRow = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--color-border-inverse);
  display: flex;
  gap: 16px;
  padding: 12px 16px;

  &:last-child {
    border-bottom: 0;
  }
`;

export const SpacingName = styled.span`
  font-size: 13px;
  font-weight: 600;
  min-width: 140px;
`;

export const SpacingRaw = styled.code`
  color: var(--red);
  flex: 1;
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 12px;
`;

export const SpacingUsage = styled.span`
  color: var(--color-text-muted-dark);
  font-size: 12px;
  min-width: 180px;
`;
