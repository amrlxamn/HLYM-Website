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
};

export function ContactEnquiryConsentSection({ status }: ContactEnquiryConsentSectionProps) {
  return (
    <ContactEnquirySection>
      <ContactEnquiryConsent>
        <input name="consent" required type="checkbox" />
        <span>
          I certify that I have read and agree to the Privacy Policy and consent to us contacting
          me about this enquiry.
        </span>
      </ContactEnquiryConsent>
      <ContactEnquiryActions>
        {status === "success" ? (
          <ContactEnquiryStatusMessage $tone="success">
            Enquiry captured locally. Connect the Webflow form to n8n for CRM handoff.
          </ContactEnquiryStatusMessage>
        ) : (
          <ContactEnquiryStatusMessage $tone="error">
            {status === "error" ? "Please check the highlighted fields." : ""}
          </ContactEnquiryStatusMessage>
        )}
        <ContactEnquirySubmitButton disabled={status === "loading"} type="submit">
          {status === "loading" ? "Preparing handoff" : "Submit enquiry"}
        </ContactEnquirySubmitButton>
      </ContactEnquiryActions>
    </ContactEnquirySection>
  );
}
