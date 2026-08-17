import styled from "styled-components";

export const ContactEnquiryConsent = styled.label`
  align-items: start;
  color: var(--color-text-dim);
  display: grid;
  font-size: var(--font-size-base);
  gap: var(--space-3);
  grid-template-columns: auto 1fr;
  line-height: var(--leading-normal);

  input {
    accent-color: var(--red);
    margin-top: 2px;
  }
`;

export const ContactEnquiryActions = styled.div`
  align-items: center;
  display: flex;
  gap: var(--space-3);
  justify-content: flex-start;

  @media (max-width: 560px) {
    align-items: stretch;
    flex-direction: column-reverse;
  }
`;

export const ContactEnquiryStatusMessage = styled.p<{ $tone: "error" | "success" }>`
  color: ${({ $tone }) => ($tone === "error" ? "var(--red)" : "var(--color-success)")};
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  margin: 0;

  a {
    color: inherit;
    text-decoration: underline;
  }
`;
