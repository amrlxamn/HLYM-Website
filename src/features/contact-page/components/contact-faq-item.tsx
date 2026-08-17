import { AnimatePresence, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/components/ui";
import {
  CONTACT_FAQ_PANEL_TRANSITION,
  CONTACT_FAQ_PANEL_VARIANTS,
  CONTACT_FAQ_REDUCED_TRANSITION
} from "../constants/contact-faq-motion.constants";
import {
  ContactFaqAnswer,
  ContactFaqHelpful,
  ContactFaqIcon,
  ContactFaqItemRoot,
  ContactFaqPanel,
  ContactFaqPanelInner,
  ContactFaqQuestion,
  ContactFaqSummary
} from "../styles/contact-faq-item.styles";
import type { ContactFaqItem as ContactFaqItemContent } from "../types/contact-page.types";

type ContactFaqItemProps = {
  item: ContactFaqItemContent;
};

export function ContactFaqItem({ item }: ContactFaqItemProps) {
  const itemId = useId();
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(Boolean(item.isOpen));
  const panelId = `${itemId}-panel`;
  const questionId = `${itemId}-question`;
  const panelTransition = shouldReduceMotion
    ? CONTACT_FAQ_REDUCED_TRANSITION
    : CONTACT_FAQ_PANEL_TRANSITION;

  return (
    <ContactFaqItemRoot>
      <ContactFaqSummary
        aria-controls={panelId}
        aria-expanded={isOpen}
        id={questionId}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        type="button"
      >
        <ContactFaqQuestion>{item.question}</ContactFaqQuestion>
        <ContactFaqIcon aria-hidden="true">{isOpen ? <Minus /> : <Plus />}</ContactFaqIcon>
      </ContactFaqSummary>
      <AnimatePresence initial={false}>
        {isOpen && item.answer ? (
          <ContactFaqPanel
            animate="expanded"
            aria-labelledby={questionId}
            exit="collapsed"
            id={panelId}
            initial="collapsed"
            role="region"
            transition={panelTransition}
            variants={CONTACT_FAQ_PANEL_VARIANTS}
          >
            <ContactFaqPanelInner>
              <ContactFaqAnswer>{item.answer}</ContactFaqAnswer>
              <ContactFaqHelpful aria-label="FAQ helpful feedback">
                <span>Was this helpful?</span>
                <Button icon="none" size="sm" variant="light">
                  Yes
                </Button>
                <Button icon="none" size="sm" variant="light">
                  No
                </Button>
              </ContactFaqHelpful>
            </ContactFaqPanelInner>
          </ContactFaqPanel>
        ) : null}
      </AnimatePresence>
    </ContactFaqItemRoot>
  );
}
