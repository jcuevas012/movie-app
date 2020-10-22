"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const not_authorized_error_1 = __importDefault(require("../errors/not-authorized-error"));
function default_1(req, res, next) {
    if (!req.currentUser) {
        throw new not_authorized_error_1.default();
    }
    next();
}
exports.default = default_1;
//# sourceMappingURL=require-auth.js.map