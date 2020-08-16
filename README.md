![Node.js CI](https://github.com/hqoss/monads/workflows/Node.js%20CI/badge.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/afa382493ae441b3824f4d409438d90b)](https://www.codacy.com/gh/hqoss/monads?utm_source=github.com&utm_medium=referral&utm_content=hqoss/monads&utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/afa382493ae441b3824f4d409438d90b)](https://www.codacy.com/gh/hqoss/monads?utm_source=github.com&utm_medium=referral&utm_content=hqoss/monads&utm_campaign=Badge_Coverage)
[![GuardRails badge](https://badges.guardrails.io/hqoss/monads.svg?token=14bca43cc8b71d3659ac85cfb0bf590ca88a6d9f09216c2aff0d1b870de404ee&provider=github)](https://dashboard.guardrails.io/gh/hqoss/36606)
![npm](https://img.shields.io/npm/v/@hqoss/monads)

# 👻 Monads

Type safe Option, Result, and Either types; inspired by Rust.

## Table of contents

-   [⏳ Install](#-install)

    -   [Deno](#deno)
    -   [Node.js and the Browser](#nodejs-and-the-browser)

-   [📝 Usage](#-usage)

    -   [`Option<T>`](#optiont)
    -   [`Result<T, E>`](#resultt-e)
    -   [`Either<L, R>`](#eitherl-r)
    -   [API Docs](#api-docs)

-   [Core design principles](#core-design-principles)

-   [Node version support](#node-version-support)

    -   [Why ES2018](#why-es2018)

-   [Testing](#testing)

-   [TODO](#todo)

## ⏳ Install

### Deno

```typescript
import { Some } from "https://deno.land/x/monads/mod.ts"

const air = Some("air").unwrapOr("baloon")

console.log(air) // "air"
```

### Node.js and the Browser

```bash
npm install @hqoss/monads
```

**⚠️ NOTE:** The project is configured to target `ES2018` and the library uses `commonjs` module resolution. Read more in the [Node version support](#node-version-support) section.

## 📝 Usage

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

### API Docs

[See full API Documentation here](docs/globals.md).

## Core design principles

-   **Code quality**; This package may end up being used in mission-critical software, so it's important that the code is performant, secure, and battle-tested.

-   **Developer experience**; Developers must be able to use this package with no significant barriers to entry. It has to be easy-to-find, well-documented, and pleasant to use.

-   **Modularity & Configurability**; It's important that users can compose and easily change the ways in which they consume and work with this package.

## Node version support

The project is configured to target ES2018. In practice, this means consumers should run on Node 12 or higher, unless additional compilation/transpilation steps are in place to ensure compatibility with the target runtime.

Please see <https://node.green/#ES2018> for reference.

### Why ES2018

Firstly, according to the official [Node release schedule](https://github.com/nodejs/Release), Node 12.x entered LTS on 2019-10-21 and is scheduled to enter Maintenance on 2020-10-20. With the End-of-Life scheduled for April 2022, we are confident that most users will now be running 12.x or higher.

Secondly, the [7.3 release of V8](https://v8.dev/blog/v8-release-73) (ships with Node 12.x or higher) includes "zero-cost async stack traces".

From the release notes:

> We are turning on the --async-stack-traces flag by default. Zero-cost async stack traces make it easier to diagnose problems in production with heavily asynchronous code, as the error.stack property that is usually sent to log files/services now provides more insight into what caused the problem.

## Testing

[Ava](https://github.com/avajs/ava) and [Jest](https://jestjs.io/) were considered. Jest was chosen as it is very easy to configure and includes most of the features we need out-of-the-box.

Further investigation will be launched in foreseeable future to consider moving to Ava.

We prefer using [Nock](https://github.com/nock/nock) over mocking.

## TODO

A quick and dirty tech debt tracker before we move to Issues.

-   [ ] Write a **Contributing** guide
-   [ ] Complete testing section, add best practices
-   [ ] Describe scripts and usage, add best practices
-   [ ] Add typespec and generate docs
-   [ ] Describe security best practices, e.g. `npm doctor`, `npm audit`, `npm outdated`, `ignore-scripts` in `.npmrc`, etc.
-   [ ] Add "Why should I use this" section
