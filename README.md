[![CircleCI](https://circleci.com/gh/litchi-io/monads.svg?style=svg)](https://circleci.com/gh/litchi-io/monads)
[![codecov](https://codecov.io/gh/litchi-io/monads/branch/master/graph/badge.svg)](https://codecov.io/gh/litchi-io/monads)
[![npm version](https://img.shields.io/npm/v/@usefultools/monads.svg)](https://www.npmjs.com/package/@usefultools/monads)
[![GuardRails](https://badges.production.guardrails.io/litchi-io/monads.svg)](https://www.guardrails.io)
[![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/litchi-io/monads/blob/master/SECURITY.md)

# Monads

Type safe [Option](https://doc.rust-lang.org/std/option/enum.Option.html) and [Result](https://doc.rust-lang.org/std/result/enum.Result.html) types – inspired by Rust.

## Prereqs & Install

* Node >=9.10.0
* npm >=6.1.0

Please note that the **TypeScript target is ES6**.

```sh
npm install @usefultools/monads
```

## Documentation

- [Option Type](./src/Option)
- [Result Type](./src/Result)

## Usage

### `Option<T>`

See full `Option<T>` API documentation [here](./src/Option).

See `Option<T>` examples [here](./src/Option/examples).

```typescript
import { Option, Some, None } from "@usefultools/monads"

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

See full `Result<T, E>` API documentation [here](./src/Result).

See `Result<T, E>` examples [here](./src/Result/examples).

```typescript
import { Result, Ok, Err } from "@usefultools/monads"

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

## Contributing

If you have comments, complaints, or ideas for improvements, feel free to open an issue or a pull request! See [Contributing guide](./CONTRIBUTING.md) for details about project setup, testing, etc.

## Author and license

This library was created by [@LITCHI.IO](https://github.com/litchi-io). Main author and maintainer is [Slavo Vojacek](https://github.com/slavovojacek).

Contributors: [Slavo Vojacek](https://github.com/slavovojacek)

`@usefultools/monads` is available under the ISC license. See the [LICENSE file](./LICENSE.txt) for more info.
