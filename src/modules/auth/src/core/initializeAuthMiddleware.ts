import { AuthMiddleware } from "../middleware/authMiddleware";
import { Express } from "express";

export default class InitializeAuthMiddleware {
  public static async InitializeAuthMiddleware(app: Express) {
    let authMiddleware = new AuthMiddleware(app);
    authMiddleware.usePassport();
    authMiddleware.setPassportJWTStrategy();
  }
}
