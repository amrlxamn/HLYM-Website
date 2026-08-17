import styled from "styled-components";

export const ContactEnquiryBody = styled.form`
  display: grid;
  gap: 0;
  overflow-y: auto;
  padding: 0 var(--space-8) var(--space-8);

  @media (max-width: 640px) {
    padding: 0 var(--space-5) var(--space-6);
  }
`;

export const ContactEnquirySection = styled.section`
  border-top: 1px solid var(--color-border-muted);
  display: grid;
  gap: var(--space-4);
  padding: var(--space-6) 0;

  &:first-child {
    border-top: 1px solid var(--color-border-muted);
  }
`;

export const ContactEnquirySectionTitle = styled.h3`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: 2px;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
`;

export const ContactEnquiryGrid = styled.div`
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr;
`;

export const ContactEnquiryField = styled.label`
  display: grid;
  gap: var(--space-2);
`;

export const ContactEnquiryLabelText = styled.span`
  color: var(--color-text-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  text-transform: capitalize;
`;

export const ContactEnquiryInput = styled.input`
  background: var(--color-bg-canvas);
  border: 1px solid var(--color-border-muted);
  color: var(--color-text-primary);
  font-size: var(--font-size-md);
  min-height: 48px;
  padding: var(--space-3) var(--space-4);
  transition:
    border-color var(--duration-press) var(--easing-out),
    box-shadow var(--duration-press) var(--easing-out);
  width: 100%;

  &:focus {
    border-color: var(--color-brand-500);
    box-shadow: var(--shadow-focus);
    outline: 0;
  }
`;

export const ContactEnquirySelect = styled.select`
  background: var(--color-bg-canvas);
  border: 1px solid var(--color-border-muted);
  color: var(--color-text-primary);
  font-size: var(--font-size-md);
  min-height: 48px;
  padding: var(--space-3) var(--space-4);
  width: 100%;

  &:focus {
    border-color: var(--color-brand-500);
    box-shadow: var(--shadow-focus);
    outline: 0;
  }
`;

export const ContactEnquiryTextarea = styled.textarea`
  background: var(--color-bg-canvas);
  border: 1px solid var(--color-border-muted);
  color: var(--color-text-primary);
  font-size: var(--font-size-md);
  min-height: 116px;
  padding: var(--space-3) var(--space-4);
  resize: vertical;
  width: 100%;

  &:focus {
    border-color: var(--color-brand-500);
    box-shadow: var(--shadow-focus);
    outline: 0;
  }
`;

export const ContactEnquiryHelper = styled.span`
  color: var(--color-text-subtle);
  font-size: var(--font-size-sm);
  line-height: var(--leading-normal);
`;
