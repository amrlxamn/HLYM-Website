import { ArrowRight } from "lucide-react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  ContactHeroCardCta,
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
          <ContactHeroCardCta as="button" onClick={onEnquiryClick} type="button">
            {card.ctaLabel}
            <ArrowRight aria-hidden="true" />
          </ContactHeroCardCta>
        ) : (
          <ContactHeroCardCta href={card.ctaHref}>
            {card.ctaLabel}
            <ArrowRight aria-hidden="true" />
          </ContactHeroCardCta>
        )}
      </div>
    </ContactHeroCardRoot>
  );
}
