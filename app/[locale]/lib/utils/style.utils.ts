import { HEXColor, RGBColor } from '@/shared/types';

export function createRelativeColor(
  baseColor: string,
  saturationDelta: number,
  lightnessDelta: number,
): string {
  return `hsl(from ${baseColor} h calc(s + ${saturationDelta}) calc(l + ${lightnessDelta}))`;
}

// TODO: for keys like "primary-300"
// export function createRelativeColor(
//   baseColor: string,
//   saturationDelta: number,
//   lightnessDelta: number,
// ): string {
//   return `hsl(from var(--color-${baseColor}) h calc(s + ${saturationDelta}) calc(l + ${lightnessDelta}))`;
// }

/**
 * Converts a HEX color string to an 8-bit RGB tuple.
 * Accepts formats `#rrggbb` and `rrggbb` (case-insensitive).
 * @param hex - HEX color string
 * @returns RGB tuple with channels in range [0, 255]
 * @throws if `hex` is not a valid 6-digit HEX color
 */
export function convertHEXToRGB(hex: HEXColor): RGBColor {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) {
    throw new Error(`Argument ${hex} is not a valid HEX color`);
  }

  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

/**
 * Step 1 — Normalize sRGB values.
 * Converts 8-bit RGB channels (0–255) to a 0–1 scale: `Value / 255`.
 * @param rgb - 8-bit RGB tuple
 * @returns normalized RGB tuple in range [0, 1]
 */
function normalizeSRGBValues([r, g, b]: RGBColor): RGBColor {
  return [r / 255, g / 255, b / 255];
}

/**
 * Step 2 — Linearize sRGB values (gamma correction).
 * Removes gamma encoding per channel:
 * - `value ≤ 0.03928` → `value / 12.92`
 * - `value > 0.03928` → `((value + 0.055) / 1.055) ^ 2.4`
 * @param rgb - normalized RGB tuple in range [0, 1]
 * @returns linearized RGB tuple
 */
function linearizeSRGBValues([r, g, b]: RGBColor): RGBColor {
  return [r, g, b].map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)) as [
    number,
    number,
    number,
  ];
}

/**
 * Step 3 — Calculate relative luminance.
 * Combines linearized channels using WCAG luminance weights:
 * `L = 0.2126·R + 0.7152·G + 0.0722·B`
 * @param rgb - linearized RGB tuple
 * @returns relative luminance in range [0, 1]
 */
function calcRelativeLuminance([r, g, b]: RGBColor): number {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Takes 2 RGBs colors for which
 * it calculates WCAG contrast ratio: `(L1 + 0.05) / (L2 + 0.05)`.
 * Result ranges from `1:1` (no contrast) to `21:1` (maximum contrast).
 * - Normal text AA: ≥ 4.5:1 — AAA: ≥ 7:1
 * - Large/bold text AA: ≥ 3:1 — AAA: ≥ 4.5:1
 * - UI components & icons: ≥ 3:1
 * @param color1 - RGB color
 * @param color2 - RGB color
 * @returns contrast ratio
 */
export function calculateColorContrastRatio(color1: RGBColor, color2: RGBColor): number {
  const [lighter, darker] = [color1, color2]
    .map(normalizeSRGBValues)
    .map(linearizeSRGBValues)
    .map(calcRelativeLuminance)
    .sort((a, b) => b - a);

  return (lighter + 0.05) / (darker + 0.05);
}

export enum WCAGConformanceLevel {
  A_ESSENTIAL = 'A',
  AA_RECOMMENDED = 'AA',
  AAA_MAXIMUM = 'AAA',
  FAIL = 'FAIL',
}

export function calcWCAGScore(ratio: number, fontSize: number): WCAGConformanceLevel {
  const isLargeText = fontSize >= 18 || fontSize >= 14;

  if (isLargeText) {
    if (ratio >= 4.5) return WCAGConformanceLevel.AAA_MAXIMUM;
    if (ratio >= 3) return WCAGConformanceLevel.AA_RECOMMENDED;
    return WCAGConformanceLevel.FAIL;
  }

  if (ratio >= 7) return WCAGConformanceLevel.AAA_MAXIMUM;
  if (ratio >= 4.5) return WCAGConformanceLevel.AA_RECOMMENDED;
  return WCAGConformanceLevel.FAIL;
}
