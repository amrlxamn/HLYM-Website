import { useState } from "react";
import type { FormEvent } from "react";
import type { ContactEnquiryStatus } from "../types/contact-page.types";
import { createContactEnquiryPayload } from "../utils/create-contact-enquiry-payload";
import { submitContactEnquiry } from "../utils/submit-contact-enquiry";

export function useContactEnquirySubmit() {
  const [status, setStatus] = useState<ContactEnquiryStatus>("idle");
  const [ticketReference, setTicketReference] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const form = event.currentTarget;

      const result = await submitContactEnquiry(createContactEnquiryPayload(form));

      form.reset();
      setTicketReference(result.ticketReference);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return { handleSubmit, status, ticketReference };
}
