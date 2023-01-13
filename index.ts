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
  const resp0: unknown[] = [];
  const resp1: unknown[] = [];
  const resp2: unknown[] = [];
  const resp3: unknown[] = [];
  const resp4: unknown[] = [];

  for (const el of arr) {
    const fnResp = fn(el);
    const fnResp0 = fnResp[0];
    fnResp0 === mapnSkip || resp0.push(fnResp0);
    const fnResp1 = fnResp[1];
    fnResp1 === mapnSkip || resp1.push(fnResp1);

    const fnResp2 = fnResp[2];
    if (fnResp2 === void 0) {
      continue;
    }
    fnResp2 === mapnSkip || resp2.push(fnResp2);

    const fnResp3 = fnResp[3];
    if (fnResp3 === void 0) {
      continue;
    }
    fnResp3 === mapnSkip || resp3.push(fnResp3);

    const fnResp4 = fnResp[4];
    if (fnResp4 === void 0) {
      continue;
    }
    fnResp4 === mapnSkip || resp4.push(fnResp4);
  }

  return [resp0, resp1, resp2, resp3, resp4];
}
