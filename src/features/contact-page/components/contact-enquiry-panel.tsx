import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
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

export function ContactEnquiryPanel({
  defaultTopic = "General",
  isOpen,
  onClose,
  source,
  title = "GOT ANY ENQUIRY?"
}: ContactEnquiryPanelProps) {
  const panelRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const {
    canSubmit,
    handleSubmit,
    handleTurnstileChange,
    status,
    ticketReference,
    turnstileResetKey
  } = useContactEnquirySubmit(source);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLButtonElement>("button")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first && last) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last && first) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
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
            ref={panelRef}
            transition={{ damping: 28, stiffness: 180, type: "spring" }}
          >
            <ContactEnquiryPanelHeader onClose={onClose} title={title} />
            <ContactEnquiryBody id="contact-form" onSubmit={handleSubmit}>
              <ContactEnquiryPersonalSection />
              <ContactEnquiryDetailsSection defaultTopic={defaultTopic} />
              <ContactEnquiryVehicleSection />
              <ContactEnquiryConsentSection
                canSubmit={canSubmit}
                onTurnstileChange={handleTurnstileChange}
                status={status}
                ticketReference={ticketReference}
                turnstileResetKey={turnstileResetKey}
              />
            </ContactEnquiryBody>
          </ContactEnquiryPanelRoot>
        </>
      ) : null}
    </AnimatePresence>
  );
}
