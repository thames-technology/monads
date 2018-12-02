import { Err, Ok, Result } from "../main"

function getIndex(values: string[], value: string): Result<number, string> {
  const index = values.indexOf(value)

  switch (index) {
    case -1:
      return Err("Value not found")
    default:
      return Ok(index)
  }
}

export default getIndex
