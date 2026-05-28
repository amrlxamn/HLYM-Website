import styled from "styled-components";

export const ContactEnquiryConsent = styled.label`
  align-items: start;
  color: var(--color-text-dim);
  display: grid;
  font-size: 12px;
  gap: 10px;
  grid-template-columns: auto 1fr;
  line-height: 1.5;

  input {
    accent-color: var(--red);
    margin-top: 2px;
  }
`;

export const ContactEnquiryActions = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: space-between;

  @media (max-width: 560px) {
    align-items: stretch;
    flex-direction: column-reverse;
  }
`;

export const ContactEnquirySubmitButton = styled.button`
  background: var(--red);
  color: var(--color-text-inverse);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.4px;
  min-height: 46px;
  padding: 0 20px;
  text-transform: uppercase;
  transition:
    background var(--duration-base) var(--easing-standard),
    transform var(--duration-base) var(--easing-standard);

  &:hover {
    background: var(--red-marker);
  }

  &:active {
    transform: translateY(1px) scale(0.99);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.72;
  }
`;

export const ContactEnquiryStatusMessage = styled.p<{ $tone: "error" | "success" }>`
  color: ${({ $tone }) => ($tone === "error" ? "var(--red)" : "#207a48")};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.45;
  margin: 0;
`;
