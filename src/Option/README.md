# Rust-inspired `Option` type

`Option` represents an optional value: every `Option` is either `Some` and contains a value, or `None`, and does not.

You could consider using `Option` for:

- Nullable pointers (`null` and/or `undefined`)
- Return value for otherwise reporting simple errors, where None is returned on error
- Optional function arguments

`Option`s are commonly paired with pattern matching to query the presence of a value and take action, always accounting for the `None` case.

```typescript
const divide = (numerator: number, denominator: number): Option<number> => {
    if (denominator === 0) {
        return None
    } else {
        return Some(numerator / denominator)
    }
};

// The return value of the function is an option
const result = divide(2.0, 3.0);

// Pattern match to retrieve the value
const message = result.match({
    some: _ => `Result: ${_}`,
    none: "Cannot divide by 0",
});

console.log(message); // Result: 0.6666666666666666
```

## Documentation

### `is_some() => boolean`

Returns `true` if the option is a `Some` value.

#### Examples

```typescript
let x: Option<number> = Some(2);
console.log(x.is_some()); // true
```

```typescript
let x: Option<number> = None;
console.log(x.is_some()); // false
```

### `is_none() => boolean`

Returns `true` if the option is a `None` value.

#### Examples

```typescript
let x: Option<number> = Some(2);
console.log(x.is_none()); // false
```

```typescript
let x: Option<number> = None;
console.log(x.is_none()); // true
```

### `unwrap() => T`

Moves the value `v` out of the `Option<T>` if it is `Some(v)`.

In general, because this function may throw, its use is discouraged. Instead, prefer to use pattern matching and handle the `None` case explicitly.

#### Throws

Throws a `ReferenceError` if the option is `None`.

#### Examples

```typescript
let x = Some("air");
console.log(x.unwrap()); // "air"
```

```typescript
let x = None;
console.log(x.unwrap()); // fails, throws an Exception
```

Alternatively, you can choose to use `is_some()` to check whether the option is `Some`.
This will enable you to use `unwrap()` in the `true` / success branch.

```typescript
const getName = (name: Option<string>): string => {
    if (is_some(name)) {
        return name.unwrap();
    } else {
        return 'N/A';
    }
};
```

### `unwrap_or(def: T) => T`

Returns the contained value or a default.

#### Examples

```typescript
console.log(Some("car").unwrap_or("bike")); // "car"
console.log(None.unwrap_or("bike")) // "bike"
```

### `map<U>(fn: (_: T) => U) => Option<U>`

Maps an `Option<T>` to `Option<U>` by applying a function to a contained value.

#### Examples

```typescript
const x: Option<number> = Some(123),
      y: Option<string> = x.map(_ => _.toString());

console.log(y.is_some()); // true
console.log(y.is_none()); // false
console.log(y.unwrap_or("N/A")); // "123"
```

```typescript
const x: Option<number> = None,
      y: Option<string> = x.map(_ => _.toString());

console.log(y.is_some()); // false
console.log(y.is_none()); // true
console.log(y.unwrap_or("N/A")); // "N/A"
```

### `and_then<U>(fn: (_: T) => Option<U>) => Option<U>`

Returns `None` if the option is `None`, otherwise calls `fn` with the wrapped value and returns the result.

Some languages call this operation `flatmap`.

#### Examples

```typescript
const sq = (x: number): Option<number> => Some(x * x);
const nope = (_: number): Option<number> => None;

console.log(Some(2).and_then(sq).and_then(sq)); // Returns: Some(16)
console.log(Some(2).and_then(sq).and_then(nope)); // Returns: None
console.log(Some(2).and_then(nope).and_then(sq)); // Returns: None
console.log(None.and_then(sq).and_then(sq)); // Returns: None
```

### `or(optb: Option<T>) => Option<T>`

Returns the option if it contains a value, otherwise returns `optb`.

#### Examples

```typescript
const x = Some(2);
const y = None;
console.log(x.or(y)); // Returns: Some(2)
```

```typescript
const x = None;
const y = Some(100);
console.log(x.or(y)); // Returns: Some(100)
```

```typescript
const x = Some(2);
const y = Some(100);
console.log(x.or(y)); // Returns: Some(2)
```

```typescript
const x: Option<number> = None;
const y = None;
console.log(x.or(y)); // Returns: None
```

### `match<S, N>(p: MatchPattern<T, S, N>): S | N;`

```typescript
type Resolver<T> = () => T;

interface MatchPattern<T, S, N> {
    some:(_: T) => S;
    none:Resolver<N> | N;
}
```

Applies a function to retrieve a contained value if `Option` is `Some`; Either returns, or applies another function to
return, a fallback value if `Option` is `None`.

#### Examples

```typescript
const getDate = (date: Option<Date>): number => {
    return date.match({
        some: (_) => _.getFullYear(),
        none: 1994 // () => 1994 is also valid
    });
}

let x: Option<Date> = Some(new Date());
let y: Option<Date> = None;

console.log(getDate(x)); // 2017
console.log(getDate(y)); // 1994
```

### `get_in<T>(obj: Object, key: string): Option<T>;`

Retrieves value `T` and converts it to `Option<T>` if key leads to this value, otherwise returns `None`.
It is highly recommended to cast the return type to `Option<T>` explicitly, as seen in examples below.

#### Examples

```typescript
const obj = {a: {b: 'val'}};
const value: Option<string> = get_in(obj, 'a.b');

console.log(value.is_some()); // true
console.log(value.unwrap_or('N/A')); // 'val'
```

```typescript
const obj = {a: {b: 'val'}};
const value: Option<string> = get_in(obj, 'a.nonExistentKey');

console.log(value.is_none()); // true
console.log(value.unwrap_or('N/A')); // 'N/A'
```

### Appendix

#### Try to avoid constructing `Some` with explicit `null` or `undefined`

```typescript
let x = Some(undefined); // Compiles, but meh.. don't use this please
let y = Some(null); // Compiles, but meh.. don't use this please
```

#### Typing in action

```typescript
function getFullYear(date: Option<Date>):number {
    return date.match({
        some: (_) => _.getFullYear(),
        none: '1994' // Error: Type 'string | number' is not assignable to type 'number'.
    });
}
```

#### React examples

```typescript
import { gt, is } from 'ramda'
import * as React from 'react'
import { Option, Some, None } from './lib/utils'

interface IEmployment {
    yearFrom?:number;
    yearTo?:number;
    title?:string;
    employer?:string;
    description:string;
}

function hyphenate(...args:Option<string|number>[]):Option<string> {
    const vals = args
            .map(_ => _.match({
                some: (_) => _.toString().trim(),
                none: () => undefined
            }))
            .filter(_ => is(String, _));

    return gt(vals.length, 0) ? Some(vals.join(' – ')) : None;
}

const EmploymentComponent = (item:IEmployment) => (
    <section>
        {hyphenate(Some(item.yearFrom), Some(item.yearTo)).match({
            some: (_) => <small>{_}</small>,
            none: () => null
        })}
        
        <strong>
            {hyphenate(
                Some(item.title),
                Some(item.employer)                                        
            ).unwrap_or('N/A')}
        </strong>
        
        <p>{item.description}</p>
    </section>
);

export default EmploymentComponent;
```
