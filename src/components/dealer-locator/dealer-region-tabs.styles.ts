import styled from "styled-components";

export const DealerRegionTabList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
  width: 100%;
`;

export const DealerRegionTab = styled.button<{ $isActive: boolean }>`
  background: ${({ $isActive }) => ($isActive ? "#090909" : "#ffffff8c")};
  border: 1px solid ${({ $isActive }) => ($isActive ? "#090909" : "#1111111f")};
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#11111185")};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.4px;
  padding: 11px 14px;
  text-transform: uppercase;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease;

  &:focus-visible,
  &:hover {
    border-color: #11111166;
    color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#111111")};
  }
`;
