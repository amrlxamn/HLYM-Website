import {
  CONTACT_ENQUIRY_OWNER_OPTIONS,
  CONTACT_ENQUIRY_TITLE_OPTIONS
} from "../constants/contact-enquiry-form.constants";
import {
  ContactEnquiryField,
  ContactEnquiryGrid,
  ContactEnquiryHelper,
  ContactEnquiryInput,
  ContactEnquiryLabelText,
  ContactEnquirySection,
  ContactEnquirySectionTitle,
  ContactEnquirySelect
} from "../styles/contact-enquiry-fields.styles";

export function ContactEnquiryPersonalSection() {
  return (
    <ContactEnquirySection>
      <ContactEnquirySectionTitle>Personal details</ContactEnquirySectionTitle>
      <ContactEnquiryGrid>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>I'm</ContactEnquiryLabelText>
          <ContactEnquirySelect defaultValue="Owner" name="ownerType" required>
            {CONTACT_ENQUIRY_OWNER_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </ContactEnquirySelect>
          <ContactEnquiryHelper>Choose whether you own a Yamaha vehicle.</ContactEnquiryHelper>
        </ContactEnquiryField>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Title</ContactEnquiryLabelText>
          <ContactEnquirySelect defaultValue="Mr." name="title" required>
            {CONTACT_ENQUIRY_TITLE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </ContactEnquirySelect>
          <ContactEnquiryHelper>Used only for customer care follow-up.</ContactEnquiryHelper>
        </ContactEnquiryField>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Full name</ContactEnquiryLabelText>
          <ContactEnquiryInput name="name" required />
        </ContactEnquiryField>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Email address</ContactEnquiryLabelText>
          <ContactEnquiryInput name="email" required type="email" />
        </ContactEnquiryField>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Mobile phone</ContactEnquiryLabelText>
          <ContactEnquiryInput name="phone" required type="tel" />
        </ContactEnquiryField>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Home / office phone</ContactEnquiryLabelText>
          <ContactEnquiryInput name="alternatePhone" type="tel" />
        </ContactEnquiryField>
      </ContactEnquiryGrid>
    </ContactEnquirySection>
  );
}
