import styled from "styled-components";

export const NetworkFilterTag = styled.label<{ $isActive: boolean }>`
  align-items: center;
  background: ${({ $isActive }) => ($isActive ? "#fff0ef" : "#f5f6f3")};
  border: 1px solid ${({ $isActive }) => ($isActive ? "#ad1e28" : "#dcdfda")};
  color: ${({ $isActive }) => ($isActive ? "#8f1821" : "#4e534e")};
  cursor: pointer;
  display: inline-flex;
  font-size: 10px;
  font-weight: 600;
  gap: 7px;
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

export const NetworkFilterCheckbox = styled.input`
  accent-color: #ad1e28;
  flex: 0 0 auto;
  height: 14px;
  margin: 0;
  width: 14px;
`;

export const NetworkDealerCount = styled.span`
  color: #6d726c;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;
