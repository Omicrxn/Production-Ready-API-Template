"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldRouteController = void 0;
const abstractRouteController_1 = require("../abstractRouteController");
const helloworld_1 = require("../../serviceclasses/helloworld/helloworld");
const statusConstants_1 = require("../../constants/statusConstants");
var httpErrors = require("httperrors");
class HelloWorldRouteController extends abstractRouteController_1.AbstractRouteController {
    constructor(link) {
        super();
        this.path = "/helloworld";
        this.InitializeController(link);
    }
    async runService(req, res) {
        let response = await helloworld_1.HelloWorld.wishHello();
        res.status(statusConstants_1.StatusConstants.code200).send(response);
    }
}
exports.HelloWorldRouteController = HelloWorldRouteController;
//# sourceMappingURL=helloWorldRouteController.js.map