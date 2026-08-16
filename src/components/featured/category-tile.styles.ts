import styled from "styled-components";

export const CategoryTileRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  min-height: 0;

  > article {
    flex: 1;
    min-height: 0;
  }
`;

export const CategoryTileNumber = styled.span`
  color: var(--alpha-white-08);
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 0.85;

  @media (max-width: 980px) {
    font-size: 52px;
  }

  @media (max-width: 640px) {
    font-size: 36px;
  }
`;
