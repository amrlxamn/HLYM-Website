import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui";
import { SUPPORT_ADMIN_STATUSES } from "../constants/support-admin-statuses.constants";
import type { SupportAdminStatus } from "../support-admin.types";
import { SupportAdminControlForm } from "../styles/support-admin-detail.styles";
import { submitSupportAdminTicketAction } from "../utils/submit-support-admin-ticket-action";

type SupportAdminStatusFormProps = {
  accessToken: string;
  currentStatus: string;
  onUpdated: () => Promise<void>;
  ticketReference: string;
};

export function SupportAdminStatusForm({
  accessToken,
  currentStatus,
  onUpdated,
  ticketReference
}: SupportAdminStatusFormProps) {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setFeedback("");
    setIsSubmitting(true);

    try {
      await submitSupportAdminTicketAction(
        {
          action: "status",
          status: String(formData.get("status")) as SupportAdminStatus,
          ticketReference
        },
        accessToken
      );
      await onUpdated();
      setFeedback("Ticket status updated.");
    } catch {
      setFeedback("The status could not be updated. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SupportAdminControlForm onSubmit={handleSubmit}>
      <label htmlFor="staff-ticket-status">Ticket status</label>
      <select defaultValue={currentStatus} id="staff-ticket-status" name="status">
        {SUPPORT_ADMIN_STATUSES.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <span aria-live="polite">{feedback}</span>
      <Button disabled={isSubmitting} type="submit" variant="secondary">
        {isSubmitting ? "Updating status" : "Update status"}
      </Button>
    </SupportAdminControlForm>
  );
}
