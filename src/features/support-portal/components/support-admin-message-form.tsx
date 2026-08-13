import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui";
import { SupportAdminControlForm } from "../styles/support-admin-detail.styles";
import { submitSupportAdminTicketAction } from "../utils/submit-support-admin-ticket-action";

type SupportAdminMessageFormProps = {
  accessToken: string;
  onUpdated: () => Promise<void>;
  ticketReference: string;
};

export function SupportAdminMessageForm({
  accessToken,
  onUpdated,
  ticketReference
}: SupportAdminMessageFormProps) {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setFeedback("");
    setIsSubmitting(true);

    try {
      await submitSupportAdminTicketAction(
        {
          action: "message",
          body: String(formData.get("message") ?? ""),
          ticketReference,
          visibility: formData.get("visibility") === "Internal" ? "Internal" : "Public"
        },
        accessToken
      );
      form.reset();
      await onUpdated();
      setFeedback("Message added to the ticket.");
    } catch {
      setFeedback("The message could not be added. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SupportAdminControlForm onSubmit={handleSubmit}>
      <label htmlFor="staff-message">Add message</label>
      <textarea id="staff-message" name="message" required rows={5} />
      <label htmlFor="staff-message-visibility">Visibility</label>
      <select defaultValue="Public" id="staff-message-visibility" name="visibility">
        <option value="Public">Public reply</option>
        <option value="Internal">Internal note</option>
      </select>
      <span aria-live="polite">{feedback}</span>
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Adding message" : "Add message"}
        <Send aria-hidden="true" size={16} />
      </Button>
    </SupportAdminControlForm>
  );
}
