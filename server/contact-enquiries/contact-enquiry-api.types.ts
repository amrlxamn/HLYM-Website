import type { IncomingMessage, ServerResponse } from "node:http";

export type ContactEnquiryApiRequest = IncomingMessage & {
  body?: unknown;
  method?: string;
};

export type ContactEnquiryApiResponse = ServerResponse & {
  status: (statusCode: number) => ContactEnquiryApiResponse;
  json: (body: unknown) => void;
};

export type ContactEnquiryServerPayload = {
  consent: true;
  email: string;
  message: string;
  name: string;
  phone: string;
  preferredBranch: string;
  source: "webflow-contact-page";
  submissionId: string;
  topic: string;
  ownerType?: string;
  title?: string;
  vehicleModel?: string;
  yearOfPurchase?: string;
};
