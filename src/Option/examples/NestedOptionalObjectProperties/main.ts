import { get_in, Option } from "../../main"

interface Car {
  driver?: {
    contact?: {
      name?: string
    }
  }
}

function getDriverName(car: Car): Option<string> {
  return get_in(car, "driver.contact.name")
}

getDriverName({ driver: {} }) // Returns: None
getDriverName({ driver: { contact: {} } }) // Returns: None
getDriverName({ driver: { contact: { name: "John" } } }) // Returns: Some('John')

export { Car, getDriverName }
