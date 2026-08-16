import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button/button";
import { NEWS_ITEMS } from "@/data/news.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { NewsCard } from "./news-card";
import { NewsGrid, NewsSectionRoot } from "./news.styles";

export function NewsSection() {
  const newsCopy = SITE_COPY.news;

  return (
    <NewsSectionRoot id="latest-news" aria-label={toSentenceCase(newsCopy.ariaLabel)}>
      <SectionHeader
        action={
          <Button
            onClick={() => window.location.assign("https://www.yamaha-motor.com.my/news-events/")}
            size="sm"
            variant="light"
          >
            {newsCopy.viewAllLabel}
          </Button>
        }
        align="left"
        heading={newsCopy.heading}
        tone="light"
      />
      <NewsGrid>
        {NEWS_ITEMS.map((item) => (
          <NewsCard item={item} key={item.href} />
        ))}
      </NewsGrid>
    </NewsSectionRoot>
  );
}
