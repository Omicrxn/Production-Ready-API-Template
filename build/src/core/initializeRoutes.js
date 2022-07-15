"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializeRoutes = void 0;
const helloWorldRouteController_1 = require("../routes/helloworld/helloWorldRouteController");
class InitializeRoutes {
    static async Initialize(app, link) {
        let routes = await this.getRoutes(link);
        routes.forEach((rc) => {
            app.use("/", rc.router);
        });
    }
    static async getRoutes(link) {
        let routes = [];
        routes.push(new helloWorldRouteController_1.HelloWorldRouteController(link));
        return Promise.resolve(routes);
    }
}
exports.InitializeRoutes = InitializeRoutes;
//# sourceMappingURL=initializeRoutes.js.map