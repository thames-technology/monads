"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
exports.divide = (numerator, denominator) => {
    if (denominator === 0) {
        return __1.None;
    }
    else {
        return __1.Some(numerator / denominator);
    }
};
const result = exports.divide(2.0, 3.0);
const message = result.match({
    some: res => `Result: ${res}`,
    none: "Cannot divide by 0",
});
console.log(message);
//# sourceMappingURL=index.js.map