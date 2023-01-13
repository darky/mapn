export const mapn = <T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  arr: T[],
  fn: (el: T) => [R0, R1, R2, R3, R4, R5, R6, R7, R8, R9]
) => {
  const response: Record<number, (R0 | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9)[]> = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };

  for (const el of arr) {
    const fnResp = fn(el);
    fnResp.forEach((resp, i) => {
      response[i]!.push(resp);
    });
  }

  return Object.values(response) as [R0[], R1[], R2[], R3[], R4[], R5[], R6[], R7[], R8[], R9[]];
};
