import { useState } from "react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { SectionHeader } from "@/components/shared/section-header";
import { CONTACT_FAQ_CONTENT } from "../constants/contact-faq.constants";
import {
  ContactFaqBody,
  ContactFaqEmpty,
  ContactFaqList,
  ContactFaqRoot
} from "../styles/contact-faq-shell.styles";
import type { ContactFaqContent } from "../types/contact-page.types";
import { ContactFaqItem } from "./contact-faq-item";
import { ContactFaqTopicFilter } from "./contact-faq-topic-filter";

type ContactFaqSectionProps = {
  content?: ContactFaqContent;
};

export function ContactFaqSection({ content = CONTACT_FAQ_CONTENT }: ContactFaqSectionProps) {
  const defaultTopic = content.topics[0] ?? "";
  const [activeTopic, setActiveTopic] = useState(defaultTopic);
  const visibleItems =
    activeTopic === defaultTopic
      ? content.items
      : content.items.filter((item) => item.topic === activeTopic);

  return (
    <ContactFaqRoot id="faq" aria-label={toSentenceCase(content.ariaLabel)}>
      <SectionHeader align="left" heading={content.title} tone="light" />
      <ContactFaqBody>
        <ContactFaqTopicFilter
          activeTopic={activeTopic}
          label={content.filterLabel}
          onSelectTopic={setActiveTopic}
          topics={content.topics}
        />
        <ContactFaqList>
          {visibleItems.length > 0 ? (
            visibleItems.map((item) => <ContactFaqItem item={item} key={item.question} />)
          ) : (
            <ContactFaqEmpty>{content.emptyMessage}</ContactFaqEmpty>
          )}
        </ContactFaqList>
      </ContactFaqBody>
    </ContactFaqRoot>
  );
}
