type ImageContentBounds = {
  canvas: HTMLCanvasElement;
  height: number;
  width: number;
  x: number;
  y: number;
};

const BOUNDS_CACHE = new WeakMap<HTMLImageElement, ImageContentBounds>();

export function getImageContentBounds(image: HTMLImageElement): ImageContentBounds {
  const cachedBounds = BOUNDS_CACHE.get(image);
  if (cachedBounds) {
    return cachedBounds;
  }

  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext("2d");
  if (!context) {
    return {
      canvas,
      height: image.naturalHeight,
      width: image.naturalWidth,
      x: 0,
      y: 0
    };
  }

  context.drawImage(image, 0, 0);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;
  let left = canvas.width;
  let right = 0;
  let top = canvas.height;
  let bottom = 0;

  for (let index = 0; index < pixels.length; index += 4) {
    const pixel = index / 4;
    const x = pixel % canvas.width;
    const y = Math.floor(pixel / canvas.width);
    const minimumChannel = Math.min(pixels[index]!, pixels[index + 1]!, pixels[index + 2]!);
    const backgroundOpacity = Math.max(0, Math.min(1, (248 - minimumChannel) / 20));
    pixels[index + 3] = Math.round(pixels[index + 3]! * backgroundOpacity);
    if (pixels[index + 3]! <= 24) {
      continue;
    }

    left = Math.min(left, x);
    right = Math.max(right, x);
    top = Math.min(top, y);
    bottom = Math.max(bottom, y);
  }

  context.putImageData(imageData, 0, 0);

  const bounds =
    right > left && bottom > top
      ? { canvas, height: bottom - top, width: right - left, x: left, y: top }
      : { canvas, height: image.naturalHeight, width: image.naturalWidth, x: 0, y: 0 };
  BOUNDS_CACHE.set(image, bounds);
  return bounds;
}
