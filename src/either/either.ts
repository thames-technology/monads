import { None, NoneOption, Option, Some, SomeOption } from '../option/option';

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
 * or Right (typically a success value). It is a powerful way to handle operations that can result in two
 * distinctly different types of outcomes.
 */
export interface Either<L extends NonUndefined, R extends NonUndefined> {
  /**
   * A symbol indicating whether the Either is Left or Right. Primarily for internal use.
   */
  type: symbol;

  /**
   * Checks if the Either is a Left value.
   *
   * @returns true if the Either is Left, otherwise false.
   *
   * #### Example
   *
   * ```ts
   * console.log(Left('error').isLeft()); // true
   * console.log(Right(42).isLeft()); // false
   * ```
   */
  isLeft(): this is LeftEither<L, R>;

  /**
   * Checks if the Either is a Right value.
   *
   * @returns true if the Either is Right, otherwise false.
   *
   * #### Example
   *
   * ```ts
   * console.log(Right(42).isRight()); // true
   * console.log(Left('error').isRight()); // false
   * ```
   */
  isRight(): this is RightEither<L, R>;

  /**
   * Converts the Either to an Option of its Left value.
   *
   * @returns An Option containing the Left value if present, otherwise None.
   *
   * #### Examples
   *
   * ```ts
   * const leftOption = Left('error').left(); // Some('error')
   * const rightOption = Right(42).left(); // None
   * ```
   */
  left(): Option<L>;

  /**
   * Converts the Either to an Option of its Right value.
   *
   * @returns An Option containing the Right value if present, otherwise None.
   *
   * #### Examples
   *
   * ```ts
   * const leftOption = Left('error').right(); // None
   * const rightOption = Right(42).right(); // Some(42)
   * ```
   */
  right(): Option<R>;

  /**
   * Unwraps the Either, yielding the contained value.
   *
   * Throws an error if the Either is not the expected type (Left or Right).
   *
   * @returns The contained value.
   * @throws Error if the operation is invalid.
   */
  unwrap(): L | R;

  /**
   * Unwraps the Either, yielding the Left value if present.
   *
   * Throws an error if the Either is a Right.
   *
   * @returns The Left value.
   * @throws Error if the Either is Right.
   *
   * #### Example
   *
   * ```ts
   * console.log(Left('error').unwrapLeft()); // 'error'
   * ```
   */
  unwrapLeft(): L | never;

  /**
   * Unwraps the Either, yielding the Right value if present.
   *
   * Throws an error if the Either is a Left.
   *
   * @returns The Right value.
   * @throws Error if the Either is Left.
   *
   * #### Example
   *
   * ```ts
   * console.log(Right(42).unwrapRight()); // 42
   * ```
   */
  unwrapRight(): R | never;

  /**
   * Returns the Left value if present, otherwise returns the provided default value.
   *
   * @param other The default value to return if the Either is Right.
   * @returns The Left value or the default.
   *
   * #### Example
   *
   * ```ts
   * console.log(Left('error').unwrapLeftOr('default')); // 'error'
   * console.log(Right(42).unwrapLeftOr('default')); // 'default'
   * ```
   */
  unwrapLeftOr(other: L): L;

  /**
   * Returns the Right value if present, otherwise returns the provided default value.
   *
   * @param other The default value to return if the Either is Left.
   * @returns The Right value or the default.
   *
   * #### Example
   *
   * ```ts
   * console.log(Right(42).unwrapRightOr(100)); // 42
   * console.log(Left('error').unwrapRightOr(100)); // 100
   * ```
   */
  unwrapRightOr(other: R): R;

  /**
   * Performs a match operation on the Either, allowing for branching logic based on its state.
   *
   * @param fn An object containing functions for each case: Left and Right.
   * @returns The result of applying the corresponding function based on the Either's state.
   *
   * #### Examples
   *
   * ```ts
   * const either = Left('error');
   * const result = either.match({
   *   left: (err) => `Error: ${err}`,
   *   right: (val) => `Success: ${val}`,
   * });
   * console.log(result); // "Error: error"
   * ```
   */
  match<U extends NonUndefined | void>(fn: Match<L, R, U>): U;

  /**
   * Maps an Either by applying a function to its Left value, leaving Right untouched.
   *
   * @param fn A function to apply to the Left value.
   * @returns A new Either with the Left value transformed if it was Left, otherwise the original Right.
   *
   * #### Examples
   *
   * ```ts
   * const either = Left('error');
   * const mapped = either.mapLeft((err) => `Error: ${err}`);
   * console.log(mapped.unwrapLeft()); // "Error: error"
   * ```
   */
  mapLeft<U extends NonUndefined>(fn: (val: L) => U): Either<U, R>;

  /**
   * Maps an Either by applying a function to its Right value, leaving Left untouched.
   *
   * @param fn A function to apply to the Right value.
   * @returns A new Either with the Right value transformed if it was Right, otherwise the original Left.
   *
   * #### Examples
   *
   * ```ts
   * const either = Right(42);
   * const mapped = either.mapRight((val) => val.toString());
   * console.log(mapped.unwrapRight()); // "42"
   * ```
   */
  mapRight<U extends NonUndefined>(fn: (val: R) => U): Either<L, U>;

  /**
   * Transforms the Either by applying a function to its Left value if present, chaining multiple operations.
   *
   * @param fn A function that takes the Left value and returns a new Either.
   * @returns The Either returned by the function if the original was Left, otherwise the original Right.
   *
   * #### Examples
   *
   * ```ts
   * const either = Left('initial error');
   * const chained = either.leftAndThen((err) => Left(`Processed ${err}`));
   * console.log(chained.unwrapLeft()); // "Processed initial error"
   * ```
   */
  leftAndThen<U extends NonUndefined>(fn: (val: L) => Either<U, R>): Either<U, R>;

  /**
   * Transforms the Either by applying a function to its Right value if present, chaining multiple operations.
   *
   * @param fn A function that takes the Right value and returns a new Either.
   * @returns The Either returned by the function if the original was Right, otherwise the original Left.
   *
   * #### Examples
   *
   * ```ts
   * const either = Right(42);
   * const chained = either.rightAndThen((val) => Right(val.toString()));
   * console.log(chained.unwrapRight()); // "42"
   * ```
   */
  rightAndThen<U extends NonUndefined>(fn: (val: R) => Either<L, U>): Either<L, U>;
}

/**
 * Implementation of the Either interface for a Left value.
 */
export interface LeftEither<L extends NonUndefined, R extends NonUndefined> extends Either<L, R> {
  unwrapLeft(): L;
  unwrapRight(): never;
  left(): SomeOption<L>;
  right(): NoneOption<R>;
  mapLeft<U extends NonUndefined>(fn: (val: L) => U): LeftEither<U, R>;
  mapRight<U extends NonUndefined>(_fn: (val: R) => U): LeftEither<L, U>;
}

/**
 * Implementation of the Either interface for a Right value.
 */
export interface RightEither<L extends NonUndefined, R extends NonUndefined> extends Either<L, R> {
  unwrapLeft(): never;
  unwrapRight(): R;
  left(): NoneOption<L>;
  right(): SomeOption<R>;
  mapLeft<U extends NonUndefined>(_fn: (val: L) => U): RightEither<U, R>;
  mapRight<U extends NonUndefined>(fn: (val: R) => U): RightEither<L, U>;
}

/**
 * Implements the Either interface for a Left value.
 */
class LeftImpl<L extends NonUndefined, R extends NonUndefined> implements Either<L, R> {
  constructor(private readonly val: L) {}

  get type() {
    return EitherType.Left;
  }

  isLeft(): this is LeftEither<L, R> {
    return true;
  }

  isRight(): this is RightEither<L, R> {
    return false;
  }

  left(): SomeOption<L> {
    return Some(this.val);
  }

  right(): NoneOption<R> {
    return None as NoneOption<R>;
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

  match<U extends NonUndefined | void>(matchObject: Match<L, R, U>): U {
    return matchObject.left(this.val);
  }

  mapLeft<U extends NonUndefined>(fn: (val: L) => U): LeftEither<U, R> {
    return Left(fn(this.val));
  }

  mapRight<U extends NonUndefined>(_fn: (val: R) => U): LeftEither<L, U> {
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

  isLeft(): this is LeftEither<L, R> {
    return false;
  }

  isRight(): this is RightEither<L, R> {
    return true;
  }

  left(): NoneOption<L> {
    return None as NoneOption<L>;
  }

  right(): SomeOption<R> {
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

  match<U extends NonUndefined | void>(matchObject: Match<L, R, U>): U {
    return matchObject.right(this.val);
  }

  mapLeft<U extends NonUndefined>(_fn: (val: L) => U): RightEither<U, R> {
    return Right(this.val);
  }

  mapRight<U extends NonUndefined>(fn: (val: R) => U): RightEither<L, U> {
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
export function Left<L extends NonUndefined, R extends NonUndefined = never>(
  val: L,
): LeftEither<L, R> {
  return new LeftImpl(val);
}

/**
 * Factory function for creating a Right instance of Either.
 */
export function Right<R extends NonUndefined, L extends NonUndefined = never>(
  val: R,
): RightEither<L, R> {
  return new RightImpl(val);
}

/**
 * Type guard for checking if an Either is a Left.
 *
 * @deprecated Use `Either.isLeft` instead.
 */
export function isLeft<L extends NonUndefined, R extends NonUndefined>(
  val: Either<L, R>,
): val is LeftEither<L, R> {
  return val.isLeft();
}

/**
 * Type guard for checking if an Either is a Right.
 *
 * @deprecated Use `Either.isRight` instead.
 */
export function isRight<L extends NonUndefined, R extends NonUndefined>(
  val: Either<L, R>,
): val is RightEither<L, R> {
  return val.isRight();
}
