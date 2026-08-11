import { MarqueeDot, MarqueeItem, MarqueeRoot, MarqueeTrack } from "../styles/doc-marquee.styles";

export function DocMarquee() {
  const items = ["Brand", "Motion", "Color", "Type", "Layout", "Accessibility", "Tokens"];
  const doubled = [...items, ...items];

  return (
    <MarqueeRoot aria-hidden="true">
      <MarqueeTrack $duration="24s">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} style={{ display: "inline-flex", gap: "32px" }}>
            <MarqueeItem>{item}</MarqueeItem>
            <MarqueeDot>/</MarqueeDot>
          </span>
        ))}
      </MarqueeTrack>
    </MarqueeRoot>
  );
}
