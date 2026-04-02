import type { MotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { NewsCard } from "@/data/site-content.types";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  NewsCardHeader,
  NewsCardHeaderLeft,
  NewsCardHeading,
  NewsCardTagLabel,
  NewsFeaturedBadge,
  NewsFeaturedCopy,
  NewsFeaturedLearnMore,
  NewsFeaturedMeta,
  NewsFeaturedMetaDot,
  NewsFeaturedRoot,
  NewsFeaturedTitle,
  NewsMiniCardsControl,
  NewsMiniCardsControls,
  NewsMiniCardsTrack,
  NewsMiniCardsViewport,
  NewsFeaturedViewport,
  NewsFeaturedWrapper,
  NewsMiniCard,
  NewsMiniCardCopy,
  NewsMiniCardDate,
  NewsMiniCardsFade,
  NewsMiniCardTitle,
  NewsMiniCardsRow,
  NewsOverlay,
  NewsViewAllLink
} from "./news.styles";
import { useMiniNewsCarousel } from "./use-mini-news-carousel";

type NewsFeaturedCardProps = {
  borderRadius: MotionValue<number>;
  height: MotionValue<number>;
  item: NewsCard;
  miniCardsOpacity: MotionValue<number>;
  miniCardsY: MotionValue<number>;
  onSelectNews: (index: number) => void;
  railItems: readonly NewsCard[];
  selectedNewsIndex: number;
  width: MotionValue<number>;
  y: MotionValue<number>;
};

export function NewsFeaturedCard({
  borderRadius,
  height,
  item,
  miniCardsOpacity,
  miniCardsY,
  onSelectNews,
  railItems,
  selectedNewsIndex,
  width,
  y
}: NewsFeaturedCardProps) {
  const newsCopy = SITE_COPY.news;
  const { activeIndex, canGoNext, canGoPrevious, handleNext, handlePrevious, hasOverflowFade } =
    useMiniNewsCarousel(railItems.length);

  return (
    <NewsFeaturedViewport>
      <NewsFeaturedWrapper style={{ borderRadius, height, width, y }}>
        <NewsFeaturedRoot>
          <img
            alt={toSentenceCase(item.alt)}
            className="featured-bg"
            loading="lazy"
            src={item.image}
          />
          <NewsOverlay />

          <NewsCardHeader>
            <NewsCardHeaderLeft>
              <NewsCardTagLabel>{newsCopy.tagLabel}</NewsCardTagLabel>
              <NewsCardHeading>{newsCopy.heading}</NewsCardHeading>
            </NewsCardHeaderLeft>
            <NewsViewAllLink href="#latest-news">
              {newsCopy.viewAllLabel}
              <ArrowRight />
            </NewsViewAllLink>
          </NewsCardHeader>

          <NewsFeaturedCopy>
            <NewsFeaturedBadge>{newsCopy.featuredBadgeLabel}</NewsFeaturedBadge>
            <NewsFeaturedTitle>{item.title}</NewsFeaturedTitle>
            <NewsFeaturedMeta>
              {item.dateLabel}
              <NewsFeaturedMetaDot />
              {item.readTime}
            </NewsFeaturedMeta>
            <NewsFeaturedLearnMore href="#latest-news">
              Learn More <span className="arrow">&rarr;</span>
            </NewsFeaturedLearnMore>
          </NewsFeaturedCopy>

          <NewsMiniCardsRow style={{ opacity: miniCardsOpacity, y: miniCardsY }}>
            <NewsMiniCardsControls>
              <NewsMiniCardsControl
                aria-label={newsCopy.previousMiniNewsLabel}
                disabled={!canGoPrevious}
                onClick={handlePrevious}
                type="button"
              >
                <ArrowLeft />
              </NewsMiniCardsControl>
              <NewsMiniCardsControl
                aria-label={newsCopy.nextMiniNewsLabel}
                disabled={!canGoNext}
                onClick={handleNext}
                type="button"
              >
                <ArrowRight />
              </NewsMiniCardsControl>
            </NewsMiniCardsControls>
            <NewsMiniCardsViewport>
              <NewsMiniCardsTrack
                animate={{ x: -(activeIndex * 212) }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {railItems.map((card, index) => (
                  <NewsMiniCard
                    $isActive={index === selectedNewsIndex}
                    aria-pressed={index === selectedNewsIndex}
                    key={card.alt}
                    onClick={() => {
                      onSelectNews(index);
                    }}
                    type="button"
                  >
                    <img alt={toSentenceCase(card.alt)} loading="lazy" src={card.image} />
                    <NewsMiniCardCopy>
                      <NewsMiniCardTitle>{card.title}</NewsMiniCardTitle>
                      <NewsMiniCardDate>{card.dateLabel}</NewsMiniCardDate>
                    </NewsMiniCardCopy>
                  </NewsMiniCard>
                ))}
              </NewsMiniCardsTrack>
              <NewsMiniCardsFade $isVisible={hasOverflowFade} />
            </NewsMiniCardsViewport>
          </NewsMiniCardsRow>
        </NewsFeaturedRoot>
      </NewsFeaturedWrapper>
    </NewsFeaturedViewport>
  );
}
