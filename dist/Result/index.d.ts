export declare const ResultType: {
    Ok: symbol;
    Err: symbol;
};
export interface Match<T, E, U> {
    ok: (val: T) => U;
    err: (val: E) => U;
}
export interface Result<T, E> {
    type: symbol;
    is_ok(): boolean;
    is_err(): boolean;
    unwrap(): T | never;
    unwrap_err(): E | never;
    ok_or(optb: T): T;
    match<U>(fn: Match<T, E, U>): U;
    map<U>(fn: (val: T) => U): Result<U, E>;
    map_err<U>(fn: (err: E) => U): Result<T, U>;
    and_then<U>(fn: (val: T) => Result<U, E>): Result<U, E>;
}
export interface _Ok<T, E = never> extends Result<T, E> {
    unwrap(): T;
    unwrap_err(): E;
    match<U>(fn: Match<T, E, U>): U;
    map<U>(fn: (val: T) => U): _Ok<U, E>;
    map_err<U>(fn: (err: E) => U): Result<T, U>;
    and_then<U>(fn: (val: T) => Result<U, E>): Result<U, E>;
}
export interface _Err<T, E> extends Result<T, E> {
    unwrap(): never;
    unwrap_err(): E;
    match<U>(fn: Match<never, E, U>): U;
    map<U>(fn: (val: T) => U): _Err<U, E>;
}
export declare function Ok<T, E = never>(val: T): _Ok<T, E>;
export declare function Err<T, E>(val: E): _Err<T, E>;
export declare function is_result<T, E>(val: Result<T, E> | any): val is Result<T, E>;
export declare function is_ok<T, E>(val: Result<T, E>): val is _Ok<T>;
export declare function is_err<T, E>(val: Result<T, E>): val is _Err<T, E>;
