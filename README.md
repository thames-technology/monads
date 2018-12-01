[![CircleCI](https://circleci.com/gh/litchi-io/monads.svg?style=svg)](https://circleci.com/gh/litchi-io/monads)
[![codecov](https://codecov.io/gh/litchi-io/monads/branch/master/graph/badge.svg)](https://codecov.io/gh/litchi-io/monads)
[![npm version](https://img.shields.io/npm/v/@usefultools/monads.svg)](https://www.npmjs.com/package/@usefultools/monads)
[![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/litchi-io/monads/blob/master/SECURITY.md)

# Type safe Option and Result type

Inspired by Rust.

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

## Basic Usage

```typescript
import { Option, Some, None } from '@threestup/monads'

const divide = (numerator: number, denominator: number): Option<number> => {
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
    none: 'Cannot divide by 0',
})

console.log(message) // 'Result: 0.6666666666666666'
```

```typescript
import { Result, Ok, Err } from '@threestup/monads'

function getIndex(values: string[], value: string): Result<number, string> {
    const index = values.indexOf(value)
    
    switch (index) {
        case -1:
            return Err('Value not found')
       default:
            return Ok(index)
    }
}

console.log(getIndex(['a', 'b', 'c'], 'b')) // Ok(1)
console.log(getIndex(['a', 'b', 'c'], 'z')) // Err('Value not found')
...
```

## Documentation

- [Option Type](./src/Option)
- [Result Type](./src/Result)
