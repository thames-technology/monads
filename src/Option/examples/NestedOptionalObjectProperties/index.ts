import { Option, get_in } from '../..';

export interface Car {
  driver?: {
    contact?: {
      name?: string
    }
  }
}

export const getDriverName = (car: Car): Option<string> => {
  return get_in(car, 'driver.contact.name');
};

console.log(getDriverName({driver: {}})); // Returns: None
console.log(getDriverName({driver: {contact: {}}})); // Returns: None
console.log(getDriverName({driver: {contact: {name: 'John'}}})); // Returns: Some('John')
