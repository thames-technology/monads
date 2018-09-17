# Rust-inspired `Result` type

`Result<T, E>` is the type used for returning and propagating errors. The variants are `Ok(T)`, representing success and containing a value, and `Err(E)`, representing error and containing an error value.

You could consider using `Result` for:

- Return value whenever errors are expected and recoverable

```typescript
const getIndex = (values: string[], value: string): Result<number, string> => {
  const index = values.indexOf(value)

  switch (index) {
    case -1:
      return Err('Value not found')
    default:
      return Ok(index)
  }
}

console.log(getIndex(['a', 'b', 'c'], 'b')) // Ok(1)
console.log(getIndex(['a', 'b', 'c'], 'z')) // Err('Value not found')
```

## Documentation

### `is_ok() => boolean`

Returns `true` if the result is `Ok`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.is_ok()) // true
```

```typescript
let x: Result<number, string> = Err('Error!')
console.log(x.is_ok()) // false
```

### `is_err() => boolean`

Returns `true` if the result is `Err`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.is_err()) // false
```

```typescript
let x: Result<number, string> = Err('Error!')
console.log(x.is_err()) // true
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
let x: Result<number, string> = Err('Nothing here')
console.log(x.unwrap()) // throws ReferenceError
```

**NOTE:** You can use `is_ok()` to check whether the result is an `Ok`.
This will compile and enable you to use `ok()` in the `true` / success branch.

```typescript
const printIndex = (index: Result<string, string>): string => {
    if (is_ok(index)) {
        return index.unwrap()
    } else {
        return index.unwrap_err()
    }
}
```

### `unwrap_err() => E`

Unwraps and returns `E` on `Err<E>`.

In general, because this function may throw, its use is discouraged.
Instead, try to use `match` to handle the `Ok` and `Err` cases explicitly.

#### Throws

Throws a `ReferenceError` if called on `Ok`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.unwrap_err()) // throws ReferenceError
```

```typescript
let x: Result<number, string> = Err('Nothing here')
console.log(x.unwrap_err()) // 'Nothing here'
```

**NOTE:** You can use `is_err()` to check whether the result is an `Err`.
This will compile and enable you to use `err()` in the `true` / success branch.

```typescript
const printIndex = (index: Result<string, string>): string => {
    if (is_err(index)) {
        return index.unwrap_err()
    } else {
        return index.unwrap()
    }
}
```

### `ok_or(optb: T) => T`

Unwraps and returns `T`, if called on `Ok`, otherwise returns `optb: T`.

#### Examples

```typescript
let x = Ok('bike')
console.log(x.ok_or('car')) // 'bike'
```

```typescript
let x = Err('baloon')
console.log(x.ok_or('air')) // 'air'
```

### `map(fn: (val: T) => U): Result<U, E>`

Maps a `Result<T, E>` to `Result<U, E>` by applying a function to a contained `Ok` value, leaving an `Err` value untouched.

#### Examples

```typescript
const x: Result<number, never> = Ok(123),
      y: Result<string, never> = x.map(val => val.toString())

console.log(x.unwrap()) // 123
console.log(y.unwrap()) // '123'
```

```typescript
const x: Result<string, string> = Err('123'),
      y: Result<number, string> = x.map(parseInt)

console.log(x.unwrap_err()) // '123'
console.log(y.unwrap_err()) // '123'
```

### `map_err<U>(fn: (err: E) => U): Result<T, U>`

Maps a `Result<T, E>` to `Result<T, U>` by applying a function to a contained `Err` value, leaving an `Ok` value untouched.

#### Examples

```typescript
const x: Result<never, number> = Err(123),
      y: Result<never, string> = x.map_err(val => val.toString())

console.log(x.unwrap_err()) // 123
console.log(y.unwrap_err()) // '123'
```

```typescript
const x: Result<string, string> = Err('123'),
      y: Result<number, string> = x.map(parseInt)

console.log(x.unwrap_err()) // '123'
console.log(y.unwrap_err()) // '123'
```

### `and_then(fn: (val: T) => U): Result<U, E>`

Calls fn if the result is `Ok`, otherwise returns the `Err` value.

This function can be used for control flow based on Result values.

#### Examples

```typescript
function sq(x: u32): Result<u32, u32> { Ok(x * x) }
function err(x: u32): Result<u32, u32> { Err(x) }

Ok(2).and_then(sq).and_then(sq) // Ok(16)
Ok(2).and_then(sq).and_then(err) // Err(4)
Ok(2).and_then(err).and_then(sq) // Err(2)
Err(3).and_then(sq).and_then(sq) // Err(3)
```

### `match(p: MatchPattern<O, E, T>): T`

```typescript
interface MatchPattern<O, E, T> {
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
const errDate = Err('Invalid Date')

console.log(getFullYear(okDate)) // 2017
console.log(getFullYear(errDate)) // 1994
```

## Appendix

### Typing in action

```typescript
const getFullYear = (date: Result<Date, string>): number => date.match({
  ok: val => val.getFullYear(),
  err: _ => '1994' // Error: Type 'string | number' is not assignable to type 'number'.
})
```
