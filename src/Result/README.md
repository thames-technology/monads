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

### `ok() => T`

Unwraps and returns `T` on `Ok<T>`.

In general, because this function may throw, its use is discouraged.
Instead, try to use `match` to handle the `Ok` and `Err` cases explicitly.

#### Throws

Throws a `ReferenceError` if called on `Err`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.ok()) // 2
```

```typescript
let x: Result<number, string> = Err('Nothing here')
console.log(x.ok()) // throws ReferenceError
```

**NOTE:** You can use `is_ok()` to check whether the result is an `Ok`.
This will compile and enable you to use `ok()` in the `true` / success branch.

```typescript
const printIndex = (index: Result<string, string>): string => {
    if (is_ok(index)) {
        return index.ok()
    } else {
        return index.err()
    }
}
```

### `err() => E`

Unwraps and returns `E` on `Err<E>`.

In general, because this function may throw, its use is discouraged.
Instead, try to use `match` to handle the `Ok` and `Err` cases explicitly.

#### Throws

Throws a `ReferenceError` if called on `Ok`.

#### Examples

```typescript
let x: Result<number, string> = Ok(2)
console.log(x.err()) // throws ReferenceError
```

```typescript
let x: Result<number, string> = Err('Nothing here')
console.log(x.err()) // 'Nothing here'
```

**NOTE:** You can use `is_err()` to check whether the result is an `Err`.
This will compile and enable you to use `err()` in the `true` / success branch.

```typescript
const printIndex = (index: Result<string, string>): string => {
    if (is_err(index)) {
        return index.err()
    } else {
        return index.ok()
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

console.log(x.ok()) // 123
console.log(y.ok()) // '123'
```

```typescript
const x: Result<string, string> = Err('123'),
      y: Result<number, string> = x.map(parseInt)

console.log(x.err()) // '123'
console.log(y.err()) // '123'
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
