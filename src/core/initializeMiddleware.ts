import { Express } from "express";
import { CommonMiddleware } from "../middleware/commonMiddleware";
import { ErrorHandlingMiddleware } from "../middleware/errorHandlingMiddleware";
//class that initializes the middleware from commonMiddleware.ts & errorHandlingMiddleware.ts
export class InitializeMiddleWare {
  /**
   * InitializeCommonMiddleware() is a function that takes an Express app as a parameter and returns a
   * promise that resolves when all of the middleware has been initialized.
   * @param {Express} app - Express - The express app object
   */
  public static async InitializeCommonMiddleware(app: Express) {
    let middleware = new CommonMiddleware(app);
    await middleware.useBodyParser();
    await middleware.useURLencoded();
    await middleware.useCors();
    await middleware.useHelmet();
    await middleware.useCompression();
    await middleware.useMorgan();
  }
}
