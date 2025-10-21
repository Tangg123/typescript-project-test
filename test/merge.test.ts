import { merge } from '../src/merge';

describe('merge function', () => {
  test('merges 3 arrays into ascending order', () => {
    expect(merge([1, 3, 5], [2, 4, 6], [9, 8, 7]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('works with empty arrays', () => {
    expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
    expect(merge([], [], [])).toEqual([]);
  });

  test('handles duplicates correctly', () => {
    expect(merge([1, 2], [2, 3], [5, 4]))
      .toEqual([1, 2, 2, 3, 4, 5]);
  });
});
