import type { RefObject } from "react";
import { Button } from "@/components/ui/button/button";
import { SITE_COPY } from "@/data/site-copy.constants";
import { getAssetUrl } from "@/lib/get-asset-url";
import {
  FeaturedBannerAction,
  FeaturedBannerContent,
  FeaturedBannerCopy,
  FeaturedBannerDivider,
  FeaturedBannerLogo,
  FeaturedBannerRoot,
  FeaturedBannerSpecItem,
  FeaturedBannerSpecLabel,
  FeaturedBannerSpecs,
  FeaturedBannerSpecValue
} from "./featured-banner.styles";

type FeaturedBannerProps = {
  bannerRef: RefObject<HTMLElement>;
};

export function FeaturedBanner({ bannerRef }: FeaturedBannerProps) {
  const banner = SITE_COPY.featured.banner;
  const specLabels = SITE_COPY.models.specLabels;
  const specs = [
    { label: specLabels.engine, value: banner.specs.engine },
    { label: specLabels.power, value: banner.specs.power },
    { label: specLabels.weight, value: banner.specs.weight }
  ];

  return (
    <FeaturedBannerRoot ref={bannerRef}>
      <FeaturedBannerContent>
        <FeaturedBannerCopy>
          <FeaturedBannerLogo alt="mt-09" loading="lazy" src={getAssetUrl("hlym/MT-09-Logo.png")} />
          <FeaturedBannerDivider>|</FeaturedBannerDivider>
          <FeaturedBannerSpecs>
            {specs.map((spec) => (
              <FeaturedBannerSpecItem key={spec.label}>
                <FeaturedBannerSpecValue>{spec.value}</FeaturedBannerSpecValue>
                <FeaturedBannerSpecLabel>{spec.label}</FeaturedBannerSpecLabel>
              </FeaturedBannerSpecItem>
            ))}
          </FeaturedBannerSpecs>
        </FeaturedBannerCopy>
        <FeaturedBannerAction>
          <Button
            onClick={() => window.location.assign("/products/mt-09")}
            size="sm"
            variant="light"
          >
            {SITE_COPY.featured.bottomCtaLabel}
          </Button>
        </FeaturedBannerAction>
      </FeaturedBannerContent>
    </FeaturedBannerRoot>
  );
}
