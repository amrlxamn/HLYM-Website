import styled from "styled-components";

export const NetworkToolbar = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const NetworkToolButton = styled.button<{ $isActive?: boolean }>`
  align-items: center;
  background: ${({ $isActive }) => ($isActive ? "#171a17" : "#ffffff")};
  border: 1px solid ${({ $isActive }) => ($isActive ? "#171a17" : "#d8dbd6")};
  border-radius: 0;
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#242824")};
  display: inline-flex;
  flex: 0 0 auto;
  gap: 7px;
  height: 44px;
  justify-content: center;
  padding: 0 13px;
  transition:
    background-color 160ms ease-out,
    border-color 160ms ease-out,
    transform 120ms ease-out;

  &:hover {
    border-color: #9b9f99;
  }

  &:active {
    transform: scale(0.97);
  }

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const NetworkFilterCount = styled.span`
  align-items: center;
  background: #ad1e28;
  border-radius: 0;
  color: #ffffff;
  display: inline-flex;
  font-size: 10px;
  font-weight: 700;
  height: 20px;
  justify-content: center;
  min-width: 20px;
  padding: 0 5px;
`;

export const NetworkFilterPanel = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "grid" : "none")};
  gap: 12px;
  padding-top: 15px;
`;

export const NetworkFilterLabel = styled.p`
  color: #6d726c;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0;
  text-transform: uppercase;
`;

export const NetworkFilterBar = styled.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NetworkFilterTag = styled.button<{ $isActive: boolean }>`
  background: ${({ $isActive }) => ($isActive ? "#ad1e28" : "#f5f6f3")};
  border: 1px solid ${({ $isActive }) => ($isActive ? "#ad1e28" : "#dcdfda")};
  border-radius: 0;
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#4e534e")};
  font-size: 10px;
  font-weight: 600;
  padding: 7px 12px;
  text-transform: uppercase;
  transition:
    transform 120ms ease-out,
    border-color 160ms ease-out;
  white-space: nowrap;

  &:hover {
    border-color: ${({ $isActive }) => ($isActive ? "#ad1e28" : "#aeb2ad")};
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const NetworkLayoutToggle = styled.div`
  display: flex;
  gap: 4px;
`;

export const NetworkLayoutButton = styled(NetworkToolButton)``;
