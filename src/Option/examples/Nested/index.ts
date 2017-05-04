import { Option, Some, None } from '../..';

const sq = (x: number): Option<number> => Some(x * x);
const nope = (_: number): Option<number> => None;

console.log(Some(2).and_then(sq).and_then(sq)); // Returns: Some(16)
console.log(Some(2).and_then(sq).and_then(nope)); // Returns: None
console.log(Some(2).and_then(nope).and_then(sq)); // Returns: None
console.log(None.and_then(sq).and_then(sq)); // Returns: None
