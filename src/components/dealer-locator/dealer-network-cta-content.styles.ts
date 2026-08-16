import styled from "styled-components";

export const DealerNetworkCtaTitle = styled.h2`
  align-items: flex-start;
  display: flex;
  font-size: 56px;
  font-weight: var(--font-weight-light);
  gap: var(--space-4);
  letter-spacing: -2px;
  line-height: 1.05;
  margin: 0;
  text-transform: uppercase;
  white-space: nowrap;

  &::before {
    background: var(--red);
    content: "";
    flex: 0 0 2px;
    height: 52px;
    margin-top: 3px;
  }

  > span {
    display: flex;
    flex-direction: column;
  }

  strong {
    color: var(--red);
    font-weight: inherit;
  }

  @media (max-width: 1200px) {
    font-size: 44px;

    &::before {
      margin-top: -3px;
    }
  }

  @media (max-width: 640px) {
    font-size: 28px;
    letter-spacing: -1px;

    &::before {
      height: 32px;
      margin-top: -1px;
    }
  }
`;
