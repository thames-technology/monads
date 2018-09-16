"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const __1 = require("../..");
describe("Nested Options", () => {
    it("returns Some(16) when all Options in chain are Some", () => {
        const subject = __1.Some(2)
            .and_then(_1.sq)
            .and_then(_1.sq);
        expect(subject.is_some()).toEqual(true);
        expect(subject.unwrap_or(0)).toEqual(16);
    });
    it("returns None if one of the Options in chain is None", () => {
        let subject = __1.Some(2)
            .and_then(_1.sq)
            .and_then(_1.nope);
        expect(subject.is_none()).toEqual(true);
        subject = __1.Some(2)
            .and_then(_1.nope)
            .and_then(_1.sq);
        expect(subject.is_none()).toEqual(true);
        subject = __1.None.and_then(_1.sq).and_then(_1.sq);
        expect(subject.is_none()).toEqual(true);
    });
});
//# sourceMappingURL=index.spec.js.map