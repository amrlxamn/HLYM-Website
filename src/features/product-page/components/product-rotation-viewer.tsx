import { useRef } from "react";
import { useCanvasFrameRenderer } from "@/hooks/use-canvas-frame-renderer";
import { useImageSequence } from "@/hooks/use-image-sequence";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { useProductRotationFrame } from "../hooks/use-product-rotation-frame";
import { ProductRotationViewerSurface } from "../styles/product-showcase-media.styles";

type ProductRotationViewerProps = {
  alt: string;
  frames: readonly string[];
};

export function ProductRotationViewer({ alt, frames }: ProductRotationViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { frameIndex, onKeyDown, onPointerDown, onPointerMove, onPointerUp } =
    useProductRotationFrame(frames.length);
  const { images, isLoaded } = useImageSequence(frames);

  useCanvasFrameRenderer(canvasRef, images, frameIndex, isLoaded);

  return (
    <ProductRotationViewerSurface
      aria-label={`360 view of ${toSentenceCase(alt)}`}
      onKeyDown={onKeyDown}
      onPointerCancel={onPointerUp}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      role="group"
      tabIndex={0}
    >
      <canvas ref={canvasRef} aria-label={toSentenceCase(alt)} role="img" />
    </ProductRotationViewerSurface>
  );
}
