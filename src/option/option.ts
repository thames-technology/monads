import {
  isEqual,
  isFunction,
  isUndefined,
  throwIfFalse,
  throwIfMissing,
} from "@usefultools/utils";
import { isObject } from "util";

export const OptionType = {
  Some: Symbol(":some"),
  None: Symbol(":none"),
};

export interface Match<T, U> {
  some: (val: T) => U;
  none: (() => U) | U;
}

export interface Option<T> {
  type: symbol;
  isSome(): boolean;
  isNone(): boolean;
  match<U>(fn: Match<T, U>): U;
  map<U>(fn: (val: T) => U): Option<U>;
  andThen<U>(fn: (val: T) => Option<U>): Option<U>;
  or<U>(optb: Option<U>): Option<T | U>;
  and<U>(optb: Option<U>): Option<U>;
  unwrapOr(def: T): T;
  unwrap(): T | never;
}

export interface OptSome<T> extends Option<T> {
  unwrap(): T;
  map<U>(fn: (val: T) => U): OptSome<U>;
  or<U>(optb: Option<U>): Option<T>;
  and<U>(optb: Option<U>): Option<U>;
}

export interface OptNone<T> extends Option<T> {
  unwrap(): never;
  map<U>(fn: (val: T) => U): OptNone<U>;
  or<U>(optb: Option<U>): Option<U>;
  and<U>(optb: Option<U>): OptNone<U>;
}

export function Some<T>(val?: T | undefined): Option<T> {
  return isUndefined(val)
    ? none_constructor<T>()
    : some_constructor<T>(val as T);
}

export const None = none_constructor<any>();

export function some_constructor<T>(val: T): OptSome<T> {
  if (isEqual(typeof val, "undefined")) {
    throw new TypeError(
      "Some has to contain a value. Constructor received undefined.",
    );
  }

  return {
    type: OptionType.Some,
    isSome(): boolean {
      return true;
    },
    isNone(): boolean {
      return false;
    },
    match<U>(fn: Match<T, U>): U {
      return fn.some(val);
    },
    map<U>(fn: (val: T) => U): OptSome<U> {
      return some_constructor<U>(fn(val));
    },
    andThen<U>(fn: (val: T) => Option<U>): Option<U> {
      return fn(val);
    },
    or<U>(_optb: Option<U>): Option<T> {
      return this;
    },
    and<U>(optb: Option<U>): Option<U> {
      return optb;
    },
    unwrapOr(def: T): T {
      throwIfMissing(def, "Cannot call unwrapOr with a missing value.");
      return val;
    },
    unwrap(): T {
      return val;
    },
  };
}

export function none_constructor<T>(): OptNone<T> {
  return {
    type: OptionType.None,
    isSome(): boolean {
      return false;
    },
    isNone(): boolean {
      return true;
    },
    match<U>(fn: Match<T, U>): U {
      return isFunction(fn.none) ? fn.none() : fn.none;
    },
    map<U>(_fn: (val: T) => U): OptNone<U> {
      return none_constructor<U>();
    },
    andThen<U>(_fn: (val: T) => Option<U>): OptNone<U> {
      return none_constructor<U>();
    },
    or<U>(optb: Option<U>): Option<U> {
      return optb;
    },
    and<U>(_optb: Option<U>): OptNone<U> {
      return none_constructor<U>();
    },
    unwrapOr(def: T): T {
      throwIfMissing(def, "Cannot call unwrapOr with a missing value.");
      return def;
    },
    unwrap(): never {
      throw new ReferenceError("Trying to unwrap None.");
    },
  };
}

export function isOption<T>(val: Option<T> | any): val is Option<T> {
  return (
    isObject(val) &&
    (isEqual(val.type, OptionType.Some) || isEqual(val.type, OptionType.None))
  );
}

export function isSome<T>(val: Option<T>): val is OptSome<T> {
  throwIfFalse(isOption(val), "val is not an Option");
  return val.isSome();
}

export function isNone<T>(val: Option<T>): val is OptNone<T> {
  throwIfFalse(isOption(val), "val is not an Option");
  return val.isNone();
}

export function getIn(
  obj: object | undefined | null,
  key: string,
): Option<any> {
  const val = key
    .split(".")
    .reduce((o, x) => (o == null ? o : (o as any)[x]), obj);
  return Some(val);
}
