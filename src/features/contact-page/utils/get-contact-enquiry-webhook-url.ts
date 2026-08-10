const CONTACT_ENQUIRY_DEV_PROXY_URL = "/api/contact-enquiries";
const CONTACT_ENQUIRY_EXAMPLE_HOST = "n8n.example.com";

export function getContactEnquiryWebhookUrl() {
  const configuredUrl = import.meta.env.VITE_CONTACT_ENQUIRY_WEBHOOK_URL ?? "";

  if (!configuredUrl || configuredUrl.includes(CONTACT_ENQUIRY_EXAMPLE_HOST)) {
    return CONTACT_ENQUIRY_DEV_PROXY_URL;
  }

  return configuredUrl;
}
