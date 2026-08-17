import { TurnstileWidget } from "@/components/ui/turnstile/turnstile-widget";
import { Button } from "@/components/ui";
import {
  ContactEnquiryActions,
  ContactEnquiryConsent,
  ContactEnquiryStatusMessage
} from "../styles/contact-enquiry-actions.styles";
import { ContactEnquirySection } from "../styles/contact-enquiry-fields.styles";
import type { ContactEnquiryStatus } from "../types/contact-page.types";

type ContactEnquiryConsentSectionProps = {
  canSubmit: boolean;
  onTurnstileChange: (token: string | null) => void;
  status: ContactEnquiryStatus;
  ticketReference: string | null;
  turnstileResetKey: number;
};

export function ContactEnquiryConsentSection({
  canSubmit,
  onTurnstileChange,
  status,
  ticketReference,
  turnstileResetKey
}: ContactEnquiryConsentSectionProps) {
  return (
    <ContactEnquirySection>
      <ContactEnquiryConsent>
        <input name="consent" required type="checkbox" />
        <span>
          I certify that I have read and agree to the Privacy Policy and consent to us contacting me
          about this enquiry.
        </span>
      </ContactEnquiryConsent>
      <TurnstileWidget key={turnstileResetKey} onChange={onTurnstileChange} />
      <ContactEnquiryActions>
        {status === "success" ? (
          <ContactEnquiryStatusMessage $tone="success">
            Enquiry submitted. Your ticket reference is {ticketReference}.{" "}
            <a href="/support/access">Track your ticket</a>.
          </ContactEnquiryStatusMessage>
        ) : (
          <ContactEnquiryStatusMessage $tone="error">
            {status === "error" ? "Submission failed. Please try again." : ""}
          </ContactEnquiryStatusMessage>
        )}
        <Button disabled={status === "loading" || !canSubmit} type="submit" variant="light">
          {status === "loading" ? "Submitting" : "Submit enquiry"}
        </Button>
      </ContactEnquiryActions>
    </ContactEnquirySection>
  );
}
