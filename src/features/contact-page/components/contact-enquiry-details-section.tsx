import {
  CONTACT_ENQUIRY_BRANCH_OPTIONS,
  CONTACT_ENQUIRY_TYPE_OPTIONS
} from "../constants/contact-enquiry-form.constants";
import {
  ContactEnquiryField,
  ContactEnquiryGrid,
  ContactEnquiryHelper,
  ContactEnquiryLabelText,
  ContactEnquirySection,
  ContactEnquirySectionTitle,
  ContactEnquirySelect,
  ContactEnquiryTextarea
} from "../styles/contact-enquiry-fields.styles";

export function ContactEnquiryDetailsSection() {
  return (
    <ContactEnquirySection>
      <ContactEnquirySectionTitle>Your enquiry</ContactEnquirySectionTitle>
      <ContactEnquiryGrid>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Type of enquiry</ContactEnquiryLabelText>
          <ContactEnquirySelect defaultValue="General" name="topic" required>
            {CONTACT_ENQUIRY_TYPE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </ContactEnquirySelect>
        </ContactEnquiryField>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Preferred branch</ContactEnquiryLabelText>
          <ContactEnquirySelect defaultValue="Not sure yet" name="preferredBranch">
            {CONTACT_ENQUIRY_BRANCH_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </ContactEnquirySelect>
        </ContactEnquiryField>
      </ContactEnquiryGrid>
      <ContactEnquiryField>
        <ContactEnquiryLabelText>Details</ContactEnquiryLabelText>
        <ContactEnquiryTextarea name="message" required />
        <ContactEnquiryHelper>
          Include model, branch, date, or issue context if relevant.
        </ContactEnquiryHelper>
      </ContactEnquiryField>
    </ContactEnquirySection>
  );
}
