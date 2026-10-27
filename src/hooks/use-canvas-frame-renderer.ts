import type { RefObject } from "react";
import { useEffect } from "react";
import { getImageContentBounds } from "@/lib/get-image-content-bounds";

export function useCanvasFrameRenderer(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  images: readonly HTMLImageElement[],
  frameIndex: number,
  isLoaded: boolean,
  normalize = false,
  loadedCount = 0,
  onDraw?: () => void
): void {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isLoaded || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const readyImages = images.filter((image) => image.complete && image.naturalWidth > 0);
    const image = images[frameIndex]?.naturalWidth ? images[frameIndex] : readyImages[0];
    if (!image) return;

    const canvasWidth = normalize ? 1200 : image.naturalWidth;
    const canvasHeight = normalize ? 800 : image.naturalHeight;
    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }

    const rafId = requestAnimationFrame(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!normalize) {
        ctx.drawImage(image, 0, 0);
        onDraw?.();
        return;
      }

      const frames = readyImages.map(getImageContentBounds);
      const bounds = getImageContentBounds(image);
      const maximumWidth = Math.max(...frames.map((frame) => frame.width));
      const maximumHeight = Math.max(...frames.map((frame) => frame.height));
      const scale = Math.min(
        (canvas.width * 0.86) / maximumWidth,
        (canvas.height * 0.86) / maximumHeight
      );
      const width = bounds.width * scale;
      const height = bounds.height * scale;
      ctx.drawImage(
        bounds.canvas,
        bounds.x,
        bounds.y,
        bounds.width,
        bounds.height,
        (canvas.width - width) / 2,
        (canvas.height - height) / 2,
        width,
        height
      );
      onDraw?.();
    });

    return () => cancelAnimationFrame(rafId);
  }, [canvasRef, images, frameIndex, isLoaded, normalize, loadedCount, onDraw]);
}
