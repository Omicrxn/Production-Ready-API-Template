"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const chai_1 = require("chai");
const helloworld_1 = require("@src/serviceclasses/helloworld/helloworld");
describe("Hello World Test", () => {
    it("It Should Return Hello World!", async () => {
        let result = await helloworld_1.HelloWorld.wishHello();
        chai_1.expect(result).to.equal("Hello World");
    });
});
//# sourceMappingURL=helloWorld.test.js.map