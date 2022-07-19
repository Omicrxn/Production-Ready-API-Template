import { AuthMiddleware } from "../middleware/authMiddleware";
import { Express } from "express";

export default class InitializeAuthMiddleware {
  public static async InitializeAuthMiddleware(
    app: Express,
    strategyFunction?: (jwt_payload: any, done: any) => void
  ) {
    let authMiddleware = new AuthMiddleware(app);
    authMiddleware.usePassport();
    authMiddleware.setPassportJWTStrategy(strategyFunction ? strategyFunction:(jwt_payload: any, done: any) => {
      //logic to do if the jwt is valid and before getting to the actual route function
      //Here we can check if the user exists on our database before proceeding to the route funciton or any other general action we want to perform once the jwt is verified.

      //done accepts 3 parameters done(error,user,info) where "info" is optional depending on the value of these 3 fields
      //it will call next() with error, success or fail
      done(null, true);
    });
  }
}
