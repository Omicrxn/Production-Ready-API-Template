"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRouteController = void 0;
const express_1 = __importDefault(require("express"));
class AbstractRouteController {
    constructor() {
        this.router = express_1.default.Router();
    }
    async InitializeController(link) {
        console.log(link + this.path);
        await this.InitializeGet();
        await this.InitializePost();
    }
    async runService(req, res) {
        res.send("runService Method for " + this.path + "does not exist !");
    }
    async InitializeGet() {
        this.router.get(this.path, this.runService.bind(this)).bind(this);
    }
    async InitializePost() {
        this.router.post(this.path, this.runService.bind(this)).bind(this);
    }
}
exports.AbstractRouteController = AbstractRouteController;
//# sourceMappingURL=abstractRouteController.js.map