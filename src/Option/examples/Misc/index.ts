import { Option } from "../.."

export const getName = (first: Option<string>, last: Option<string>): Option<string> => {
  return first.map(fN =>
    last.match({
      some: lN => `${fN} ${lN}`,
      none: fN,
    }),
  )
}

export interface FullName {
  firstName: string
  lastName: string
}

export const getFullName = (first: Option<string>, last: Option<string>): Option<FullName> => {
  return first.and_then(firstName => last.map(lastName => ({ firstName, lastName })))
}
