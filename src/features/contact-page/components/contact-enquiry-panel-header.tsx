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
  title?: string;
};

export function ContactEnquiryPanelHeader({
  onClose,
  title = "GOT ANY ENQUIRY?"
}: ContactEnquiryPanelHeaderProps) {
  return (
    <>
      <ContactEnquiryCloseRail>
        <ContactEnquiryCloseButton aria-label="Close enquiry form" onClick={onClose}>
          <X aria-hidden="true" />
        </ContactEnquiryCloseButton>
      </ContactEnquiryCloseRail>
      <ContactEnquiryHeaderRoot>
        <ContactEnquiryTitle id="contact-enquiry-title">{title}</ContactEnquiryTitle>
        <ContactEnquiryDescription>
          Tell us how we can help. We will route your enquiry to the right team.
        </ContactEnquiryDescription>
      </ContactEnquiryHeaderRoot>
    </>
  );
}
