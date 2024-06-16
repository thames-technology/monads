import type { Equals, Expect } from '../test_util/test_util.js';
import { Err, isErr, isOk, Ok, Result, ResultType } from './result';

describe('Result', () => {
  describe('Ok', () => {
    const value = 'success';
    const okResult: Result<string, string> = Ok(value);

    test('type should return Ok', () => {
      expect(okResult.type).toBe(ResultType.Ok);
    });

    test('isOk should return true', () => {
      expect(okResult.isOk()).toBe(true);
    });

    test('isErr should return false', () => {
      expect(okResult.isErr()).toBe(false);
    });

    test('ok should return a Some with the value', () => {
      expect(okResult.ok().unwrap()).toBe(value);
    });

    test('err should return None', () => {
      expect(okResult.err().isNone()).toBe(true);
    });

    test('unwrap should return the value', () => {
      expect(okResult.unwrap()).toBe(value);
    });

    test('unwrapErr should throw', () => {
      expect(() => okResult.unwrapErr()).toThrow();
    });

    test('unwrapOr should return the value', () => {
      expect(okResult.unwrapOr('default')).toBe(value);
    });

    test('match should execute ok branch', () => {
      const result = okResult.match({
        ok: (val) => `Ok ${val}`,
        err: (val) => `Err ${val}`,
      });
      expect(result).toBe(`Ok ${value}`);
    });

    test('map should apply function and wrap result in Ok', () => {
      const mapped = okResult.map((val) => val.length);
      expect(mapped.unwrap()).toBe(value.length);
    });

    test('mapErr should not apply function and return Ok', () => {
      const mappedErr = okResult.mapErr((err) => `Error: ${err}`);
      expect(mappedErr.unwrap()).toBe(value);
    });

    test('andThen should apply function returning Result', () => {
      const andThenResult = okResult.andThen((val) => Ok(val.length));
      expect(andThenResult.unwrap()).toBe(value.length);
    });

    test('orElse should not apply function and return Ok', () => {
      const orElseResult = okResult.orElse((err) => Err(`Error: ${err}`));
      expect(orElseResult.unwrap()).toBe(value);
    });
  });

  describe('Err', () => {
    const error = 'error';
    const errResult: Result<string, string> = Err(error);

    test('type should return Err', () => {
      expect(errResult.type).toBe(ResultType.Err);
    });

    test('isOk should return false', () => {
      expect(errResult.isOk()).toBe(false);
    });

    test('isErr should return true', () => {
      expect(errResult.isErr()).toBe(true);
    });

    test('ok should return None', () => {
      expect(errResult.ok().isNone()).toBe(true);
    });

    test('err should return a Some with the error', () => {
      expect(errResult.err().unwrap()).toBe(error);
    });

    test('unwrap should throw', () => {
      expect(() => errResult.unwrap()).toThrow();
    });

    test('unwrapErr should return the error', () => {
      expect(errResult.unwrapErr()).toBe(error);
    });

    test('unwrapOr should return the default value', () => {
      expect(errResult.unwrapOr('default')).toBe('default');
    });

    test('match should execute err branch', () => {
      const result = errResult.match({
        ok: (val) => `Ok ${val}`,
        err: (val) => `Err ${val}`,
      });
      expect(result).toBe(`Err ${error}`);
    });

    test('map should not apply function and return Err', () => {
      const mapped = errResult.map((val) => val.length);
      expect(() => mapped.unwrap()).toThrow();
    });

    test('mapErr should apply function and wrap result in Err', () => {
      const mappedErr = errResult.mapErr((err) => `Error: ${err}`);
      expect(mappedErr.unwrapErr()).toBe(`Error: ${error}`);
    });

    test('andThen should not apply function and return Err', () => {
      const andThenResult = errResult.andThen((val) => Ok(val.length));
      expect(() => andThenResult.unwrap()).toThrow();
    });

    test('orElse should apply function returning Result', () => {
      const orElseResult = errResult.orElse((err) => Ok(`Recovered from ${err}`));
      expect(orElseResult.unwrap()).toBe(`Recovered from ${error}`);
    });
  });

  describe('isOk', () => {
    const ok = Ok('success');
    const err = Err('error');

    test('should return true for Ok', () => {
      expect(isOk(ok)).toBe(true);
    });

    test('should return false for Err', () => {
      expect(isOk(err)).toBe(false);
    });
  });

  describe('isErr', () => {
    const ok = Ok('success');
    const err = Err('error');

    test('should return false for Ok', () => {
      expect(isErr(ok)).toBe(false);
    });

    test('should return true for Err', () => {
      expect(isErr(err)).toBe(true);
    });
  });

  describe('typeguards', () => {
    const ok = Ok('success');
    const err = Err('error');

    test('isOk', () => {
      if (ok.isOk()) {
        type unwrapRes = Equals<'success', ReturnType<typeof ok.unwrap>>;
        type _unwrapRes = Expect<unwrapRes>;

        type unwrapErrRes = Equals<never, ReturnType<typeof ok.unwrapErr>>;
        type _unwrapErrRes = Expect<unwrapErrRes>;

        const mappedOk = ok.map((val) => val.length);
        type mappedUnwrapOkRes = Equals<number, ReturnType<typeof mappedOk.unwrap>>;
        type _mappedUnwrapOkRes = Expect<mappedUnwrapOkRes>;
      }
    });

    test('isErr', () => {
      if (err.isErr()) {
        type unwrapRes = Equals<'error', ReturnType<typeof err.unwrapErr>>;
        type _unwrapRes = Expect<unwrapRes>;

        type unwrapErrRes = Equals<never, ReturnType<typeof err.unwrap>>;
        type _unwrapErrRes = Expect<unwrapErrRes>;

        const mappedErr = err.mapErr((val) => val.length);
        type mappedUnwrapErrRes = Equals<number, ReturnType<typeof mappedErr.unwrapErr>>;
        type _mappedUnwrapErrRes = Expect<mappedUnwrapErrRes>;
      }
    });
  });
});
