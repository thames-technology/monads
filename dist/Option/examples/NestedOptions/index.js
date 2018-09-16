"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
exports.sq = (x) => __1.Some(x * x);
exports.nope = (_) => __1.None;
console.log(__1.Some(2)
    .and_then(exports.sq)
    .and_then(exports.sq));
console.log(__1.Some(2)
    .and_then(exports.sq)
    .and_then(exports.nope));
console.log(__1.Some(2)
    .and_then(exports.nope)
    .and_then(exports.sq));
console.log(__1.None.and_then(exports.sq).and_then(exports.sq));
exports.getDriverName = (vehicle) => {
    return vehicle.driver.and_then(val => val.contact).and_then(val => val.name);
};
console.log(exports.getDriverName({ driver: __1.Some({ contact: __1.Some({ name: __1.Some("John") }) }) }));
console.log(exports.getDriverName({ driver: __1.Some({ contact: __1.Some({ name: __1.None }) }) }));
console.log(exports.getDriverName({ driver: __1.Some({ contact: __1.None }) }));
console.log(exports.getDriverName({ driver: __1.None }));
//# sourceMappingURL=index.js.map