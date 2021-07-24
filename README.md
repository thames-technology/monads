![Node.js CI](https://github.com/sniptt-official/monads/workflows/ci/badge.svg)
![npm](https://img.shields.io/npm/v/@sniptt/monads)

<p align="center">
  <a href="https://sniptt.com">
    <img src=".github/assets/monads-social-cover.svg" alt="Monads Logo" />
  </a>
</p>

<p align="center"><b>Option, Result, and Either types for TypeScript</b></p>
<p align="center">Inspired by Rust</p>

## Install

### Node.js and the browser

```bash
npm install @sniptt/monads
```

This project is configured to target `ES2020` and the library uses `commonjs` module resolution.

See <https://node.green/#ES2020> for reference.

### Deno

```typescript
import { Some } from "https://deno.land/x/monads/mod.ts"

Some("air").unwrapOr("baloon") // "air"
None.unwrapOr("baloon") // "baloon"
```

## Usage

### `Option<T>`

[See full documentation](./lib/option)

```typescript
import { Option, Some, None } from "@hqoss/monads"

function divide(numerator: number, denominator: number): Option<number> {
  if (denominator === 0) {
    return None
  } else {
    return Some(numerator / denominator)
  }
};

// The return value of the function is an option
const result = divide(2.0, 3.0)

// Pattern match to retrieve the value
const message = result.match({
  some: res => `Result: ${res}`,
  none: "Cannot divide by 0",
})

console.log(message) // "Result: 0.6666666666666666"
```

### `Result<T, E>`

[See full documentation](./lib/result)

```typescript
import { Result, Ok, Err } from "@hqoss/monads"

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

### `Either<L, R>`

[See full documentation](./lib/either)

```typescript
import { Either } from "@hqoss/monads"

function getLabel(uncertainDate: Either<Date, string>) {
  return uncertainDate.match({
    left: date => date.toLocaleDateString(),
    right: text => `<abbr title="${text}">an uncertain date</abbr>`,
  })
}
```

## API Docs

[See full API Documentation here](docs/README.md).

## License

See [LICENSE](LICENSE)
