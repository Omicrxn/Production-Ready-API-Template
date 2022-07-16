import { Express } from "express";
import { Logger } from "@src/utils/logger/logger";
import { stream, skip } from "@configs/morganConfig";
import bodyParser from "body-parser";
let cors = require("cors");
let morgan = require("morgan");
import helmet from "helmet";
import compression from "compression";
export class CommonMiddleware {
  app: Express;
  constructor(_app: Express) {
    this.app = _app;
  }
  public async useBodyParser() {
    this.app.use(bodyParser.json());
  }
  public async useURLencoded() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  public async useCors() {
    this.app.use(cors());
  }
  public async useHelmet() {
    this.app.use(helmet());
  }
  public async useMorgan() {
    const morganMiddleware = morgan(
      ":method :url :status :res[content-lenght] - :response-time ms",
      { stream, skip }
    );
    this.app.use(morganMiddleware);
  }
  public async useCompression() {
    this.app.use(compression());
  }
  public async logRequests() {
    let logger = Logger.getLogger();
    this.app.use((req, res, done) => {
      logger.info(req.originalUrl);
      done();
    });
  }
}
