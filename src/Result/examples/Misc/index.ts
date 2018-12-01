import { Err, is_ok, Ok, Result } from "../../main"

export const getIndex = (values: string[], value: string): Result<number, string> => {
  const index = values.indexOf(value)

  switch (index) {
    case -1:
      return Err("Value not found")
    default:
      return Ok(index)
  }
}

getIndex(["a", "b", "c"], "b") // Ok(1)
getIndex(["a", "b", "c"], "z") // Err('Value not found')

export const printIndex = (index: Result<number, string>): number | string => {
  if (is_ok(index)) {
    return index.unwrap()
  } else {
    return index.unwrap_err()
  }
}
