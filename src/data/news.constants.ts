import type { FeaturedNews, NewsCard } from "@/data/site-content.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const FEATURED_NEWS: FeaturedNews = {
  alt: "yzf-r9 feature",
  dateLabel: "march 4, 2026",
  image: getAssetUrl("hlym/generated-1772610727201.png"),
  readTime: "5 min read",
  title: "the all-new yzf-r9: born from motogp dna"
};

export const NEWS_HIGHLIGHTS: readonly NewsCard[] = [
  {
    alt: "arrc story",
    dateLabel: "feb 28, 2026",
    image: getAssetUrl("hlym/generated-1772610737793.png"),
    readTime: "3 min read",
    title: "yamaha racing team dominates arrc round 3 in sepang"
  },
  {
    alt: "nmax turbo story",
    dateLabel: "feb 20, 2026",
    image: getAssetUrl("hlym/generated-1772610745607.png"),
    readTime: "4 min read",
    title: "nmax turbo series unveiled - a new era of urban mobility"
  }
] as const;

export const NEWS_UPDATES: readonly NewsCard[] = [
  {
    alt: "y-connect ai story",
    dateLabel: "feb 15, 2026",
    image: getAssetUrl("hlym/generated-1772610758724.png"),
    readTime: "3 min",
    title: "yamaha y-connect app gets major ai update for 2026"
  },
  {
    alt: "mt-09 engineering story",
    dateLabel: "feb 10, 2026",
    image: getAssetUrl("hlym/generated-1772610766611.png"),
    readTime: "6 min",
    title: "behind the scenes: how the mt-09 sp was engineered"
  },
  {
    alt: "tenéré journey story",
    dateLabel: "feb 5, 2026",
    image: getAssetUrl("hlym/generated-1772610774151.png"),
    readTime: "8 min",
    title: "exploring malaysia's east coast: a ténéré 700 journey"
  }
] as const;

export const NEWS_MINI_RAIL: readonly NewsCard[] = [
  FEATURED_NEWS,
  ...NEWS_HIGHLIGHTS,
  ...NEWS_UPDATES
] as const;
