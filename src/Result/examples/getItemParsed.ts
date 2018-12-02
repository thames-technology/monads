import { isString } from "@usefultools/utils"
import { Err, Ok, Result } from "../main"
import { Context } from "./types"

function getItemParsed<T>(key: string, ctx: Context): Result<T, string> {
  const item = ctx.storage.getItem(key)

  if (isString(item)) {
    try {
      const parsed = JSON.parse(item) as T
      return Ok(parsed)
    } catch (err) {
      return Err(err.message)
    }
  } else {
    return Err(`Key ${key} not found`)
  }
}

export default getItemParsed
