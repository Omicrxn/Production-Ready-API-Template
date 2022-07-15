"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const initializeMiddleware_1 = require("./initializeMiddleware");
const initializeRoutes_1 = require("./initializeRoutes");
const serverConfig_1 = __importDefault(require("@configs/serverConfig"));
async function server() {
    let app = express_1.default();
    let host = serverConfig_1.default.HOST.toString();
    let port = parseInt(serverConfig_1.default.PORT.toString());
    let link = "http://" + host + ":" + port;
    await initializeMiddleware_1.InitializeMiddleWare.InitializeCommonMiddleware(app);
    await initializeRoutes_1.InitializeRoutes.Initialize(app, link);
    await initializeMiddleware_1.InitializeMiddleWare.InitializeErrorHandlingMiddleware(app);
    app.listen(port, host, () => {
        console.log(`Server started listening at ${host} on port ${port}`);
    });
    return Promise.resolve(app);
}
exports.server = server;
//# sourceMappingURL=server.js.map