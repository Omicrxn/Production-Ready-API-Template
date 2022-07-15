"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonMiddleware = void 0;
const logger_1 = require("../utils/logger/logger");
const body_parser_1 = __importDefault(require("body-parser"));
let cors = require("cors");
let morgan = require("morgan");
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
class CommonMiddleware {
    constructor(_app) {
        this.app = _app;
    }
    async useBodyParser() {
        this.app.use(body_parser_1.default.json());
    }
    async useURLencoded() {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    async useCors() {
        this.app.use(cors());
    }
    async useHelmet() {
        this.app.use(helmet_1.default());
    }
    async useMorgan() {
        this.app.use(morgan('tiny'));
    }
    async useCompression() {
        this.app.use(compression_1.default());
    }
    async logRequests() {
        let logger = logger_1.Logger.getLogger();
        this.app.use((req, res, done) => {
            logger.info(req.originalUrl);
            done();
        });
    }
}
exports.CommonMiddleware = CommonMiddleware;
//# sourceMappingURL=commonMiddleware.js.map