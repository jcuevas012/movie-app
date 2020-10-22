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
require("express-async-errors");
const body_parser_1 = require("body-parser");
const cookie_session_1 = __importDefault(require("cookie-session"));
const express_1 = __importDefault(require("express"));
// @ts-ignore
const models_1 = __importDefault(require("./models"));
const not_found_error_1 = __importDefault(require("./errors/not-found-error"));
const error_handler_1 = require("./middlewares/error-handler");
const routes_1 = require("./routes");
const app = express_1.default();
const PORT = 3000;
app.set('trust proxy', 1); // trust first proxy
app.use(body_parser_1.json());
app.use(cookie_session_1.default({
    signed: false,
    secure: true,
}));
app.use('/api/users', routes_1.currentUserRouter);
app.use('/api/users', routes_1.signInRouter);
app.use('/api/users', routes_1.signUpRouter);
app.use('/api/users', routes_1.signOutRouter);
app.all('*', () => {
    throw new not_found_error_1.default();
});
app.use(error_handler_1.errorHandler);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined.');
    }
    console.log('DB');
    console.log(models_1.default);
    yield models_1.default.sequelize.sync();
    app.listen(PORT, () => {
        console.log(`Auth service listening in port ${PORT}`);
    });
});
start();
//# sourceMappingURL=index.js.map