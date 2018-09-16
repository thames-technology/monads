"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
exports.getIndex = (values, value) => {
    const index = values.indexOf(value);
    switch (index) {
        case -1:
            return __1.Err("Value not found");
        default:
            return __1.Ok(index);
    }
};
console.log(exports.getIndex(["a", "b", "c"], "b"));
console.log(exports.getIndex(["a", "b", "c"], "z"));
//# sourceMappingURL=index.js.map