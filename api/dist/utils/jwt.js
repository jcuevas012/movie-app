"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtKey = process.env.JWT_KEY;
function generateToken(user) {
    return jsonwebtoken_1.default.sign(user, jwtKey);
}
function verify(token) {
    return jsonwebtoken_1.default.verify(token, jwtKey);
}
exports.default = {
    generateToken,
    verify,
};
//# sourceMappingURL=jwt.js.map