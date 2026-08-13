import { Search } from "lucide-react";
import { useDeferredValue, useState } from "react";
import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import { Accordion, Button } from "@/components/ui";
import { CONTACT_FAQ_CONTENT } from "@/features/contact-page/constants/contact-faq.constants";
import { SUPPORT_CATEGORIES } from "../constants/support-categories.constants";
import {
  SupportAction,
  SupportActions,
  SupportFaq,
  SupportFaqHeader
} from "../styles/support-portal-content.styles";
import {
  SupportCategory,
  SupportCategoryGrid,
  SupportCategoryIcon,
  SupportContent,
  SupportEyebrow,
  SupportHero,
  SupportHeroCopy,
  SupportHeroTitle,
  SupportPageRoot,
  SupportSearch,
  SupportSearchInput
} from "../styles/support-portal.styles";

export function SupportPortalPage() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const faqItems = CONTACT_FAQ_CONTENT.items
    .filter((item) => {
      if (!deferredQuery) {
        return true;
      }

      return `${item.question} ${item.answer ?? ""} ${item.topic}`
        .toLowerCase()
        .includes(deferredQuery);
    })
    .slice(0, 10)
    .map((item, index) => ({
      content: item.answer ?? "Contact our support team for help with this question.",
      id: `faq-${index}`,
      title: item.question
    }));

  return (
    <SupportPageRoot>
      <SiteHeader />
      <main>
        <SupportHero>
          <SupportContent>
            <SupportEyebrow>Yamaha Support Portal</SupportEyebrow>
            <SupportHeroTitle>How can we help you today?</SupportHeroTitle>
            <SupportHeroCopy>
              Find answers, submit an enquiry, or continue a private conversation with our customer
              support team.
            </SupportHeroCopy>
            <SupportSearch role="search">
              <Search aria-hidden="true" size={20} />
              <SupportSearchInput
                aria-label="Search Yamaha support questions"
                onChange={(event) => setQuery(event.currentTarget.value)}
                placeholder="Search warranty, servicing, parts, or dealers"
                type="search"
                value={query}
              />
            </SupportSearch>
            <SupportCategoryGrid aria-label="Support categories">
              {SUPPORT_CATEGORIES.map(({ icon: Icon, label }) => (
                <SupportCategory key={label} type="button">
                  <SupportCategoryIcon>
                    <Icon aria-hidden="true" size={19} />
                  </SupportCategoryIcon>
                  {label}
                </SupportCategory>
              ))}
            </SupportCategoryGrid>
          </SupportContent>
        </SupportHero>
        <SupportActions>
          <SupportAction>
            <span>Contact support</span>
            <h2>Start a new enquiry</h2>
            <p>Tell us what happened and receive a private ticket reference by email.</p>
            <Button onClick={() => window.location.assign("/contact-us")} size="lg">
              Submit an enquiry
            </Button>
          </SupportAction>
          <SupportAction>
            <span>Existing ticket</span>
            <h2>Continue your conversation</h2>
            <p>Open the secure link in your email to review updates and reply without a login.</p>
            <Button
              onClick={() => window.location.assign("/support/access")}
              size="lg"
              variant="secondary"
            >
              Request access link
            </Button>
          </SupportAction>
        </SupportActions>
        <SupportFaq>
          <SupportFaqHeader>
            <SupportEyebrow>Frequently asked questions</SupportEyebrow>
            <h2>{deferredQuery ? `Results for “${query}”` : "Popular support questions"}</h2>
            <p>{faqItems.length} answers available</p>
          </SupportFaqHeader>
          <Accordion allowMultiple items={faqItems} />
        </SupportFaq>
      </main>
      <FooterSection />
    </SupportPageRoot>
  );
}
