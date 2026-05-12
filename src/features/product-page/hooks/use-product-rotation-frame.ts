import type { KeyboardEventHandler, PointerEventHandler } from "react";
import { useRef, useState } from "react";

const FRAME_DRAG_DISTANCE = 24;

export function useProductRotationFrame(frameCount: number) {
  const [frameIndex, setFrameIndex] = useState(0);
  const activePointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartFrameRef = useRef(0);

  const updateFrameIndex = (nextFrame: number) => {
    if (frameCount === 0) {
      return;
    }

    const normalizedFrame = ((nextFrame % frameCount) + frameCount) % frameCount;
    setFrameIndex((currentFrame) => {
      if (currentFrame === normalizedFrame) {
        return currentFrame;
      }

      return normalizedFrame;
    });
  };

  const onPointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    if (frameCount < 2) {
      return;
    }

    activePointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragStartFrameRef.current = frameIndex;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (activePointerIdRef.current !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragStartXRef.current;
    const frameDelta = Math.round(deltaX / FRAME_DRAG_DISTANCE);
    updateFrameIndex(dragStartFrameRef.current + frameDelta);
  };

  const onPointerUp: PointerEventHandler<HTMLDivElement> = (event) => {
    if (activePointerIdRef.current !== event.pointerId) {
      return;
    }

    activePointerIdRef.current = null;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (frameCount < 2) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      updateFrameIndex(frameIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      updateFrameIndex(frameIndex - 1);
    }
  };

  return {
    frameIndex,
    onKeyDown,
    onPointerDown,
    onPointerMove,
    onPointerUp
  };
}
