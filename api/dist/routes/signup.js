"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpRouter = void 0;
const express_1 = require("express");
const request_validator_1 = __importDefault(require("../middlewares/request-validator"));
const signup_validator_1 = __importDefault(require("../validators/signup-validator"));
const router = express_1.Router();
exports.signUpRouter = router;
router.post('/signup', [...signup_validator_1.default], request_validator_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // const userFound = await User.findOne({ email })
    // if (userFound) {
    //     throw new BadRequestError('Email already exist')
    // }
    // const user = User.build({
    //     email,
    //     password,
    // })
    // await user.save()
    // // generate jwt
    // const jwt = utils.jwt.generateToken({
    //     id: user.id,
    //     email: user.email,
    // })
    // // set jwt to session
    // req.session.jwt = jwt
    // res.status(201).send(user)
}));
//# sourceMappingURL=signup.js.map