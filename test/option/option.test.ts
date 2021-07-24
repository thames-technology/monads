import test, { ExecutionContext } from 'ava';

import {
  isNone,
  isSome,
  None,
  Option,
  OptionType,
  Some,
} from '../../lib/option/option';

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

const testMatch = (o: Option<unknown>): string => {
  return o.match({
    some: (_) => 'some',
    none: 'none',
  });
};

const testMatchNoneFunc = (o: Option<unknown>): string => {
  return o.match({
    some: (_) => 'some',
    none: () => 'none',
  });
};

const testSome = <T>(t: ExecutionContext, input: T, type: string) => {
  const some = Some(input);

  if (typeof input === 'undefined') {
    testNone(t, some);
    return;
  }

  t.is(some.type, OptionType.Some);

  // Test isSome, isNone
  t.true(isSome(some));
  t.false(isNone(some));
  t.true(some.isSome());
  t.false(some.isNone());

  // Test unwrap, unwrapOr
  t.is(typeof some.unwrap(), type);
  t.is(some.unwrap(), input);
  t.is(some.unwrapOr('foo' as any), input);

  // Test map, andThen
  t.is(
    some
      .map((s) => {
        t.is(s, input);
        return 'foo';
      })
      .unwrap(),
    'foo',
  );
  t.true(
    some
      .andThen((s) => {
        t.is(s, input);
        return None;
      })
      .isNone(),
  );

  // Test or, and
  t.is(some.or(Some('foo')).unwrap(), input);
  t.is(some.and(Some('foo')).unwrap(), 'foo');

  // Test match
  t.is(testMatch(some), 'some');
  t.is(testMatchNoneFunc(some), 'some');
};

const testNone = (t: ExecutionContext, someAsNone?: Option<unknown>) => {
  const none = someAsNone ? someAsNone : None;

  t.is(none.type, OptionType.None);

  // Test isSome, isNone
  t.false(isSome(none));
  t.true(isNone(none));
  t.false(none.isSome());
  t.true(none.isNone());

  // Test unwrap, unwrapOr
  t.throws(() => none.unwrap());
  t.is(none.unwrapOr('foo'), 'foo');
  t.throws(() => none.unwrapOr(null));

  // Test map, andThen
  t.true(
    none
      .map((_) => {
        t.fail('cannot be some');
        return 'foo';
      })
      .isNone(),
  );
  t.true(
    none
      .andThen((_) => {
        t.fail('cannot be some');
        return Some('foo');
      })
      .isNone(),
  );

  // Test or, and
  t.is(none.or(Some('foo')).unwrap(), 'foo');
  t.true(none.and(Some('foo')).isNone());

  // Test match
  t.is(testMatch(none), 'none');
  t.is(testMatchNoneFunc(none), 'none');
};

booleanValues.forEach((value, index) => {
  test(
    `Some works with boolean value ${value} ${index}`,
    testSome,
    value,
    'boolean',
  );
  test(`None works with boolean value ${value} ${index}`, testNone);
});

numberValues.forEach((value, index) => {
  test(
    `Some works with number value ${value} ${index}`,
    testSome,
    value,
    'number',
  );
  test(`None works with number value ${value} ${index}`, testNone);
});

bigintValues.forEach((value, index) => {
  test(
    `Some works with bigint value ${value} ${index}`,
    testSome,
    value,
    'bigint',
  );
  test(`None works with bigint value ${value} ${index}`, testNone);
});

symbolValues.forEach((value, index) => {
  test(
    `Some works with symbol value ${String(value)} ${index}`,
    testSome,
    value,
    'symbol',
  );
  test(`None works with symbol value ${String(value)} ${index}`, testNone);
});

stringValues.forEach((value, index) => {
  test(
    `Some works with string value ${value} ${index}`,
    testSome,
    value,
    'string',
  );
  test(`None works with string value ${value} ${index}`, testNone);
});

functionValues.forEach((value, index) => {
  test(
    `Some works with function value ${value} ${index}`,
    testSome,
    value,
    'function',
  );
  test(`None works with function value ${value} ${index}`, testNone);
});

undefinedValues.forEach((value, index) => {
  test(
    `Some works with undefined value ${value} ${index}`,
    testSome,
    value,
    'undefined',
  );
  test(`None works with undefined value ${value} ${index}`, testNone);
});

nullValues.forEach((value, index) => {
  test(
    `Some works with null value ${value} ${index}`,
    testSome,
    value,
    'object',
  );
  test(`None works with null value ${value} ${index}`, testNone);
});

objectValues.forEach((value, index) => {
  test(
    `Some works with object value ${value} ${index}`,
    testSome,
    value,
    'object',
  );
  test(`None works with object value ${value} ${index}`, testNone);
});
