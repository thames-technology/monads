import { Result, Ok, Err } from "../.."

export const getIndex = (values: string[], value: string): Result<number, string> => {
  const index = values.indexOf(value)

  switch (index) {
    case -1:
      return Err("Value not found")
    default:
      return Ok(index)
  }
}

console.log(getIndex(["a", "b", "c"], "b")) // Ok(1)
console.log(getIndex(["a", "b", "c"], "z")) // Err('Value not found')
