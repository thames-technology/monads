import { None, Option, Some } from '../option/option';

/**
 * Type representing any value except 'undefined'.
 * This is useful when working with strict null checks, ensuring that a value can be null but not undefined.
 */
type NonUndefined = {} | null; // eslint-disable-line @typescript-eslint/ban-types

/**
 * Enum-like object to represent the type of a Result (Ok or Err).
 */
export const ResultType = {
  Ok: Symbol(':ok'),
  Err: Symbol(':err'),
};

/**
 * Interface for handling match operations on a Result.
 * Allows executing different logic based on the Result being Ok or Err.
 */
interface Match<T, E, U> {
  ok: (val: T) => U;
  err: (val: E) => U;
}

/**
 * The Result interface representing a success or an error.
 * A Result is either Ok, holding a success value, or Err, holding an error value.
 */
export interface Result<T extends NonUndefined, E extends NonUndefined> {
  type: symbol;
  isOk(): boolean;
  isErr(): boolean;
  ok(): Option<T>;
  err(): Option<E>;
  unwrap(): T | never;
  unwrapErr(): E | never;
  unwrapOr(optb: T): T;
  match<U extends NonUndefined>(fn: Match<T, E, U>): U;
  map<U extends NonUndefined>(fn: (val: T) => U): Result<U, E>;
  mapErr<F extends NonUndefined>(fn: (err: E) => F): Result<T, F>;
  andThen<U extends NonUndefined>(fn: (val: T) => Result<U, E>): Result<U, E>;
  orElse<F extends NonUndefined>(fn: (err: E) => Result<T, F>): Result<T, F>;
}

/**
 * Implementation of Result representing a successful value (Ok).
 */
interface OkResult<T extends NonUndefined, E extends NonUndefined> extends Result<T, E> {
  unwrap: () => T;
  unwrapErr: () => never;
}

/**
 * Implementation of Result representing an error value (Err).
 */
interface ErrResult<T extends NonUndefined, E extends NonUndefined> extends Result<T, E> {
  unwrap: () => never;
  unwrapErr: () => E;
}

/**
 * Represents a Ok Result.
 */
class OkImpl<T extends NonUndefined, E extends NonUndefined> implements OkResult<T, E> {
  constructor(private readonly val: T) {}

  get type() {
    return ResultType.Ok;
  }

  isOk() {
    return true;
  }

  isErr() {
    return false;
  }

  ok(): Option<T> {
    return Some(this.val);
  }

  err(): Option<E> {
    return None;
  }

  match<U extends NonUndefined>(matchObject: Match<T, E, U>): U {
    return matchObject.ok(this.val);
  }

  map<U extends NonUndefined>(fn: (val: T) => U): Result<U, E> {
    return Ok(fn(this.val));
  }

  mapErr<U extends NonUndefined>(_fn: (err: E) => U): Result<T, U> {
    return Ok(this.val);
  }

  andThen<U extends NonUndefined>(fn: (val: T) => Result<U, E>): Result<U, E> {
    return fn(this.val);
  }

  orElse<F extends NonUndefined>(_fn: (err: E) => Result<T, F>): Result<T, F> {
    return Ok(this.val);
  }

  unwrap(): T {
    return this.val;
  }

  unwrapErr(): never {
    throw new ReferenceError('Cannot unwrap Err value of Result.Ok');
  }

  unwrapOr(_optb: T): T {
    return this.val;
  }
}

/**
 * Represents an Err Result.
 */
class ErrImpl<T extends NonUndefined, E extends NonUndefined> implements ErrResult<T, E> {
  constructor(private readonly val: E) {}

  get type() {
    return ResultType.Err;
  }

  isOk() {
    return false;
  }

  isErr() {
    return true;
  }

  ok(): Option<T> {
    return None;
  }

  err(): Option<E> {
    return Some(this.val);
  }

  match<U extends NonUndefined>(matchObject: Match<T, E, U>): U {
    return matchObject.err(this.val);
  }

  map<U extends NonUndefined>(_fn: (val: T) => U): Result<U, E> {
    return Err(this.val);
  }

  mapErr<U extends NonUndefined>(fn: (err: E) => U): Result<T, U> {
    return Err(fn(this.val));
  }

  andThen<U extends NonUndefined>(_fn: (val: T) => Result<U, E>): Result<U, E> {
    return Err(this.val);
  }

  orElse<F extends NonUndefined>(fn: (err: E) => Result<T, F>): Result<T, F> {
    return fn(this.val);
  }

  unwrap(): never {
    throw new ReferenceError('Cannot unwrap Ok value of Result.Err');
  }

  unwrapErr(): E {
    return this.val;
  }

  unwrapOr(optb: T): T {
    return optb;
  }
}

/**
 * Creates an Ok instance of Result containing the success value.
 */
export function Ok<T extends NonUndefined, E extends NonUndefined = never>(val: T): Result<T, E> {
  return new OkImpl(val);
}

/**
 * Creates an Err instance of Result containing the error value.
 */
export function Err<T extends NonUndefined, E extends NonUndefined>(val: E): Result<T, E> {
  return new ErrImpl(val);
}

/**
 * Type guard to check if a Result is an Ok value.
 */
export function isOk<T extends NonUndefined, E extends NonUndefined>(
  val: Result<T, E>,
): val is OkResult<T, E> {
  return val.isOk();
}

/**
 * Type guard to check if a Result is an Err value.
 */
export function isErr<T extends NonUndefined, E extends NonUndefined>(
  val: Result<T, E>,
): val is ErrResult<T, E> {
  return val.isErr();
}
