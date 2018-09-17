import { Err, Result, Ok } from "../Result"

export async function map_async<T, E = any>(p: Promise<T>): Promise<Result<T, E>> {
  return p.then(Ok).catch(e => Err<T, E>(e))
}
