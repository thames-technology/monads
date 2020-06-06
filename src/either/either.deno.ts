import { None, Option, OptNone, Some } from "../option/option.deno.ts";

export const EitherType = {
  Left: Symbol(":left"),
  Right: Symbol(":right"),
};

export interface Match<L, R, U> {
  left: (val: L) => U;
  right: (val: R) => U;
}

export interface Either<L, R> {
  type: symbol;
  isLeft(): boolean;
  isRight(): boolean;
  left(): Option<L>;
  leftAndThen<U>(fn: (val: L) => Either<U, R>): Either<U, R>;
  right(): Option<R>;
  rightAndThen<U>(fn: (val: R) => Either<L, U>): Either<L, U>;
  unwrap(): L | R;
  unwrapLeft(): L | never;
  unwrapLeftOr(other: L): L;
  unwrapLeftOrElse(fn: (right: R) => L): L;
  unwrapRight(): R | never;
  unwrapRightOr(other: R): R;
  unwrapRightOrElse(fn: (left: L) => R): R;
  match<U>(fn: Match<L, R, U>): U;
  map<U>(fn: (val: L | R) => U): Either<U, U>;
  mapLeft<U>(fn: (left: L) => U): Either<U, R>;
  mapRight<U>(fn: (right: R) => U): Either<L, U>;
}

export interface ResLeft<L, R> extends Either<L, R> {
  unwrap(): L;
  unwrapLeft(): L;
  unwrapRight(): never;
  match<U>(fn: Match<L, never, U>): U;
  map<U>(fn: (val: L | R) => U): ResLeft<U, never>;
  mapLeft<U>(fn: (left: L) => U): Either<U, never>;
  mapRight<U>(fn: (right: R) => U): ResLeft<L, never>;
}

export interface ResRight<L, R> extends Either<L, R> {
  unwrap(): R;
  unwrapLeft(): never;
  unwrapRight(): R;
  match<U>(fn: Match<never, R, U>): U;
  map<U>(fn: (val: L | R) => U): ResRight<never, U>;
  mapLeft<U>(fn: (left: L) => U): Either<never, R>;
  mapRight<U>(fn: (right: R) => U): ResRight<never, U>;
}

export function Left<L, R>(val: L): ResLeft<L, R> {
  return {
    type: EitherType.Left,
    isLeft(): boolean {
      return true;
    },
    isRight(): boolean {
      return false;
    },
    left(): Option<L> {
      return Some(val);
    },
    leftAndThen<U>(fn: (val: L) => Either<U, R>): Either<U, R> {
      return fn(val);
    },
    right(): OptNone<R> {
      return None;
    },
    rightAndThen<U>(_fn: (val: R) => Either<L, U>): Either<L, U> {
      return Left(val);
    },
    unwrap(): L {
      return val;
    },
    unwrapLeft(): L {
      return val;
    },
    unwrapLeftOr(_other: L): L {
      return val;
    },
    unwrapLeftOrElse(_fn: (right: R) => L): L {
      return val;
    },
    unwrapRight(): never {
      throw new ReferenceError("Cannot unwrap Right value of Either.Left");
    },
    unwrapRightOr(other: R): R {
      return other;
    },
    unwrapRightOrElse(fn: (left: L) => R): R {
      return fn(val);
    },
    match<U>(matchObject: Match<L, never, U>): U {
      return matchObject.left(val);
    },
    map<U>(fn: (val: L) => U): ResLeft<U, never> {
      return Left(fn(val));
    },
    mapLeft<U>(fn: (left: L) => U): Either<U, never> {
      return Left(fn(val));
    },
    mapRight<U>(_fn: (right: R) => U): ResLeft<L, never> {
      return Left(val);
    },
  };
}

export function Right<L, R>(val: R): ResRight<L, R> {
  return {
    type: EitherType.Right,
    isLeft(): boolean {
      return false;
    },
    isRight(): boolean {
      return true;
    },
    left(): Option<L> {
      return None;
    },
    leftAndThen<U>(_fn: (val: L) => Either<U, R>): Either<U, R> {
      return Right(val);
    },
    right(): Option<R> {
      return Some(val);
    },
    rightAndThen<U>(fn: (val: R) => Either<L, U>): Either<L, U> {
      return fn(val);
    },
    unwrap(): R {
      return val;
    },
    unwrapLeft(): never {
      throw new ReferenceError("Cannot unwrap Left value of Either.Right");
    },
    unwrapLeftOr(other: L): L {
      return other;
    },
    unwrapLeftOrElse(fn: (right: R) => L): L {
      return fn(val);
    },
    unwrapRight(): R {
      return val;
    },
    unwrapRightOr(_other: R): R {
      return val;
    },
    unwrapRightOrElse(_fn: (left: L) => R): R {
      return val;
    },
    match<U>(matchObject: Match<never, R, U>): U {
      return matchObject.right(val);
    },
    map<U>(fn: (val: L | R) => U): ResRight<never, U> {
      return Right(fn(val));
    },
    mapLeft<U>(_fn: (left: L) => U): Either<never, R> {
      return Right(val);
    },
    mapRight<U>(fn: (right: R) => U): ResRight<never, U> {
      return Right(fn(val));
    },
  };
}

export function isLeft<L, R>(val: Either<L, R>): val is ResLeft<L, R> {
  return val.isLeft();
}

export function isRight<L, R>(val: Either<L, R>): val is ResRight<L, R> {
  return val.isRight();
}
