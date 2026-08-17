import { Button } from "@/components/ui";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  ContactHeroCardNumber,
  ContactHeroCardRoot,
  ContactHeroCardTitle
} from "../styles/contact-hero-card.styles";
import type { ContactHeroCard } from "../types/contact-page.types";

type ContactSupportCardProps = {
  card: ContactHeroCard;
  onEnquiryClick?: () => void;
};

export function ContactSupportCard({ card, onEnquiryClick }: ContactSupportCardProps) {
  const isFeatured = card.tone === "featured";
  const cardLabel = toSentenceCase(card.titleLines.join(" "));

  return (
    <ContactHeroCardRoot
      $backgroundImage={card.backgroundImage}
      $featured={isFeatured}
      aria-label={cardLabel}
    >
      <ContactHeroCardNumber>{card.number}</ContactHeroCardNumber>
      <div>
        <ContactHeroCardTitle>
          {card.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </ContactHeroCardTitle>
        {isFeatured ? (
          <Button onClick={onEnquiryClick} size="sm" variant="primary">
            {card.ctaLabel}
          </Button>
        ) : (
          <Button as="a" href={card.ctaHref} size="sm" variant="light">
            {card.ctaLabel}
          </Button>
        )}
      </div>
    </ContactHeroCardRoot>
  );
}
