import assert from 'node:assert';
import { test } from 'node:test';
import { mapn, mapnSkip } from '.';

test('simple', () => {
  const [numbers, strings] = mapn([1, 2, 3], n => [n * 2, `${n}`]);
  assert.deepStrictEqual(numbers, [2, 4, 6]);
  assert.deepStrictEqual(strings, ['1', '2', '3']);
});

test('skip', () => {
  const [numbers, strings] = mapn([1, 2, 3], n => [n === 2 ? mapnSkip : n * 2, `${n}`]);
  assert.deepStrictEqual(numbers, [2, 6]);
  assert.deepStrictEqual(strings, ['1', '2', '3']);
});

test('null ok', () => {
  const [numbers, strings] = mapn([1, 2, 3], n => [n === 2 ? null : n * 2, `${n}`]);
  assert.deepStrictEqual(numbers, [2, null, 6]);
  assert.deepStrictEqual(strings, ['1', '2', '3']);
});
