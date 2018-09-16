"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@openmaths/utils");
exports.ResultType = {
    Ok: Symbol(":ok"),
    Err: Symbol(":err"),
};
function Ok(val) {
    return {
        type: exports.ResultType.Ok,
        is_ok() {
            return true;
        },
        is_err() {
            return false;
        },
        unwrap() {
            return val;
        },
        unwrap_err() {
            throw new ReferenceError(`Cannot get Err value of Result.Ok`);
        },
        ok_or(optb) {
            return val;
        },
        match(fn) {
            return fn.ok(val);
        },
        map(fn) {
            return Ok(fn(val));
        },
        map_err(_fn) {
            return Ok(val);
        },
        and_then(fn) {
            return fn(val);
        },
    };
}
exports.Ok = Ok;
function Err(val) {
    return {
        type: exports.ResultType.Err,
        is_ok() {
            return false;
        },
        is_err() {
            return true;
        },
        unwrap() {
            throw new ReferenceError(`Cannot get Ok value of Result.Err`);
        },
        unwrap_err() {
            return val;
        },
        ok_or(optb) {
            return optb;
        },
        match(fn) {
            return fn.err(val);
        },
        map(_fn) {
            return this;
        },
        map_err(fn) {
            return Err(fn(val));
        },
        and_then(_fn) {
            return Err(val);
        },
    };
}
exports.Err = Err;
function is_result(val) {
    return utils_1.isEqual(val.type, exports.ResultType.Ok) || utils_1.isEqual(val.type, exports.ResultType.Err);
}
exports.is_result = is_result;
function is_ok(val) {
    utils_1.throwIfFalse(is_result(val), "val is not a Result");
    return val.is_ok();
}
exports.is_ok = is_ok;
function is_err(val) {
    utils_1.throwIfFalse(is_result(val), "val is not a Result");
    return val.is_err();
}
exports.is_err = is_err;
//# sourceMappingURL=index.js.map