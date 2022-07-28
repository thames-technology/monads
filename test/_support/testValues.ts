export const booleanValues: Array<boolean> = [
  ...new Set([true, false, Boolean(-1), Boolean(), Boolean(1)]),
];

export const numberValues: Array<number> = [
  ...new Set([37, 3.14, 0, Math.LN2, Infinity, NaN, Number(1)]),
];

export const bigintValues: Array<bigint> = [...new Set([BigInt(42)])];

export const symbolValues: Array<symbol> = [...new Set([Symbol('foo')])];

export const stringValues: Array<string> = [
  ...new Set(['', 'foobar', '42', typeof 1, String('abc')]),
];

export const functionValues: Array<Function> = [
  ...new Set([
    function noop(): undefined {
      return undefined;
    },
    () => {},
    Promise.resolve,
    class C {},
    Math.sin,
  ]),
];

export const undefinedValues: Array<undefined> = [
  ...new Set([undefined, [][1]]),
];

export const nullValues: Array<null> = [...new Set([null, [null][0]])];

export const objectValues: Array<object | null> = [
  ...new Set([
    { a: 1 },
    [1, 2, 4],
    null,
    new Date(),
    new Boolean(),
    new String(),
    new Number(),
  ]),
];

export class CustomException extends Error {
  constructor(message: string) {
    super(message);
  }
}
