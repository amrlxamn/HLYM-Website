export type ContactHeroCard = {
  backgroundImage?: string;
  ctaLabel: string;
  number: string;
  tone?: "featured";
  titleLines: readonly string[];
} & ({ ctaHref: string; comingSoon?: false } | { ctaHref?: never; comingSoon: true });

export type ContactHeroContent = {
  ariaLabel: string;
  backgroundAlt: string;
  backgroundImage: string;
  cards: readonly ContactHeroCard[];
  description: string;
  searchAriaLabel: string;
  searchPlaceholder: string;
  title: string;
};

export type ContactFaqItem = {
  answer?: string;
  isOpen?: boolean;
  question: string;
  topic: string;
};

export type ContactFaqContent = {
  ariaLabel: string;
  emptyMessage: string;
  filterLabel: string;
  items: readonly ContactFaqItem[];
  title: string;
  topics: readonly string[];
};

export type ContactEnquiryPanelProps = {
  defaultTopic?: string;
  isOpen: boolean;
  onClose: () => void;
  source?: ContactEnquiryPayload["source"];
  title?: string;
};

export type ContactEnquiryStatus = "idle" | "loading" | "success" | "error";

export type ContactEnquiryPayload = {
  alternatePhone?: string;
  consent: true;
  dealerShop?: string;
  email: string;
  message: string;
  mileage?: string;
  name: string;
  phone: string;
  preferredBranch: string;
  registrationNumber?: string;
  source: "webflow-contact-page" | "webflow-product-page";
  submissionId: string;
  topic: string;
  title?: string;
  ownerType?: string;
  vehicleModel?: string;
  yearOfPurchase?: string;
  turnstileToken?: string;
};

export type ContactEnquiryResult = {
  status: "accepted";
  ticketReference: string;
};
