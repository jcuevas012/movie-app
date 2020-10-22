"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
function default_1(req, res, next) {
    var _a;
    const jwt = (_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt;
    if (!jwt) {
        next();
    }
    try {
        const payload = utils_1.default.jwt.verify(jwt);
        req.currentUser = payload;
    }
    catch (error) { }
    next();
}
exports.default = default_1;
//# sourceMappingURL=current-user.js.map