export type Resolver<T> = () => T;

export interface MatchPattern<T, S, N> {
    some:(_:T) => S;
    none:Resolver<N> | N;
}

export interface Option<T> {
    is_some():boolean;
    is_none():boolean;
    match<S, N>(p:MatchPattern<T, S, N>):S | N;
    map<U>(fn:(_:T) => U):Option<U>;
    unwrap_or(def:T):T;
    unwrap():T | undefined;
}

export const assert_none = (_:any) => (_ == null);
export const assert_some = (_:any) => !assert_none(_);

export function is_some<T>(_:Option<T>):_ is _Some<T> {
    return _.is_some();
}

export function is_none<T>(_:Option<T>):_ is _None<T> {
    return _.is_none();
}

export function get_in<T>(obj: Object, key: string):Option<T> {
    try {
        const val = key.split('.').reduce((o, x) => o == null ? o : (o as any)[x], obj);
        return Some(val as T);
    } catch (e) {
        return new _None<T>();
    }
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
        let newVal:Option<U>;

        try {
            newVal = Some(fn(this._));
        } catch (e) {
            console.log(e);
            newVal = None;
        }

        return newVal;
    }

    unwrap():T {
        if (assert_none(this._)) {
            throw new ReferenceError("Cannot unwrap 'null' or 'undefined'");
        }

        return this._;
    }

    unwrap_or(def:T):T {
        if (assert_none(def)) {
            throw new ReferenceError("Cannot use 'null' or 'undefined' as default parameter when calling unwrap_or()");
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
        if (typeof p.none === 'function') {
            return p.none();
        } else {
            return p.none;
        }
    }

    map<U>(fn:(_:T) => U):Option<U> {
        return new _None<U>();
    }

    unwrap():undefined {
        throw new ReferenceError("Cannot unwrap None");
    }

    unwrap_or(def:T):T {
        if (assert_none(def)) {
            throw new ReferenceError("Cannot use 'null' or 'undefined' as default parameter when calling unwrap_or()");
        }

        return def;
    }
}

export function Some<T>(_:T | null | undefined):_Some<T> | _None<T> {
    return assert_some(_) ? new _Some(_ as T) : new _None<T>();
}

export const None = new _None<any>();
