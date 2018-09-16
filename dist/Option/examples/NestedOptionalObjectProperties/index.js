"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
exports.getDriverName = (car) => {
    return __1.get_in(car, "driver.contact.name");
};
console.log(exports.getDriverName({ driver: {} }));
console.log(exports.getDriverName({ driver: { contact: {} } }));
console.log(exports.getDriverName({ driver: { contact: { name: "John" } } }));
//# sourceMappingURL=index.js.map