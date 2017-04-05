import { None, Option, Some } from '../..';

export const divide = (numerator:number, denominator:number):Option<number> => {
    if (denominator === 0) {
        return None
    } else {
        return Some(numerator / denominator)
    }
};

// The return value of the function is an option
let result = divide(2.0, 3.0);

// Pattern match to retrieve the value
result.match({
    some: _ => console.log(`Result: ${_}`),
    none: () => console.log("Cannot divide by 0"),
});


