import { CONTACT_ENQUIRY_WEBHOOK_ENV_KEYS } from "./contact-enquiry-api.constants";

export function getContactEnquiryWebhookUrl() {
  const configuredUrl = CONTACT_ENQUIRY_WEBHOOK_ENV_KEYS.map((key) => process.env[key])
    .find((value) => value?.trim())
    ?.trim();

  if (!configuredUrl) {
    return "";
  }

  return configuredUrl.replace(/^"(.*)"$/, "$1");
}
