<p align="center">
  <a href="https://sniptt.com">
    <img src=".github/assets/monads-social-cover.svg" alt="Monads Logo" />
  </a>
</p>

<p align="right">
  <i>If you use this repo, star it ✨</i>
</p>

---

<h2 align="center">Option, Result, and Either types for JavaScript</h2>

<p align="center">
  🦀 Inspired by <a href="https://doc.rust-lang.org/stable/std/option/" target="_blank">Rust</a>
</p>

<p align="center">
  <b>Zero dependencies</b> • <b>Lightweight</b> • <b>Functional</b>
</p>

---

## Install

```sh
npm install @sniptt/monads
```

## Getting started

### The `Option<T>` type

Option represents an optional value: every Option is either Some and contains a value, or None, and does not.

> [!NOTE]
> Full documentation here: [Option](https://sniptt-official.github.io/monads/interfaces/Option.html)

```ts
import { Option, Some, None } from '@sniptt/monads';

const divide = (numerator: number, denominator: number): Option<number> => {
  if (denominator === 0) {
    return None;
  } else {
    return Some(numerator / denominator);
  }
};

// The return value of the function is an option
const result = divide(2.0, 3.0);

// Pattern match to retrieve the value
const message = result.match({
  some: (res) => `Result: ${res}`,
  none: 'Cannot divide by 0',
});

console.log(message); // "Result: 0.6666666666666666"
```

### The `Result<T, E>` type

Result represents a value that is either a success (Ok) or a failure (Err).

> [!NOTE]
> Full documentation here: [Result](https://sniptt-official.github.io/monads/interfaces/Result.html)

```ts
import { Result, Ok, Err } from '@sniptt/monads';

const getIndex = (values: string[], value: string): Result<number, string> => {
  const index = values.indexOf(value);

  switch (index) {
    case -1:
      return Err('Value not found');
    default:
      return Ok(index);
  }
};

const values = ['a', 'b', 'c'];

getIndex(values, 'b'); // Ok(1)
getIndex(values, 'z'); // Err("Value not found")
```

### The `Either<L, R>` type

Either represents a value that is either Left or Right. It is a powerful way to handle operations that can result in two distinctly different types of outcomes.

> [!NOTE]
> Full documentation here: [Either](https://sniptt-official.github.io/monads/interfaces/Either.html)

```ts
import { Either, Left, Right } from '@sniptt/monads';

const divide = (numerator: number, denominator: number): Either<string, number> => {
  if (denominator === 0) {
    return Left('Cannot divide by 0');
  } else {
    return Right(numerator / denominator);
  }
};

const result = divide(2.0, 3.0);

const message = result.match({
  left: (err) => `Error: ${err}`,
  right: (res) => `Result: ${res}`,
});

console.log(message); // "Result: 0.6666666666666666"
```
