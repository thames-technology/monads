import { expect } from 'chai';
import { divide } from '.';

describe('Division', () => {
  it('returns Some(2) when 4 is divided by 2', () => {
    const subject = divide(4, 2);
    expect(subject.is_some()).to.equal(true);
    expect(subject.unwrap_or(0)).to.equal(2);
  });

  it('returns Some(2) when 4 is divided by 2', () => {
    const subject = divide(7, 3);
    expect(subject.is_some()).to.equal(true);
    expect(Math.abs(subject.unwrap_or(0) - 2.33) < 0.01).to.equal(true);
  });

  it('returns Some(2) when 5.0 is divided by 2.5', () => {
    const subject = divide(5.0, 2.5);
    expect(subject.is_some()).to.equal(true);
    expect(subject.unwrap_or(0)).to.equal(2);
  });

  it('returns None when 7 is divided by 0', () => {
    const subject = divide(10, 0);
    expect(subject.is_none()).to.equal(true);
  });
});
