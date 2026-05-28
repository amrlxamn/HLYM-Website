import { X } from "lucide-react";
import {
  ContactEnquiryCloseButton,
  ContactEnquiryCloseRail,
  ContactEnquiryDescription,
  ContactEnquiryHeaderRoot,
  ContactEnquiryTitle
} from "../styles/contact-enquiry-shell.styles";

type ContactEnquiryPanelHeaderProps = {
  onClose: () => void;
};

export function ContactEnquiryPanelHeader({ onClose }: ContactEnquiryPanelHeaderProps) {
  return (
    <>
      <ContactEnquiryCloseRail>
        <ContactEnquiryCloseButton aria-label="Close enquiry form" onClick={onClose}>
          <X aria-hidden="true" />
        </ContactEnquiryCloseButton>
      </ContactEnquiryCloseRail>
      <ContactEnquiryHeaderRoot>
        <ContactEnquiryTitle id="contact-enquiry-title">GOT ANY ENQUIRY?</ContactEnquiryTitle>
        <ContactEnquiryDescription>
          Tell us how we can help. We will route your enquiry to the right team.
        </ContactEnquiryDescription>
      </ContactEnquiryHeaderRoot>
    </>
  );
}
