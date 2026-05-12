export function getProductOverviewRevealRange(index: number, count: number) {
  const safeCount = Math.max(count, 1);
  const step = 1 / safeCount;
  const start = Math.max(0, index * step - step * 0.08);
  const reveal = Math.min(1, start + step * 0.52);
  const end = Math.min(1, start + step * 0.92);

  return [start, reveal, end];
}
