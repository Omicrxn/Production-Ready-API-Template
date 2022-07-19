import { Express } from "express";
import { stream, skip } from "@configs/morganConfig";
import bodyParser from "body-parser";
let cors = require("cors");
let morgan = require("morgan");
import helmet from "helmet";
import compression from "compression";
/* A class that is used to configure the middleware for the express app. */
export class CommonMiddleware {
  app: Express;
  constructor(_app: Express) {
    this.app = _app;
  }
  /**
   * This function is used to parse the body of the request.
   */
  public async useBodyParser() {
    this.app.use(bodyParser.json());
  }

  /**
   * This function is used to parse the body of the request and make it available in the req.body
   * property
   */
  public async useURLencoded() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  /**
   * This function will use the cors() function from the cors package to allow cross-origin requests.
   */
  public async useCors() {
    this.app.use(cors());
  }

  /**
   * This function uses the helmet middleware to secure the Express application
   */
  public async useHelmet() {
    this.app.use(helmet());
  }

  /**
   * This function is used to log all the requests made to the server
   */
  public async useMorgan() {
    const morganMiddleware = morgan(
      ":method :url :status :res[content-lenght] - :response-time ms",
      { stream, skip }
    );
    this.app.use(morganMiddleware);
  }

  /**
   * This function uses compression middleware to reduce Express response bodies.
   */
  public async useCompression() {
    this.app.use(compression());
  }
}
