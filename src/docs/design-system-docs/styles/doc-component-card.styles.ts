import styled from "styled-components";

export const PreviewFrame = styled.div<{ $tone: "dark" | "light" }>`
  align-items: center;
  background: ${({ $tone }) => ($tone === "dark" ? "rgba(255, 255, 255, 0.02)" : "#f4f4f4")};
  border-bottom: 1px solid var(--color-border-inverse);
  display: flex;
  justify-content: center;
  min-height: 120px;
  overflow: hidden;
  padding: 20px;
  position: relative;
`;

export const PreviewNote = styled.div`
  align-items: center;
  color: var(--color-text-soft-dark);
  display: flex;
  font-size: 11px;
  gap: 8px;
  justify-content: center;
  letter-spacing: 1px;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

export const CardShell = styled.div`
  border: 1px solid var(--color-border-inverse);
  border-radius: var(--radius-none);
  overflow: hidden;
`;

export const CardBody = styled.div`
  padding: 14px 16px 16px;
`;

export const CardTag = styled.span`
  background: rgba(236, 28, 36, 0.08);
  border: 1px solid rgba(236, 28, 36, 0.15);
  border-radius: var(--radius-none);
  color: var(--red);
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 6px;
  padding: 2px 6px;
  text-transform: uppercase;
`;

export const CardName = styled.h4`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin: 0 0 4px;
`;

export const CardDescription = styled.p`
  color: var(--color-text-readable-dark);
  font-size: 12px;
  line-height: 1.55;
  margin: 0 0 10px;
`;

export const CodeBlock = styled.pre`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-border-inverse);
  border-radius: var(--radius-none);
  color: var(--color-text-readable-dark);
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 11px;
  line-height: 1.5;
  margin: 0 0 10px;
  overflow-x: auto;
  padding: 10px 12px;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const PropTable = styled.div`
  border: 1px solid var(--color-border-inverse);
  border-radius: var(--radius-none);
  overflow: hidden;
`;

export const PropRow = styled.div`
  border-bottom: 1px solid var(--color-border-inverse);
  display: flex;
  font-size: 11px;
  gap: 8px;
  padding: 7px 10px;

  &:last-child {
    border-bottom: 0;
  }
`;

export const PropName = styled.code`
  color: var(--color-text-inverse);
  flex-shrink: 0;
  font-family: ui-monospace, "SF Mono", monospace;
  font-weight: 600;
  min-width: 90px;
`;

export const PropType = styled.code`
  color: var(--red);
  flex: 1;
  font-family: ui-monospace, "SF Mono", monospace;
`;

export const PropRequired = styled.span<{ $required: boolean }>`
  color: ${({ $required }) => ($required ? "var(--red)" : "var(--color-text-soft-dark)")};
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const PropDefault = styled.code`
  color: var(--color-text-muted-dark);
  flex-shrink: 0;
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 10px;
`;
