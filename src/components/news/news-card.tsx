import { Button } from "@/components/ui/button/button";
import type { NewsCard as NewsCardItem } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  NewsCardAction,
  NewsCardBody,
  NewsCardDescription,
  NewsCardImage,
  NewsCardMedia,
  NewsCardMeta,
  NewsCardMetaDivider,
  NewsCardRoot,
  NewsCardTitle
} from "./news-card.styles";

type NewsCardProps = {
  item: NewsCardItem;
};

export function NewsCard({ item }: NewsCardProps) {
  return (
    <NewsCardRoot>
      <NewsCardMedia>
        <NewsCardImage
          alt={toSentenceCase(item.alt)}
          decoding="async"
          loading="lazy"
          src={item.image}
        />
      </NewsCardMedia>
      <NewsCardBody>
        <NewsCardMeta>
          <span>{item.dateLabel}</span>
          <NewsCardMetaDivider aria-hidden="true">|</NewsCardMetaDivider>
          <span>News</span>
        </NewsCardMeta>
        <NewsCardTitle>{item.title}</NewsCardTitle>
        <NewsCardDescription>{item.description}</NewsCardDescription>
        <NewsCardAction>
          <Button onClick={() => window.location.assign(item.href)} size="sm" variant="light">
            {item.ctaLabel}
          </Button>
        </NewsCardAction>
      </NewsCardBody>
    </NewsCardRoot>
  );
}
