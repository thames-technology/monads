export interface MatchPattern<T, S, N> {
    some:(_:T) => S;
    none:() => N;
}

export interface Option<T> {
    is_some():boolean;
    is_none():boolean;
    match<S, N>(p:MatchPattern<T, S, N>):S|N;
    map<U>(fn:(_:T) => U):Option<U>;
    unwrap_or(_:T):T;
    unwrap?():T;
}

export const assert_none = (_:any) => (_ == null);
export const assert_some = (_:any) => !assert_none(_);

export function is_some<T>(_:Option<T>):_ is _Some<T> {
    return _.is_some();
}

export function is_none<T>(_:Option<T>):_ is _None<T> {
    return _.is_none();
}

export class _Some<T> implements Option<T> {
    protected readonly _:T;

    constructor(_:T) {
        this._ = _;
    }

    is_some() {
        return true;
    }

    is_none() {
        return false;
    }

    match<S, N>(p:MatchPattern<T, S, N>):S {
        return p.some(this._);
    }

    map<U>(fn:(_:T) => U):Option<U> {
        return Some(fn(this._));
    }

    unwrap():T {
        if (assert_none(this._)) {
            throw new ReferenceError("Cannot use 'null' or 'undefined' as parameter when calling unwrap_or()");
        }

        return this._;
    }

    unwrap_or(_:T):T {
        if (assert_none(_)) {
            throw new ReferenceError("Cannot use 'null' or 'undefined' as parameter when calling unwrap_or()");
        }

        return this._;
    }
}

export class _None<T> implements Option<any> {
    is_some() {
        return false;
    }

    is_none() {
        return true;
    }

    match<S, N>(p:MatchPattern<T, S, N>):N {
        return p.none();
    }

    map<U>(fn:(_:T) => U):Option<U> {
        return new _None<U>();
    }

    unwrap_or(_:T):T {
        if (assert_none(_)) {
            throw new ReferenceError("Cannot use 'null' or 'undefined' as parameter when calling unwrap_or()");
        }

        return _;
    }
}

export function Some<T>(_:T|null|undefined):_Some<T>|_None<T> {
    return assert_some(_) ? new _Some(_ as T) : new _None<T>();
}

export const None = new _None<any>();
