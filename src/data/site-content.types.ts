export type FooterColumn = {
  links: readonly { href: string; label: string }[];
  title: string;
};

export type HeroSlide = {
  alt: string;
  href: string;
  image: string;
};

export type LanguageOption = {
  code: string;
  icon: string;
  isActive: boolean;
  label: string;
};

export type LinkItem = {
  href: string;
  isActive?: boolean;
  label: string;
};

export type SocialPlatform = "facebook" | "instagram" | "youtube";

export type SocialLink = LinkItem & {
  platform: SocialPlatform;
};

export type NavItem = LinkItem & {
  children?: readonly LinkItem[];
  hasDropdown?: boolean;
};

export type ModelCategory = "all models" | "moped" | "automatic" | "street" | "big bikes";

export type ModelCard = {
  alt: string;
  category: Exclude<ModelCategory, "all models">;
  compact?: boolean;
  detailHref: string;
  engine: string;
  frames?: readonly string[];
  image: string;
  name: string;
  power: string;
  price: string;
  summary: string;
  weight: string;
};

export type EditorialPoint = {
  icon: "gauge" | "shield" | "zap";
  text: string;
};

export type FeaturedCard = {
  alt: string;
  description: string;
  href: string;
  image: string;
  name: string;
  price: string;
  tag: string;
};

export type CategoryTile = {
  alt: string;
  description: string;
  href: string;
  image: string;
  name: string;
  price: string;
  tag: string;
};

export type FeaturedModelSpotlightCallout = {
  description: string;
  numberLabel: string;
  title: string;
};

export type FeaturedModelSpotlight = {
  alt: string;
  callouts: readonly [
    FeaturedModelSpotlightCallout,
    FeaturedModelSpotlightCallout,
    FeaturedModelSpotlightCallout,
    FeaturedModelSpotlightCallout,
    FeaturedModelSpotlightCallout
  ];
  description: string;
  frames?: readonly string[];
  image: string;
  name: string;
  price: string;
  tagLabel: string;
};

export type NewsCard = {
  alt: string;
  ctaLabel: string;
  dateLabel: string;
  description: string;
  href: string;
  image: string;
  title: string;
};

export type DealerRegion = "central" | "northern" | "southern" | "sabah" | "sarawak";

export type DealerCategory =
  | "authorized dealer"
  | "yqs"
  | "spare parts stockist"
  | "hq and branch"
  | "star center"
  | "star shop"
  | "big bike"
  | "ygp store"
  | "genblu merchant"
  | "yes";

export type DealerLocation = {
  area: string;
  category: DealerCategory;
  coordinates: readonly [number, number];
  focus: string;
  hours: string;
  id: string;
  image?: string;
  label: string;
  locality: string;
  region: DealerRegion;
  serviceTags: readonly string[];
  summary: string;
};
