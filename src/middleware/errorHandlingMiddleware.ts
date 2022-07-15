import {
  Express,
  NextFunction,
  Response,
  Request,
  ErrorRequestHandler,
} from "express";
import { StatusConstants } from "../constants/statusConstants";
var httpErrors = require("http-errors");

export class ErrorHandlingMiddleware {
  app: Express;
  constructor(_app: Express) {
    this.app = _app;
  }
 

  public async handle404Error() {
    this.app.use((req: Request, res: Response) => {
      res.status(StatusConstants.code404).send(StatusConstants.code404Message);
    });
  }
}
