"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option_1 = require("./Option");
exports.Some = Option_1.Some;
exports.None = Option_1.None;
exports.is_some = Option_1.is_some;
exports.is_none = Option_1.is_none;
exports.is_option = Option_1.is_option;
exports.get_in = Option_1.get_in;
var Result_1 = require("./Result");
exports.Ok = Result_1.Ok;
exports.Err = Result_1.Err;
exports.is_ok = Result_1.is_ok;
exports.is_err = Result_1.is_err;
exports.is_result = Result_1.is_result;
var promise_1 = require("./promise");
exports.map_async = promise_1.map_async;
//# sourceMappingURL=main.js.map