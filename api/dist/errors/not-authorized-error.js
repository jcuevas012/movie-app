"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = __importDefault(require("./custom-error"));
class NotAuthorized extends custom_error_1.default {
    constructor() {
        super("Not Authorized");
        this.statusCode = 401;
        Object.setPrototypeOf(this, NotAuthorized.prototype);
    }
    serializeErrors() {
        return [
            {
                message: "Not Authorized",
            },
        ];
    }
}
exports.default = NotAuthorized;
//# sourceMappingURL=not-authorized-error.js.map