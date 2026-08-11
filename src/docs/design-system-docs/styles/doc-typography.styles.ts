import styled from "styled-components";

export const TypeSpecimen = styled.div`
  border: 1px solid var(--color-border-inverse);
  border-radius: var(--radius-none);
  margin-bottom: 12px;
  overflow: hidden;
`;

export const TypeSpecimenHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--color-border-inverse);
  display: flex;
  gap: 12px;
  justify-content: space-between;
  padding: 10px 16px;
`;

export const TypeSpecimenLabel = styled.span`
  color: var(--color-text-readable-dark);
  font-size: 12px;
  font-weight: 600;
`;

export const TypeSpecimenMeta = styled.code`
  color: var(--color-text-soft-dark);
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 11px;
`;

export const TypeSpecimenPreview = styled.div`
  padding: 28px 24px;
`;

export const TypeSpecimenText = styled.span<{
  $fontFamily: string;
  $fontSize: string;
  $fontWeight: number;
  $letterSpacing: string;
  $lineHeight: string;
  $textTransform: string;
}>`
  display: block;
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: ${({ $lineHeight }) => $lineHeight};
  text-transform: ${({ $textTransform }) => $textTransform};
`;
