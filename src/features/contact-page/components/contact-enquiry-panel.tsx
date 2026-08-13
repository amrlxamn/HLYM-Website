import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { useContactEnquirySubmit } from "../hooks/use-contact-enquiry-submit";
import { ContactEnquiryBody } from "../styles/contact-enquiry-fields.styles";
import {
  ContactEnquiryOverlay,
  ContactEnquiryPanelRoot
} from "../styles/contact-enquiry-shell.styles";
import type { ContactEnquiryPanelProps } from "../types/contact-page.types";
import { ContactEnquiryConsentSection } from "./contact-enquiry-consent-section";
import { ContactEnquiryDetailsSection } from "./contact-enquiry-details-section";
import { ContactEnquiryPanelHeader } from "./contact-enquiry-panel-header";
import { ContactEnquiryPersonalSection } from "./contact-enquiry-personal-section";
import { ContactEnquiryVehicleSection } from "./contact-enquiry-vehicle-section";

export function ContactEnquiryPanel({ isOpen, onClose }: ContactEnquiryPanelProps) {
  const shouldReduceMotion = useReducedMotion();
  const { handleSubmit, status, ticketReference } = useContactEnquirySubmit();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <ContactEnquiryOverlay
            animate={{ opacity: 1 }}
            aria-hidden="true"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
          />
          <ContactEnquiryPanelRoot
            animate={{ opacity: 1, x: 0 }}
            aria-labelledby="contact-enquiry-title"
            aria-modal="true"
            exit={{ opacity: 0, x: shouldReduceMotion ? 0 : 44 }}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 72 }}
            role="dialog"
            transition={{ damping: 28, stiffness: 180, type: "spring" }}
          >
            <ContactEnquiryPanelHeader onClose={onClose} />
            <ContactEnquiryBody id="contact-form" onSubmit={handleSubmit}>
              <ContactEnquiryPersonalSection />
              <ContactEnquiryDetailsSection />
              <ContactEnquiryVehicleSection />
              <ContactEnquiryConsentSection status={status} ticketReference={ticketReference} />
            </ContactEnquiryBody>
          </ContactEnquiryPanelRoot>
        </>
      ) : null}
    </AnimatePresence>
  );
}
