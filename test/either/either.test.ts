import test, { ExecutionContext } from 'ava';

import {
  Right,
  isRight,
  isLeft,
  Left,
  Either,
  EitherType,
} from '../../lib/either/either';

import {
  bigintValues,
  booleanValues,
  functionValues,
  nullValues,
  numberValues,
  objectValues,
  stringValues,
  undefinedValues,
} from '../_support/testValues';

const getMessage = (e: Either<unknown, unknown>): string => {
  return e.match({
    left: (_) => `left`,
    right: (_) => `right`,
  });
};

const testLeft = <T>(t: ExecutionContext, input: T, type: string) => {
  const left = Left<T, unknown>(input);

  t.is(left.type, EitherType.Left);

  // Test right, isRight, left, isLeft
  t.true(isLeft(left));
  t.false(isRight(left));
  t.true(left.isLeft());
  t.false(left.isRight());
  type === 'undefined'
    ? t.true(left.left().isNone())
    : t.true(left.left().isSome());
  t.false(left.right().isSome());

  // Test unwrap, unwrapLeft, unwrapLeftOr, unwrapLeftOrElse, unwrapRight, unwrapRightOr, unwrapRightOrElse
  t.is(left.unwrap(), input);
  t.is(left.unwrapLeft(), input);
  t.is(left.unwrapLeftOr('foo' as any), input);
  t.is(
    left.unwrapLeftOrElse((_) => {
      t.fail('cannot be right');
      return input;
    }),
    input,
  );
  t.throws(() => left.unwrapRight());
  t.is(left.unwrapRightOr('foo'), 'foo');
  t.is(
    left.unwrapRightOrElse((l) => {
      t.is(l, input);
      return 'foo';
    }),
    'foo',
  );

  // Test map, mapLeft, and mapRight
  t.is(
    left
      .map((l) => {
        t.is(l, input);
        return 'foo';
      })
      .unwrap(),
    'foo',
  );
  t.is(
    left
      .mapLeft((l) => {
        t.is(l, input);
        return 'foo';
      })
      .unwrap(),
    'foo',
  );
  t.true(left.mapRight((_) => 'foo').isLeft());

  // Test leftAndThen, rightAndThen
  t.is(
    left
      .leftAndThen((l) => {
        t.is(l, input);
        return Right('foo');
      })
      .unwrapRight(),
    'foo',
  );
  t.is(
    left
      .rightAndThen((_) => {
        t.fail('cannot be right');
        return Left(input);
      })
      .isLeft(),
    true,
  );

  // Test match
  t.is(getMessage(left), 'left');
};

const testRight = <T>(t: ExecutionContext, input: T, type: string) => {
  const right = Right<unknown, T>(input);

  t.is(right.type, EitherType.Right);

  // Test right, isRight, left, isLeft
  t.false(isLeft(right));
  t.true(isRight(right));
  t.false(right.isLeft());
  t.true(right.isRight());
  t.false(right.left().isSome());
  type === 'undefined'
    ? t.true(right.right().isNone())
    : t.true(right.right().isSome());

  // Test unwrap, unwrapLeft, unwrapLeftOr, unwrapLeftOrElse, unwrapRight, unwrapRightOr, unwrapRightOrElse
  t.is(right.unwrap(), input);
  t.throws(() => right.unwrapLeft());
  t.is(right.unwrapLeftOr('foo'), 'foo');
  t.is(
    right.unwrapLeftOrElse((r) => {
      t.is(r, input);
      return 'foo';
    }),
    'foo',
  );
  t.is(right.unwrapRight(), input);
  t.is(right.unwrapRightOr('foo' as any), input);
  t.is(
    right.unwrapRightOrElse((_) => {
      t.fail('cannot be left');
      return input;
    }),
    input,
  );

  // Test map, mapLeft, and mapRight
  t.is(
    right
      .map((r) => {
        t.is(r, input);
        return 'foo';
      })
      .unwrapRight(),
    'foo',
  );
  t.true(right.mapLeft((_) => 'foo').isRight());
  t.is(
    right
      .mapRight((r) => {
        t.is(r, input);
        return 'foo';
      })
      .unwrapRight(),
    'foo',
  );

  // Test leftAndThen, rightAndThen
  t.is(
    right
      .leftAndThen((_) => {
        t.fail('cannot be left');
        return Left(input);
      })
      .isRight(),
    true,
  );
  t.is(
    right
      .rightAndThen((r) => {
        t.is(r, input);
        return Left('foo');
      })
      .unwrapLeft(),
    'foo',
  );

  // Test match
  t.is(getMessage(right), 'right');
};

booleanValues.forEach((value, index) => {
  test(
    `Left works with boolean value ${value} ${index}`,
    testLeft,
    value,
    'boolean',
  );
  test(
    `Right works with boolean value ${value} ${index}`,
    testRight,
    value,
    'boolean',
  );
});

numberValues.forEach((value, index) => {
  test(
    `Left works with number value ${value} ${index}`,
    testLeft,
    value,
    'number',
  );
  test(
    `Right works with number value ${value} ${index}`,
    testRight,
    value,
    'number',
  );
});

bigintValues.forEach((value, index) => {
  test(
    `Left works with bigint value ${value} ${index}`,
    testLeft,
    value,
    'bigint',
  );
  test(
    `Right works with bigint value ${value} ${index}`,
    testRight,
    value,
    'bigint',
  );
});

stringValues.forEach((value, index) => {
  test(
    `Left works with string value ${value} ${index}`,
    testLeft,
    value,
    'string',
  );
  test(
    `Right works with string value ${value} ${index}`,
    testRight,
    value,
    'string',
  );
});

functionValues.forEach((value, index) => {
  test(
    `Left works with function value ${value} ${index}`,
    testLeft,
    value,
    'function',
  );
  test(
    `Right works with function value ${value} ${index}`,
    testRight,
    value,
    'function',
  );
});

undefinedValues.forEach((value, index) => {
  test(
    `Left works with undefined value ${value} ${index}`,
    testLeft,
    value,
    'undefined',
  );
  test(
    `Right works with undefined value ${value} ${index}`,
    testRight,
    value,
    'undefined',
  );
});

nullValues.forEach((value, index) => {
  test(
    `Left works with null value ${value} ${index}`,
    testLeft,
    value,
    'object',
  );
  test(
    `Right works with null value ${value} ${index}`,
    testRight,
    value,
    'object',
  );
});

objectValues.forEach((value, index) => {
  test(
    `Left works with object value ${value} ${index}`,
    testLeft,
    value,
    'object',
  );
  test(
    `Right works with object value ${value} ${index}`,
    testRight,
    value,
    'object',
  );
});
