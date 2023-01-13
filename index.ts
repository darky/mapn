type Skip = symbol & { __brand: 'mapnSkip' };
export const mapnSkip = Symbol('mapnSkip') as Skip;

export function mapn<T, R0>(arr: T[], fn: (el: T) => [R0]): [Exclude<R0, Skip>[]];

export function mapn<T, R0, R1>(arr: T[], fn: (el: T) => [R0, R1]): [Exclude<R0, Skip>[], Exclude<R1, Skip>[]];

export function mapn<T, R0, R1, R2>(
  arr: T[],
  fn: (el: T) => [R0, R1, R2]
): [Exclude<R0, Skip>[], Exclude<R1, Skip>[], Exclude<R2, Skip>[]];

export function mapn<T, R0, R1, R2, R3>(
  arr: T[],
  fn: (el: T) => [R0, R1, R2, R3]
): [Exclude<R0, Skip>[], Exclude<R1, Skip>[], Exclude<R2, Skip>[], Exclude<R3, Skip>[]];

export function mapn<T, R0, R1, R2, R3, R4>(
  arr: T[],
  fn: (el: T) => [R0, R1, R2, R3, R4]
): [Exclude<R0, Skip>[], Exclude<R1, Skip>[], Exclude<R2, Skip>[], Exclude<R3, Skip>[], Exclude<R4, Skip>[]];

export function mapn(arr: unknown[], fn: (el: unknown) => unknown[]) {
  const response: Record<number, unknown[]> = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  };

  for (const el of arr) {
    fn(el).forEach((resp, i) => resp === mapnSkip || response[i]!.push(resp));
  }

  return Object.values(response);
}
