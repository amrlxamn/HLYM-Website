import styled from "styled-components";

export const DealerNetworkCtaRoot = styled.aside<{ $backgroundImage: string }>`
  background: var(--color-bg-primary);
  background-image: url("${({ $backgroundImage }) => $backgroundImage}");
  background-position: center;
  background-size: cover;
  display: flex;
  min-height: 720px;
  overflow: hidden;
  position: relative;

  &::before {
    background: linear-gradient(90deg, rgb(5 7 9 / 94%) 0%, rgb(5 7 9 / 72%) 34%, transparent 72%);
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
  }

  @media (max-width: 980px) {
    min-height: 600px;

    &::before {
      background: linear-gradient(90deg, rgb(5 7 9 / 92%) 0%, rgb(5 7 9 / 64%) 58%, transparent);
    }
  }

  @media (max-width: 640px) {
    background-position: 58% center;
    min-height: 520px;

    &::before {
      background: rgb(5 7 9 / 72%);
    }
  }
`;

export const DealerNetworkCtaCopy = styled.div`
  align-items: flex-start;
  align-self: center;
  color: var(--color-text-inverse);
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 760px;
  padding: var(--space-24) var(--space-16) var(--space-24)
    max(var(--space-8), calc((100vw - var(--container)) / 2));
  position: relative;
  z-index: 1;

  @media (max-width: 980px) {
    max-width: none;
    padding: var(--space-16) var(--space-8) var(--space-12);
  }

  @media (max-width: 640px) {
    padding: var(--space-12) var(--space-5) var(--space-10);
  }
`;
