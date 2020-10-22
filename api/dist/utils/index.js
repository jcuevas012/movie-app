"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("./jwt"));
const password_1 = __importDefault(require("./password"));
exports.default = {
    jwt: jwt_1.default,
    password: password_1.default,
};
//# sourceMappingURL=index.js.map