import styled from "styled-components";

export const CategorySection = styled.div`
  margin-bottom: 32px;
`;

export const CategoryHeader = styled.div`
  align-items: baseline;
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const CategoryTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin: 0;
`;

export const CategoryCount = styled.span`
  color: var(--color-text-soft-dark);
  font-size: 12px;
`;

export const ComponentGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
