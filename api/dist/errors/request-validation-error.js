"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = __importDefault(require("./custom-error"));
class RequestValidationError extends custom_error_1.default {
    constructor(errors) {
        super("Invalid param request");
        this.errors = errors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((err) => ({
            message: err.msg,
            field: err.param,
        }));
    }
}
exports.default = RequestValidationError;
//# sourceMappingURL=request-validation-error.js.map