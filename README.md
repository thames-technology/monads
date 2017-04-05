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

function getFullYear(date:Option<Date>):number {
    return date.match({
        some: (_) => _.getFullYear(),
        none: 1994
    });
}

console.log(getFullYear(Some(new Date()))); // 2017
console.log(getFullYear(None)); // 1994
```

```typescript
import { Result, Ok, Err } from 'tsp-monads'

function getIndex(values:string[], value:string):Result<number, string> {
    const index = values.indexOf(value);
    
    switch (index) {
        case -1:
            return Err('Value not found');
       default:
            return Ok(index);
    }
}

console.log(getIndex([1], 1)); // _Ok(_: 0)
console.log(getIndex([1], 10)); // _Err(_: "Value not found")
...
```

## Documentation

- [Option Type](https://github.com/threestup/monads/tree/master/src/Option)
- [Result Type](https://github.com/threestup/monads/tree/master/src/Result)
