import { None, NoneOption, Option, Some, SomeOption } from '../option/option';

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
  /**
   * Represents the type of the Result: either Ok or Err. Useful for debugging and runtime checks.
   */
  type: symbol;

  /**
   * Checks if the Result is an Ok.
   *
   * @returns true if the Result is Ok, otherwise false.
   *
   * #### Example
   *
   * ```ts
   * console.log(Ok(5).isOk()); // true
   * console.log(Err("error").isOk()); // false
   * ```
   */
  isOk(): this is OkResult<T, E>;

  /**
   * Checks if the Result is an Err.
   *
   * @returns true if the Result is Err, otherwise false.
   *
   * #### Example
   *
   * ```ts
   * console.log(Ok(5).isErr()); // false
   * console.log(Err("error").isErr()); // true
   * ```
   */
  isErr(): this is ErrResult<T, E>;

  /**
   * Converts the Result to an Option containing the success value, or None if Err.
   *
   * @returns An Option of the success value if Ok, otherwise None.
   *
   * #### Examples
   *
   * ```ts
   * const result = Ok(5).ok(); // Some(5)
   * const error = Err("error").ok(); // None
   * ```
   */
  ok(): Option<T>;

  /**
   * Converts the Result to an Option containing the error value, or None if Ok.
   *
   * @returns An Option of the error value if Err, otherwise None.
   *
   * #### Examples
   *
   * ```ts
   * const result = Ok(5).err(); // None
   * const error = Err("error").err(); // Some("error")
   * ```
   */
  err(): Option<E>;

  /**
   * Unwraps a Result, yielding the contained success value if Ok, otherwise throws an error.
   *
   * @returns The contained success value.
   * @throws Error if the Result is Err.
   *
   * #### Examples
   *
   * ```ts
   * console.log(Ok("value").unwrap()); // "value"
   * console.log(Err("error").unwrap()); // throws Error
   * ```
   */
  unwrap(): T | never;

  /**
   * Unwraps a Result, yielding the contained error value if Err, otherwise throws an error.
   *
   * @returns The contained error value.
   * @throws Error if the Result is Ok.
   *
   * #### Examples
   *
   * ```ts
   * console.log(Err("error").unwrapErr()); // "error"
   * console.log(Ok("value").unwrapErr()); // throws Error
   * ```
   */
  unwrapErr(): E | never;

  /**
   * Returns the contained success value if Ok, otherwise returns the provided default value.
   *
   * @param def The default value to return if the Result is Err.
   * @returns The contained success value if Ok, otherwise `def`.
   *
   * #### Examples
   *
   * ```ts
   * const result = Ok("value").unwrapOr("default"); // "value"
   * const error = Err("error").unwrapOr("default"); // "default"
   * ```
   */
  unwrapOr(def: T): T;

  /**
   * Performs a match operation on the Result, allowing for branching logic based on its state.
   *
   * @param fn An object with functions to handle each case: Ok or Err.
   * @returns The result of applying the appropriate function based on the Result's state.
   *
   * #### Examples
   *
   * ```ts
   * const result = Ok(5).match({
   *   ok: (val) => `Success: ${val}`,
   *   err: (val) => `Error: ${val}`,
   * });
   * // result === "Success: 5"
   *
   * const error = Err("failure").match({
   *   ok: (val) => `Success: ${val}`,
   *   err: (val) => `Error: ${val}`,
   * });
   * // error === "Error: failure"
   * ```
   */
  match<U extends NonUndefined | void>(fn: Match<T, E, U>): U;

  /**
   * Maps a Result<Ok, Err> to Result<U, Err> by applying a function to a contained Ok value,
   * leaving an Err value untouched.
   *
   * @param fn A function to apply to the contained Ok value.
   * @returns A Result containing the transformed value if Ok, or the original Err.
   *
   * #### Examples
   *
   * ```ts
   * const length = Ok("hello").map(s => s.length); // Ok(5)
   * const error = Err("error").map(s => s.length); // Err("error")
   * ```
   */
  map<U extends NonUndefined>(fn: (val: T) => U): Result<U, E>;

  /**
   * Maps a Result<Ok, Err> to Result<Ok, F> by applying a function to a contained Err value,
   * leaving an Ok value untouched.
   *
   * @param fn A function to apply to the contained Err value.
   * @returns A Result containing the original Ok, or the transformed Err.
   *
   * #### Examples
   *
   * ```ts
   * const ok = Ok("hello").mapErr(err => `Error: ${err}`); // Ok("hello")
   * const error = Err("error").mapErr(err => `Error: ${err}`); // Err("Error: error")
   * ```
   */
  mapErr<F extends NonUndefined>(fn: (err: E) => F): Result<T, F>;

  /**
   * Transforms the Result by applying a function that returns a Result to the contained Ok value,
   * chaining multiple potentially failing operations.
   *
   * @param fn A function that takes the current Result's Ok value and returns a new Result.
   * @returns The Result returned by the function if the original Result is Ok, otherwise the original Err.
   *
   * #### Examples
   *
   * ```ts
   * const parse = (s: string) => {
   *   const parsed = parseInt(s);
   *   return isNaN(parsed) ? Err("NaN") : Ok(parsed);
   * };
   * const result = Ok("123").andThen(parse); // Ok(123)
   * const noResult = Err("NaN").andThen(parse); // Err("NaN")
   * ```
   */
  andThen<U extends NonUndefined>(fn: (val: T) => Result<U, E>): Result<U, E>;

  /**
   * Applies a function to the contained Err value if present, or returns the Ok value if present.
   *
   * @param fn A function that takes the current Result's Err value and returns a new Result.
   * @returns The original Ok if present, or the Result of the function applied to the Err value.
   *
   * #### Examples
   *
   * ```ts
   * const ok = Ok("hello").orElse(err => Err(`Error: ${err}`)); // Ok("hello")
   * const error = Err("error").orElse(err => Ok(`Recovered from ${err}`)); // Ok("Recovered from error")
   * ```
   */
  orElse<F extends NonUndefined>(fn: (err: E) => Result<T, F>): Result<T, F>;
}

/**
 * Implementation of Result representing a successful value (Ok).
 */
interface OkResult<T extends NonUndefined, E extends NonUndefined> extends Result<T, E> {
  ok(): SomeOption<T>;
  err(): NoneOption<E>;
  unwrap: () => T;
  unwrapErr: () => never;
  map<U extends NonUndefined>(fn: (val: T) => U): OkResult<U, E>;
  mapErr<U extends NonUndefined>(fn: (err: E) => U): OkResult<T, U>;
}

/**
 * Implementation of Result representing an error value (Err).
 */
interface ErrResult<T extends NonUndefined, E extends NonUndefined> extends Result<T, E> {
  ok(): NoneOption<T>;
  err(): SomeOption<E>;
  unwrap: () => never;
  unwrapErr: () => E;
  map<U extends NonUndefined>(fn: (val: T) => U): ErrResult<U, E>;
  mapErr<U extends NonUndefined>(fn: (err: E) => U): ErrResult<T, U>;
}

/**
 * Represents a Ok Result.
 */
class OkImpl<T extends NonUndefined, E extends NonUndefined> implements OkResult<T, E> {
  constructor(private readonly val: T) {}

  get type() {
    return ResultType.Ok;
  }

  isOk(): this is OkResult<T, E> {
    return true;
  }

  isErr(): this is ErrResult<T, E> {
    return false;
  }

  ok(): SomeOption<T> {
    return Some(this.val);
  }

  err(): NoneOption<E> {
    return None as NoneOption<E>;
  }

  match<U extends NonUndefined | void>(matchObject: Match<T, E, U>): U {
    return matchObject.ok(this.val);
  }

  map<U extends NonUndefined>(fn: (val: T) => U): OkResult<U, E> {
    return Ok<U, E>(fn(this.val));
  }

  mapErr<U extends NonUndefined>(_fn: (err: E) => U): OkResult<T, U> {
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

  isOk(): this is OkResult<T, E> {
    return false;
  }

  isErr(): this is ErrResult<T, E> {
    return true;
  }

  ok(): NoneOption<T> {
    return None as NoneOption<T>;
  }

  err(): SomeOption<E> {
    return Some(this.val);
  }

  match<U extends NonUndefined | void>(matchObject: Match<T, E, U>): U {
    return matchObject.err(this.val);
  }

  map<U extends NonUndefined>(_fn: (val: T) => U): ErrResult<U, E> {
    return Err(this.val);
  }

  mapErr<U extends NonUndefined>(fn: (err: E) => U): ErrResult<T, U> {
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
 * This function is used to represent a successful result in operations that could potentially fail.
 *
 * @param val The value to be contained within the Ok Result.
 * @returns A Result instance representing success and containing the provided value.
 *
 * #### Example
 *
 * ```ts
 * const successResult = Ok(42);
 * console.log(successResult.unwrap()); // Outputs: 42
 * ```
 */
export function Ok<T extends NonUndefined, E extends NonUndefined = never>(val: T): OkResult<T, E> {
  return new OkImpl(val);
}

/**
 * Creates an Err instance of Result containing the error value.
 * This function is used to represent a failure in operations that could potentially fail.
 *
 * @param val The error value to be contained within the Err Result.
 * @returns A Result instance representing an error and containing the provided error value.
 *
 * #### Example
 *
 * ```ts
 * const errorResult = Err('Something went wrong');
 * console.log(errorResult.unwrapErr()); // Outputs: Something went wrong
 * ```
 */
export function Err<T extends NonUndefined, E extends NonUndefined>(val: E): ErrResult<T, E> {
  return new ErrImpl(val);
}

/**
 * Type guard to check if a Result is an Ok value.
 * This function is used to narrow down the type of a Result to OkResult in TypeScript type system.
 *
 * @deprecated Use `Result.isOk` instead.
 * @param val The Result to be checked.
 * @returns true if the provided Result is an OkResult, false otherwise.
 *
 * #### Example
 *
 * ```ts
 * const result = Ok('Success');
 * if (isOk(result)) {
 *   console.log('Operation was successful:', result.unwrap());
 * }
 * ```
 */
export function isOk<T extends NonUndefined, E extends NonUndefined>(
  val: Result<T, E>,
): val is OkResult<T, never> {
  return val.isOk();
}

/**
 * Type guard to check if a Result is an Err value.
 * This function is used to narrow down the type of a Result to ErrResult in TypeScript type system.
 *
 * @deprecated Use `Result.isErr` instead.
 * @param val The Result to be checked.
 * @returns true if the provided Result is an ErrResult, false otherwise.
 *
 * #### Example
 *
 * ```ts
 * const result = Err('Failure');
 * if (isErr(result)) {
 *   console.log('Operation failed with error:', result.unwrapErr());
 * }
 * ```
 */
export function isErr<T extends NonUndefined, E extends NonUndefined>(
  val: Result<T, E>,
): val is ErrResult<never, E> {
  return val.isErr();
}
