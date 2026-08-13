import type { ContactEnquiryApiRequest } from "./contact-enquiry-api.types.js";

export async function readContactEnquiryRequestBody(request: ContactEnquiryApiRequest) {
  const maximumBytes = 64 * 1024;
  const encoder = new TextEncoder();

  if (request.body !== undefined) {
    const body = typeof request.body === "string" ? request.body : JSON.stringify(request.body);

    if (encoder.encode(body).byteLength > maximumBytes) {
      throw new Error("Request body is too large");
    }

    return body;
  }

  let body = "";

  for await (const chunk of request) {
    body += typeof chunk === "string" ? chunk : chunk.toString("utf8");

    if (encoder.encode(body).byteLength > maximumBytes) {
      throw new Error("Request body is too large");
    }
  }

  return body;
}
