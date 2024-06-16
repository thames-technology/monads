Type `Option<T>` represents an optional value: every `Option` is either `Some` and contains a value, or `None`, and does not.

You could consider using `Option` for:

- Nullable pointers (`undefined` in JavaScript)
- Return value for otherwise reporting simple errors, where None is returned on error
- Default values and/or properties
- Nested optional object properties

`Option`s are commonly paired with pattern matching to query the presence of a value and take action, always accounting for the `None` case.

```typescript
import { Option, Some, None } from '@thames/monads';

function divide(numerator: number, denominator: number): Option<number> {
  if (denominator === 0) {
    return None;
  } else {
    return Some(numerator / denominator);
  }
}

// The return value of the function is an option
const result = divide(2.0, 3.0);

// Pattern match to retrieve the value
const message = result.match({
  some: (res) => `Result: ${res}`,
  none: 'Cannot divide by 0',
});

console.log(message); // "Result: 0.6666666666666666"
```

Original implementation: <https://doc.rust-lang.org/std/option/enum.Option.html>
