import { expect } from 'chai';
import { getDriverName } from '.';

describe('Nested Optional Object Properties', () => {
  it('returns None when key doesn\'t lead to a value', () => {
    let subject = getDriverName({driver: {}});
    expect(subject.is_none()).to.equal(true);

    subject = getDriverName({driver: {contact: {}}});
    expect(subject.is_none()).to.equal(true);
  });

  it('returns Some(\'John\') when key leads to a value', () => {
    const subject = getDriverName({driver: {contact: {name: 'John'}}});
    expect(subject.is_some()).to.equal(true);
    expect(subject.unwrap_or('N/A')).to.equal('John');
  });
});
