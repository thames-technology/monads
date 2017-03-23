# Rust-inspired Option and Result type

[![CircleCI](https://circleci.com/gh/Threestup/monads.svg?style=svg)](https://circleci.com/gh/Threestup/monads)

**NOTE:** Only works with TypeScript 2.1+. Enabling `strictNullChecks` is strongly recommended.

## Install

```
yarn add tsp-monads
```

## Basic Usage

```javascript
import { Option, Some, None } from 'tsp-monads'

let a:Option<number>;

a = Some(1);
a = None;
...
```

```javascript
import { Result, Ok, Err } from 'tsp-monads'

let a:Result<string, string>;

a = Ok('a');
a = Err('b');
...
```

## Documentation

- [Option Type](https://github.com/threestup/monads/tree/master/src/Option)
- [Result Type](https://github.com/threestup/monads/tree/master/src/Result)
