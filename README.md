# Rust-inspired Option and Result type

[![CircleCI](https://circleci.com/gh/Threestup/monads.svg?style=svg)](https://circleci.com/gh/Threestup/monads)
[![npm version](https://badge.fury.io/js/tsp-monads.svg)](https://badge.fury.io/js/tsp-monads)

**NOTE:** Only works with TypeScript 2.1+. Enabling `strictNullChecks` is strongly recommended.

## Install

```
yarn add tsp-monads
```

## Basic Usage

```typescript
import { Option, Some, None } from 'tsp-monads'

const getFullYear = (date: Option<Date>): number => date.match({
    some: _ => _.getFullYear(),
    none: 1994
});

const someDate = Some(new Date());
const noDate = None;

console.log(getFullYear(someDate)); // 2017
console.log(getFullYear(noDate)); // 1994
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

console.log(getIndex([1, 2, 3], 2)); // Ok(1)
console.log(getIndex(['a', 'b', 'c'], 'd')); // Err('Value not found')
...
```

## Documentation

- [Option Type](https://github.com/threestup/monads/tree/master/src/Option)
- [Result Type](https://github.com/threestup/monads/tree/master/src/Result)
