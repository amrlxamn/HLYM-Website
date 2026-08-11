import { DOC_EASING_PRESETS, DOC_MOTION_TOKENS } from "../constants/doc-motion.constants";
import {
  SectionBody,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTagline,
  SectionTitle
} from "../styles/doc-section.styles";
import {
  EasingName,
  EasingRow,
  EasingTrack,
  EasingTrackFill,
  EasingValue,
  MotionCard,
  MotionCardDescription,
  MotionCardDuration,
  MotionCardHeader,
  MotionCardName,
  MotionDemoBox,
  MotionDemoLabel,
  MotionDemoOrb
} from "../styles/doc-motion.styles";

export function DocMotionSection() {
  return (
    <SectionRoot id="motion">
      <SectionBody>
        <SectionHeader>
          <SectionTagline>Motion</SectionTagline>
          <SectionTitle>240ms, always</SectionTitle>
          <SectionDescription>
            Motion has purpose. Standard duration is 240ms. Easing is always cubic-bezier(0.22, 1,
            0.36, 1). Press feedback is 160ms at scale(0.97).
          </SectionDescription>
        </SectionHeader>
        {DOC_MOTION_TOKENS.map((token) => (
          <MotionCard key={token.name}>
            <MotionCardHeader>
              <MotionCardName>{token.name}</MotionCardName>
              <MotionCardDuration>{token.duration}</MotionCardDuration>
            </MotionCardHeader>
            <MotionCardDescription>{token.description}</MotionCardDescription>
            <MotionDemoBox>
              <MotionDemoLabel>{token.property}</MotionDemoLabel>
              <MotionDemoOrb $duration={token.duration} $easing={token.easing} />
            </MotionDemoBox>
          </MotionCard>
        ))}
        {DOC_EASING_PRESETS.map((preset) => (
          <EasingRow key={preset.name}>
            <EasingName>{preset.name}</EasingName>
            <EasingTrack>
              <EasingTrackFill $easing={preset.css} />
            </EasingTrack>
            <EasingValue>{preset.css}</EasingValue>
          </EasingRow>
        ))}
      </SectionBody>
    </SectionRoot>
  );
}
