export const SPECIFICATION_SCROLL_RANGE: [number, number] = [0.12, 0.88];

export function getActiveFeatureIndex(progress: number, count: number) {
  if (count <= 1) return 0;
  const [start, end] = SPECIFICATION_SCROLL_RANGE;
  return Math.min(
    count - 1,
    Math.max(0, Math.round(((progress - start) / (end - start)) * (count - 1)))
  );
}
