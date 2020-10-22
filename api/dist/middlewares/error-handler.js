"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = __importDefault(require("../errors/custom-error"));
exports.errorHandler = (err, req, res, next) => {
    if (err instanceof custom_error_1.default) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        errors: ["Something went wrong"],
    });
};
//# sourceMappingURL=error-handler.js.map