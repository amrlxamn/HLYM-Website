import { useCallback, useRef, useState } from "react";
import { useCanvasFrameRenderer } from "@/hooks/use-canvas-frame-renderer";
import { useImageSequence } from "@/hooks/use-image-sequence";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { useProductRotationFrame } from "../hooks/use-product-rotation-frame";
import { ProductRotationViewerSurface } from "../styles/product-showcase-media.styles";

type ProductRotationViewerProps = {
  alt: string;
  frames: readonly string[];
  interactive?: boolean;
  normalize?: boolean;
  poster?: string;
};

export function ProductRotationViewer({
  alt,
  frames,
  interactive = true,
  normalize = false,
  poster
}: ProductRotationViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasRenderedFrame, setHasRenderedFrame] = useState(false);
  const markFrameRendered = useCallback(() => setHasRenderedFrame(true), []);
  const { frameIndex, onKeyDown, onPointerDown, onPointerMove, onPointerUp } =
    useProductRotationFrame(frames.length);
  const { images, loadedCount } = useImageSequence(frames);

  useCanvasFrameRenderer(
    canvasRef,
    images,
    frameIndex,
    loadedCount > 0,
    normalize,
    loadedCount,
    markFrameRendered
  );

  return (
    <ProductRotationViewerSurface
      $interactive={interactive}
      aria-label={interactive ? `360 view of ${toSentenceCase(alt)}` : undefined}
      onKeyDown={interactive ? onKeyDown : undefined}
      onPointerCancel={interactive ? onPointerUp : undefined}
      onPointerDown={interactive ? onPointerDown : undefined}
      onPointerMove={interactive ? onPointerMove : undefined}
      onPointerUp={interactive ? onPointerUp : undefined}
      role={interactive ? "group" : undefined}
      tabIndex={interactive ? 0 : undefined}
    >
      {!hasRenderedFrame && poster && <img alt="" aria-hidden="true" src={poster} />}
      <canvas ref={canvasRef} aria-label={toSentenceCase(alt)} role="img" />
    </ProductRotationViewerSurface>
  );
}
