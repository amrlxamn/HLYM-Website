import type { ReactNode } from "react";
import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import { NewsCard } from "@/components/news/news-card";
import { Button } from "@/components/ui";
import { NEWS_ARCHIVE_ITEMS } from "@/data/news.constants";
import {
  ContactHeroBackground,
  ContactHeroContentPanel,
  ContactHeroCopy,
  ContactHeroGradient,
  ContactHeroInner,
  ContactHeroVerticalShade
} from "@/features/contact-page/styles/contact-hero-shell.styles";
import {
  CorporateContainer,
  CorporateCopy,
  CorporateLead,
  CorporateTabBar
} from "@/features/corporate-page/corporate-page.styles";
import { ProductSubHeader } from "@/features/product-page/components/product-sub-header";
import { PageShell } from "@/styles/layout";
import {
  ContestHeroAction,
  ContestWinnersSection,
  NewsPageGrid,
  NewsHero,
  NewsHeroTitle,
  NewsPageMain,
  NewsPageHeader,
  WinnerArchive
} from "./news-events.styles";
import { YAMALUBE_ENTRY_URL, YAMALUBE_WINNERS } from "./yamalube-winners.constants";

const NEWS_TABS = [
  { href: "/news-events", label: "All News" },
  { href: "/yamalube-scan", label: "Yamalube Scan & Win" }
] as const;

const NEWS_HERO_IMAGE =
  "https://s3.amazonaws.com/webflow-prod-assets/6a20eb17fa7f874df9ab69d2/6a72f0011ec8072aa84c28ed_motorsports-cub-prix.jpg";

function NewsPageFrame({
  activeHref,
  children,
  heroAction
}: {
  activeHref: string;
  children: ReactNode;
  heroAction?: ReactNode;
}) {
  const isNewsIndex = activeHref === "/news-events";

  return (
    <PageShell>
      <SiteHeader />
      <NewsPageMain>
        <NewsHero aria-label="News and events hero">
          <ContactHeroBackground
            alt="Motorcycle racers competing in the Malaysian Cub Prix"
            src={NEWS_HERO_IMAGE}
          />
          <ContactHeroGradient />
          <ContactHeroVerticalShade />
          <ContactHeroInner>
            <ContactHeroContentPanel>
              <NewsHeroTitle>{isNewsIndex ? "All news" : "Yamalube Scan & Win"}</NewsHeroTitle>
              <ContactHeroCopy>
                {isNewsIndex
                  ? "Model launches, community initiatives and campaign updates from Hong Leong Yamaha Motor."
                  : "2026 contest updates and published monthly winners."}
              </ContactHeroCopy>
              {heroAction && <ContestHeroAction>{heroAction}</ContestHeroAction>}
            </ContactHeroContentPanel>
          </ContactHeroInner>
        </NewsHero>
        <CorporateTabBar>
          <ProductSubHeader
            activeHref={activeHref}
            ariaLabel="News & Events sections"
            tabs={NEWS_TABS}
          />
        </CorporateTabBar>
        {children}
      </NewsPageMain>
      <FooterSection />
    </PageShell>
  );
}

export function NewsEventsPage() {
  return (
    <NewsPageFrame activeHref="/news-events">
      <CorporateContainer>
        <NewsPageHeader>
          <CorporateLead>All News</CorporateLead>
          <CorporateCopy>
            The latest launches, community stories and announcements from Hong Leong Yamaha Motor.
          </CorporateCopy>
        </NewsPageHeader>
      </CorporateContainer>
      <NewsPageGrid aria-label="All news and events">
        {NEWS_ARCHIVE_ITEMS.map((item) => (
          <NewsCard item={item} key={item.href} />
        ))}
      </NewsPageGrid>
    </NewsPageFrame>
  );
}

export function YamalubeScanPage() {
  const isClosed = Date.now() >= Date.parse("2027-01-01T00:00:00+08:00");

  return (
    <NewsPageFrame
      activeHref="/yamalube-scan"
      heroAction={
        isClosed ? (
          <p role="status">The 2026 entry period has ended. Published winners remain below.</p>
        ) : (
          <Button
            as="a"
            href={YAMALUBE_ENTRY_URL}
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
          >
            Open official entry
          </Button>
        )
      }
    >
      <CorporateContainer>
        <NewsPageHeader>
          <CorporateLead>Yamalube Scan &amp; Win</CorporateLead>
          <CorporateCopy>
            Contest period: 1 January – 31 December 2026. Explore published monthly winners.
          </CorporateCopy>
        </NewsPageHeader>
        <ContestWinnersSection aria-label="Published winners">
          <WinnerArchive aria-label="Published monthly winners">
            {YAMALUBE_WINNERS.flatMap((group) =>
              group.months.map(({ month, href }) => (
                <li key={href}>
                  <span className="winner-date" aria-hidden="true">
                    {month!.slice(0, 3)}
                    <small>{group.year}</small>
                  </span>
                  <div>
                    <a href={href} rel="noopener noreferrer" target="_blank">
                      {month} {group.year} winners
                    </a>
                  </div>
                </li>
              ))
            )}
          </WinnerArchive>
        </ContestWinnersSection>
      </CorporateContainer>
    </NewsPageFrame>
  );
}
