import styled from "styled-components";

export const NetworkFilterField = styled.label`
  color: #4e534e;
  display: grid;
  font-size: 11px;
  font-weight: 700;
  gap: 5px;
`;

export const NetworkFilterSelect = styled.select`
  background: #fff;
  border: 1px solid #b4bab4;
  color: #171a17;
  font: inherit;
  font-size: 13px;
  height: 40px;
  min-width: 0;
  padding: 0 8px;
  width: 100%;

  &:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: 2px;
  }
`;

export const NetworkDealerCount = styled.span`
  color: #4e534e;
  font-size: 11px;
  font-weight: 700;
  grid-column: 1 / -1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const NetworkSelectedDealer = styled.div`
  border-top: 1px solid #e8e9e5;
  display: grid;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;

  strong {
    color: #171a17;
    font-size: 12px;
    line-height: 1.3;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
  }

  a {
    color: #8f1821;
    font-size: 12px;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:focus-visible {
      outline: 2px solid var(--red);
      outline-offset: 2px;
    }
  }
`;
