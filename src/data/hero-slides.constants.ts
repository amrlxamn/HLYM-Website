import type { HeroSlide } from "@/data/site-content.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    alt: "Yamaha Service",
    href: "https://www.yamaha-motor.com.my/servis-yamaha-sentiasa-dekat-dengan-anda/",
    image: getAssetUrl("hlym/home-carousel/yqs-service.webp")
  },
  {
    alt: "Yamaha XSR155",
    href: "/products/xsr155",
    image: getAssetUrl("hlym/home-carousel/xsr155.webp")
  },
  {
    alt: "Yamaha Y16ZR",
    href: "/products/yseries",
    image: getAssetUrl("hlym/home-carousel/y16zr.webp")
  },
  {
    alt: "Yamaha XMAX 300",
    href: "/products/xmax-300",
    image: getAssetUrl("hlym/home-carousel/xmax.webp")
  },
  {
    alt: "Yamaha Tenere 700",
    href: "/products/tenere-700",
    image: getAssetUrl("hlym/home-carousel/tenere-700.webp")
  },
  {
    alt: "Yamaha Tracer 9 GT",
    href: "/products/tracer-9-gt",
    image: getAssetUrl("hlym/home-carousel/tracer-9-gt.webp")
  },
  {
    alt: "Yamaha Ego Gear Pro",
    href: "/products/ego-gear",
    image: getAssetUrl("hlym/home-carousel/ego-gear-pro.webp")
  }
] as const;
