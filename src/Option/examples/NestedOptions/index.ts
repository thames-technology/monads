import { Option, Some, None } from '../..'

export const sq = (x: number): Option<number> => Some(x * x)
export const nope = (_: number): Option<number> => None

console.log(
  Some(2)
    .and_then(sq)
    .and_then(sq),
) // Returns: Some(16)
console.log(
  Some(2)
    .and_then(sq)
    .and_then(nope),
) // Returns: None
console.log(
  Some(2)
    .and_then(nope)
    .and_then(sq),
) // Returns: None
console.log(None.and_then(sq).and_then(sq)) // Returns: None

export interface Vehicle {
  driver: Option<{ contact: Option<{ name: Option<string> }> }>
}

export const getDriverName = (vehicle: Vehicle): Option<string> => {
  return vehicle.driver.and_then(val => val.contact).and_then(val => val.name)
}

console.log(
  getDriverName({ driver: Some({ contact: Some({ name: Some('John') }) }) }),
) // Returns: Some('John')
console.log(getDriverName({ driver: Some({ contact: Some({ name: None }) }) })) // Returns: None
console.log(getDriverName({ driver: Some({ contact: None }) })) // Returns: None
console.log(getDriverName({ driver: None })) // Returns: None
