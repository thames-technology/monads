import { isEqual, throwIfFalse } from "@usefultools/utils"
import { None, Option, Some } from "../Option/main"

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
  ok(): Option<T>
  err(): Option<E>
  unwrap(): T | never
  unwrap_or(optb: T): T
  unwrap_err(): E | never
  match<U>(fn: Match<T, E, U>): U
  map<U>(fn: (val: T) => U): Result<U, E>
}

export interface ResOk<T, E = never> extends Result<T, E> {
  unwrap(): T
  unwrap_or(optb: T): T
  unwrap_err(): never
  match<U>(fn: Match<T, never, U>): U
  map<U>(fn: (val: T) => U): ResOk<U>
}

export interface ResErr<T, E> extends Result<T, E> {
  unwrap(): never
  unwrap_or(optb: T): T
  unwrap_err(): E
  match<U>(fn: Match<never, E, U>): U
  map<U>(fn: (val: T) => U): ResErr<U, E>
}

export function Ok<T, E = never>(val: T): ResOk<T, E> {
  return {
    type: ResultType.Ok,
    is_ok(): boolean {
      return true
    },
    is_err(): boolean {
      return false
    },
    ok(): Option<T> {
      return Some(val)
    },
    err(): Option<E> {
      return None
    },
    unwrap(): T {
      return val
    },
    unwrap_or(_optb: T): T {
      return val
    },
    unwrap_err(): never {
      throw new ReferenceError("Cannot unwrap Err value of Result.Ok")
    },
    match<U>(fn: Match<T, never, U>): U {
      return fn.ok(val)
    },
    map<U>(fn: (val: T) => U): Result<U, never> {
      return Ok(fn(val))
    },
  }
}

export function Err<T, E>(err: E): ResErr<T, E> {
  return {
    type: ResultType.Err,
    is_ok(): boolean {
      return false
    },
    is_err(): boolean {
      return true
    },
    ok(): Option<T> {
      return None
    },
    err(): Option<E> {
      return Some(err)
    },
    unwrap(): never {
      throw new ReferenceError("Cannot unwrap Ok value of Result.Err")
    },
    unwrap_or(optb: T): T {
      return optb
    },
    unwrap_err(): E {
      return err
    },
    match<U>(fn: Match<never, E, U>): U {
      return fn.err(err)
    },
    map<U>(_fn: (_val: T) => U): ResErr<U, E> {
      return Err(err)
    },
  }
}

export function is_result<T, E>(val: Result<T, E> | any): val is Result<T, E> {
  return isEqual(val.type, ResultType.Ok) || isEqual(val.type, ResultType.Err)
}

export function is_ok<T, E>(val: Result<T, E>): val is ResOk<T> {
  throwIfFalse(is_result(val), "val is not a Result")
  return val.is_ok()
}

export function is_err<T, E>(val: Result<T, E>): val is ResErr<T, E> {
  throwIfFalse(is_result(val), "val is not a Result")
  return val.is_err()
}
