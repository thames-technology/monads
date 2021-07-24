![Node.js CI](https://github.com/sniptt-official/monads/workflows/ci/badge.svg)

<!-- [![Codacy Badge](https://app.codacy.com/project/badge/Grade/afa382493ae441b3824f4d409438d90b)](https://www.codacy.com/gh/hqoss/monads?utm_source=github.com\&utm_medium=referral\&utm_content=hqoss/monads\&utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/afa382493ae441b3824f4d409438d90b)](https://www.codacy.com/gh/hqoss/monads?utm_source=github.com\&utm_medium=referral\&utm_content=hqoss/monads\&utm_campaign=Badge_Coverage)
[![GuardRails badge](https://badges.guardrails.io/hqoss/monads.svg?token=14bca43cc8b71d3659ac85cfb0bf590ca88a6d9f09216c2aff0d1b870de404ee\&provider=github)](https://dashboard.guardrails.io/gh/hqoss/36606) -->

![npm](https://img.shields.io/npm/v/@sniptt/monads)

# Monads

`Option`, `Result`, and `Either` types for TypeScript; Inspired by Rust.

## Install

### Node.js and the browser

```bash
npm install @sniptt/monads
```

**⚠️ NOTE:** The project is configured to target `ES2020` and the library uses `commonjs` module resolution. Read more in the [Node version support](#node-version-support) section.

### Deno

```typescript
import { Some } from "https://deno.land/x/monads/mod.ts"

const air = Some("air").unwrapOr("baloon")

console.log(air) // "air"
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

## Node version support

The project is configured to target ES2020. In practice, this means consumers should run on Node 14 or higher, unless additional compilation/transpilation steps are in place to ensure compatibility with the target runtime.

Please see <https://node.green/#ES2020> for reference.

## TODO

A quick and dirty tech debt tracker before we move to Issues.

*   \[ ] Write a **Contributing** guide
*   \[ ] Complete testing section, add best practices
*   \[ ] Describe scripts and usage, add best practices
*   \[ ] Describe security best practices, e.g. `npm doctor`, `npm audit`, `npm outdated`, `ignore-scripts` in `.npmrc`, etc.
*   \[ ] Add "Why should I use this" section
