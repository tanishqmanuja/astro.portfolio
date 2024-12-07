export function booleanCompare(a: boolean, b: boolean): number {
  return a === b ? 0 : a ? -1 : 1;
}
