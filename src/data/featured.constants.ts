import type {
  CategoryTile,
  EditorialPoint,
  FeaturedCard,
  FeaturedModelSpotlight
} from "@/data/site-content.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const FEATURED_CARDS: readonly FeaturedCard[] = [
  {
    alt: "nmax",
    description: "redefining urban commuting with premium comfort and connected technology.",
    image: getAssetUrl("hlym/generated-1772089340820.png"),
    name: "nmax",
    price: "from rm9,998",
    tag: "automatic"
  },
  {
    alt: "ego avantiz",
    description:
      "smart, stylish, and fuel-efficient. the perfect everyday companion for the modern rider.",
    image: getAssetUrl("hlym/generated-1772089352798.png"),
    name: "ego avantiz",
    price: "from rm5,560",
    tag: "automatic"
  }
] as const;

export const EDITORIAL_POINTS: readonly EditorialPoint[] = [
  {
    icon: "zap",
    text: "890cc crossplane 3-cylinder engine"
  },
  {
    icon: "gauge",
    text: "119 ps @ 10,000 rpm · 193 kg"
  },
  {
    icon: "shield",
    text: "6-axis imu · traction control · quickshifter"
  }
] as const;

export const CATEGORY_TILES: readonly CategoryTile[] = [
  {
    alt: "yzf-r25",
    href: "#models",
    image: getAssetUrl("hlym/generated-1772089477186.png"),
    name: "yzf-r25",
    price: "from rm21,998",
    tag: "street"
  },
  {
    alt: "tenéré 700",
    href: "#models",
    image: getAssetUrl("hlym/generated-1772089478568.png"),
    name: "tenéré 700",
    price: "from rm73,888",
    tag: "big bikes"
  },
  {
    alt: "tracer 9 gt",
    href: "#models",
    image: getAssetUrl("hlym/generated-1772089479158.png"),
    name: "tracer 9 gt",
    price: "from rm73,888",
    tag: "big bikes"
  }
] as const;

const TRACER_360_FRAMES: readonly string[] = [
  getAssetUrl("hlym/tracer-9-gt-360/frame-005.png"), // 0°   — direct front
  getAssetUrl("hlym/tracer-9-gt-360/frame-003.png"), // 60°  — front 3/4 right
  getAssetUrl("hlym/tracer-9-gt-360/frame-006.png"), // 90°  — left side profile
  getAssetUrl("hlym/tracer-9-gt-360/frame-004.png"), // 180° — direct rear
  getAssetUrl("hlym/tracer-9-gt-360/frame-001.png"), // 225° — rear 3/4 right
  getAssetUrl("hlym/tracer-9-gt-360/frame-002.png") // 270° — right side profile
];

export const FEATURED_MODEL_SPOTLIGHT: FeaturedModelSpotlight = {
  alt: "yamaha tracer 9 gt sport touring spotlight",
  callouts: [
    {
      description: "890cc crossplane cp3 engine with ycc-t electronic throttle.",
      numberLabel: "01",
      title: "119ps peak power"
    },
    {
      description: "kyb electronically controlled suspension with auto-damping.",
      numberLabel: "02",
      title: "intelligent ride"
    },
    {
      description: "7-inch tft with garmin nav and y-connect integration.",
      numberLabel: "03",
      title: "connected cockpit"
    },
    {
      description: "cruise control, heated grips, and panniers for all-day touring.",
      numberLabel: "04",
      title: "grand touring"
    },
    {
      description: "6-axis imu with lean-sensitive traction and slide control.",
      numberLabel: "05",
      title: "total control"
    }
  ],
  description:
    "the tracer 9 gt is built for riders who refuse to choose between sport performance and " +
    "long-distance versatility — a true road conqueror with 890cc crossplane power and " +
    "intelligent electronics for every journey.",
  frames: TRACER_360_FRAMES,
  image: getAssetUrl("hlym/tracer-9-gt-spotlight.png"),
  name: "tracer 9 gt",
  price: "from rm71,888",
  tagLabel: "sport touring"
} as const;
