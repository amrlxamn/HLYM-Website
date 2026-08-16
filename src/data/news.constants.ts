import { getAssetUrl } from "@/lib/get-asset-url";
import type { NewsCard } from "@/data/site-content.types";

export const NEWS_ITEMS: readonly NewsCard[] = [
  {
    alt: "Yamaha XMAX 300 Tech Max",
    ctaLabel: "Read more",
    dateLabel: "12 August 2026",
    description: "Find the selected authorised dealers carrying the XMAX 300 Tech Max.",
    href: "https://www.yamaha-motor.com.my/xmax300available/",
    image: getAssetUrl("hlym/news/26XMAX-NE.jpg"),
    title: "XMAX 300 Tech Max sales network"
  },
  {
    alt: "Yamaha TMAX Tech Max in Crystal Graphite",
    ctaLabel: "Read more",
    dateLabel: "20 April 2026",
    description: "The premium TMAX Tech Max arrives in an exclusive Crystal Graphite finish.",
    href: "https://www.yamaha-motor.com.my/tmax-tech-max-now-in-crystal-graphite/",
    image: getAssetUrl("hlym/news/26TMAX-NE.jpg"),
    title: "TMAX Tech Max now in Crystal Graphite"
  },
  {
    alt: "Yamaha Tenere 700",
    ctaLabel: "Read more",
    dateLabel: "31 March 2026",
    description: "The new Tenere 700 brings confident touring and off-road capability.",
    href: "https://www.yamaha-motor.com.my/hong-leong-yamaha-motor-launches-the-new-tenere-700/",
    image: getAssetUrl("hlym/news/26TENERE700-NE.jpg"),
    title: "One bike, no boundaries: the new Tenere 700"
  },
  {
    alt: "Hong Leong Yamaha Motor supporting WITUS",
    ctaLabel: "Read more",
    dateLabel: "16 March 2026",
    description: "A Ramadan initiative supporting the women and single mothers of WITUS.",
    href: "https://www.yamaha-motor.com.my/berkongsi-kegembiraan/",
    image: getAssetUrl("hlym/news/26WITUS-NE.png"),
    title: "Berkongsi kegembiraan sempena musim perayaan"
  },
  {
    alt: "Yamalube Scan and Win Contest",
    ctaLabel: "Read more",
    dateLabel: "27 February 2026",
    description: "Scan participating Yamalube products for a chance to win Yamaha prizes.",
    href: "https://www.yamaha-motor.com.my/yamalubescanandwincontest/",
    image: getAssetUrl("hlym/news/22YSW-NE.jpg"),
    title: "Yamalube Scan & Win Contest"
  },
  {
    alt: "Yamaha PG-1 in new colours",
    ctaLabel: "Read more",
    dateLabel: "3 February 2026",
    description: "The 2026 Yamaha PG-1 is introduced in Classic Black and Sky Blue.",
    href: "https://www.yamaha-motor.com.my/new-colours-yamaha-pg-1/",
    image: getAssetUrl("hlym/news/26PG1-NE.jpg"),
    title: "Introducing new colours for the Yamaha PG-1"
  }
] as const;
