import { Gauge, ShieldCheck, Zap } from "lucide-react";
import { SectionTag } from "@/components/shared/section-tag";
import { EDITORIAL_POINTS } from "@/data/featured.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { getAssetUrl } from "@/lib/get-asset-url";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  MtAccentHeading,
  MtCopy,
  MtDescription,
  MtEditorialRoot,
  MtHeading,
  MtImageWrap,
  MtOverlay,
  MtOverlayTop,
  MtPointItem,
  MtPointsList,
  MtPrice,
  MtWatermark
} from "./featured.styles";

const ICONS = {
  gauge: Gauge,
  shield: ShieldCheck,
  zap: Zap
} as const;

export function MtEditorial() {
  const editorialCopy = SITE_COPY.featured.editorial;

  return (
    <MtEditorialRoot id="featured-model">
      <MtImageWrap>
        <img
          loading="lazy"
          src={getAssetUrl("hlym/generated-1772089393521.png")}
          alt={toSentenceCase(editorialCopy.imageAlt)}
        />
        <MtOverlay />
        <MtOverlayTop />
        <MtWatermark>{editorialCopy.watermark}</MtWatermark>
      </MtImageWrap>
      <MtCopy>
        <SectionTag accent label={editorialCopy.tagLabel} lineWidth="medium" />
        <MtHeading>{editorialCopy.headingLines[0]}</MtHeading>
        <MtHeading>{editorialCopy.headingLines[1]}</MtHeading>
        <MtAccentHeading>{editorialCopy.headingLines[2]}</MtAccentHeading>
        <MtDescription>{toSentenceCase(editorialCopy.description)}</MtDescription>
        <MtPointsList>
          {EDITORIAL_POINTS.map((point) => {
            const Icon = ICONS[point.icon];

            return (
              <MtPointItem key={point.text}>
                <Icon />
                <span>{toSentenceCase(point.text)}</span>
              </MtPointItem>
            );
          })}
        </MtPointsList>
        <MtPrice>{editorialCopy.price}</MtPrice>
      </MtCopy>
    </MtEditorialRoot>
  );
}
