import type { IncomingMessage, ServerResponse } from "node:http";

export type SupportApiRequest = IncomingMessage & {
  body?: unknown;
  method?: string;
  query?: Record<string, string | string[] | undefined>;
};

export type SupportApiResponse = ServerResponse & {
  json: (body: unknown) => void;
  status: (statusCode: number) => SupportApiResponse;
};
