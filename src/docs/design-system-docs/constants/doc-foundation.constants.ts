import { BREAKPOINTS, CONTAINERS, Z_INDEX } from "@/theme/tokens/layout-tokens.constants";
import { RADII, SHADOWS, SPACING } from "@/theme/tokens/spacing-tokens.constants";

export const DOC_SPACING_SCALE = Object.entries(SPACING).map(([name, value]) => ({
  name,
  token: `--space-${name}`,
  value
}));

export const DOC_RADIUS_SCALE = [
  { name: "none", token: "--radius-none", value: RADII.none }
] as const;

export const DOC_SHADOW_SCALE = Object.entries(SHADOWS).map(([name, value]) => ({
  name,
  token: `--shadow-${name}`,
  value
}));

export const DOC_BREAKPOINTS = Object.entries(BREAKPOINTS).map(([name, value]) => ({
  name,
  usage: `media.${name}`,
  value
}));

export const DOC_CONTAINERS = Object.entries(CONTAINERS).map(([name, value]) => ({
  name,
  token: `--container-${name}`,
  value
}));

export const DOC_Z_INDEX = Object.entries(Z_INDEX).map(([name, value]) => ({
  name,
  token: `--z-${name}`,
  value: String(value)
}));
