import { None, Option, Some } from "../../main"

function sq(x: number): Option<number> {
  return Some(x * x)
}

function nope(_: number): Option<number> {
  return None
}

Some(2)
  .and_then(sq)
  .and_then(sq) // Returns: Some(16)

Some(2)
  .and_then(sq)
  .and_then(nope) // Returns: None

Some(2)
  .and_then(nope)
  .and_then(sq) // Returns: None

None.and_then(sq).and_then(sq) // Returns: None

interface Vehicle {
  driver: Option<{ contact: Option<{ name: Option<string> }> }>
}

function getDriverName(vehicle: Vehicle): Option<string> {
  return vehicle.driver.and_then((val) => val.contact).and_then((val) => val.name)
}

getDriverName({ driver: Some({ contact: Some({ name: Some("John") }) }) }) // Returns: Some('John')
getDriverName({ driver: Some({ contact: Some({ name: None }) }) }) // Returns: None
getDriverName({ driver: Some({ contact: None }) }) // Returns: None
getDriverName({ driver: None }) // Returns: None

export { nope, sq }
