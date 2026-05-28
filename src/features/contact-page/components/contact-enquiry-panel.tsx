import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ContactEnquiryBody } from "../styles/contact-enquiry-fields.styles";
import {
  ContactEnquiryOverlay,
  ContactEnquiryPanelRoot
} from "../styles/contact-enquiry-shell.styles";
import type {
  ContactEnquiryPanelProps,
  ContactEnquiryStatus
} from "../types/contact-page.types";
import { ContactEnquiryConsentSection } from "./contact-enquiry-consent-section";
import { ContactEnquiryDetailsSection } from "./contact-enquiry-details-section";
import { ContactEnquiryPanelHeader } from "./contact-enquiry-panel-header";
import { ContactEnquiryPersonalSection } from "./contact-enquiry-personal-section";
import { ContactEnquiryVehicleSection } from "./contact-enquiry-vehicle-section";

export function ContactEnquiryPanel({ isOpen, onClose }: ContactEnquiryPanelProps) {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<ContactEnquiryStatus>("idle");
  const timerRef = useRef<number>();

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

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

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
            <ContactEnquiryBody
              id="contact-form"
              onSubmit={(event: FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                setStatus("loading");
                timerRef.current = window.setTimeout(() => {
                  setStatus("success");
                }, 650);
              }}
            >
              <ContactEnquiryPersonalSection />
              <ContactEnquiryDetailsSection />
              <ContactEnquiryVehicleSection />
              <ContactEnquiryConsentSection status={status} />
            </ContactEnquiryBody>
          </ContactEnquiryPanelRoot>
        </>
      ) : null}
    </AnimatePresence>
  );
}
