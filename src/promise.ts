import { Err, Result, Ok } from "./Result"

export const map_async = async <T, E = any>(p: Promise<T>): Promise<Result<T, E>> => {
  let err
  const result = await p.catch(e => (err = e))
  if (err !== undefined) {
    return Err(err)
  }
  return Ok(result)
}
