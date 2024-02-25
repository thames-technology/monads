// Type representing any value except 'undefined'.
// Assumes strict null checks are enabled.
type NonUndefined = {} | null;

const OptionType = {
  Some: Symbol(':some'),
  None: Symbol(':none'),
};

interface Match<A, B> {
  some: (val: A) => B;
  none: (() => B) | B;
}

export interface Option<A extends NonUndefined> {
  type: symbol;
  isSome(): boolean;
  isNone(): boolean;
  match<B extends NonUndefined>(fn: Match<A, B>): B;
  map<B extends NonUndefined>(fn: (val: A) => B): Option<A | B>;
  andThen<B extends NonUndefined>(fn: (val: A) => Option<B>): Option<A | B>;
  or<B extends NonUndefined>(optb: Option<B>): Option<A | B>;
  and<B extends NonUndefined>(optb: Option<B>): Option<A | B>;
  unwrapOr(def: A): A;
  unwrap(): A | never;
}

interface OptSome<A extends NonUndefined> extends Option<A> {
  map<B extends NonUndefined>(fn: (val: A) => B): Option<B>;
  andThen<B extends NonUndefined>(fn: (val: A) => Option<B>): Option<B>;
  or<B extends NonUndefined>(optb: Option<B>): Option<A>;
  and<B extends NonUndefined>(optb: Option<B>): Option<B>;
  unwrap(): A;
}

interface OptNone<A extends NonUndefined> extends Option<A> {
  map<B extends NonUndefined>(fn: (val: A) => B): OptNone<A>;
  andThen<B extends NonUndefined>(fn: (val: A) => Option<B>): Option<A>;
  or<B extends NonUndefined>(optb: Option<B>): Option<B>;
  and<B extends NonUndefined>(optb: Option<B>): OptNone<A>;
  unwrap(): never;
}

class SomeImpl<A extends NonUndefined> implements OptSome<A> {
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
  unwrapOr(_def: A) {
    return this.val;
  }
  unwrap() {
    return this.val;
  }
}

class NoneImpl<A extends NonUndefined> implements OptNone<A> {
  get type() {
    return OptionType.None;
  }
  isSome() {
    return false;
  }
  isNone() {
    return true;
  }
  match<B>(matchObject: Match<A, B>): B {
    const { none } = matchObject;

    if (typeof none === 'function') {
      return (none as () => B)();
    }

    return none;
  }
  map<B extends NonUndefined>(_fn: (val: A) => B) {
    return this
  }
  andThen<B extends NonUndefined>(_fn: (val: A) => Option<B>) {
    return this
  }
  or<B extends NonUndefined>(optb: Option<B>) {
    return optb;
  }
  and<B extends NonUndefined>(_optb: Option<B>) {
    return this
  }
  unwrapOr(def: A) {
    return def;
  }
  unwrap(): never {
    throw new ReferenceError('Trying to unwrap None.');
  }
}

export function Some<T extends NonUndefined>(val: T): Option<T> {
  return typeof val === 'undefined'
    ? new NoneImpl()
    : new SomeImpl(val);
}

export const None = new NoneImpl();

export function isSome<T extends NonUndefined>(val: Option<T>): val is OptSome<T> {
  return val.isSome();
}

export function isNone<T extends NonUndefined>(val: Option<T>): val is OptNone<T> {
  return val.isNone();
}
