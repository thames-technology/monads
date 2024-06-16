`Result<T, E>` is the type used for returning and propagating errors. The variants are `Ok(T)`, representing success and containing a value, and `Err(E)`, representing error and containing an error value.

You could consider using `Result` for:

- Return value whenever errors are expected and recoverable

```typescript
import { Result, Ok, Err } from '@thames/monads';

function getIndex(values: string[], value: string): Result<number, string> {
  const index = values.indexOf(value);

  switch (index) {
    case -1:
      return Err('Value not found');
    default:
      return Ok(index);
  }
}

console.log(getIndex(['a', 'b', 'c'], 'b')); // Ok(1)
console.log(getIndex(['a', 'b', 'c'], 'z')); // Err("Value not found")
```

Original implementation: <https://doc.rust-lang.org/std/result/enum.Result.html>
