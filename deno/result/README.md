# Rust-inspired `Result<T, E>` type

Original implementation: <https://doc.rust-lang.org/std/result/enum.Result.html>

`Result<T, E>` is the type used for returning and propagating errors. The variants are `Ok(T)`, representing success and containing a value, and `Err(E)`, representing error and containing an error value.

You could consider using `Result` for:

-   Return value whenever errors are expected and recoverable

```typescript
function getIndex(values: string[], value: string): Result<number, string> {
  const index = values.indexOf(value)

  switch (index) {
    case -1:
      return Err("Value not found")
    default:
      return Ok(index)
  }
}

console.log(getIndex(["a", "b", "c"], "b")) // Ok(1)
console.log(getIndex(["a", "b", "c"], "z")) // Err("Value not found")

```

## Documentation

### `isOk() => boolean`

Returns `true` if the result is `Ok`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.isOk()) // true

```

```typescript
let x: Result<number, string> = Err("Error!")
console.log(x.isOk()) // false

```

### `isErr() => boolean`

Returns `true` if the result is `Err`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.isErr()) // false

```

```typescript
let x: Result<number, string> = Err("Error!")
console.log(x.isErr()) // true

```

### `ok() => Option<T>`

Converts from `Result<T, E>` to `Option<T>`.

Converts `self` into an `Option<T>`, consuming `self`, and discarding the error, if any.

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.ok()) // Some(2)

```

```typescript
let x: Result<number, string> = Err("Nothing here")
console.log(x.ok()) // None

```

### `err() => Option<E>`

Converts from `Result<T, E>` to `Option<E>`.

Converts `self` into an `Option<E>`, consuming `self`, and discarding the success, if any.

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.err()) // None

```

```typescript
let x: Result<number, string> = Err("Nothing here")
console.log(x.err()) // Some("Nothing here")

```

### `unwrap() => T`

Unwraps and returns `T` on `Ok<T>`.

In general, because this function may throw, its use is discouraged.
Instead, try to use `match` to handle the `Ok` and `Err` cases explicitly.

#### Throws

Throws a `ReferenceError` if called on `Err`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.unwrap()) // 2

```

```typescript
let x: Result<number, string> = Err("Nothing here")
console.log(x.unwrap()) // throws ReferenceError

```

**NOTE:** You can use `isOk()` to check whether the result is an `Ok`.
This will compile and enable you to use `unwrap()` in the `true` / success branch.

```typescript
function printIndex(index: Result<number, string>): number | string {
  if (isOk(index)) {
    return index.unwrap()
  } else {
    return index.unwrapErr()
  }
}
```

### `unwrapErr() => E`

Unwraps and returns `E` on `Err<E>`.

In general, because this function may throw, its use is discouraged.
Instead, try to use `match` to handle the `Ok` and `Err` cases explicitly.

#### Throws

Throws a `ReferenceError` if called on `Ok`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.unwrapErr()) // throws ReferenceError

```

```typescript
let x: Result<number, string> = Err("Nothing here")
console.log(x.unwrapErr()) // "Nothing here"

```

**NOTE:** You can use `isErr()` to check whether the result is an `Err`.
This will compile and enable you to use `unwrapErr()` in the `true` / success branch.

```typescript
function printIndex(index: Result<number, string>): number | string {
  if (isErr(index)) {
    return index.unwrapErr()
  } else {
    return index.unwrap()
  }
}
```

### `unwrapOr(optb: T) => T`

Unwraps and returns `T`, if called on `Ok`, otherwise returns `optb: T`.

#### Examples

```typescript
let x = Ok("bike")
console.log(x.unwrapOr("car")) // "bike"

```

```typescript
let x = Err("baloon")
console.log(x.unwrapOr("air")) // "air"

```

### `map<U>(fn: (val: T) => U): Result<U, E>`

Maps a `Result<T, E>` to `Result<U, E>` by applying a function to a contained `Ok` value, leaving an `Err` value untouched.

#### Examples

```typescript
let x: Result<number, never> = Ok(123)
let y: Result<string, never> = x.map(val => val.toString())

console.log(x.unwrap()) // 123
console.log(y.unwrap()) // "123"

```

```typescript
let x: Result<string, string> = Err("123")
let y: Result<number, string> = x.map(parseInt)

console.log(x.unwrapErr()) // "123"
console.log(y.unwrapErr()) // "123"

```

### `mapErr<U>(fn: (err: T) => U): Result<T, U>`

Maps a `Result<T, E>` to `Result<T, E>` by applying a function to a contained `Err` value, leaving an `Ok` value untouched.

#### Examples

```typescript
let x: Result<number, never> = Err("error")
let y: Result<string, never> = x.mapErr(err => err.toUpperCase())

console.log(x.unwrapErr()) // "error"
console.log(y.unwrapErr()) // "ERROR"

```

```typescript
let x: Result<string, string> = Ok("value")
let y: Result<number, string> = x.mapErr(val => val.toUpperCase())

console.log(x.unwrap()) // "value"
console.log(y.unwrap()) // "value"

```

### `andThen(fn: (val: T) => Result<U, E>): Result<U, E>`

Calls `fn` if the result is `Ok`, otherwise returns the `Err` value of self. This function can be used for control flow based on `Result` values.

#### Examples

```typescript
const sq = (x: number) => Ok(x * x)
const err = (x: number) => Err(x)

console.log(Ok(2).andThen(sq).andThen(sq)) // Ok(16)
console.log(Ok(2).andThen(sq).andThen(err)) // Err(4)
console.log(Ok(2).andThen(err).andThen(sq)) // Err(2)
console.log(Err(3).andThen(sq).andThen(sq)) // Err(3)

```

### `match(p: MatchPattern<O, E, T>): T`

```typescript
type MatchPattern<O, E, T> = {
  ok: (val: O) => T
  err: (val: E) => T
}

```

Applies a functions to retrieve contained values within a `Result`.

#### Examples

```typescript
const getFullYear = (date: Result<Date, string>): number => date.match({
  ok: val => val.getFullYear(),
  err: _ => 1994
})

const okDate = Ok(new Date())
const errDate = Err("Invalid Date")

console.log(getFullYear(okDate)) // 2017
console.log(getFullYear(errDate)) // 1994

```

## Appendix

### Typing in action

```typescript
const getFullYear = (date: Result<Date, string>): number => date.match({
  ok: val => val.getFullYear(),
  err: _ => "1994" // Error: Type 'string | number' is not assignable to type 'number'.
})

```
