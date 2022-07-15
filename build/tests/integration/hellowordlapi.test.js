"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const chai_1 = __importDefault(require("chai"));
const chai_2 = require("chai");
const chai_http_1 = __importDefault(require("chai-http"));
const statusConstants_1 = require("@src/constants/statusConstants");
const index_1 = require("../../index");
chai_1.default.use(chai_http_1.default);
describe("Hello World API check", async () => {
    let app = await index_1.apserver;
    it("It Should return a status 200 and Hello World! Message", (done) => {
        chai_1.default
            .request(app)
            .get("/helloworld")
            .end((err, res) => {
            chai_2.expect(res).to.have.status(statusConstants_1.StatusConstants.code200);
            chai_2.expect(res.text).to.equals("Hello World");
            done();
        });
    });
});
//# sourceMappingURL=hellowordlapi.test.js.map