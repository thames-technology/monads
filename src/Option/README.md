# Rust-inspired Option type

Consider this an attempt to eliminate `undefined` and `null` from our code.

**NOTE:** Only works with TypeScript 2.1+ and `"strictNullChecks": true`

## Basic Usage

```typescript
import { User } from './models/user'
import { Option } from './lib/utils'

export const getUserName = (user:Option<User>):string => {
    return user.match({
        some: (_) => `Your name is ${_.name}`,
        none: () => `Loading...`
    });
}
```

```typescript
import { Some } from './lib/utils'

export const getValue = (val?:{a:string}):string => {
    return Some(val).match({
        some: (_) => `The value is ${_.a}`,
        none: () => `N/A`
    });
}
```

## Documentation

### `Some`

You can wrap a value of any type in a `Some`:

```typescript
// Explicit
let x = Some(typeof 42);
let y = Some(7);

// Assigned
let x:Option<boolean>;
x = Some(false);

// When values are possibly undefined
function getValueByIndex(arr:string[], index:number):Option<string> {
    return Some(arr[index]);
}
```

**NOTE:** Try to avoid constructing `Some` with explicit `null` or `undefined`, it kind of defies the point:

```typescript
let x = Some(undefined); // Compiles, but meh.. don't use this please
let y = Some(null); // Compiles, but meh.. don't use this please
```

### `None`

```typescript
// Explicit
let x = None;

// Assigned
let x:Option<string>;
x = None;

// Invalid / Error examples
let x = None("Value"); // Error: Supplied parameters do not match any signature of call target.
```

### Using values inside an `Option`

You can access and use the value inside `Option` after you've _either_:

* [Pattern Matched](https://github.com/slavomirvojacek/TypeScriptUtils/tree/master/src/Option#using-match)
* [Provided a "fallback" value](https://github.com/slavomirvojacek/TypeScriptUtils/tree/master/src/Option#using-unwrap_or)
* [Performed an explicit check determining that an Option is a Some](https://github.com/slavomirvojacek/TypeScriptUtils/tree/master/src/Option#using-unwrap)

#### Using `match()`

```typescript
function getFullYear(date:Option<Date>):number {
    return date.match({
        some: (_) => _.getFullYear(),
        none: () => 1994
    });
}

console.log(getFullYear(Some(new Date()))); // 2017
console.log(getFullYear(None)); // 1994
```

Typing in action:

```typescript
function getFullYear(date:Option<Date>):number {
    return date.match({
        some: (_) => _.getFullYear(),
        none: () => '1994' // Error: Type 'string | number' is not assignable to type 'number'.
    });
}
```

#### Using `unwrap_or()`

```typescript
const
    a = Some("a"),
    b = None;

let x:string, y:number;

x = a.unwrap_or("b"); // Ok
x = a.unwrap_or(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

y = b.unwrap_or(42); // Ok
y = b.unwrap_or("Something Else"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

#### Using `unwrap()`

Because with `unwrap()` we don't explicitly provide any "fallback" value, we have to check if an `Option`
is a `Some` (e.g. it holds a value):

```typescript
function getSomethingUpper(val:Option<string>):string {
    let x:string;

    if (is_some(val)) {
        x = val.unwrap();
    } else {
        x = "Something Else";
    }

    return x.toUpperCase();
}
```

**NOTE:** You cannot use `unwrap()` without the `is_some()` check.

### Appendix

#### React examples

```typescript
import { gt, is } from 'ramda'
import * as React from 'react'
import { Option, Some, None } from './lib/utils'

interface IEmployment {
    yearFrom?:number;
    yearTo?:number;
    title?:string;
    employer?:string;
    description:string;
}

function hyphenate(...args:Option<string|number>[]):Option<string> {
    const vals = args
            .map(_ => _.match({
                some: (_) => _.toString().trim(),
                none: () => undefined
            }))
            .filter(_ => is(String, _));

    return gt(vals.length, 0) ? Some(vals.join(' – ')) : None;
}

const EmploymentComponent = (item:IEmployment) => (
    <section>
        {hyphenate(Some(item.yearFrom), Some(item.yearTo)).match({
            some: (_) => <small>{_}</small>,
            none: () => null
        })}
        
        <strong>
            {hyphenate(
                Some(item.title),
                Some(item.employer)                                        
            ).unwrap_or('N/A')}
        </strong>
        
        <p>{item.description}</p>
    </section>
);

export default EmploymentComponent;
```
