import type { FeaturedCard as FeaturedCardType } from "@/data/site-content.types";
import { FeaturedImageCard } from "./featured-image-card";

type FeaturedCardProps = {
  card: FeaturedCardType;
};

export function FeaturedCard({ card }: FeaturedCardProps) {
  return (
    <FeaturedImageCard
      alt={card.alt}
      description={card.description}
      href={card.href}
      image={card.image}
      title={card.name}
    />
  );
}
