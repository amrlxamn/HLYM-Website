import type { CategoryTile } from "@/data/site-content.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const FEATURED_GALLERY_TILES: readonly CategoryTile[] = [
  {
    alt: "yamaha xmax 250",
    description:
      "enter the new yamaha xmax 250, a light and agile automatic bike that feels " +
      "comfortable both in the city and on the open roads.",
    href: "#models",
    image: getAssetUrl("hlym/featured/xmax-250.jpg"),
    name: "xmax 250 - your luxurious ride!",
    price: "",
    tag: "automatic"
  },
  {
    alt: "yamaha ego avantiz",
    description: "an awesome creations in every aspects, ready to dominate in its class.",
    href: "#models",
    image: getAssetUrl("hlym/featured/ego-avantiz.jpg"),
    name: "ego avantiz - lagak ekstrim",
    price: "",
    tag: "automatic"
  },
  {
    alt: "yamaha y16zr",
    description:
      "built for riders who demand sharp acceleration, confident handling, and unmistakable " +
      "style on every urban ride.",
    href: "#models",
    image: getAssetUrl("hlym/featured/y16zr.jpg"),
    name: "y16zr - prestasi, gaya dan inovasi!",
    price: "",
    tag: "moped"
  },
  {
    alt: "yamaha nmax",
    description:
      "premium city comfort with dual-channel abs, connected convenience, and generous " +
      "everyday storage.",
    href: "https://www.yamaha-motor.com.my/portfolio_page/nmax/",
    image: getAssetUrl("hlym/generated-1772089340820.png"),
    name: "nmax - move through the city",
    price: "",
    tag: "automatic"
  },
  {
    alt: "yamaha tracer 9 gt",
    description:
      "sport performance, intelligent electronics, and long-distance comfort in one focused " +
      "touring machine.",
    href: "#models",
    image: getAssetUrl("hlym/tracer-9-gt-spotlight.png"),
    name: "tracer 9 gt - roads without limits",
    price: "",
    tag: "big bikes"
  },
  {
    alt: "yamaha nvx 155",
    description:
      "premium automatic comfort with connected urban practicality and a rider-friendly " +
      "daily posture.",
    href: "https://www.yamaha-motor.com.my/portfolio_page/nvx/",
    image: getAssetUrl("hlym/product-curtain/nvx.jpg"),
    name: "nvx 155 - performance in motion",
    price: "",
    tag: "automatic"
  },
  {
    alt: "yamaha motorcycle racing on track",
    description: "race weekends, launches, and rider stories from yamaha motor malaysia.",
    href: "https://www.instagram.com/yamahamotormy/",
    image: getAssetUrl("hlym/generated-1772610737793.png"),
    name: "follow yamaha malaysia",
    price: "",
    tag: "instagram"
  },
  {
    alt: "motorcycle journey through malaysia",
    description: "films, launches, and riding stories from yamaha motor malaysia.",
    href: "https://www.youtube.com/channel/UCxSFbFIapoFDR1MI8j2Xc8w/",
    image: getAssetUrl("hlym/generated-1772610774151.png"),
    name: "watch yamaha stories",
    price: "",
    tag: "youtube"
  }
] as const;
