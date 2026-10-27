export type ProductCategory = "moped" | "automatic" | "street" | "big bikes";

export type ProductPageStat = {
  label: string;
  value: string;
};

export type ProductBrandMark = {
  alt: string;
  src: string;
};

export type ProductHeroVideoSource = {
  src: string;
  type: string;
};

export type ProductHeroVideo = {
  alt: string;
  ariaLabel: string;
  brandMark: ProductBrandMark;
  copy: string;
  poster: string;
  sources: readonly ProductHeroVideoSource[];
};

export type ProductFeature = {
  description: string;
  eyebrow: string;
  id: string;
  image: string;
  imageAlt: string;
  title: string;
};

export type ProductColorOption = {
  alt: string;
  image: string;
  label: string;
  swatch: string;
};

export type ProductOverviewColor = {
  accentColor: string;
  alt: string;
  description: string;
  image: string;
  isFeatured?: boolean;
  label: string;
};

export type ProductOverviewContent = {
  description: string;
  titleLines: readonly [string, string];
};

export type ProductOverviewSpec = {
  label: string;
  value: string;
};

export type ProductFullSpecificationContent = {
  items: readonly ProductFullSpecificationItem[];
  titleLines: readonly [string, string];
};

export type ProductFullSpecificationImage = {
  alt: string;
  src: string;
};

export type ProductFullSpecificationItem = {
  description: string;
  eyebrow?: string;
  image: ProductFullSpecificationImage;
  title: string;
};

export type ProductPageModel = {
  alt: string;
  category: ProductCategory;
  ctaHref: string;
  ctaLabel: string;
  frames?: readonly string[];
  image: string;
  name: string;
  posterLabel: string;
  posterMark?: ProductBrandMark;
  price: string;
  slug: string;
  specs: readonly ProductPageStat[];
};

export type ProductSubNavTab = {
  id: string;
  label: string;
};
