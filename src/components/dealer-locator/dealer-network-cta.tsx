import { Button } from "@/components/ui/button/button";
import { SITE_COPY } from "@/data/site-copy.constants";
import { getAssetUrl } from "@/lib/get-asset-url";
import { DealerNetworkCtaTitle } from "./dealer-network-cta-content.styles";
import { DealerNetworkCtaCopy, DealerNetworkCtaRoot } from "./dealer-network-cta.styles";

export function DealerNetworkCta() {
  const copy = SITE_COPY.dealerLocator.networkCta;

  return (
    <DealerNetworkCtaRoot
      $backgroundImage={getAssetUrl("banner-background.png")}
      aria-label={copy.ariaLabel}
    >
      <DealerNetworkCtaCopy>
        <DealerNetworkCtaTitle>
          <span>
            Explore the
            <strong>Yamaha network</strong>
          </span>
        </DealerNetworkCtaTitle>
        <Button as="a" href="/yamaha-network" size="sm" variant="primary">
          {copy.actionLabel}
        </Button>
      </DealerNetworkCtaCopy>
    </DealerNetworkCtaRoot>
  );
}
