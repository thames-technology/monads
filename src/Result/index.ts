import { isEqual, throwIfFalse } from "@usefultools/utils"

export const ResultType = {
  Ok: Symbol(":ok"),
  Err: Symbol(":err"),
}

export interface Match<T, E, U> {
  ok: (val: T) => U
  err: (val: E) => U
}

export interface Result<T, E> {
  type: symbol
  is_ok(): boolean
  is_err(): boolean
  ok(): T | never
  err(): E | never
  ok_or(optb: T): T
  match<U>(fn: Match<T, E, U>): U
  map<U>(fn: (val: T) => U): Result<U, E>
}

export interface _Ok<T> extends Result<T, never> {
  ok(): T
  err(): never
  match<U>(fn: Match<T, never, U>): U
  map<U>(fn: (val: T) => U): _Ok<U>
}

export interface _Err<T, E> extends Result<T, E> {
  ok(): never
  err(): E
  match<U>(fn: Match<never, E, U>): U
  map<U>(fn: (val: T) => U): _Err<U, E>
}

export function Ok<T>(val: T): _Ok<T> {
  return {
    type: ResultType.Ok,
    is_ok(): boolean {
      return true
    },
    is_err(): boolean {
      return false
    },
    ok(): T {
      return val
    },
    err(): never {
      throw new ReferenceError(`Cannot get Err value of Result.Ok`)
    },
    ok_or(optb: T): T {
      return val
    },
    match<U>(fn: Match<T, never, U>): U {
      return fn.ok(val)
    },
    map<U>(fn: (val: T) => U): Result<U, never> {
      return Ok(fn(val))
    },
  }
}

export function Err<T, E>(err: E): _Err<T, E> {
  return {
    type: ResultType.Err,
    is_ok(): boolean {
      return false
    },
    is_err(): boolean {
      return true
    },
    ok(): never {
      throw new ReferenceError(`Cannot get Ok value of Result.Err`)
    },
    err(): E {
      return err
    },
    ok_or(optb: T): T {
      return optb
    },
    match<U>(fn: Match<never, E, U>): U {
      return fn.err(err)
    },
    map<U>(_fn: (_val: T) => U): _Err<U, E> {
      return Err(err)
    },
  }
}

export function is_result<T, E>(val: Result<T, E> | any): val is Result<T, E> {
  return isEqual(val.type, ResultType.Ok) || isEqual(val.type, ResultType.Err)
}

export function is_ok<T, E>(val: Result<T, E>): val is _Ok<T> {
  throwIfFalse(is_result(val), "val is not a Result")
  return val.is_ok()
}

export function is_err<T, E>(val: Result<T, E>): val is _Err<T, E> {
  throwIfFalse(is_result(val), "val is not a Result")
  return val.is_err()
}
