import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import { Button } from "@/components/ui";
import {
  ContactHeroBackground,
  ContactHeroContentPanel,
  ContactHeroCopy,
  ContactHeroGradient,
  ContactHeroInner,
  ContactHeroTitle,
  ContactHeroVerticalShade
} from "@/features/contact-page/styles/contact-hero-shell.styles";
import { ProductSubHeader } from "@/features/product-page/components/product-sub-header";
import { PageShell } from "@/styles/layout";
import {
  CORPORATE_IMAGES,
  CORPORATE_MILESTONES,
  CORPORATE_NAV,
  CORPORATE_POLICIES,
  FOUR_MILLIONTH_ROLLOUT_IMAGES,
  ROAD_SAFETY_GALLERY,
  SAFETY_GALLERY
} from "./corporate-content.constants";
import {
  CorporateCampaignFeature,
  CorporateContainer,
  CorporateCopy,
  CorporateGallery,
  CorporateHero,
  CorporateLead,
  CorporatePolicyBullets,
  CorporatePolicyList,
  CorporateRoot,
  CorporateRolloutGallery,
  CorporateSection,
  CorporateStatement,
  CorporateStatementCopy,
  CorporateStory,
  CorporateStoryTitle,
  CorporateTabBar,
  CorporateWideImage
} from "./corporate-page.styles";
import { MilestoneTimeline } from "./milestone-timeline";

function CompanyIntroduction() {
  return (
    <>
      <CorporateSection style={{ paddingBottom: "var(--space-16)" }}>
        <CorporateContainer>
          <CorporateLead>A partnership that started moving Malaysia in 1978</CorporateLead>
          <CorporateCopy>
            Hong Leong Yamaha Motor Sdn. Bhd. (company registration no. 197901002563 / 46829-P) is a
            joint venture between Hong Leong Industries Bhd and Yamaha Motor Co., Ltd, Japan. Hong
            Leong Industries Bhd holds the majority equity interest in HLYM and is part of the Hong
            Leong Group of Companies, Malaysia.
          </CorporateCopy>
          <CorporateCopy>
            Appointed the official licence holder for CKD and CBU Yamaha motorcycles in Malaysia
            since 1978, HLYM rolled out its first CKD street model, the RX100, at the Shah Alam
            plant in 1979. The Y80, DX 100 and DT125 followed as production reached 3,500 units a
            month.
          </CorporateCopy>
        </CorporateContainer>
      </CorporateSection>
      <CorporateContainer>
        <CorporateWideImage>
          <img
            alt="Aerial view of the Hong Leong Yamaha Complex"
            loading="lazy"
            src="/assets/hlym/contact/contact-complex.webp"
          />
        </CorporateWideImage>
      </CorporateContainer>
      <MilestoneTimeline milestones={CORPORATE_MILESTONES} />
      <CorporateSection>
        <CorporateContainer>
          <CorporateCopy>
            HLYM continues to invest in employee skills, technology and equipment to improve
            production capabilities.
          </CorporateCopy>
          <CorporateCopy>
            Automation robotic technology and Automated Guided vehicles have been incorporated to
            further enhance production quality and efficiency. The incorporation of automation
            technology allows for the flexibility and the speed to adjust capacity and models
            assembly in response to changing market demand.
          </CorporateCopy>
          <CorporateCopy>
            Its certifications and awards include the Total Productive Maintenance Excellence 1st
            Category award from JIPM, ISO 9001, ISO 14001 and certification by the Malaysia
            Productivity Corporation.
          </CorporateCopy>
          <CorporateCopy>
            Hong Leong Yamaha Motor is committed to carry on powering the passions of avid
            motorcyclist to create exceptional value and lifestyle experiences to enrich the lives
            of its customers.
          </CorporateCopy>
        </CorporateContainer>
      </CorporateSection>
      <CorporateStatement>
        <CorporateContainer>
          <CorporateStatementCopy>
            Investing in people, technology and the quality of every motorcycle we build
          </CorporateStatementCopy>
        </CorporateContainer>
      </CorporateStatement>
    </>
  );
}

function FourMillionthRollout() {
  return (
    <CorporateSection>
      <CorporateContainer>
        <CorporateLead>4 Millionth Rollout</CorporateLead>
        <CorporateCopy>
          In 2018, Hong Leong Yamaha Motor celebrated the rollout of its four-millionth locally
          assembled Yamaha motorcycle in Malaysia.
        </CorporateCopy>
        <CorporateRolloutGallery aria-label="4 Millionth Rollout photos" role="group">
          {FOUR_MILLIONTH_ROLLOUT_IMAGES.map((image, index) => (
            <a href={image} key={image} rel="noopener noreferrer" target="_blank">
              <img
                alt={`4 Millionth Rollout event ${index + 1} of ${FOUR_MILLIONTH_ROLLOUT_IMAGES.length}`}
                loading="lazy"
                src={image}
              />
            </a>
          ))}
        </CorporateRolloutGallery>
      </CorporateContainer>
    </CorporateSection>
  );
}

function PhotoSequence({
  items,
  label
}: {
  items: readonly { title: string; image: string }[];
  label: string;
}) {
  return (
    <CorporateGallery aria-label={label} role="group">
      {items.map((item) => (
        <figure key={item.title}>
          <img
            alt={`Yamaha ${item.title.toLowerCase()} activity`}
            loading="lazy"
            src={item.image}
          />
          <figcaption>{item.title}</figcaption>
        </figure>
      ))}
    </CorporateGallery>
  );
}

function SocialResponsibility() {
  return (
    <>
      <CorporateSection>
        <CorporateContainer>
          <CorporateLead>Yamaha Safety Riding Science</CorporateLead>
          <CorporateCopy>
            Hong Leong Yamaha Motor Sdn. Bhd. (HLYM), company registration no. 197901002563
            (46829-P), was incorporated in Malaysia in 1978 as a joint venture between Hong Leong
            Industries Bhd and Yamaha Motor Co., Ltd., Japan.
          </CorporateCopy>
          <CorporateCopy>
            Hong Leong Yamaha Motor’s Yamaha Safety Riding Science (YSRS) programme supports the
            Government’s road-safety initiative. It combines theory and practical motorcycle
            sessions for factory workers, college and university students.
          </CorporateCopy>
          <CorporateLead style={{ marginTop: "var(--space-16)" }}>
            A corporate social responsibility initiative in support of the Road Safety Campaign
          </CorporateLead>
          <PhotoSequence items={SAFETY_GALLERY} label="Yamaha Safety Riding Science activities" />
        </CorporateContainer>
      </CorporateSection>
      <CorporateStatement>
        <CorporateContainer>
          <CorporateStatementCopy>
            Quality products and excellent customer service in every aspect of our operation
          </CorporateStatementCopy>
        </CorporateContainer>
      </CorporateStatement>
      <CorporateSection>
        <CorporateContainer>
          <CorporateLead>CCS Pledge</CorporateLead>
          <CorporateCopy>
            Customer & Community Satisfaction (CCS) is a programme incorporated into HLYM’s business
            practice to support its customer-centric commitment to quality products and excellent
            customer service in every aspect of its operation.
          </CorporateCopy>
          <CorporateCampaignFeature>
            <img
              alt="CCS Pledge poster with Yamaha staff and a customer satisfaction message"
              loading="lazy"
              src={CORPORATE_IMAGES.ccsPledge}
            />
          </CorporateCampaignFeature>
        </CorporateContainer>
      </CorporateSection>
      <CorporateSection>
        <CorporateContainer>
          <CorporateLead>Balik Kampung Road Safety Campaign</CorporateLead>
          <CorporateCopy>
            Since 1999, HLYM has run the Balik Kampung Road Safety Campaign annually to educate
            motorcyclists in support of Malaysia’s road-safety efforts. The campaign offers free
            15-point maintenance checks, free helmet exchanges, free safety-vest distribution and
            YSRS clinics to riders of all motorcycle brands.
          </CorporateCopy>
          <CorporateCampaignFeature>
            <img
              alt="Yamaha representatives at the 2014 Balik Kampung road safety campaign"
              loading="lazy"
              src={CORPORATE_IMAGES.balikKampung}
            />
            <figcaption>Balik Kampung Yamaha Ke-16 · 2014</figcaption>
          </CorporateCampaignFeature>
          <PhotoSequence
            items={ROAD_SAFETY_GALLERY}
            label="Balik Kampung Road Safety Campaign activities"
          />
        </CorporateContainer>
      </CorporateSection>
    </>
  );
}

function PrinciplesAndPolicies() {
  return (
    <CorporateSection>
      <CorporateContainer>
        <CorporateLead>How we work matters</CorporateLead>
        <CorporateCopy>
          The policies below set out HLYM’s approach to environmental management, quality, workplace
          safety, procurement and business conduct.
        </CorporateCopy>
        <CorporatePolicyList>
          {CORPORATE_POLICIES.map((policy, index) => (
            <CorporateStory key={policy.title}>
              <img alt={`${policy.title} at Yamaha`} loading="lazy" src={policy.image} />
              <div>
                <CorporateStoryTitle>{policy.title}</CorporateStoryTitle>
                <p>{policy.copy}</p>
                {index === 0 && (
                  <>
                    <p>
                      Scope of certification: manufacturing and sales of motorcycles and parts;
                      provision of after-sales service of motorcycles.
                    </p>
                    <CorporatePolicyBullets>
                      <li>Fulfil environmental legislation and corporate requirements.</li>
                      <li>Use energy, water and resources responsibly and reduce pollution.</li>
                      <li>Continually improve environmental management programmes.</li>
                      <li>Provide and maintain a safe and healthy working environment.</li>
                      <li>Develop and manufacture products in harmony with nature.</li>
                      <li>Communicate the policy to employees and interested parties.</li>
                    </CorporatePolicyBullets>
                    <p>1 April 2024, Rev. 7</p>
                  </>
                )}
                {"document" in policy && (
                  <Button
                    as="a"
                    aria-label={`Download ${policy.title} (PDF)`}
                    href={policy.document}
                    rel="noopener noreferrer"
                    size="sm"
                    target="_blank"
                    variant="light"
                  >
                    DOWNLOAD
                  </Button>
                )}
              </div>
            </CorporateStory>
          ))}
        </CorporatePolicyList>
      </CorporateContainer>
    </CorporateSection>
  );
}

export function CorporatePage({ path = "/corporate" }: { path?: string }) {
  const selectedPath = path === "/corporate" ? "/company-introduction" : path;

  return (
    <PageShell>
      <SiteHeader />
      <CorporateRoot as="main">
        <CorporateHero aria-label="Corporate hero">
          <ContactHeroBackground
            alt="Yamaha riders on motorcycles along a forest road"
            src={CORPORATE_IMAGES.hero}
          />
          <ContactHeroGradient />
          <ContactHeroVerticalShade />
          <ContactHeroInner>
            <ContactHeroContentPanel>
              <ContactHeroTitle>Powering the passion</ContactHeroTitle>
              <ContactHeroCopy>
                Motorcycles, people and progress — made for the roads ahead.
              </ContactHeroCopy>
            </ContactHeroContentPanel>
          </ContactHeroInner>
        </CorporateHero>
        <CorporateTabBar>
          <ProductSubHeader
            activeHref={selectedPath}
            ariaLabel="Corporate sections"
            tabs={CORPORATE_NAV}
          />
        </CorporateTabBar>
        {selectedPath === "/company-introduction" ? (
          <CompanyIntroduction />
        ) : selectedPath === "/4-millionth-rollout" ? (
          <FourMillionthRollout />
        ) : selectedPath === "/social-responsibility" ? (
          <SocialResponsibility />
        ) : selectedPath === "/principal-policies" ? (
          <PrinciplesAndPolicies />
        ) : null}
      </CorporateRoot>
      <FooterSection />
    </PageShell>
  );
}
