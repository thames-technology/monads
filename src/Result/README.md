# Rust-inspired `Result` type

`Result<T, E>` is the type used for returning and propagating errors. The variants are `Ok(T)`, representing success
and containing a value, and `Err(E)`, representing error and containing an error value.

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

### `ok() => Option<T>`

Converts from `Result<T, E>` to `Option<T>`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.ok()) // Some(2)
```

```typescript
let x: Result<number, string> = Err('Nothing here')
console.log(x.ok()) // None
```

### `err() => Option<E>`

Converts from `Result<T, E>` to `Option<E>`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.err()) // None
```

```typescript
let x: Result<number, string> = Err('Nothing here')
console.log(x.err()) // Some('Nothing here')
```

### `unwrap() => T`

Unwraps a result, yielding the content of an `Ok`.

In general, because this function may throw, its use is discouraged.
Instead, try to use `match` and handle the `Ok` and `Err` cases explicitly.

#### Throws

Throws a `ReferenceError` if the result is `Err`.

#### Examples

```typescript
let x = Ok('air')
console.log(x.unwrap()) // 'air'
```

```typescript
let x = Err('Panic!')
console.log(x.unwrap()) // fails, throws an Exception
```

**NOTE:** You can use `is_ok()` to check whether the result is an `Ok`.
This will enable you to use `unwrap()` in the `true` / success branch.

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

Unwraps a result, yielding the content of an `Err`.

In general, because this function may throw, its use is discouraged.
Instead, try to use `match` and handle the `Ok` and `Err` cases explicitly.

#### Throws

Throws a `ReferenceError` if the result is `Ok`.

#### Examples

```typescript
let x = Err('Expected error')
console.log(x.unwrap_err()) // 'Expected error'
```

```typescript
let x = Ok('Panic!')
console.log(x.unwrap_err()) // fails, throws an Exception
```

**NOTE:** You can use `is_err()` to check whether the result is an `Err`.
This will enable you to use `unwrap_err()` in the `true` / success branch.

```typescript
const printIndex = (index: Result<string, string>): string => {
    if (is_err(index)) {
        return index.unwrap_err()
    } else {
        return index.unwrap()
    }
}
```

### `unwrap_or(optb: T) => T`

Unwraps a result, yielding the content of an `Ok`. Else, it returns `optb`.

#### Examples

```typescript
console.log(Ok('palatable').unwrap_or('taste unknown')) // 'palatable'
console.log(Err('disgusting').unwrap_or('taste unknown')) // 'taste unknown'
```

### `map(fn: F): Result<U, E>`

Maps a `Result<T, E>` to `Result<U, E>` by applying a function to a contained `Ok` value, leaving an `Err` value untouched.

#### Examples

```typescript
const x: Result<number, string> = Ok(123),
      y: Result<string, string> = x.map(_ => _.toString())

console.log(y.is_ok()) // true
console.log(y.is_err()) // false
console.log(y.unwrap('N/A')) // '123'
```

```typescript
const x: Result<number, string> = Err('Not a number'),
      y: Result<string, string> = x.map(_ => _.toString())

console.log(y.is_ok()) // false
console.log(y.is_err()) // true
console.log(y.unwrap_err()) // 'Not a number'
```

### `match(p: MatchPattern<O, E, T>): T`

```typescript
interface MatchPattern<O, E, T> {
  ok: (_: O) => T
  err: (_: E) => T
}
```

Applies a functions to retrieve contained values within a `Result`.

#### Examples

```typescript
const getFullYear = (date: Result<Date, string>): number => date.match({
  ok: _ => _.getFullYear(),
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
  ok: _ => _.getFullYear(),
  err: _ => '1994' // Error: Type 'string | number' is not assignable to type 'number'.
})
```
