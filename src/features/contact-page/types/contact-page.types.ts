export type ContactHeroCard = {
  backgroundImage?: string;
  ctaHref: string;
  ctaLabel: string;
  number: string;
  tone?: "featured";
  titleLines: readonly string[];
};

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
  description: string;
  emptyMessage: string;
  filterLabel: string;
  items: readonly ContactFaqItem[];
  title: string;
  topics: readonly string[];
};

export type ContactEnquiryPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type ContactEnquiryStatus = "idle" | "loading" | "success" | "error";

export type ContactEnquiryPayload = {
  consent: true;
  email: string;
  message: string;
  name: string;
  phone: string;
  preferredBranch: string;
  source: "webflow-contact-page";
  submissionId: string;
  topic: string;
  title?: string;
  ownerType?: string;
  vehicleModel?: string;
  yearOfPurchase?: string;
};
