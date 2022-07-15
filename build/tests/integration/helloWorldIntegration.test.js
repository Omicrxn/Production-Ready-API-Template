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
require('module-alias/register');
const chai_1 = __importDefault(require("chai"));
const chai_2 = require("chai");
const chai_http_1 = __importDefault(require("chai-http"));
const statusConstants_1 = require("@src/constants/statusConstants");
const index_1 = require("../../index");
chai_1.default.use(chai_http_1.default);
describe("Hello World API check", () => __awaiter(void 0, void 0, void 0, function* () {
    let app = yield index_1.apserver;
    it("It Should return a status 200 and a Hello World! Message", (done) => {
        chai_1.default
            .request(app)
            .get("/helloworld")
            .end((err, res) => {
            (0, chai_2.expect)(res).to.have.status(statusConstants_1.StatusConstants.code200);
            (0, chai_2.expect)(res.text).to.equals("Hello World!");
            done();
        });
    });
}));
describe("Non Existing API Error check", () => __awaiter(void 0, void 0, void 0, function* () {
    let app = yield index_1.apserver;
    it("It should return a status 404", (done) => {
        chai_1.default
            .request(app)
            .get("/somepath")
            .end((err, res) => {
            (0, chai_2.expect)(res).to.have.status(statusConstants_1.StatusConstants.code404);
            (0, chai_2.expect)(res.text).to.equals(statusConstants_1.StatusConstants.code404Message);
            done();
        });
    });
}));
//# sourceMappingURL=helloWorldIntegration.test.js.map