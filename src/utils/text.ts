export function titlecase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function pluralise(word: string, count: number): string {
  return count === 1 ? word : `${word}s`;
}
