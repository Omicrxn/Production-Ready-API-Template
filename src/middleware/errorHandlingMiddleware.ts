import {
  Express,
  NextFunction,
  Response,
  Request,
  ErrorRequestHandler,
} from "express";
import { Logger } from "@src/utils/logger/logger";
import { StatusConstants } from "../constants/statusConstants";
var httpErrors = require("http-errors");

export class ErrorHandlingMiddleware {
  app: Express;
  constructor(_app: Express) {
    this.app = _app;
  }

  /**
   * If the user requests a page that doesn't exist, send them a 404 error message.
   */
  public async handle404Error() {
    this.app.use((req: Request, res: Response) => {
      Logger.getLogger().error("Error 404 page not found");
      res.status(StatusConstants.code404).send(StatusConstants.code404Message);
    });
  }
}
