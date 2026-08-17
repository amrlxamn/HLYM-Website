import type { ContactFaqContent } from "../types/contact-page.types";
import { CONTACT_FAQ_GENERAL_ITEMS } from "./contact-faq-items/general.constants";
import { CONTACT_FAQ_GENUINE_PARTS_ITEMS } from "./contact-faq-items/genuine-parts.constants";
import { CONTACT_FAQ_SALES_ITEMS } from "./contact-faq-items/sales.constants";
import { CONTACT_FAQ_SERVICE_MAINTENANCE_ITEMS } from "./contact-faq-items/service-maintenance.constants";
import { CONTACT_FAQ_WARRANTY_ITEMS } from "./contact-faq-items/warranty.constants";
import { CONTACT_FAQ_TOPICS } from "./contact-faq-topics.constants";

export const CONTACT_FAQ_CONTENT: ContactFaqContent = {
  ariaLabel: "Frequently asked questions",
  emptyMessage: "No FAQs are currently listed for this topic.",
  filterLabel: "Filter by topic",
  items: [
    ...CONTACT_FAQ_GENERAL_ITEMS,
    ...CONTACT_FAQ_SALES_ITEMS,
    ...CONTACT_FAQ_SERVICE_MAINTENANCE_ITEMS,
    ...CONTACT_FAQ_GENUINE_PARTS_ITEMS,
    ...CONTACT_FAQ_WARRANTY_ITEMS
  ],
  title: "FAQ",
  topics: CONTACT_FAQ_TOPICS
} as const;
