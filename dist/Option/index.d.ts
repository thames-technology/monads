export declare const OptionType: {
    Some: symbol;
    None: symbol;
};
export interface Match<T, U> {
    some: (val: T) => U;
    none: (() => U) | U;
}
export interface Option<T> {
    type: symbol;
    is_some(): boolean;
    is_none(): boolean;
    match<U>(fn: Match<T, U>): U;
    map<U>(fn: (val: T) => U): Option<U>;
    and_then<U>(fn: (val: T) => Option<U>): Option<U>;
    or<U>(optb: Option<U>): Option<T | U>;
    and<U>(optb: Option<U>): Option<U>;
    unwrap_or(def: T): T;
    unwrap(): T | never;
}
export interface _Some<T> extends Option<T> {
    unwrap(): T;
    map<U>(fn: (val: T) => U): _Some<U>;
    or<U>(optb: Option<U>): Option<T>;
    and<U>(optb: Option<U>): Option<U>;
}
export interface _None<T> extends Option<T> {
    unwrap(): never;
    map<U>(fn: (val: T) => U): _None<U>;
    or<U>(optb: Option<U>): Option<U>;
    and<U>(optb: Option<U>): _None<U>;
}
export declare function Some<T>(val: T | null | undefined): Option<T>;
export declare const None: _None<any>;
export declare function some_constructor<T>(val: T): _Some<T>;
export declare function none_constructor<T>(): _None<T>;
export declare function is_option<T>(val: Option<T> | any): val is Option<T>;
export declare function is_some<T>(val: Option<T>): val is _Some<T>;
export declare function is_none<T>(val: Option<T>): val is _None<T>;
export declare function get_in(obj: Object | undefined | null, key: string): Option<any>;
