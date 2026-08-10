import type { ContactEnquiryApiRequest } from "./contact-enquiry-api.types";

export async function readContactEnquiryRequestBody(request: ContactEnquiryApiRequest) {
  if (request.body !== undefined) {
    return JSON.stringify(request.body);
  }

  let body = "";

  for await (const chunk of request) {
    body += typeof chunk === "string" ? chunk : chunk.toString("utf8");
  }

  return body;
}
