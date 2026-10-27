import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { useImageSequence } from "./use-image-sequence";

class ImageStub {
  static instances: ImageStub[] = [];
  complete = false;
  crossOrigin = "";
  naturalHeight = 0;
  naturalWidth = 0;
  onerror: (() => void) | null = null;
  onload: (() => void) | null = null;
  src = "";

  constructor() {
    ImageStub.instances.push(this);
  }

  finish(success = true) {
    this.complete = true;
    if (success) {
      this.naturalWidth = 1200;
      this.naturalHeight = 800;
      this.onload?.();
    } else {
      this.onerror?.();
    }
  }
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  ImageStub.instances = [];
});

it("loads the first rotation frame before the remaining frames", () => {
  vi.stubGlobal("Image", ImageStub);
  const frames = ["front.jpg", "side.jpg", "rear.jpg"] as const;
  const { result } = renderHook(() => useImageSequence(frames));

  expect(ImageStub.instances.map((image) => image.src)).toEqual(["front.jpg", "", ""]);
  act(() => ImageStub.instances[0]!.finish());
  expect(result.current.loadedCount).toBe(1);
  expect(result.current.isLoaded).toBe(false);
  expect(ImageStub.instances.map((image) => image.src)).toEqual([
    "front.jpg",
    "side.jpg",
    "rear.jpg"
  ]);

  act(() => ImageStub.instances[1]!.finish(false));
  act(() => ImageStub.instances[2]!.finish());
  expect(result.current.loadedCount).toBe(3);
  expect(result.current.isLoaded).toBe(true);
});
