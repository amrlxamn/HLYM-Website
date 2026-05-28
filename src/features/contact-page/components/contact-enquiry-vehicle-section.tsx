import {
  ContactEnquiryField,
  ContactEnquiryGrid,
  ContactEnquiryInput,
  ContactEnquiryLabelText,
  ContactEnquirySection,
  ContactEnquirySectionTitle
} from "../styles/contact-enquiry-fields.styles";

export function ContactEnquiryVehicleSection() {
  return (
    <ContactEnquirySection>
      <ContactEnquirySectionTitle>Your Yamaha vehicle</ContactEnquirySectionTitle>
      <ContactEnquiryGrid>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Model</ContactEnquiryLabelText>
          <ContactEnquiryInput name="model" />
        </ContactEnquiryField>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Year of purchase</ContactEnquiryLabelText>
          <ContactEnquiryInput max="2030" min="1960" name="yearOfPurchase" type="number" />
        </ContactEnquiryField>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Vehicle registration no.</ContactEnquiryLabelText>
          <ContactEnquiryInput name="registrationNumber" />
        </ContactEnquiryField>
        <ContactEnquiryField>
          <ContactEnquiryLabelText>Mileage (KM)</ContactEnquiryLabelText>
          <ContactEnquiryInput min="0" name="mileage" type="number" />
        </ContactEnquiryField>
      </ContactEnquiryGrid>
      <ContactEnquiryField>
        <ContactEnquiryLabelText>Dealer's shop</ContactEnquiryLabelText>
        <ContactEnquiryInput name="dealerShop" />
      </ContactEnquiryField>
    </ContactEnquirySection>
  );
}
