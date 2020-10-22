"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserRouter = void 0;
const express_1 = require("express");
const current_user_1 = __importDefault(require("../middlewares/current-user"));
const require_auth_1 = __importDefault(require("../middlewares/require-auth"));
const router = express_1.Router();
exports.currentUserRouter = router;
router.get('/current-user', current_user_1.default, require_auth_1.default, (req, res) => {
    res.send({ currentUser: req.currentUser || null });
});
//# sourceMappingURL=current-user.js.map