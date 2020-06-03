# Rust-inspired `Option<T>` type

Original implementation: <https://doc.rust-lang.org/std/option/enum.Option.html>

Type `Option<T>` represents an optional value: every `Option` is either `Some` and contains a value, or `None`, and does not.

You could consider using `Option` for:

-   Nullable pointers (`undefined` in JavaScript)
-   Return value for otherwise reporting simple errors, where None is returned on error
-   Default values and/or properties
-   Nested optional object properties

`Option`s are commonly paired with pattern matching to query the presence of a value and take action, always accounting for the `None` case.

```typescript
function divide(numerator: number, denominator: number): Option<number> {
  if (denominator === 0) {
    return None
  } else {
    return Some(numerator / denominator)
  }
}

// The return value of the function is an option
const result = divide(2.0, 3.0)

// Pattern match to retrieve the value
const message = result.match({
  some: res => `Result: ${res}`,
  none: "Cannot divide by 0",
})

console.log(message) // "Result: 0.6666666666666666"

```

## Documentation

### `isSome() => boolean`

Returns `true` if the option is a `Some` value.

#### Examples

```typescript
let x: Option<number> = Some(2)
console.log(x.isSome()) // true

```

```typescript
let x: Option<number> = None
console.log(x.isSome()) // false

```

#### `null` and `undefined`

In previous versions of this package, calling `Some(val)` where `val` is either `null` or `undefined` would result in `None`.

Hovewer, `null` is considered a _value_ and it is internally treated as `object`.

Therefore, as of version `v3.0.0`, constructing `Some` with `null` (explicitly, or implicitly) will indeed yield `Some<null>`.

```typescript
expect(Some().isSome()).toEqual(false)
expect(Some(undefined).isSome()).toEqual(false)

// This assertion would fail in versions below 3.0.0
expect(Some(null).isSome()).toEqual(true)

```

### `isNone() => boolean`

Returns `true` if the option is a `None` value.

#### Examples

```typescript
let x: Option<number> = Some(2)
console.log(x.isNone()) // false

```

```typescript
let x: Option<number> = None
console.log(x.isNone()) // true

```

### `unwrap() => T`

Moves the value `v` out of the `Option<T>` if it is `Some(v)`.

In general, because this function may throw, its use is discouraged.
Instead, try to use `match` and handle the `None` case explicitly.

#### Throws

Throws a `ReferenceError` if the option is `None`.

#### Examples

```typescript
let x = Some("air")
console.log(x.unwrap()) // "air"

```

```typescript
let x = None
console.log(x.unwrap()) // fails, throws an Exception

```

Alternatively, you can choose to use `isSome()` to check whether the option is `Some`. This will enable you to use `unwrap()` in the `true` / success branch.

```typescript
function getName(name: Option<string>): string {
  if (isSome(name)) {
    return name.unwrap()
  } else {
    return "N/A"
  }
}

```

### `unwrapOr(optb: T) => T`

Returns the contained value or `optb`.

#### Examples

```typescript
console.log(Some("car").unwrapOr("bike")) // "car"
console.log(None.unwrapOr("bike")) // "bike"

```

### `map(fn: (val: T) => U) => Option<U>`

Maps an `Option<T>` to `Option<U>` by applying a function to a contained value.

#### Examples

```typescript
let x: Option<string> = Some("123")
let y: Option<number> = x.map(parseInt)

console.log(y.isSome()) // true
console.log(y.unwrap()) // 123

```

```typescript
let x: Option<string> = None
let y: Option<number> = x.map(parseInt)

console.log(y.isNone()) // true

```

### `andThen(fn: (val: T) => Option<U>) => Option<U>`

Returns `None` if the option is `None`, otherwise calls `fn` with the wrapped value and returns the result.

Some languages call this operation `flatmap`.

#### Examples

```typescript
const sq = (x: number): Option<number> => Some(x * x)
const nope = (_: number): Option<number> => None

console.log(Some(2).andThen(sq).andThen(sq)) // Some(16)
console.log(Some(2).andThen(sq).andThen(nope)) // None
console.log(Some(2).andThen(nope).andThen(sq)) // None
console.log(None.andThen(sq).andThen(sq)) // None

```

### `or(optb: Option<T>) => Option<T>`

Returns the option if it contains a value, otherwise returns `optb`.

#### Examples

```typescript
let x = Some(2)
let y = None

console.log(x.or(y)) // Some(2)

```

```typescript
let x = None
let y = Some(100)

console.log(x.or(y)) // Some(100)

```

```typescript
let x = Some(2)
let y = Some(100)

console.log(x.or(y)) // Some(2)

```

```typescript
let x: Option<number> = None
let y = None

console.log(x.or(y)) // None

```

### `and(optb: Option<T>) => Option<T>`

Returns `None` if the option is `None`, otherwise returns `optb`.

#### Examples

```typescript
let x = Some(2)
let y = None

console.log(x.and(y)) // None

```

```typescript
let x = None
let y = Some(100)

console.log(x.and(y)) // None

```

```typescript
let x = Some(2)
let y = Some(100)

console.log(x.and(y)) // Some(100)

```

```typescript
let x: Option<number> = None
let y = None

console.log(x.and(y)) // None

```

### `match(p: MatchPattern<T, U>): U`

```typescript
type MatchPattern<T, U> = {
  some: (val: T) => U
  none: (() => T) | U
}

```

Applies a function to retrieve a contained value if `Option` is `Some`; Either returns, or applies another function to
return, a fallback value if `Option` is `None`.

#### Examples

```typescript
const getFullYear = (date: Option<Date>): number => date.match({
  some: val => val.getFullYear(),
  none: 1994
})

const someDate = Some(new Date())
const noDate = None

console.log(getFullYear(someDate)) // 2017
console.log(getFullYear(noDate)) // 1994

```

### `getIn(obj: Object, key: string): Option<T>`

Retrieves value `T` and converts it to `Option<T>` if key leads to this value, otherwise returns `None`. It is highly recommended to cast the return type to `Option<T>` explicitly, as seen in examples below.

#### Examples

```typescript
interface Car {
  driver?: {
    contact?: {
      name?: string
    }
  }
}

const getDriverName = (car: Car): Option<string> => getIn(car, "driver.contact.name")

console.log(getDriverName({driver: {}})) // None
console.log(getDriverName({driver: {contact: {}}})) // None
console.log(getDriverName({driver: {contact: {name: "John"}}})) // Some("John")

```

## Appendix

### Typing in action

```typescript
const getFullYear = (date: Option<Date>): number => date.match({
  some: val => val.getFullYear(),
  none: "1994" // Error: Type 'string | number' is not assignable to type 'number'.
})

```
