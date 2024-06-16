import type { Equals, Expect } from '../test_util/test_util.js';
import { isNone, isSome, None, Option, OptionType, Some } from './option';

describe('Option', () => {
  describe('Some', () => {
    const value = 'test';
    const someOption: Option<string> = Some(value);

    test('type should return Some', () => {
      expect(someOption.type).toBe(OptionType.Some);
    });

    test('isSome should return true', () => {
      expect(someOption.isSome()).toBe(true);
    });

    test('isNone should return false', () => {
      expect(someOption.isNone()).toBe(false);
    });

    test('match should execute some branch', () => {
      const result = someOption.match({
        some: (val) => `Some ${val}`,
        none: 'None',
      });
      expect(result).toBe(`Some ${value}`);
    });

    test('map should apply function and wrap result in Some', () => {
      const mapped = someOption.map((val) => val.length);
      expect(mapped.unwrap()).toBe(value.length);
    });

    test('andThen should apply function returning Option', () => {
      const andThenResult = someOption.andThen((val) => Some(val.length));
      expect(andThenResult.unwrap()).toBe(value.length);
    });

    test('or should return original Some if not None', () => {
      const orResult = someOption.or(Some('other'));
      expect(orResult.unwrap()).toBe(value);
    });

    test('and should return passed Option if original is Some', () => {
      const andResult = someOption.and(Some('other'));
      expect(andResult.unwrap()).toBe('other');
    });

    test('unwrapOr should return value', () => {
      expect(someOption.unwrapOr('default')).toBe(value);
    });

    test('unwrap should return value', () => {
      expect(someOption.unwrap()).toBe(value);
    });
  });

  describe('None', () => {
    test('type should return None', () => {
      expect(None.type).toBe(OptionType.None);
    });

    test('isSome should return false', () => {
      expect(None.isSome()).toBe(false);
    });

    test('isNone should return true', () => {
      expect(None.isNone()).toBe(true);
    });

    test('match should execute none branch', () => {
      const result = None.match({
        some: (val) => `Some ${val}`,
        none: () => 'None',
      });
      expect(result).toBe('None');
    });

    test('map should not apply function and return None', () => {
      const mapped = None.map((val: string) => val.length);
      expect(mapped).toStrictEqual(None);
    });

    test('andThen should not apply function and return None', () => {
      const andThenResult = None.andThen((val: string) => Some(val.length));
      expect(andThenResult).toStrictEqual(None);
    });

    test('or should return passed Option if original is None', () => {
      const orResult = None.or(Some('other'));
      expect(orResult.unwrap()).toBe('other');
    });

    test('and should return None if original is None', () => {
      const andResult = None.and(Some('other'));
      expect(andResult).toStrictEqual(None);
    });

    test('unwrapOr should return default value', () => {
      expect(None.unwrapOr('default')).toBe('default');
    });

    test('unwrap should throw', () => {
      expect(() => None.unwrap()).toThrow();
    });
  });

  describe('isSome', () => {
    const some = Some('test');
    const none = None;

    test('should return true for Some', () => {
      expect(isSome(some)).toBe(true);
    });

    test('should return false for None', () => {
      expect(isSome(none)).toBe(false);
    });
  });

  describe('isNone', () => {
    const some = Some('test');
    const none = None;

    test('should return false for Some', () => {
      expect(isNone(some)).toBe(false);
    });

    test('should return true for None', () => {
      expect(isNone(none)).toBe(true);
    });
  });

  describe('typeguards', () => {
    const some = Some('foo');
    const none = None;

    test('isSome', () => {
      if (some.isSome()) {
        type unwrapRes = Equals<'foo', ReturnType<typeof some.unwrap>>;
        type _unwrapRes = Expect<unwrapRes>;

        const mappedSome = some.map((val) => val.length);
        type mappedUnwrapRes = Equals<number, ReturnType<typeof mappedSome.unwrap>>;
        type _mappedUnwrapRes = Expect<mappedUnwrapRes>;
      }
    });

    test('isNone', () => {
      if (none.isNone()) {
        type unwrapRes = Equals<never, ReturnType<typeof none.unwrap>>;
        type _unwrapRes = Expect<unwrapRes>;

        const mappedNone = none.map((val) => val.length);
        type mappedUnwrapRes = Equals<never, ReturnType<typeof mappedNone.unwrap>>;
        type _mappedUnwrapRes = Expect<mappedUnwrapRes>;
      }
    });
  });
});
