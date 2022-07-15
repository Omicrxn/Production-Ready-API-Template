import { Express } from "express";
import { CommonMiddleware } from "../middleware/commonMiddleware";
import { ErrorHandlingMiddleware } from "../middleware/errorHandlingMiddleware";

export class InitializeMiddleWare {
  public static async InitializeCommonMiddleware(app: Express) {
    let middleware = new CommonMiddleware(app);
    await middleware.useBodyParser();
    await middleware.useURLencoded();
    await middleware.useCors();
    await middleware.useHelmet();
    await middleware.useCompression();
    await middleware.useMorgan();
  }

  public static async InitializeErrorHandlingMiddleware(app: Express) {
    let errorMiddleware = new ErrorHandlingMiddleware(app);
    await errorMiddleware.handle404Error();
  }
}
