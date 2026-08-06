import { CONTACT_ENQUIRY_REQUIRED_FIELDS } from "./contact-enquiry-api.constants";
import type { ContactEnquiryServerPayload } from "./contact-enquiry-api.types";

export function validateContactEnquiryPayload(payload: unknown): ContactEnquiryServerPayload {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("Request body must be a JSON object");
  }

  const record = payload as Record<string, unknown>;
  const missingFields = CONTACT_ENQUIRY_REQUIRED_FIELDS.filter((field) => {
    const value = record[field];

    return typeof value !== "string" || value.trim().length === 0;
  });

  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
  }

  if (record.consent !== true) {
    throw new Error("Consent is required");
  }

  return record as ContactEnquiryServerPayload;
}
