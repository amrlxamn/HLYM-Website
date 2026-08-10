import { toSentenceCase } from "@/lib/to-sentence-case";
import { useState } from "react";
import { SearchField } from "@/components/shared/search-field";
import { CONTACT_HERO_CONTENT } from "../constants/contact-hero.constants";
import {
  ContactHeroBackground,
  ContactHeroCardGrid,
  ContactHeroContentPanel,
  ContactHeroCopy,
  ContactHeroGradient,
  ContactHeroInner,
  ContactHeroRoot,
  ContactHeroTitle,
  ContactHeroVerticalShade
} from "../styles/contact-hero-shell.styles";
import type { ContactHeroContent } from "../types/contact-page.types";
import { ContactEnquiryPanel } from "./contact-enquiry-panel";
import { ContactSupportCard } from "./contact-support-card";

type ContactHeroSectionProps = {
  content?: ContactHeroContent;
};

export function ContactHeroSection({ content = CONTACT_HERO_CONTENT }: ContactHeroSectionProps) {
  const [isEnquiryPanelOpen, setIsEnquiryPanelOpen] = useState(false);

  return (
    <ContactHeroRoot aria-label={toSentenceCase(content.ariaLabel)} data-cursor-tone="light">
      <ContactHeroBackground
        alt={toSentenceCase(content.backgroundAlt)}
        src={content.backgroundImage}
      />
      <ContactHeroGradient />
      <ContactHeroVerticalShade />
      <ContactHeroInner>
        <ContactHeroContentPanel>
          <ContactHeroTitle>{content.title}</ContactHeroTitle>
          <ContactHeroCopy>{content.description}</ContactHeroCopy>
          <SearchField
            ariaLabel={toSentenceCase(content.searchAriaLabel)}
            backgroundImage={content.backgroundImage}
            placeholder={content.searchPlaceholder}
            variant="gloss"
          />
        </ContactHeroContentPanel>
        <ContactHeroCardGrid>
          {content.cards.map((card) => (
            <ContactSupportCard
              card={card}
              key={card.number}
              onEnquiryClick={() => {
                setIsEnquiryPanelOpen(true);
              }}
            />
          ))}
        </ContactHeroCardGrid>
      </ContactHeroInner>
      <ContactEnquiryPanel
        isOpen={isEnquiryPanelOpen}
        onClose={() => {
          setIsEnquiryPanelOpen(false);
        }}
      />
    </ContactHeroRoot>
  );
}
