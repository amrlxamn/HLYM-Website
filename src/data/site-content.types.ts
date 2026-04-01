export type FooterColumn = {
  links: readonly { href: string; label: string }[];
  title: string;
};

export type HeroSlide = {
  alt: string;
  ctaHref: string;
  ctaLabel: string;
  description: string;
  eyebrow: string;
  image: string;
  indexLabel: string;
  price: string;
  stats: readonly { label: string; value: string }[];
  titleAccent: string;
  titleLead: string;
  totalLabel: string;
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
  hasDropdown?: boolean;
};

export type ModelCategory = "all models" | "moped" | "automatic" | "street" | "big bikes";

export type ModelCard = {
  alt: string;
  category: Exclude<ModelCategory, "all models">;
  compact?: boolean;
  detailHref: string;
  engine: string;
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
  image: string;
  name: string;
  price: string;
  tag: string;
};

export type CategoryTile = {
  alt: string;
  href: string;
  image: string;
  name: string;
  price: string;
  tag: string;
};

export type FeaturedNews = {
  alt: string;
  dateLabel: string;
  image: string;
  readTime: string;
  title: string;
};

export type NewsCard = {
  alt: string;
  dateLabel: string;
  image: string;
  readTime: string;
  title: string;
};

export type DealerRegion = "central" | "northern" | "southern" | "sabah" | "sarawak";

export type DealerLocation = {
  area: string;
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
