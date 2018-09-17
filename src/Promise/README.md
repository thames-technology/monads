# Convenience helper `map_async` for converting `Promise<T>` to `Promise<Result<T, E = any>>`

say goodbye to try/catch blocks, when working with promises

```ts
import { Ok, Err, Result, map_async } from "@threestup/monads"

enum Error {
  FetchError,
  DataParseError
}

async function fetchData(url: string): Promise<Result<String, Error>> {
  const response = await map_async(fetch("https://example.org"))
  if (response.is_err()) {
    return Err(Error.FetchError)
  }

  const data = response.unwrap().text()
  const parsed = parse_data(data)
  if (parsed.is_err()) {
    return Err(Error.DataParseError)
  }

  return Ok(parsed.unwrap())
}
```
