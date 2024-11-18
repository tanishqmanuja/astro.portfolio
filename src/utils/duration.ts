export const UNITS = {
  s: 1000,
  m: 60000,
  h: 3600000,
  d: 86400000,
  w: 604800000,
} as const;

export type Unit = keyof typeof UNITS;

export type DurationWithUnit = `${number}${Unit}`;
export type Duration = DurationWithUnit | number;

export class InvalidDurationError extends Error {}

/* @throws - InvalidDurationError */
export function normalize(duration: Duration): number {
  if (typeof duration === "number") {
    return duration;
  }

  const value = duration.slice(0, -1);
  const unit = duration.slice(-1);

  const multiplier = UNITS[unit as Unit];

  if (!multiplier) {
    throw new InvalidDurationError(`Invalid unit: ${unit}`);
  }

  return Number(value) * multiplier;
}
