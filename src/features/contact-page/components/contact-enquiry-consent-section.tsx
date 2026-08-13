import {
  ContactEnquiryActions,
  ContactEnquiryConsent,
  ContactEnquiryStatusMessage,
  ContactEnquirySubmitButton
} from "../styles/contact-enquiry-actions.styles";
import { ContactEnquirySection } from "../styles/contact-enquiry-fields.styles";
import type { ContactEnquiryStatus } from "../types/contact-page.types";

type ContactEnquiryConsentSectionProps = {
  status: ContactEnquiryStatus;
  ticketReference: string | null;
};

export function ContactEnquiryConsentSection({
  status,
  ticketReference
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
      <ContactEnquiryActions>
        {status === "success" ? (
          <ContactEnquiryStatusMessage $tone="success">
            Enquiry submitted. Your ticket reference is {ticketReference}.
          </ContactEnquiryStatusMessage>
        ) : (
          <ContactEnquiryStatusMessage $tone="error">
            {status === "error" ? "Submission failed. Please try again." : ""}
          </ContactEnquiryStatusMessage>
        )}
        <ContactEnquirySubmitButton disabled={status === "loading"} type="submit">
          {status === "loading" ? "Submitting" : "Submit enquiry"}
        </ContactEnquirySubmitButton>
      </ContactEnquiryActions>
    </ContactEnquirySection>
  );
}
