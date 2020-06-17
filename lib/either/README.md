# Rust-inspired `Either<L, R>` type

Original implementation: <https://docs.rs/either/1.5.3/either/enum.Either.html>

`Either` with variants `Left` and `Right` is a general purpose sum type with two cases.

The `Either` type is symmetric and treats its variants the same way, without preference. For representing success or error, use [`Result<T, E>`](../result) instead.

```typescript
import { Either } from "@hqoss/monads"

function getLabel(uncertainDate: Either<Date, string>) {
  return uncertainDate.match({
    left: date => date.toLocaleDateString(),
    right: text => `<abbr title="${text}">an uncertain date</abbr>`,
  })
}
```

⚠️ Documentation for this module will be added shortly. Thanks for your patience.
