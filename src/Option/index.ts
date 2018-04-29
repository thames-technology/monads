import {
  isEqual,
  isFunction,
  isPresent,
  throwIfMissing,
  throwIfFalse,
} from '@openmaths/utils'

export const OptionType = {
  Some: Symbol(':some'),
  None: Symbol(':none'),
}

export interface Match<T, U> {
  some: (val: T) => U
  none: (() => U) | U
}

export interface Option<T> {
  type: symbol
  is_some(): boolean
  is_none(): boolean
  match<U>(fn: Match<T, U>): U
  map<U>(fn: (val: T) => U): Option<U>
  and_then<U>(fn: (val: T) => Option<U>): Option<U>
  or<U>(optb: Option<U>): Option<T | U>
  and<U>(optb: Option<U>): Option<U>
  unwrap_or(def: T): T
  unwrap(): T | never
}

export interface _Some<T> extends Option<T> {
  unwrap(): T
  map<U>(fn: (val: T) => U): _Some<U>
  or<U>(optb: Option<U>): Option<T>
  and<U>(optb: Option<U>): Option<U>
}

export interface _None<T> extends Option<T> {
  unwrap(): never
  map<U>(fn: (val: T) => U): _None<U>
  or<U>(optb: Option<U>): Option<U>
  and<U>(optb: Option<U>): _None<U>
}

export function Some<T>(val: T | null | undefined): Option<T> {
  return isPresent(val) ? some_constructor<T>(val as T) : none_constructor<T>()
}

export const None = none_constructor<any>()

export function some_constructor<T>(val: T): _Some<T> {
  throwIfMissing(val, `Some has to contain a value. Received ${typeof val}.`)

  return {
    type: OptionType.Some,
    is_some(): boolean {
      return true
    },
    is_none(): boolean {
      return false
    },
    match<U>(fn: Match<T, U>): U {
      return fn.some(val)
    },
    map<U>(fn: (val: T) => U) {
      return some_constructor<U>(fn(val))
    },
    and_then<U>(fn: (val: T) => Option<U>): Option<U> {
      return fn(val)
    },
    or<U>(_optb: Option<U>): Option<T> {
      return this
    },
    and<U>(optb: Option<U>): Option<U> {
      return optb
    },
    unwrap_or(_def: T): T {
      throwIfMissing(_def, 'Cannot call unwrap_or with a missing value.')
      return val
    },
    unwrap(): T {
      return val
    },
  }
}

export function none_constructor<T>(): _None<T> {
  return {
    type: OptionType.None,
    is_some(): boolean {
      return false
    },
    is_none(): boolean {
      return true
    },
    match<U>(fn: Match<T, U>): U {
      return isFunction(fn.none) ? fn.none() : fn.none
    },
    map<U>(fn: (val: T) => U) {
      return none_constructor<U>()
    },
    and_then<U>(fn: (val: T) => Option<U>): _None<U> {
      return none_constructor<U>()
    },
    or<U>(optb: Option<U>): Option<U> {
      return optb
    },
    and<U>(_optb: Option<U>): _None<U> {
      return none_constructor<U>()
    },
    unwrap_or(def: T): T {
      throwIfMissing(def, 'Cannot call unwrap_or with a missing value.')
      return def
    },
    unwrap(): never {
      throw new ReferenceError('Trying to unwrap None.')
    },
  }
}

export function is_option<T>(val: Option<T> | any): val is Option<T> {
  return (
    isEqual(val.type, OptionType.Some) || isEqual(val.type, OptionType.None)
  )
}

export function is_some<T>(val: Option<T>): val is _Some<T> {
  throwIfFalse(is_option(val), 'val is not an Option')
  return val.is_some()
}

export function is_none<T>(val: Option<T>): val is _None<T> {
  throwIfFalse(is_option(val), 'val is not an Option')
  return val.is_none()
}

export function get_in(
  obj: Object | undefined | null,
  key: string,
): Option<any> {
  const val = key
    .split('.')
    .reduce((o, x) => (o == null ? o : (o as any)[x]), obj)
  return Some(val)
}
