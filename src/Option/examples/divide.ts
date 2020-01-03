import { None, Option, Some } from "../Option"

function divide(numerator: number, denominator: number): Option<number> {
  if (denominator === 0) {
    return None
  } else {
    return Some(numerator / denominator)
  }
}

// The return value of the function is an option
const result = divide(2.0, 3.0)

// Pattern match to retrieve the value, returns "Result: 0.6666666666666666"
result.match({
  some: (res) => `Result: ${res}`,
  none: "Cannot divide by 0",
})

export default divide
