"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializeMiddleWare = void 0;
const commonMiddleware_1 = require("../middleware/commonMiddleware");
const errorHandlingMiddleware_1 = require("../middleware/errorHandlingMiddleware");
class InitializeMiddleWare {
    static async InitializeCommonMiddleware(app) {
        let middleware = new commonMiddleware_1.CommonMiddleware(app);
        await middleware.useBodyParser();
        await middleware.useURLencoded();
        await middleware.useCors();
        await middleware.useHelmet();
        await middleware.useCompression();
        await middleware.useMorgan();
    }
    static async InitializeErrorHandlingMiddleware(app) {
        let errorMiddleware = new errorHandlingMiddleware_1.ErrorHandlingMiddleware(app);
        await errorMiddleware.handle404Error();
    }
}
exports.InitializeMiddleWare = InitializeMiddleWare;
//# sourceMappingURL=initializeMiddleware.js.map