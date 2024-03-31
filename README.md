<p align="center">
  <a href="https://sniptt.com">
    <img src=".github/assets/monads-social-cover.svg" alt="Monads Logo" />
  </a>
</p>

<p align="right">
  <i>If you use this repo, star it ✨</i>
</p>

***

<h1 align="center">Option, Result, and Either types for JavaScript</h1>

<p align="center">
  🦀 Inspired by <a href="https://doc.rust-lang.org/stable/std/option/" target="_blank">Rust</a>
</p>

<p align="center">
  <b>Zero dependencies</b> • <b>Lightweight</b> • <b>Functional</b>
</p>

***

## Install

```sh
npm install @sniptt/monads
```

## Getting started

### `Option<T>`

> [!NOTE]
> Full documentation here: [Option](docs/interfaces/Option.html)

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
  some: res => `Result: ${res}`,
  none: 'Cannot divide by 0',
});

console.log(message); // "Result: 0.6666666666666666"
```

### `Result<T, E>`

> [!NOTE]
> Full documentation here: [Result](docs/interfaces/Result.html)

```ts
import { Result, Ok, Err } from "@sniptt/monads";

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

## License

See [LICENSE](LICENSE)
