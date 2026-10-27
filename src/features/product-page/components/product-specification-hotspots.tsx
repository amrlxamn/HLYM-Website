import { Tag, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  ProductHotspotButton,
  ProductHotspotCanvas,
  ProductHotspotDetail,
  ProductHotspotHint,
  ProductHotspotImage,
  ProductHotspotRoot
} from "../styles/product-full-specification-section.styles";

type HotspotData = {
  image: string;
  points: readonly { x: number; y: number; title: string; description: string }[];
};

export function ProductSpecificationHotspots({
  data,
  modelName
}: {
  data: HotspotData;
  modelName: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const point = selected === null ? null : data.points[selected];

  useEffect(() => {
    if (selected === null) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        rootRef.current?.contains(target) &&
        target instanceof Element &&
        target.closest("button[aria-expanded], #product-hotspot-detail")
      )
        return;
      setSelected(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setSelected(null);
      buttonsRef.current[selected]?.focus();
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  return (
    <ProductHotspotRoot
      ref={rootRef}
      aria-label={`Yamaha ${modelName} feature hotspots`}
      role="group"
    >
      <ProductHotspotCanvas>
        <ProductHotspotImage alt={`Yamaha ${modelName} feature diagram`} src={data.image} />
        {data.points.map((feature, index) => (
          <ProductHotspotButton
            $active={selected === index}
            aria-controls={selected === index ? "product-hotspot-detail" : undefined}
            aria-expanded={selected === index}
            aria-label={feature.title}
            key={`${feature.x}-${feature.y}-${feature.title}`}
            onClick={() => setSelected(selected === index ? null : index)}
            ref={(button) => {
              buttonsRef.current[index] = button;
            }}
            style={{ left: `${feature.x}%`, top: `${feature.y}%` }}
            type="button"
          >
            <Tag aria-hidden="true" size={19} strokeWidth={2} />
          </ProductHotspotButton>
        ))}
      </ProductHotspotCanvas>
      {data.points.length > 0 && (
        <ProductHotspotHint>Tap a red marker to explore its feature.</ProductHotspotHint>
      )}
      {selected !== null && point && (
        <ProductHotspotDetail aria-label={point.title} id="product-hotspot-detail" role="region">
          <button
            aria-label={`Close ${point.title}`}
            onClick={() => {
              setSelected(null);
              if (selected !== null) buttonsRef.current[selected]?.focus();
            }}
            type="button"
          >
            <X aria-hidden="true" size={18} strokeWidth={1.8} />
          </button>
          <div>
            <h3>{point.title}</h3>
            <span>{`Feature ${String(selected + 1).padStart(2, "0")} / ${String(data.points.length).padStart(2, "0")}`}</span>
          </div>
          {point.description && <p>{point.description}</p>}
        </ProductHotspotDetail>
      )}
    </ProductHotspotRoot>
  );
}
