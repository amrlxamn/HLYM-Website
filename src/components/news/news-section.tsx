import { useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FEATURED_NEWS, NEWS_MINI_RAIL } from "@/data/news.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { NewsFeaturedCard } from "./news-featured-card";
import { NewsRedLine, NewsSectionRoot } from "./news.styles";

const FEATURED_NEWS_PROGRESS_RANGE = [0, 0.6];
const FEATURED_NEWS_MINI_CARD_REVEAL_RANGE = [0.24, 0.42];
const FEATURED_NEWS_INITIAL_WIDTH = 864;
const FEATURED_NEWS_INITIAL_HEIGHT = 648;
const FEATURED_NEWS_RADIUS_RANGE = [0, 0];
const FEATURED_NEWS_SPRING = {
  damping: 24,
  mass: 0.2,
  stiffness: 180
} as const;

export function NewsSection() {
  const newsCopy = SITE_COPY.news;
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [initialTopOffset, setInitialTopOffset] = useState(200);
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(0);
  const [viewportSize, setViewportSize] = useState({
    height: FEATURED_NEWS_INITIAL_HEIGHT,
    width: FEATURED_NEWS_INITIAL_WIDTH
  });

  useEffect(() => {
    const updateViewportSize = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const sectionStyles = sectionRef.current ? getComputedStyle(sectionRef.current) : null;
      const headerMain = Number.parseFloat(rootStyles.getPropertyValue("--header-height-main"));
      const headerUtility = Number.parseFloat(
        rootStyles.getPropertyValue("--header-height-utility")
      );
      const headerHeight = headerMain + headerUtility;
      const nextInitialTopOffset = Number.parseFloat(
        sectionStyles?.getPropertyValue("--news-featured-initial-top") ?? "200"
      );

      setInitialTopOffset(nextInitialTopOffset);

      setViewportSize({
        height: Math.max(window.innerHeight - headerHeight, FEATURED_NEWS_INITIAL_HEIGHT),
        width: window.innerWidth
      });
    };

    updateViewportSize();
    window.addEventListener("resize", updateViewportSize);

    return () => {
      window.removeEventListener("resize", updateViewportSize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: sectionRef
  });

  const widthTarget: number[] = shouldReduceMotion
    ? [viewportSize.width, viewportSize.width]
    : [Math.min(FEATURED_NEWS_INITIAL_WIDTH, viewportSize.width), viewportSize.width];
  const heightTarget: number[] = shouldReduceMotion
    ? [viewportSize.height, viewportSize.height]
    : [FEATURED_NEWS_INITIAL_HEIGHT, viewportSize.height];
  const radiusTarget: number[] = shouldReduceMotion ? [0, 0] : FEATURED_NEWS_RADIUS_RANGE;
  const verticalOffsetTarget = shouldReduceMotion ? [0, 0] : [initialTopOffset, 0];

  const width = useSpring(
    useTransform(scrollYProgress, FEATURED_NEWS_PROGRESS_RANGE, widthTarget),
    FEATURED_NEWS_SPRING
  );
  const height = useSpring(
    useTransform(scrollYProgress, FEATURED_NEWS_PROGRESS_RANGE, heightTarget),
    FEATURED_NEWS_SPRING
  );
  const borderRadius = useSpring(
    useTransform(scrollYProgress, FEATURED_NEWS_PROGRESS_RANGE, radiusTarget),
    FEATURED_NEWS_SPRING
  );
  const y = useSpring(
    useTransform(scrollYProgress, FEATURED_NEWS_PROGRESS_RANGE, verticalOffsetTarget),
    FEATURED_NEWS_SPRING
  );
  const miniCardsOpacity = useSpring(
    useTransform(scrollYProgress, FEATURED_NEWS_MINI_CARD_REVEAL_RANGE, [0, 1]),
    FEATURED_NEWS_SPRING
  );
  const miniCardsY = useSpring(
    useTransform(scrollYProgress, FEATURED_NEWS_MINI_CARD_REVEAL_RANGE, [32, 0]),
    FEATURED_NEWS_SPRING
  );
  const selectedNewsItem = NEWS_MINI_RAIL[selectedNewsIndex] ?? FEATURED_NEWS;

  return (
    <NewsSectionRoot
      id="latest-news"
      aria-label={toSentenceCase(newsCopy.ariaLabel)}
      ref={sectionRef}
    >
      <NewsFeaturedCard
        borderRadius={borderRadius}
        height={height}
        item={selectedNewsItem}
        miniCardsOpacity={miniCardsOpacity}
        miniCardsY={miniCardsY}
        onSelectNews={setSelectedNewsIndex}
        railItems={NEWS_MINI_RAIL}
        selectedNewsIndex={selectedNewsIndex}
        width={width}
        y={y}
      />
      <NewsRedLine />
    </NewsSectionRoot>
  );
}
