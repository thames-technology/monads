/**
 * Type representing any value except 'undefined'.
 * This is useful when working with strict null checks, ensuring that a value can be null but not undefined.
 */
type NonUndefined = {} | null; // eslint-disable-line @typescript-eslint/ban-types

/**
 * Enum-like object to represent the type of an Option (Some or None).
 */
export const OptionType = {
  Some: Symbol(':some'),
  None: Symbol(':none'),
};

/**
 * Interface for handling match operations on an Option.
 * Allows executing different logic based on the Option being Some or None.
 */
interface Match<A, B> {
  some: (val: A) => B;
  none: (() => B) | B;
}

/**
 * The Option interface representing an optional value.
 * An Option is either Some, holding a value, or None, indicating the absence of a value.
 */
export interface Option<A extends NonUndefined> {
  type: symbol;
  isSome(): boolean;
  isNone(): boolean;
  match<B extends NonUndefined>(fn: Match<A, B>): B;
  map<B extends NonUndefined>(fn: (val: A) => B): Option<B>;
  andThen<B extends NonUndefined>(fn: (val: A) => Option<B>): Option<B>;
  or(optb: Option<A>): Option<A>;
  and<B extends NonUndefined>(optb: Option<B>): Option<B>;
  unwrapOr(def: A): A;
  unwrap(): A | never;
}

/**
 * Implementation of Option representing a value (Some).
 */
interface SomeOption<A extends NonUndefined> extends Option<A> {
  unwrap(): A;
}

/**
 * Implementation of Option representing the absence of a value (None).
 */
interface NoneOption<A extends NonUndefined> extends Option<A> {
  unwrap(): never;
}

/**
 * Represents a Some value of Option.
 */
class SomeImpl<A extends NonUndefined> implements SomeOption<A> {
  constructor(private readonly val: A) {}

  get type() {
    return OptionType.Some;
  }

  isSome() {
    return true;
  }

  isNone() {
    return false;
  }

  match<B>(fn: Match<A, B>): B {
    return fn.some(this.val);
  }

  map<B extends NonUndefined>(fn: (val: A) => B) {
    return Some(fn(this.val));
  }

  andThen<B extends NonUndefined>(fn: (val: A) => Option<B>) {
    return fn(this.val);
  }

  or<B extends NonUndefined>(_optb: Option<B>) {
    return this;
  }

  and<B extends NonUndefined>(optb: Option<B>) {
    return optb;
  }

  unwrapOr<A>(_def: A) {
    return this.val;
  }

  unwrap() {
    return this.val;
  }
}

/**
 * Represents a None value of Option.
 */
class NoneImpl<A extends NonUndefined> implements NoneOption<A> {
  get type() {
    return OptionType.None;
  }

  isSome() {
    return false;
  }

  isNone() {
    return true;
  }

  match<B>({ none }: Match<A, B>): B {
    if (typeof none === 'function') {
      return (none as () => B)();
    }

    return none;
  }

  map<B extends NonUndefined>(_fn: (val: A) => B) {
    return new NoneImpl<B>();
  }

  andThen<B extends NonUndefined>(_fn: (val: A) => Option<B>) {
    return new NoneImpl<B>();
  }

  or<B extends NonUndefined>(optb: Option<B>) {
    return optb;
  }

  and<B extends NonUndefined>(_optb: Option<B>) {
    return new NoneImpl<B>();
  }

  unwrapOr<B extends A>(def: B) {
    return def;
  }

  unwrap(): never {
    throw new ReferenceError('Trying to unwrap None.');
  }
}

/**
 * Creates a Some instance of Option containing the given value.
 */
export function Some<T extends NonUndefined>(val: T): Option<T> {
  return new SomeImpl(val);
}

/**
 * The singleton instance representing None, an Option with no value.
 */
export const None: Option<any> = new NoneImpl(); // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * Type guard to check if an Option is a Some value.
 */
export function isSome<T extends NonUndefined>(val: Option<T>): val is SomeOption<T> {
  return val.isSome();
}

/**
 * Type guard to check if an Option is a None value.
 */
export function isNone<T extends NonUndefined>(val: Option<T>): val is NoneOption<T> {
  return val.isNone();
}
