import styled from "styled-components";

export const NetworkDealerScroll = styled.div<{ $isGrid: boolean }>`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: ${({ $isGrid }) => ($isGrid ? "24px" : "0")};
  scrollbar-color: #c8cbc6 transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c8cbc6;
  }
`;

export const NetworkDealerGrid = styled.div<{ $isGrid: boolean }>`
  display: ${({ $isGrid }) => ($isGrid ? "grid" : "flex")};
  flex-direction: ${({ $isGrid }) => ($isGrid ? "unset" : "column")};
  gap: ${({ $isGrid }) => ($isGrid ? "24px" : "0")};
  grid-template-columns: ${({ $isGrid }) => ($isGrid ? "repeat(2, minmax(0, 1fr))" : "unset")};

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const NetworkEmptyState = styled.div`
  color: #6f746e;
  font-size: 14px;
  padding: 70px 20px;
  text-align: center;
`;
