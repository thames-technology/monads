# Rust-inspired Option and Result type

**NOTE:** Only works with TypeScript 2.1+ and `"strictNullChecks": true`

## Install

```
yarn add tsp-monads
```

## Basic Usage

```javascript
import { Result, Ok, Err } from './lib/utils'

let a:Result<string, string>;

a = Ok('a');
a = Err('b');
...
```
