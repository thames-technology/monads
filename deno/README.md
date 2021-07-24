<p align="center">
  <a href="https://sniptt.com">
    <img src=".github/assets/monads-social-cover.svg" alt="Monads Logo" />
  </a>
</p>

<p align="right">
  <i>If you use this repo, star it ✨</i>
</p>

***

<p align="center">👻 <b>Option, Result, and Either types for JavaScript</b></p>

<p align="center">Inspired by Rust</p>

***

## Install

### Node.js and the browser

```bash
npm install @sniptt/monads
```

### Deno

```typescript
import { Some } from 'https://deno.land/x/monads/mod.ts'

Some('air').unwrapOr('baloon') // "air"
None.unwrapOr('baloon') // "baloon"
```

## Usage

### `Option<T>`

#### [Full documentation](lib/option)

```typescript
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

#### [Full documentation](lib/result)

```typescript
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

### `Either<L, R>`

#### [Full documentation](lib/either)

```typescript
import { Either } from '@sniptt/monads';

const getLabel = (uncertainDate: Either<Date, string>): string => {
  return uncertainDate.match({
    left: date => date.toLocaleDateString(),
    right: text => `<abbr title="${text}">an uncertain date</abbr>`,
  });
};
```

## API Docs

[Full API Documentation](docs/README.md).

## License

See [LICENSE](LICENSE)
