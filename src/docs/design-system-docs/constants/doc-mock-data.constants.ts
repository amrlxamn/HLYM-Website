import type { ModelCard } from "@/data/site-content.types";
import type { FeaturedCard } from "@/data/site-content.types";
import type { CategoryTile } from "@/data/site-content.types";
import type { NewsCard } from "@/data/site-content.types";
import type { DealerCategory, DealerRegion } from "@/data/site-content.types";
import type { ContactHeroCard } from "@/features/contact-page/types/contact-page.types";
import type { ContactFaqItem } from "@/features/contact-page/types/contact-page.types";
import type { ProductOverviewSpec } from "@/features/product-page/types/product-page.types";
import type { ProductOverviewColor } from "@/features/product-page/types/product-page.types";
import type { YamahaDealerLocation } from "@/features/yamaha-network/yamaha-network.types";

export const MOCK_MODEL_CARD: ModelCard = {
  alt: "Yamaha NVX SP scooter",
  category: "automatic",
  detailHref: "/products",
  engine: "155cc",
  image: "/assets/hlym/nvx-sp.png",
  name: "Yamaha NVX SP",
  power: "14.9 hp",
  price: "RM 9,998",
  summary: "Premium automatic scooter",
  weight: "133 kg"
};

export const MOCK_FEATURED_CARD: FeaturedCard = {
  alt: "Yamaha Tracer 9 GT sport touring motorcycle",
  description: "Cross-dynamic touring with refined suspension and ride intelligence.",
  image: "/assets/hlym/slide-1.png",
  name: "Tracer 9 GT",
  price: "RM 58,000",
  tag: "Sport Touring"
};

export const MOCK_CATEGORY_TILE: CategoryTile = {
  alt: "Yamaha big bikes category",
  href: "/products",
  image: "/assets/hlym/slide-2.png",
  name: "Big Bikes",
  price: "From RM 45,000",
  tag: "Premium"
};

export const MOCK_NEWS_CARD: NewsCard = {
  alt: "Yamaha racing event",
  dateLabel: "15 Aug 2026",
  image: "/assets/hlym/slide-3.png",
  readTime: "4 min read",
  title: "Yamaha Dominates Sepang Round"
};

export const MOCK_DEALER_REGION: DealerRegion = "central";

export const MOCK_DEALER_CATEGORIES: readonly DealerCategory[] = [
  "authorized dealer",
  "yqs",
  "star center"
];

export const MOCK_YAMAHA_DEALER: YamahaDealerLocation = {
  address: "Lot 12, Jalan Sultan, 50000 Kuala Lumpur",
  area: "Kuala Lumpur",
  categories: MOCK_DEALER_CATEGORIES,
  category: "authorized dealer",
  coordinates: [101.6958, 3.139] as readonly [number, number],
  email: "info@hlym.my",
  fax: "+60 3-2693 4455",
  focus: "Sales & Service",
  hours: "Mon-Sat 9:00-19:00",
  id: "dealer-001",
  image: "/assets/hlym/image.png",
  label: "HLYM Kuala Lumpur",
  locality: "Federal Territory of Kuala Lumpur",
  mapUrl: "https://maps.google.com",
  mobile: "+60 12-345 6789",
  phone: "+60 3-2693 3344",
  region: "central",
  serviceTags: ["Sales", "Service", "Parts"],
  summary: "Authorized Yamaha dealer in the heart of Kuala Lumpur.",
  wazeUrl: "https://waze.com",
  website: "https://hlym.my"
};

export const MOCK_CONTACT_HERO_CARD: ContactHeroCard = {
  ctaHref: "/contact-us",
  ctaLabel: "Enquire Now",
  number: "01",
  titleLines: ["Sales", "Enquiry"]
};

export const MOCK_CONTACT_FAQ_ITEM: ContactFaqItem = {
  answer:
    "Yes, all Yamaha motorcycles purchased from authorized dealers come with a 2-year or 20,000 km warranty, whichever comes first.",
  isOpen: false,
  question: "What warranty coverage is included?",
  topic: "Warranty"
};

export const MOCK_PRODUCT_SPEC: ProductOverviewSpec = {
  label: "Engine Type",
  value: "155cc, 4-stroke, SOHC"
};

export const MOCK_PRODUCT_COLOR: ProductOverviewColor = {
  accentColor: "#ec1c24",
  alt: "Yamaha NVX in Racing Red",
  description: "Signature Yamaha Racing Red with sharp graphic accents.",
  image: "/assets/hlym/nvx-sp.png",
  label: "Racing Red"
};
