import { posix, relative, sep } from "node:path";

export function toStoragePath(root, filePath) {
  return relative(root, filePath).split(sep).join(posix.sep);
}
