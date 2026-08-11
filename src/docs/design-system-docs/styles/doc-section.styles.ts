import styled from "styled-components";

export const SectionRoot = styled.section`
  border-bottom: 1px solid var(--color-border-inverse);
  padding: 64px 20px;

  @media (max-width: 980px) {
    padding: 48px 16px;
  }
`;

export const SectionInner = styled.div`
  margin: 0 auto;
  max-width: 720px;
  width: 100%;
`;

export const SectionHeader = styled.div`
  margin-bottom: 48px;
`;

export const SectionTagline = styled.span`
  color: var(--red);
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.08;
  margin: 0 0 12px;
`;

export const SectionDescription = styled.p`
  color: var(--color-text-readable-dark);
  font-size: 15px;
  line-height: 1.65;
  margin: 0;
  max-width: 540px;
`;

export const SectionBody = styled.div`
  margin: 0 auto;
  max-width: 920px;
  width: 100%;
`;
