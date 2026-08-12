import styled from "styled-components";

export const NetworkDealerCategories = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NetworkDealerCategoryPill = styled.span`
  background: #f5f6f3;
  border: 1px solid #dcdfda;
  color: #4e534e;
  flex: 0 0 auto;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  padding: 4px 8px;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const NetworkDealerMoreBadges = styled.button`
  background: transparent;
  border: 0;
  color: #ad1e28;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  padding: 4px 0;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const NetworkDealerAddress = styled.span`
  color: #666c66;
  font-size: 12px;
  line-height: 1.45;
`;

export const NetworkDealerJourney = styled.span`
  align-items: center;
  color: #4e534e;
  display: flex;
  flex-wrap: wrap;
  font-size: 11px;
  font-weight: 600;
  gap: 10px;

  > span {
    align-items: center;
    display: inline-flex;
    gap: 5px;
  }

  svg {
    color: #ad1e28;
    height: 13px;
    width: 13px;
  }
`;
