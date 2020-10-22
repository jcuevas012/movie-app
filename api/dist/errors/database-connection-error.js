"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const custom_error_1 = __importDefault(require("./custom-error"));
class DatabaseConnectionError extends custom_error_1.default {
    constructor(message = "Error Connecting Database") {
        super("Database connection error");
        this.message = message;
        this.statusCode = 500;
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
//# sourceMappingURL=database-connection-error.js.map