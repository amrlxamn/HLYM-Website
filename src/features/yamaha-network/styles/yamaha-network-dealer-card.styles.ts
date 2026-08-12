import styled from "styled-components";

const easeOut = "cubic-bezier(0.23, 1, 0.32, 1)";

export const NetworkDealerCard = styled.button<{ $isSelected: boolean; $isGrid: boolean }>`
  align-items: stretch;
  background: #ffffff;
  border: ${({ $isGrid, $isSelected }) =>
    $isGrid ? `1px solid ${$isSelected ? "#ad1e28" : "#e4e6e1"}` : "0"};
  border-bottom: ${({ $isGrid, $isSelected }) =>
    $isGrid ? `1px solid ${$isSelected ? "#ad1e28" : "#e4e6e1"}` : "1px solid #e8e9e5"};
  box-shadow: ${({ $isGrid, $isSelected }) =>
    $isGrid
      ? $isSelected
        ? "0 4px 20px rgba(173, 30, 40, 0.1)"
        : "0 1px 3px rgba(0, 0, 0, 0.04)"
      : "none"};
  contain-intrinsic-size: ${({ $isGrid }) => ($isGrid ? "280px" : "160px")};
  content-visibility: auto;
  display: flex;
  flex-direction: ${({ $isGrid }) => ($isGrid ? "column" : "row")};
  overflow: hidden;
  padding: 0;
  min-height: ${({ $isGrid }) => ($isGrid ? "280px" : "auto")};
  text-align: left;
  transition:
    border-color 200ms ${easeOut},
    box-shadow 200ms ${easeOut},
    transform 160ms ${easeOut},
    background-color 160ms ${easeOut};
  width: 100%;

  &:focus-visible,
  &:hover {
    background: ${({ $isGrid, $isSelected }) =>
      $isGrid ? "#ffffff" : $isSelected ? "#fff5f4" : "#f0f1ed"};
    border-color: ${({ $isGrid, $isSelected }) =>
      $isGrid ? ($isSelected ? "#ad1e28" : "#c8cbc6") : "transparent"};
    box-shadow: ${({ $isGrid }) => ($isGrid ? "0 6px 24px rgba(0, 0, 0, 0.08)" : "none")};
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const NetworkDealerImage = styled.div<{ $isGrid: boolean }>`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  display: flex;
  flex: 0 0 auto;
  height: ${({ $isGrid }) => ($isGrid ? "120px" : "auto")};
  justify-content: center;
  min-height: ${({ $isGrid }) => ($isGrid ? "120px" : "96px")};
  overflow: hidden;
  position: relative;
  width: ${({ $isGrid }) => ($isGrid ? "100%" : "110px")};

  &::after {
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.3) 100%);
    content: "";
    inset: 0;
    position: absolute;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const NetworkDealerImageFallback = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  img {
    height: 28px;
    object-fit: contain;
    width: auto;
  }
`;

export const NetworkDealerBody = styled.div<{ $isGrid: boolean }>`
  display: grid;
  flex: 1 1 auto;
  gap: 8px;
  padding: ${({ $isGrid }) => ($isGrid ? "14px 16px 16px" : "14px 18px")};
`;

export const NetworkDealerLabel = styled.strong`
  color: #171a17;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
`;
