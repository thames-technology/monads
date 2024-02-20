import test, { ExecutionContext } from 'ava';
import { Some } from '../../lib/option/option';

import {
  Err,
  isErr,
  isOk,
  Ok,
  ResultOf,
  Result,
  ResultType,
} from '../../lib/result/result';

import {
  bigintValues,
  booleanValues,
  functionValues,
  nullValues,
  numberValues,
  objectValues,
  stringValues,
  symbolValues,
  undefinedValues,
} from '../_support/testValues';

const testMatch = (r: Result<unknown, unknown>): string => {
  return r.match({
    ok: (_) => 'ok',
    err: (_) => 'err',
  });
};

test("ResultOf returns Ok variant for an operation that doesn't throw", (t) => {
  t.is(testMatch(ResultOf(() => 1)), 'ok');
});

test('ResultOf returns the Err variant for an operation that throws', (t) => {
  t.is(
    testMatch(
      ResultOf(() => {
        throw new Error('error');
      }),
    ),
    'err',
  );
});

const testOk = <T>(t: ExecutionContext, input: T, type: string) => {
  const ok = Ok(input);

  t.is(ok.type, ResultType.Ok);

  // Test isOk, isErr
  t.true(isOk(ok));
  t.false(isErr(ok));
  t.true(ok.isOk());
  t.false(ok.isErr());

  // Test ok
  if (typeof input === 'undefined') {
    t.true(ok.ok().isNone());
  } else {
    t.is(ok.ok().unwrap(), input);
  }

  // Test err
  t.true(ok.err().isNone());

  // Test unwrap, unwrapOr, unwrapOrElse, unwrapErr
  t.is(typeof ok.unwrap(), type);
  t.is(ok.unwrap(), input);
  t.is(ok.unwrapOr('foo' as any), input);
  t.is(
    ok.unwrapOrElse((_) => {
      t.fail('cannot be err');
      return 'foo' as any;
    }),
    input,
  );
  t.throws(() => ok.unwrapErr());

  // Test match
  t.is(testMatch(ok), 'ok');

  // Test map
  t.is(
    ok
      .map((s) => {
        t.is(s, input);
        return 'foo';
      })
      .unwrap(),
    'foo',
  );

  // Test mapErr
  t.is(
    ok
      .mapErr((_) => {
        t.fail('cannot be err');
        return 'foo';
      })
      .unwrap(),
    input,
  );

  // Test andThen
  t.is(
    ok
      .andThen((s) => {
        t.is(s, input);
        return Ok('foo');
      })
      .unwrap(),
    'foo',
  );
  t.is(
    ok
      .andThen((s) => {
        t.is(s, input);
        return Err('foo') as any;
      })
      .unwrapErr(),
    'foo',
  );

  // Test orElse
  t.is(
    ok
      .orElse((_) => {
        t.fail('cannot be err');
        return Some('foo') as any;
      })
      .unwrap(),
    input,
  );
};

const testErr = <E>(t: ExecutionContext, input: E, _type: string) => {
  const err = Err(input);

  t.is(err.type, ResultType.Err);

  // Test isOk, isErr
  t.false(err.isOk());
  t.true(err.isErr());
  t.false(isOk(err));
  t.true(isErr(err));

  // Test ok
  t.true(err.ok().isNone());

  // Test err
  if (typeof input === 'undefined') {
    t.true(err.err().isNone());
  } else {
    t.is(err.err().unwrap(), input);
  }

  // Test unwrap, unwrapOr, unwrapOrElse
  t.throws(() => err.unwrap());
  t.is(err.unwrapOr('foo'), 'foo');
  t.is(
    err.unwrapOrElse((e) => {
      t.is(e, input);
      return 'foo';
    }),
    'foo',
  );
  t.is(err.unwrapErr(), input);

  // Test match
  t.is(testMatch(err), 'err');

  // Test map
  t.true(
    err
      .map((_) => {
        t.fail('cannot be ok');
        return 'foo';
      })
      .isErr(),
  );

  // Test mapErr
  t.is(
    err
      .mapErr((e) => {
        t.is(e, input);
        return 'foo';
      })
      .unwrapErr(),
    'foo',
  );

  // Test andThen
  t.is(
    err
      .andThen((_) => {
        t.fail('cannot be ok');
        return Ok('foo');
      })
      .unwrapErr(),
    input,
  );

  // Test orElse
  t.is(
    err
      .orElse((e) => {
        t.is(e, input);
        return Ok('foo');
      })
      .unwrap(),
    'foo',
  );
  t.is(
    err
      .orElse((e) => {
        t.is(e, input);
        return Err('foo') as any;
      })
      .unwrapErr(),
    'foo' as any,
  );
};

booleanValues.forEach((value, index) => {
  test(
    `Ok works with boolean value ${value} ${index}`,
    testOk,
    value,
    'boolean',
  );
  test(
    `Err works with boolean value ${value} ${index}`,
    testErr,
    value,
    'boolean',
  );
});

numberValues.forEach((value, index) => {
  test(`Ok works with number value ${value} ${index}`, testOk, value, 'number');
  test(
    `Err works with number value ${value} ${index}`,
    testErr,
    value,
    'number',
  );
});

bigintValues.forEach((value, index) => {
  test(`Ok works with bigint value ${value} ${index}`, testOk, value, 'bigint');
  test(
    `Err works with bigint value ${value} ${index}`,
    testErr,
    value,
    'bigint',
  );
});

symbolValues.forEach((value, index) => {
  test(
    `Ok works with symbol value ${String(value)} ${index}`,
    testOk,
    value,
    'symbol',
  );
  test(
    `Err works with symbol value ${String(value)} ${index}`,
    testErr,
    value,
    'symbol',
  );
});

stringValues.forEach((value, index) => {
  test(`Ok works with string value ${value} ${index}`, testOk, value, 'string');
  test(
    `Err works with string value ${value} ${index}`,
    testErr,
    value,
    'string',
  );
});

functionValues.forEach((value, index) => {
  test(
    `Ok works with function value ${value} ${index}`,
    testOk,
    value,
    'function',
  );
  test(
    `Err works with function value ${value} ${index}`,
    testErr,
    value,
    'function',
  );
});

undefinedValues.forEach((value, index) => {
  test(
    `Ok works with undefined value ${value} ${index}`,
    testOk,
    value,
    'undefined',
  );
  test(
    `Err works with undefined value ${value} ${index}`,
    testErr,
    value,
    'undefined',
  );
});

nullValues.forEach((value, index) => {
  test(`Ok works with null value ${value} ${index}`, testOk, value, 'object');
  test(`Err works with null value ${value} ${index}`, testErr, value, 'object');
});

objectValues.forEach((value, index) => {
  test(`Ok works with object value ${value} ${index}`, testOk, value, 'object');
  test(
    `Err works with object value ${value} ${index}`,
    testErr,
    value,
    'object',
  );
});
