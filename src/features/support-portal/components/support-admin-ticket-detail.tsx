import { Badge } from "@/components/ui";
import type { SupportAdminTicket } from "../support-admin.types";
import {
  SupportAdminConversation,
  SupportAdminDetail,
  SupportAdminDetailHeader,
  SupportAdminMessage,
  SupportAdminTicketControls
} from "../styles/support-admin-detail.styles";
import { SupportAdminMessageForm } from "./support-admin-message-form";
import { SupportAdminStatusForm } from "./support-admin-status-form";

type SupportAdminTicketDetailProps = {
  accessToken: string;
  onUpdated: () => Promise<void>;
  ticket: SupportAdminTicket;
};

export function SupportAdminTicketDetail({
  accessToken,
  onUpdated,
  ticket
}: SupportAdminTicketDetailProps) {
  const status = String(ticket.fields.Status ?? "Submitted");

  return (
    <SupportAdminDetail aria-labelledby="support-ticket-title">
      <SupportAdminDetailHeader>
        <div>
          <span>{ticket.ticketReference}</span>
          <h2 id="support-ticket-title">{String(ticket.fields.Subject ?? "Support enquiry")}</h2>
        </div>
        <Badge variant="accent">{status}</Badge>
      </SupportAdminDetailHeader>
      <SupportAdminConversation aria-label="Staff ticket conversation">
        {ticket.messages.map((message) => {
          const isInternal = String(message.Visibility).toLowerCase() === "internal";

          return (
            <SupportAdminMessage $internal={isInternal} key={String(message.id)}>
              <header>
                <strong>{String(message["Author Name"] ?? message["Author Type"])}</strong>
                <span>{isInternal ? "Internal note" : "Public"}</span>
                <time>{new Date(String(message["Created At"])).toLocaleString()}</time>
              </header>
              <p>{String(message.Body)}</p>
            </SupportAdminMessage>
          );
        })}
      </SupportAdminConversation>
      <SupportAdminTicketControls>
        <SupportAdminMessageForm
          accessToken={accessToken}
          onUpdated={onUpdated}
          ticketReference={ticket.ticketReference}
        />
        <SupportAdminStatusForm
          accessToken={accessToken}
          currentStatus={status}
          key={status}
          onUpdated={onUpdated}
          ticketReference={ticket.ticketReference}
        />
      </SupportAdminTicketControls>
    </SupportAdminDetail>
  );
}
