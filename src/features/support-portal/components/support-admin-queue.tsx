import { Search } from "lucide-react";
import type { SupportAdminQueueTicket } from "../support-admin.types";
import {
  SupportAdminQueueHeader,
  SupportAdminQueueList,
  SupportTicketRow
} from "../styles/support-admin-queue.styles";

type SupportAdminQueueProps = {
  onSelect: (ticketReference: string) => void;
  selectedReference: string | undefined;
  tickets: SupportAdminQueueTicket[];
};

export function SupportAdminQueue({
  onSelect,
  selectedReference,
  tickets
}: SupportAdminQueueProps) {
  return (
    <SupportAdminQueueList aria-label="Support ticket queue">
      <SupportAdminQueueHeader>
        <Search aria-hidden="true" size={17} />
        {tickets.length} active and historical tickets
      </SupportAdminQueueHeader>
      {tickets.map((ticket) => (
        <SupportTicketRow
          $selected={selectedReference === ticket.ticketReference}
          aria-pressed={selectedReference === ticket.ticketReference}
          key={ticket.ticketReference}
          onClick={() => onSelect(ticket.ticketReference)}
          type="button"
        >
          <strong>{ticket.ticketReference}</strong>
          <span>{String(ticket.subject ?? "Support enquiry")}</span>
          <span>{String(ticket.customerName ?? ticket.customerEmail)}</span>
          <span>{String(ticket.status)}</span>
          <time>{new Date(String(ticket.updatedAt)).toLocaleDateString()}</time>
        </SupportTicketRow>
      ))}
    </SupportAdminQueueList>
  );
}
