`Either` with variants `Left` and `Right` is a general purpose sum type with two cases.

The `Either` type is symmetric and treats its variants the same way, without preference. For representing success or error, use [`Result<T, E>`](../result) instead.

```typescript
import { Either } from '@thames/monads';

const getLabel = (uncertainDate: Either<Date, string>): string => {
  return uncertainDate.match({
    left: (date) => date.toLocaleDateString(),
    right: (text) => `<abbr title="${text}">an uncertain date</abbr>`,
  });
};
```

Original implementation: <https://docs.rs/either/1.6.1/either/enum.Either.html>
