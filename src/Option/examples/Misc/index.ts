import { Option } from '../..';

const getName = (first: Option<string>, last: Option<string>):Option<string> => {
  return first.map(fN => last.match({
    some: lN => `${fN} ${lN}`,
    none: fN
  }));
};
