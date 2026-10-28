import type { ReactNode } from "react";
import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import { Button } from "@/components/ui";
import { ContactHeroTitle } from "@/features/contact-page/styles/contact-hero-shell.styles";
import {
  CorporateContainer,
  CorporateCopy,
  CorporateStoryTitle
} from "@/features/corporate-page/corporate-page.styles";
import { getAssetUrl } from "@/lib/get-asset-url";
import { PageShell } from "@/styles/layout";
import {
  AFTER_SALES_GUIDES,
  CAREER_ROLES,
  RACE_SERIES,
  RESOURCE_GROUPS,
  Y_CONNECT_FEATURES,
  Y_CONNECT_QUESTIONS,
  YEZ_BENEFITS
} from "./site-pages.constants";
import {
  UtilityBenefits,
  UtilityCareers,
  UtilityDetailList,
  UtilityDirectory,
  UtilityImageLinks,
  UtilityIntro,
  UtilityLogo,
  UtilityMain,
  UtilityQuestions,
  UtilitySchedule,
  UtilitySection,
  UtilitySplit
} from "./site-pages.styles";

const official = "https://www.yamaha-motor.com.my";

function SitePage({
  title,
  intro,
  children
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <SiteHeader />
      <UtilityMain>
        <CorporateContainer>
          <UtilityIntro>
            <ContactHeroTitle>{title}</ContactHeroTitle>
            <CorporateCopy>{intro}</CorporateCopy>
          </UtilityIntro>
          {children}
        </CorporateContainer>
      </UtilityMain>
      <FooterSection />
    </PageShell>
  );
}

export function AfterSalesPage() {
  return (
    <SitePage
      title="After Sales"
      intro="Rider safety information, video guidance and genuine parts updates from Yamaha."
    >
      <UtilitySection aria-label="Tools and tips">
        <h2>Tools &amp; tips</h2>
        <UtilityImageLinks>
          {AFTER_SALES_GUIDES.map((guide) => (
            <a href={guide.href} key={guide.href} rel="noopener noreferrer" target="_blank">
              <img alt="" loading="lazy" src={guide.image} />
              {guide.title} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </UtilityImageLinks>
      </UtilitySection>
      <UtilitySplit>
        <img
          alt="Yamaha genuine parts and EPC system"
          loading="lazy"
          src="https://cdn.prod.website-files.com/6a20eb17fa7f874df9ab69d2/6a59e432a4b36cbb4b95eebd_after-sales-epc-genuine-parts.jpg"
        />
        <div>
          <CorporateStoryTitle>EPC System</CorporateStoryTitle>
          <p>The Yamaha Electronic Parts Catalogue is coming soon.</p>
          <Button as="a" href="/yamaha-network" size="sm" variant="light">
            Find a Yamaha dealer
          </Button>
        </div>
      </UtilitySplit>
    </SitePage>
  );
}

export function YezPage() {
  return (
    <SitePage
      title="Yamaha Endorsed Zone"
      intro="Motosikal premium terpakai yang melalui saringan dan pemeriksaan mengikut piawaian Yamaha."
    >
      <UtilitySplit>
        <UtilityLogo>
          <img
            alt="Yamaha Endorsed Zone logo"
            loading="lazy"
            src="https://s3.amazonaws.com/webflow-prod-assets/6a20eb17fa7f874df9ab69d2/6a6a2f56ee61fc1073a80a6d_yez-logo.png"
          />
        </UtilityLogo>
        <div>
          <CorporateStoryTitle>Mengapa YEZ?</CorporateStoryTitle>
          <p>
            Yamaha Endorsed Zone ialah meterai kelulusan Yamaha untuk motosikal premium terpakai.
            Setiap motosikal menjalani proses saringan dan pemeriksaan yang teliti.
          </p>
          <p>
            Logo YEZ menampilkan huruf “E” sebagai tanda semak, melambangkan pemilihan motosikal
            yang memenuhi kelulusan Yamaha.
          </p>
        </div>
      </UtilitySplit>
      <UtilitySection aria-label="YEZ benefits">
        <h2>YEZ kepada pelanggan kami</h2>
        <p>Lebih ketenangan fikiran ketika memilih motosikal Yamaha terpakai.</p>
        <UtilityBenefits>
          {YEZ_BENEFITS.map((benefit) => (
            <li key={benefit.title}>
              <img alt="" loading="lazy" src={benefit.image} />
              <h3>{benefit.title}</h3>
            </li>
          ))}
        </UtilityBenefits>
      </UtilitySection>
      <UtilitySection>
        <h2>Rangkaian YEZ</h2>
        <p>Semak senarai pengedar YEZ mengikut negeri dan hubungi mereka untuk maklumat lanjut.</p>
        <Button
          as="a"
          href={`${official}/yez`}
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
          variant="light"
        >
          Lihat rangkaian YEZ
        </Button>
      </UtilitySection>
    </SitePage>
  );
}

export function YConnectPage() {
  return (
    <SitePage
      title="Y-Connect"
      intro="Connect a compatible Yamaha motorcycle to your phone for ride information and notifications."
    >
      <UtilitySplit>
        <img
          alt="Yamaha NVX motorcycle with Y-Connect"
          loading="lazy"
          src="https://cdn.prod.website-files.com/6a20eb17fa7f874df9ab69d2/6a61dd00001c6a1094a32fbc_y-connect-nvx-bike.webp"
        />
        <div>
          <CorporateStoryTitle>Stay connected</CorporateStoryTitle>
          <p>
            Check maintenance schedules, fuel consumption, battery level and your last parking
            location. Incoming calls and messages can appear on the motorcycle’s meter display.
          </p>
          <Button
            as="a"
            href="https://apps.apple.com/my/app/yamaha-motorcycle-connect/id1495921872"
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="light"
          >
            Download on the App Store
          </Button>
          <br />
          <Button
            as="a"
            href="https://play.google.com/store/apps/details?id=jp.co.yamahamotor.yamahamotorcycleconnect.sccu&hl=en&gl=US"
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="light"
          >
            Get it on Google Play
          </Button>
        </div>
      </UtilitySplit>
      <UtilitySection>
        <h2>Features at a glance</h2>
        <UtilityDetailList>
          {Y_CONNECT_FEATURES.map(([title, description]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </UtilityDetailList>
      </UtilitySection>
      <UtilitySplit>
        <div>
          <CorporateStoryTitle>Ride information, on your phone</CorporateStoryTitle>
          <p>
            The app brings together your motorcycle’s connected information in one place. Features
            depend on the motorcycle’s compatible Communication Control Unit (CCU).
          </p>
        </div>
        <img
          alt="Y-Connect mobile application interface"
          loading="lazy"
          src="https://cdn.prod.website-files.com/6a20eb17fa7f874df9ab69d2/6a61dd0115fae08d8a6ee21e_y-connect-interface.jpg"
        />
      </UtilitySplit>
      <UtilitySection>
        <h2>Frequently asked questions</h2>
        <UtilityQuestions>
          {Y_CONNECT_QUESTIONS.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </UtilityQuestions>
        <p>
          <a href={`${official}/y-connect`} rel="noopener noreferrer" target="_blank">
            Read all Y-Connect FAQs on Yamaha Malaysia ↗
          </a>
        </p>
      </UtilitySection>
    </SitePage>
  );
}

export function MotorsportsPage() {
  return (
    <SitePage
      title="Motorsports"
      intro="Follow the Hong Leong Yamaha teams across Malaysia and Asia’s racing championships."
    >
      <UtilitySection>
        <h2>2026 race schedule</h2>
        <p>Published championship dates and venues. Check the organiser for schedule changes.</p>
        {RACE_SERIES.map((series) => (
          <UtilitySchedule aria-label={`${series.name} 2026 schedule`} key={series.name}>
            <img alt={`${series.name} racing`} loading="lazy" src={series.image} />
            <h3>{series.name}</h3>
            <ol>
              {series.rounds.map(([round, date, venue]) => (
                <li key={round}>
                  <span aria-label={`Round ${round}`}>{round}</span>
                  <span>{date} 2026</span>
                  <span>{venue}</span>
                </li>
              ))}
            </ol>
          </UtilitySchedule>
        ))}
      </UtilitySection>
      <UtilitySection>
        <h2>Motorsports news</h2>
        <p>Select “Latest News” on Yamaha Malaysia’s motorsports page for the race archive.</p>
        <Button
          as="a"
          href={`${official}/motorsports`}
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
          variant="light"
        >
          Open motorsports archive
        </Button>
      </UtilitySection>
    </SitePage>
  );
}

export function ResourcesPage() {
  return (
    <SitePage
      title="Resources"
      intro="Find Yamaha brochures and parts catalogues, organised by motorcycle category."
    >
      <UtilitySection>
        <h2>Downloads</h2>
        <p>Select a motorcycle category, then open a published Yamaha document.</p>
        <UtilityDirectory>
          {RESOURCE_GROUPS.map((group, index) => (
            <details key={group.name} open={index === 0}>
              <summary>{group.name}</summary>
              <ul>
                {group.models.map(([name, brochure, parts]) => (
                  <li key={name}>
                    <strong>{name}</strong>
                    <div>
                      {brochure && (
                        <a href={brochure} rel="noopener noreferrer" target="_blank">
                          Brochure (PDF) ↗
                        </a>
                      )}
                      {parts && (
                        <a href={parts} rel="noopener noreferrer" target="_blank">
                          Parts catalogue (PDF) ↗
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </UtilityDirectory>
      </UtilitySection>
      <UtilitySection>
        <h2>Technical service tips</h2>
        <p>
          Browse Yamaha’s tips for bodywork, electrical systems, electronics and engine mechanics.
        </p>
        <Button
          as="a"
          href={`${official}/resources`}
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
          variant="light"
        >
          View technical tips
        </Button>
      </UtilitySection>
    </SitePage>
  );
}

export function CareerPage() {
  return (
    <SitePage
      title="Career"
      intro="Explore opportunities with Hong Leong Yamaha Motor in Sungai Buloh, Selangor."
    >
      <UtilitySplit>
        <img
          alt="Hong Leong Yamaha Motor complex in Sungai Buloh"
          loading="lazy"
          src={getAssetUrl("hlym/contact/contact-complex.webp")}
        />
        <div>
          <CorporateStoryTitle>Make your next move</CorporateStoryTitle>
          <p>
            Discover roles across operations, engineering, technology and marketing at Hong Leong
            Yamaha Motor.
          </p>
        </div>
      </UtilitySplit>
      <UtilitySection>
        <h2>Available positions</h2>
        <p>
          These roles were listed on Yamaha Malaysia. Check the official careers page for current
          availability and application details.
        </p>
        <UtilityCareers>
          {CAREER_ROLES.map((title) => (
            <li key={title}>
              <strong>{title}</strong>
              <span>Sungai Buloh, Selangor</span>
            </li>
          ))}
        </UtilityCareers>
        <Button
          as="a"
          href={`${official}/career`}
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
          variant="light"
        >
          View current openings
        </Button>
      </UtilitySection>
    </SitePage>
  );
}

export function SitePages({ path }: { path: string }) {
  switch (path) {
    case "/after-sales":
      return <AfterSalesPage />;
    case "/yez":
      return <YezPage />;
    case "/y-connect":
      return <YConnectPage />;
    case "/motorsports":
      return <MotorsportsPage />;
    case "/resources":
      return <ResourcesPage />;
    case "/career":
      return <CareerPage />;
    default:
      return null;
  }
}
