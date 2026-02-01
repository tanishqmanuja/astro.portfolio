/* Helper Types */
type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (
  x: infer I,
) => void
  ? I
  : never;

/* Comparator */
export type Comparator<T> = (a: T, b: T) => number;
export type CombinedComparator<T extends Comparator<unknown>[]> = Comparator<
  UnionToIntersection<Parameters<T[number]>[0]>
>;

export const Comparator = {
  combine<CInputs extends Comparator<any>[]>(
    ...comparators: CInputs
  ): CombinedComparator<CInputs> {
    return (a, b) =>
      comparators.reduce((result, comparator) => {
        return result !== 0
          ? result
          : (comparator as CombinedComparator<CInputs>)(a, b);
      }, 0);
  },
  from<T, K extends string | number | boolean>(
    selector: (x: T) => K,
    order: "asc" | "desc" | "reverse" = "asc",
  ): Comparator<T> {
    return (a, b) => {
      const aKey = selector(a);
      const bKey = selector(b);

      let result: number;
      if (typeof aKey === "string" && typeof bKey === "string") {
        result = aKey.localeCompare(bKey);
      } else {
        result = aKey < bKey ? -1 : aKey > bKey ? 1 : 0;
      }

      return order === "asc" ? result : -result;
    };
  },
};
