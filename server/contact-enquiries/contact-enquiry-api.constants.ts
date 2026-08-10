export const CONTACT_ENQUIRY_REQUIRED_FIELDS = [
  "name",
  "email",
  "phone",
  "topic",
  "message",
  "submissionId"
] as const;

export const CONTACT_ENQUIRY_WEBHOOK_ENV_KEYS = [
  "CONTACT_ENQUIRY_WEBHOOK_URL",
  "N8N_CONTACT_ENQUIRY_WEBHOOK_URL"
] as const;
