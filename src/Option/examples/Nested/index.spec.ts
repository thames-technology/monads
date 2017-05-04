import { expect } from "chai";
import { Option, Some, None } from '../..';

describe("Nested Options", () => {
    const sq = (x: number): Option<number> => Some(x * x);
    const nope = (_: number): Option<number> => None;

    it("returns Some(16) when all Options in chain are Some", () => {

        const subject = Some(2).and_then(sq).and_then(sq);
        expect(subject.is_some()).to.equal(true);
        expect(subject.unwrap_or(0)).to.equal(16);
    });

    it("returns None if one of the Options in chain is None", () => {
        let subject = Some(2).and_then(sq).and_then(nope);
        expect(subject.is_none()).to.equal(true);

        subject = Some(2).and_then(nope).and_then(sq);
        expect(subject.is_none()).to.equal(true);

        subject = None.and_then(sq).and_then(sq);
        expect(subject.is_none()).to.equal(true);
    });
});
