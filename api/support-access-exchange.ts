import { z } from "zod";
import { readContactEnquiryRequestBody } from "../server/contact-enquiries/read-contact-enquiry-request-body.js";
import { exchangeCustomerAccessToken } from "../server/support/exchange-customer-access-token.js";
import type { SupportApiRequest, SupportApiResponse } from "../server/support/support-api.types.js";

const exchangeSchema = z.object({ token: z.string().trim().min(32).max(200) });

export default async function supportAccessExchange(
  request: SupportApiRequest,
  response: SupportApiResponse
) {
  if (request.method !== "POST") {
    response.status(405).json({ code: "method_not_allowed", message: "Method not allowed" });
    return;
  }

  try {
    const body = await readContactEnquiryRequestBody(request);
    const input = exchangeSchema.parse(JSON.parse(body));
    const result = await exchangeCustomerAccessToken(input.token);

    if (!result) {
      response.status(401).json({ code: "invalid_access_link", message: "Access link is invalid" });
      return;
    }

    response.setHeader(
      "Set-Cookie",
      `hlym_support_session=${encodeURIComponent(result.session)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800${process.env.NODE_ENV === "production" ? "; Secure" : ""}`
    );
    response.status(200).json({ status: "accepted", ticketReference: result.ticketReference });
  } catch {
    response.status(401).json({ code: "invalid_access_link", message: "Access link is invalid" });
  }
}
