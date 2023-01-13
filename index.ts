export function mapn<T, R0>(arr: T[], fn: (el: T) => [R0]): [R0[]];
export function mapn<T, R0, R1>(arr: T[], fn: (el: T) => [R0, R1]): [R0[], R1[]];
export function mapn<T, R0, R1, R2>(arr: T[], fn: (el: T) => [R0, R1, R2]): [R0[], R1[], R2[]];
export function mapn<T, R0, R1, R2, R3>(arr: T[], fn: (el: T) => [R0, R1, R2, R3]): [R0[], R1[], R2[], R3[]];
export function mapn<T, R0, R1, R2, R3, R4>(
  arr: T[],
  fn: (el: T) => [R0, R1, R2, R3, R4]
): [R0[], R1[], R2[], R3[], R4[]];
export function mapn(arr: unknown[], fn: (el: unknown) => unknown[]) {
  const response: Record<number, unknown[]> = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  };

  for (const el of arr) {
    const fnResp = fn(el);
    fnResp.forEach((resp, i) => {
      response[i]!.push(resp);
    });
  }

  return Object.values(response);
}
