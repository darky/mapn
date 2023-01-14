# mapn

Like JavaScript Array.map, but with multiple returns. Or n-dimension Array.map version. TypeScript supports too.

## Examples

#### Basic

```ts
import assert from 'node:assert';
import { mapn } from 'mapn';

const [numbers, strings] = mapn([1, 2, 3], n => [n * 2, `${n}`]);
assert.deepStrictEqual(numbers, [2, 4, 6]);
assert.deepStrictEqual(strings, ['1', '2', '3']);
```

#### Skip

```ts
import assert from 'node:assert';
import { mapn, mapnSkip } from 'mapn';

const [numbers, strings] = mapn([1, 2, 3], n => [n === 2 ? mapnSkip : n * 2, `${n}`]);
assert.deepStrictEqual(numbers, [2, 6]);
assert.deepStrictEqual(strings, ['1', '2', '3']);
```

## Caveat

Please avoid return `undefined` in result array. If you need return "empty" value, need return `null` instead. Or better use `mapnSkip`

#### ❌

```ts
import { mapn } from 'mapn';

mapn([1, 2, 3], n => [n, n === 2 ? undefined : n * 2]);
```

#### ✅

```ts
import { mapn } from 'mapn';

mapn([1, 2, 3], n => [n, n === 2 ? null : n * 2]);
```

#### ✅✅

```ts
import { mapn, mapnSkip } from 'mapn';

mapn([1, 2, 3], n => [n, n === 2 ? mapnSkip : n * 2]);
```
