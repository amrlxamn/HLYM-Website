import styled from "styled-components";

export const PrinciplesGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const PrincipleCard = styled.div`
  border: 1px solid var(--color-border-inverse);
  border-radius: var(--radius-none);
  padding: 20px;
`;

export const PrincipleTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin: 0 0 8px;
`;

export const PrincipleDescription = styled.p`
  color: var(--color-text-readable-dark);
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
`;
