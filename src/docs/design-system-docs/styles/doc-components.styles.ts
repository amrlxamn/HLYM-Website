import styled from "styled-components";

export const ComponentGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ComponentCard = styled.div`
  border: 1px solid var(--color-border-inverse);
  border-radius: var(--radius-none);
  overflow: hidden;
`;

export const ComponentPreview = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  height: 120px;
  justify-content: center;
  padding: 20px;
`;

export const ComponentBody = styled.div`
  border-top: 1px solid var(--color-border-inverse);
  padding: 16px;
`;

export const ComponentTag = styled.span`
  background: rgba(236, 28, 36, 0.08);
  border: 1px solid rgba(236, 28, 36, 0.15);
  border-radius: var(--radius-none);
  color: var(--red);
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 8px;
  padding: 2px 6px;
  text-transform: uppercase;
`;

export const ComponentName = styled.h4`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin: 0 0 6px;
`;

export const ComponentDescription = styled.p`
  color: var(--color-text-readable-dark);
  font-size: 12px;
  line-height: 1.55;
  margin: 0 0 12px;
`;

export const ComponentCode = styled.pre`
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
`;

export const ComponentProps = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const ComponentProp = styled.code`
  background: rgba(255, 255, 255, 0.04);
  border-radius: var(--radius-none);
  color: var(--color-text-readable-dark);
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 10px;
  padding: 2px 6px;
`;

export const ComponentPreviewLabel = styled.span`
  align-items: center;
  display: inline-flex;
  gap: 8px;
`;

export const ComponentPreviewSpan = styled.span`
  background: var(--red);
  height: 2px;
  width: 20px;
`;

export const ComponentPreviewTag = styled.span`
  color: var(--color-text-subtle);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
