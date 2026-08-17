import { useCallback, useState } from "react";
import type { FormEvent } from "react";
import type { ContactEnquiryStatus } from "../types/contact-page.types";
import { createContactEnquiryPayload } from "../utils/create-contact-enquiry-payload";
import { submitContactEnquiry } from "../utils/submit-contact-enquiry";

export function useContactEnquirySubmit() {
  const [status, setStatus] = useState<ContactEnquiryStatus>("idle");
  const [ticketReference, setTicketReference] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const siteKeyConfigured = Boolean(import.meta.env.VITE_TURNSTILE_SITE_KEY);
  const canSubmit = !siteKeyConfigured || Boolean(turnstileToken);

  const handleTurnstileChange = useCallback((token: string | null) => {
    setTurnstileToken(token);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    setStatus("loading");

    try {
      const form = event.currentTarget;

      const result = await submitContactEnquiry(createContactEnquiryPayload(form, turnstileToken));

      form.reset();
      setTicketReference(result.ticketReference);
      setTurnstileToken(null);
      setTurnstileResetKey((key) => key + 1);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return {
    canSubmit,
    handleSubmit,
    handleTurnstileChange,
    status,
    ticketReference,
    turnstileResetKey
  };
}
