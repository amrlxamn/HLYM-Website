export function clampScrollProgress(progress: number) {
  return Math.min(Math.max(progress, 0), 1);
}
