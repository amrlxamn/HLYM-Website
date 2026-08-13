import type { HeroSlide } from "@/data/site-content.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    alt: "Yamaha Quality Service centres and mobile service support",
    href: "https://www.yamaha-motor.com.my/servis-yamaha-sentiasa-dekat-dengan-anda/",
    image: getAssetUrl("hlym/home-carousel/yqs-service.webp")
  },
  {
    alt: "Yamaha XSR155",
    href: "https://www.yamaha-motor.com.my/portfolio_page/xsr155/",
    image: getAssetUrl("hlym/home-carousel/xsr155.webp")
  },
  {
    alt: "Yamaha Y16ZR",
    href: "https://www.yamaha-motor.com.my/portfolio_page/yseries/",
    image: getAssetUrl("hlym/home-carousel/y16zr.webp")
  },
  {
    alt: "Yamaha XMAX 300",
    href: "https://www.yamaha-motor.com.my/portfolio_page/xmax300/",
    image: getAssetUrl("hlym/home-carousel/xmax.webp")
  },
  {
    alt: "Yamaha Tenere 700",
    href: "https://www.yamaha-motor.com.my/portfolio_page/tenere700/",
    image: getAssetUrl("hlym/home-carousel/tenere-700.webp")
  },
  {
    alt: "Yamaha Tracer 9 GT",
    href: "https://www.yamaha-motor.com.my/portfolio_page/tracer9/",
    image: getAssetUrl("hlym/home-carousel/tracer-9-gt.webp")
  },
  {
    alt: "Yamaha Ego Gear Pro",
    href: "https://www.yamaha-motor.com.my/portfolio_page/ego-gear/",
    image: getAssetUrl("hlym/home-carousel/ego-gear-pro.webp")
  }
] as const;
