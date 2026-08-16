import { Button } from "@/components/ui/button/button";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  FeaturedImageCardCopy,
  FeaturedImageCardDescription,
  FeaturedImageCardDetails,
  FeaturedImageCardTitle
} from "./featured-image-card-content.styles";
import {
  FeaturedImageCardOverlay,
  FeaturedImageCardRoot,
  FeaturedImageCardShade
} from "./featured-image-card.styles";

type FeaturedImageCardProps = {
  alt: string;
  description: string;
  href: string;
  image: string;
  title: string;
};

export function FeaturedImageCard({
  alt,
  description,
  href,
  image,
  title
}: FeaturedImageCardProps) {
  const detailsLabel = SITE_COPY.featured.detailsLabel;

  return (
    <FeaturedImageCardRoot>
      <img loading="lazy" src={image} alt={toSentenceCase(alt)} />
      <FeaturedImageCardShade />
      <FeaturedImageCardOverlay />
      <FeaturedImageCardCopy>
        <FeaturedImageCardTitle>{title}</FeaturedImageCardTitle>
        <FeaturedImageCardDetails>
          <FeaturedImageCardDescription>{toSentenceCase(description)}</FeaturedImageCardDescription>
          <Button onClick={() => window.location.assign(href)} size="sm" variant="secondary">
            {detailsLabel}
          </Button>
        </FeaturedImageCardDetails>
      </FeaturedImageCardCopy>
    </FeaturedImageCardRoot>
  );
}
