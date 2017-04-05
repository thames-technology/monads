import { None, Option, Some } from '../..';

export const divide = (numerator:number, denominator:number):Option<number> => {
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
    none: "Cannot divide by 0",
});

console.log(message); // Result: 0.6666666666666666
