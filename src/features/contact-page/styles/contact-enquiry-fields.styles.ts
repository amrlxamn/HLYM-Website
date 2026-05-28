import styled from "styled-components";

export const ContactEnquiryBody = styled.form`
  display: grid;
  gap: 0;
  overflow-y: auto;
  padding: 0 32px 34px;

  @media (max-width: 640px) {
    padding: 0 22px 30px;
  }
`;

export const ContactEnquirySection = styled.section`
  border-top: 1px solid var(--color-border-muted);
  display: grid;
  gap: 18px;
  padding: 28px 0;

  &:first-child {
    border-top: 1px solid var(--color-border-muted);
  }
`;

export const ContactEnquirySectionTitle = styled.h3`
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.8px;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
`;

export const ContactEnquiryGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr;
`;

export const ContactEnquiryField = styled.label`
  display: grid;
  gap: 8px;
`;

export const ContactEnquiryLabelText = styled.span`
  color: var(--color-text-primary);
  font-size: 13px;
  font-weight: 700;
`;

export const ContactEnquiryInput = styled.input`
  background: var(--color-bg-canvas);
  border: 1px solid var(--color-border-muted);
  color: var(--color-text-primary);
  min-height: 48px;
  padding: 0 15px;
  transition:
    border-color var(--duration-base) var(--easing-standard),
    box-shadow var(--duration-base) var(--easing-standard);
  width: 100%;

  &:focus {
    border-color: var(--red);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--red) 16%, transparent);
    outline: 0;
  }
`;

export const ContactEnquirySelect = styled.select`
  background: var(--color-bg-canvas);
  border: 1px solid var(--color-border-muted);
  color: var(--color-text-primary);
  min-height: 48px;
  padding: 0 15px;
  width: 100%;

  &:focus {
    border-color: var(--red);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--red) 16%, transparent);
    outline: 0;
  }
`;

export const ContactEnquiryTextarea = styled.textarea`
  background: var(--color-bg-canvas);
  border: 1px solid var(--color-border-muted);
  color: var(--color-text-primary);
  min-height: 116px;
  padding: 14px;
  resize: vertical;
  width: 100%;

  &:focus {
    border-color: var(--red);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--red) 16%, transparent);
    outline: 0;
  }
`;

export const ContactEnquiryHelper = styled.span`
  color: var(--color-text-subtle);
  font-size: 11px;
  line-height: 1.45;
`;
