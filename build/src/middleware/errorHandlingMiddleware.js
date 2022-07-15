"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlingMiddleware = void 0;
const statusConstants_1 = require("../constants/statusConstants");
var httpErrors = require("httperrors");
class ErrorHandlingMiddleware {
    constructor(_app) {
        this.app = _app;
    }
    async handle404Error() {
        this.app.use((req, res) => {
            res.status(statusConstants_1.StatusConstants.code404).send(statusConstants_1.StatusConstants.code404Message);
        });
    }
}
exports.ErrorHandlingMiddleware = ErrorHandlingMiddleware;
//# sourceMappingURL=errorHandlingMiddleware.js.map