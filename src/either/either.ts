import { None, Option, Some } from '../option/option';

/**
 * Type representing any value except 'undefined'.
 * This is useful for ensuring a value can be null but not undefined, especially with strict null checks.
 */
type NonUndefined = {} | null; // eslint-disable-line @typescript-eslint/ban-types

/**
 * Enum-like object for representing the state of an Either: Left or Right.
 */
export const EitherType = {
  Left: Symbol(':left'),
  Right: Symbol(':right'),
};

/**
 * Interface for handling match operations on an Either.
 * Enables executing different logic based on the Either being Left or Right.
 */
interface Match<L, R, U> {
  left: (val: L) => U;
  right: (val: R) => U;
}

/**
 * The Either interface, representing a value that is either Left (usually an error or alternate value)
 * or Right (typically a success value).
 */
export interface Either<L extends NonUndefined, R extends NonUndefined> {
  type: symbol;
  isLeft(): boolean;
  isRight(): boolean;
  left(): Option<L>;
  right(): Option<R>;
  unwrap(): L | R;
  unwrapLeft(): L | never;
  unwrapRight(): R | never;
  unwrapLeftOr(other: L): L;
  unwrapRightOr(other: R): R;
  match<U extends NonUndefined>(fn: Match<L, R, U>): U;
  mapLeft<U extends NonUndefined>(fn: (val: L) => U): Either<U, R>;
  mapRight<U extends NonUndefined>(fn: (val: R) => U): Either<L, U>;
  leftAndThen<U extends NonUndefined>(fn: (val: L) => Either<U, R>): Either<U, R>;
  rightAndThen<U extends NonUndefined>(fn: (val: R) => Either<L, U>): Either<L, U>;
}

/**
 * Implements the Either interface for a Left value.
 */
class LeftImpl<L extends NonUndefined, R extends NonUndefined> implements Either<L, R> {
  constructor(private readonly val: L) {}

  get type() {
    return EitherType.Left;
  }

  isLeft() {
    return true;
  }

  isRight() {
    return false;
  }

  left(): Option<L> {
    return Some(this.val);
  }

  right(): Option<R> {
    return None;
  }

  unwrap(): L {
    return this.val;
  }

  unwrapLeft(): L {
    return this.val;
  }

  unwrapRight(): never {
    throw new ReferenceError('Cannot unwrap Right value of Either.Left');
  }

  unwrapLeftOr(_other: L): L {
    return this.val;
  }

  unwrapRightOr(other: R): R {
    return other;
  }

  match<U extends NonUndefined>(matchObject: Match<L, R, U>): U {
    return matchObject.left(this.val);
  }

  mapLeft<U extends NonUndefined>(fn: (val: L) => U): Either<U, R> {
    return Left(fn(this.val));
  }

  mapRight<U extends NonUndefined>(_fn: (val: R) => U): Either<L, U> {
    return Left(this.val);
  }

  leftAndThen<U extends NonUndefined>(fn: (val: L) => Either<U, R>): Either<U, R> {
    return fn(this.val);
  }

  rightAndThen<U extends NonUndefined>(_fn: (val: R) => Either<L, U>): Either<L, U> {
    return Left(this.val);
  }
}

/**
 * Implements the Either interface for a Right value.
 */
class RightImpl<L extends NonUndefined, R extends NonUndefined> implements Either<L, R> {
  constructor(private readonly val: R) {}

  get type() {
    return EitherType.Right;
  }

  isLeft() {
    return false;
  }

  isRight() {
    return true;
  }

  left(): Option<L> {
    return None;
  }

  right(): Option<R> {
    return Some(this.val);
  }

  unwrap(): R {
    return this.val;
  }

  unwrapLeft(): never {
    throw new ReferenceError('Cannot unwrap Left value of Either.Right');
  }

  unwrapRight(): R {
    return this.val;
  }

  unwrapLeftOr(other: L): L {
    return other;
  }

  unwrapRightOr(_other: R): R {
    return this.val;
  }

  match<U extends NonUndefined>(matchObject: Match<L, R, U>): U {
    return matchObject.right(this.val);
  }

  mapLeft<U extends NonUndefined>(_fn: (val: L) => U): Either<U, R> {
    return Right(this.val);
  }

  mapRight<U extends NonUndefined>(fn: (val: R) => U): Either<L, U> {
    return Right(fn(this.val));
  }

  leftAndThen<U extends NonUndefined>(_fn: (val: L) => Either<U, R>): Either<U, R> {
    return Right(this.val);
  }

  rightAndThen<U extends NonUndefined>(fn: (val: R) => Either<L, U>): Either<L, U> {
    return fn(this.val);
  }
}

/**
 * Factory function for creating a Left instance of Either.
 */
export function Left<L extends NonUndefined, R extends NonUndefined = never>(val: L): Either<L, R> {
  return new LeftImpl(val);
}

/**
 * Factory function for creating a Right instance of Either.
 */
export function Right<R extends NonUndefined, L extends NonUndefined = never>(
  val: R,
): Either<L, R> {
  return new RightImpl(val);
}

/**
 * Type guard for checking if an Either is a Left.
 */
export function isLeft<L extends NonUndefined, R extends NonUndefined>(
  val: Either<L, R>,
): val is LeftImpl<L, R> {
  return val.isLeft();
}

/**
 * Type guard for checking if an Either is a Right.
 */
export function isRight<L extends NonUndefined, R extends NonUndefined>(
  val: Either<L, R>,
): val is RightImpl<L, R> {
  return val.isRight();
}
