import { None, Option, Some, assert_none } from '../Option'

export interface MatchPattern<O, E, T, U> {
  ok: (_: O) => T
  err: (_: E) => U
}

export interface Result<O, E> {
  is_ok(): boolean
  is_err(): boolean
  match<T, U>(p: MatchPattern<O, E, T, U>): T | U
  map<T>(fn: (_: O | E) => T): Result<T, E>
  unwrap(): O
  unwrap_err(): E
  unwrap_or(optb: O): O
  ok(): Option<O>
  err(): Option<E>
}

export function is_ok<O, E>(_: Result<O, E>): _ is _Ok<O> {
  return _.is_ok()
}

export function is_err<O, E>(_: Result<O, E>): _ is _Err<E> {
  return _.is_err()
}

export class _Ok<O> implements Result<O, any> {
  protected readonly _: O

  constructor(_: O) {
    this._ = _
  }

  is_ok() {
    return true
  }

  is_err() {
    return false
  }

  match<T, U>(p: MatchPattern<O, any, T, U>): T {
    return p.ok(this._)
  }

  map<U>(fn: (_: O) => U): _Ok<U> {
    return Ok(fn(this._))
  }

  unwrap(): O {
    return this._
  }

  unwrap_err(): never {
    throw new ReferenceError('Cannot call unwrap_err() on an instance of Ok')
  }

  unwrap_or(optb: O): O {
    if (assert_none(optb)) {
      throw new ReferenceError(
        'Cannot use "null" or "undefined" as default parameter when calling unwrap_or()',
      )
    }

    return this._
  }

  ok(): Option<O> {
    return Some(this._)
  }

  err(): Option<any> {
    return None
  }
}

export class _Err<E> implements Result<any, E> {
  protected readonly _: E

  constructor(_: E) {
    this._ = _
  }

  is_ok() {
    return false
  }

  is_err() {
    return true
  }

  match<T, U>(p: MatchPattern<any, E, T, U>): U {
    return p.err(this._)
  }

  map<U>(fn: (_: E) => U): _Err<E> {
    return this
  }

  unwrap(): never {
    throw new ReferenceError('Cannot call unwrap() on an instance of Err')
  }

  unwrap_err(): E {
    return this._
  }

  unwrap_or<T>(optb: T): T {
    if (assert_none(optb)) {
      throw new ReferenceError(
        'Cannot use "null" or "undefined" as default parameter when calling unwrap_or()',
      )
    }

    return optb
  }

  ok(): Option<any> {
    return None
  }

  err(): Option<E> {
    return Some(this._)
  }
}

export function Ok<T>(_: T): _Ok<T> {
  return new _Ok(_)
}

export function Err<T>(_: T): _Err<T> {
  return new _Err(_)
}
