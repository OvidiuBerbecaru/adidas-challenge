import { stringCalculator, reduce } from '../index';

describe('string calculator', () => {
  it('calulates correctly', () => {
    expect(stringCalculator('1 + 1')).toBe(2);
    expect(stringCalculator('1 - 1')).toBe(0);
    expect(stringCalculator('2+ 2')).toBe(4);
    expect(stringCalculator('2+ 5-3')).toBe(4);
    expect(stringCalculator('2+ 5-3 -6')).toBe(-2);
    expect(stringCalculator('1')).toBe(1);
    expect(stringCalculator('+')).toBe(0);
    expect(stringCalculator('2 * 2')).toBe(4);
    expect(stringCalculator('2 * 2.4')).toBe(4.8);
    expect(stringCalculator('21 + 1')).toBe(22);
    expect(stringCalculator('0 - 1')).toBe(-1);
    expect(stringCalculator('0 - 1 - ')).toBe(-1);
    expect(stringCalculator('1 + 1 * 2')).toBe(3);
    expect(stringCalculator('1 + 1 / 2')).toBe(1.5);
    expect(stringCalculator('1 + + 1')).toBe(2);
    expect(stringCalculator('1 + * 1')).toBe(2);
    expect(stringCalculator('+ * 1 + 1 / 2')).toBe(1.5);
  });
});

describe('reducer', () => {
  it('calulates correctly', () => {
    expect(reduce(
      [[ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ]],
      (object, [ key, value ]) => ({ ...object, [key]: value }),
      {}))
      .toStrictEqual({ a: 1, b: 2, c: 3 })

      expect(reduce(
        [[ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ]],
        (object, [ key, value ]) => ({ ...object, [key]: value }),
        { 'd': 13 }))
        .toStrictEqual({ d: 13, a: 1, b: 2, c: 3 })
  });
});