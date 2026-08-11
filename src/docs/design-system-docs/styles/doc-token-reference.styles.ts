import styled from "styled-components";

export const TokenGroup = styled.div`
  margin-bottom: var(--space-10);
`;

export const TokenGroupHeader = styled.div`
  margin-bottom: var(--space-4);
`;

export const TokenGroupTitle = styled.h3`
  font-size: var(--font-size-xl);
  letter-spacing: var(--tracking-tight);
  margin: 0 0 var(--space-1);
`;

export const TokenGroupDescription = styled.p`
  color: var(--color-text-muted-dark);
  font-size: var(--font-size-base);
  line-height: var(--leading-relaxed);
  margin: 0;
  max-width: 620px;
`;

export const ColorScaleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(11, minmax(52px, 1fr));
  overflow-x: auto;
`;

export const ColorScaleItem = styled.div`
  min-width: 52px;
`;

export const ColorScaleSwatch = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  height: 72px;
`;

export const ColorScaleMeta = styled.div`
  border: 1px solid var(--alpha-white-08);
  border-top: 0;
  padding: var(--space-2);

  strong,
  code {
    display: block;
    font-family: var(--font-family-mono);
    font-size: var(--font-size-xs);
  }

  code {
    color: var(--color-text-soft-dark);
    margin-top: var(--space-1);
  }
`;

export const ReferenceGrid = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ReferenceItem = styled.div`
  border: 1px solid var(--alpha-white-08);
  display: grid;
  gap: var(--space-3);
  margin: -1px 0 0 -1px;
  min-width: 0;
  padding: var(--space-4);
`;

export const ReferencePreview = styled.div`
  align-items: center;
  display: flex;
  min-height: 48px;
`;

export const ReferenceName = styled.strong`
  color: var(--color-text-inverse);
  font-size: var(--font-size-base);
  text-transform: capitalize;
`;

export const ReferenceValue = styled.code`
  color: var(--color-text-muted-dark);
  display: block;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  margin-top: var(--space-1);
  overflow-wrap: anywhere;
`;

export const SpacingBar = styled.span<{ $width: string }>`
  background: var(--color-brand-500);
  height: 8px;
  max-width: 100%;
  width: ${({ $width }) => $width};
`;

export const RadiusPreview = styled.span`
  background: var(--alpha-brand-12);
  border: 1px solid var(--color-brand-500);
  border-radius: var(--radius-none);
  height: 48px;
  width: 72px;
`;

export const ShadowPreview = styled.span<{ $shadow: string }>`
  background: var(--color-neutral-800);
  border-radius: var(--radius-none);
  box-shadow: ${({ $shadow }) => $shadow};
  height: 56px;
  width: 88px;
`;

export const BreakpointBar = styled.span<{ $percentage: number }>`
  background: var(--alpha-brand-20);
  border-left: 2px solid var(--color-brand-500);
  height: 32px;
  width: ${({ $percentage }) => `${$percentage}%`};
`;

export const ZStack = styled.div`
  align-items: flex-end;
  display: flex;
  height: 64px;
  position: relative;
  width: 120px;
`;

export const ZLayer = styled.span<{ $index: number }>`
  background: color-mix(
    in srgb,
    var(--color-brand-500) ${({ $index }) => 18 + $index * 6}%,
    var(--color-neutral-900)
  );
  border: 1px solid var(--alpha-white-12);
  height: 38px;
  left: ${({ $index }) => `${$index * 10}px`};
  position: absolute;
  transform: translateY(${({ $index }) => `${-$index * 5}px`});
  width: 62px;
`;
