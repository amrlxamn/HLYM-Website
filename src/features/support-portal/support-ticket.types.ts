export type PublicSupportMessage = {
  authorName: unknown;
  authorType: unknown;
  body: unknown;
  createdAt: unknown;
  id: unknown;
};

export type PublicSupportTicket = {
  createdAt: unknown;
  messages: PublicSupportMessage[];
  status: unknown;
  subject: unknown;
  ticketReference: string;
  topic: unknown;
  updatedAt: unknown;
};
