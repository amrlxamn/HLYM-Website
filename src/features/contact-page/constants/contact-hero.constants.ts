import { getAssetUrl } from "@/lib/get-asset-url";
import type { ContactHeroContent } from "../types/contact-page.types";

export const CONTACT_HERO_CONTENT: ContactHeroContent = {
  ariaLabel: "Contact support options",
  backgroundAlt: "Yamaha motorcycle in a dark service bay",
  backgroundImage: getAssetUrl("hlym/3d1a2fcf-a9b2-4fae-a9be-e20b05fdbd33.png"),
  cards: [
    {
      ctaHref: "https://my.treedis.com/tour/yamaha-lifestyle-station",
      ctaLabel: "Take the tour",
      number: "01",
      titleLines: ["Lifestyle", "Station"]
    },
    {
      ctaHref: "https://www.google.com/maps/search/?api=1&query=Yamaha+Space+Y+Malaysia",
      ctaLabel: "Find on maps",
      number: "02",
      titleLines: ["Space Y"]
    },
    {
      ctaHref: "/yamaha-network?category=yqs",
      ctaLabel: "Find service",
      number: "03",
      titleLines: ["Service", "centres"]
    },
    {
      ctaHref: "/yamaha-network?category=big%20bike",
      ctaLabel: "Explore big bikes",
      number: "04",
      titleLines: ["Big-bike", "showroom soon"]
    },
    {
      ctaHref: "/yamaha-network",
      ctaLabel: "Find a dealer",
      number: "05",
      titleLines: ["Yamaha", "dealers"]
    },
    {
      backgroundImage: "/assets/hlym/contact/contact-enquiry-card-bg.webp",
      ctaHref: "#contact-form",
      ctaLabel: "Submit to us",
      number: "06",
      titleLines: ["Got any", "enquiry?"],
      tone: "featured"
    }
  ],
  description:
    "One destination for everything support. Find your nearest branch, browse common questions, or speak directly to our customer care team.",
  searchAriaLabel: "Search support articles",
  searchPlaceholder: "Search articles (ex: reset passwords, changing email id, etc.)",
  title: "How can we help?"
} as const;
