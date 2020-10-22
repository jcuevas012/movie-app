"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = __importDefault(require("./custom-error"));
class NoFound extends custom_error_1.default {
    constructor(message = "Not Found") {
        super("Not Found");
        this.message = message;
        this.statusCode = 500;
        Object.setPrototypeOf(this, NoFound.prototype);
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}
exports.default = NoFound;
//# sourceMappingURL=not-found-error.js.map