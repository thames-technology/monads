import { isEqual, throwIfFalse } from "@usefultools/utils"
import { None, Option, OptNone, Some } from "../Option/Option"

export const EitherType = {
  Left: Symbol(":left"),
  Right: Symbol(":right"),
}

export interface Match<L, R, U> {
  left: (val: L) => U
  right: (val: R) => U
}

export interface Either<L, R> {
  type: symbol
  is_left(): boolean
  is_right(): boolean
  left(): Option<L>
  left_and_then<U>(fn: (val: L) => Either<U, R>): Either<U, R>
  right(): Option<R>
  right_and_then<U>(fn: (val: R) => Either<L, U>): Either<L, U>
  unwrap(): L | R
  unwrap_left(): L | never
  unwrap_left_or(other: L): L
  unwrap_left_or_else(fn: (right: R) => L): L
  unwrap_right(): R | never
  unwrap_right_or(other: R): R
  unwrap_right_or_else(fn: (left: L) => R): R
  match<U>(fn: Match<L, R, U>): U
  map<U>(fn: (val: L | R) => U): Either<U, U>
  map_left<U>(fn: (left: L) => U): Either<U, R>
  map_right<U>(fn: (right: R) => U): Either<L, U>
}

export interface ResLeft<L, R> extends Either<L, R> {
  unwrap(): L
  unwrap_left(): L
  unwrap_right(): never
  match<U>(fn: Match<L, never, U>): U
  map<U>(fn: (val: L | R) => U): ResLeft<U, never>
  map_left<U>(fn: (left: L) => U): Either<U, never>
  map_right<U>(fn: (right: R) => U): ResLeft<L, never>
}

export interface ResRight<L, R> extends Either<L, R> {
  unwrap(): R
  unwrap_left(): never
  unwrap_right(): R
  match<U>(fn: Match<never, R, U>): U
  map<U>(fn: (val: L | R) => U): ResRight<never, U>
  map_left<U>(fn: (left: L) => U): Either<never, R>
  map_right<U>(fn: (right: R) => U): ResRight<never, U>
}

export function Left<L, R>(val: L): ResLeft<L, R> {
  return {
    type: EitherType.Left,
    is_left(): boolean {
      return true
    },
    is_right(): boolean {
      return false
    },
    left(): Option<L> {
      return Some(val)
    },
    left_and_then<U>(fn: (val: L) => Either<U, R>): Either<U, R> {
      return fn(val)
    },
    right(): OptNone<R> {
      return None
    },
    right_and_then<U>(_fn: (val: R) => Either<L, U>): Either<L, U> {
      return Left(val)
    },
    unwrap(): L {
      return val
    },
    unwrap_left(): L {
      return val
    },
    unwrap_left_or(_other: L): L {
      return val
    },
    unwrap_left_or_else(_fn: (right: R) => L): L {
      return val
    },
    unwrap_right(): never {
      throw new ReferenceError("Cannot unwrap Right value of Either.Left")
    },
    unwrap_right_or(other: R): R {
      return other
    },
    unwrap_right_or_else(fn: (left: L) => R): R {
      return fn(val)
    },
    match<U>(fn: Match<L, never, U>): U {
      return fn.left(val)
    },
    map<U>(fn: (val: L) => U): ResLeft<U, never> {
      return Left(fn(val))
    },
    map_left<U>(fn: (left: L) => U): Either<U, never> {
      return Left(fn(val))
    },
    map_right<U>(_fn: (right: R) => U): ResLeft<L, never> {
      return Left(val)
    },
  }
}

export function Right<L, R>(val: R): ResRight<L, R> {
  return {
    type: EitherType.Right,
    is_left(): boolean {
      return false
    },
    is_right(): boolean {
      return true
    },
    left(): Option<L> {
      return None
    },
    left_and_then<U>(_fn: (val: L) => Either<U, R>): Either<U, R> {
      return Right(val)
    },
    right(): Option<R> {
      return Some(val)
    },
    right_and_then<U>(fn: (val: R) => Either<L, U>): Either<L, U> {
      return fn(val)
    },
    unwrap(): R {
      return val
    },
    unwrap_left(): never {
      throw new ReferenceError("Cannot unwrap Left value of Either.Right")
    },
    unwrap_left_or(other: L): L {
      return other
    },
    unwrap_left_or_else(fn: (right: R) => L): L {
      return fn(val)
    },
    unwrap_right(): R {
      return val
    },
    unwrap_right_or(_other: R): R {
      return val
    },
    unwrap_right_or_else(_fn: (left: L) => R): R {
      return val
    },
    match<U>(fn: Match<never, R, U>): U {
      return fn.right(val)
    },
    map<U>(fn: (val: L | R) => U): ResRight<never, U> {
      return Right(fn(val))
    },
    map_left<U>(_fn: (left: L) => U): Either<never, R> {
      return Right(val)
    },
    map_right<U>(fn: (right: R) => U): ResRight<never, U> {
      return Right(fn(val))
    },
  }
}

export function is_either<L, R>(val: Either<L, R> | any): val is Either<L, R> {
  return isEqual(val.type, EitherType.Left) || isEqual(val.type, EitherType.Right)
}

export function is_left<L, R>(val: Either<L, R>): val is ResLeft<L, R> {
  throwIfFalse(is_either(val), "val is not a Either")
  return val.is_left()
}

export function is_right<L, R>(val: Either<L, R>): val is ResRight<L, R> {
  throwIfFalse(is_either(val), "val is not a Either")
  return val.is_right()
}
