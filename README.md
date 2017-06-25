# Type safe Option and Result type

Inspired by Rust

[![CircleCI](https://img.shields.io/circleci/project/github/Threestup/monads.svg)](https://circleci.com/gh/Threestup/monads)
![Codecov](https://img.shields.io/codecov/c/github/Threestup/monads.svg)
[![npm version](https://img.shields.io/npm/dm/tsp-monads.svg)](https://www.npmjs.com/package/tsp-monads)
[![npm version](https://img.shields.io/npm/v/tsp-monads.svg)](https://www.npmjs.com/package/tsp-monads)

**NOTE:** Works with TypeScript 2.1+ and JavaScript. `strictNullChecks` option / flag is strongly recommended.

## Documentation

- [Option Type](https://github.com/threestup/monads/tree/master/src/Option)
- [Result Type](https://github.com/threestup/monads/tree/master/src/Result)

## Install

```
yarn add tsp-monads
```

## Basic Usage

```typescript
import { Option, Some, None } from 'tsp-monads'

const divide = (numerator: number, denominator: number): Option<number> => {
    if (denominator === 0) {
        return None
    } else {
        return Some(numerator / denominator)
    }
};

// The return value of the function is an option
const result = divide(2.0, 3.0);

// Pattern match to retrieve the value
const message = result.match({
    some: _ => `Result: ${_}`,
    none: 'Cannot divide by 0',
});

console.log(message); // 'Result: 0.6666666666666666'
```

```typescript
import { Result, Ok, Err } from 'tsp-monads'

function getIndex(values: string[], value: string): Result<number, string> {
    const index = values.indexOf(value);
    
    switch (index) {
        case -1:
            return Err('Value not found');
       default:
            return Ok(index);
    }
}

console.log(getIndex(['a', 'b', 'c'], 'b')); // Ok(1)
console.log(getIndex(['a', 'b', 'c'], 'z')); // Err('Value not found')
...
```

## Documentation

- [Option Type](https://github.com/threestup/monads/tree/master/src/Option)
- [Result Type](https://github.com/threestup/monads/tree/master/src/Result)
