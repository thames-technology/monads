"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe("Nested Optional Object Properties", () => {
    it("returns None when key doesn't lead to a value", () => {
        let subject = _1.getDriverName({ driver: {} });
        expect(subject.is_none()).toEqual(true);
        subject = _1.getDriverName({ driver: { contact: {} } });
        expect(subject.is_none()).toEqual(true);
    });
    it("returns Some('John') when key leads to a value", () => {
        const subject = _1.getDriverName({ driver: { contact: { name: "John" } } });
        expect(subject.is_some()).toEqual(true);
        expect(subject.unwrap_or("N/A")).toEqual("John");
    });
});
//# sourceMappingURL=index.spec.js.map