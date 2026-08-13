export type SupportAdminStatus =
  | "Submitted"
  | "In Progress"
  | "Awaiting Customer"
  | "Resolved"
  | "Closed";

export type SupportAdminQueueTicket = {
  customerEmail: unknown;
  customerName: unknown;
  priority: unknown;
  status: unknown;
  subject: unknown;
  ticketReference: string;
  updatedAt: unknown;
};

export type SupportAdminQueue = {
  staff: { display_name: string; email: string; role: string };
  tickets: SupportAdminQueueTicket[];
};

export type SupportAdminMessage = {
  Body: unknown;
  "Author Name": unknown;
  "Author Type": unknown;
  "Created At": unknown;
  Visibility: unknown;
  id: unknown;
};

export type SupportAdminTicket = {
  fields: Record<string, unknown>;
  messages: SupportAdminMessage[];
  recordId: string;
  ticketReference: string;
};

export type SupportAdminTicketAction =
  | {
      action: "message";
      body: string;
      ticketReference: string;
      visibility: "Public" | "Internal";
    }
  | { action: "status"; status: SupportAdminStatus; ticketReference: string };
