import { Express } from "express";
import passport from "passport";
import { opts } from "@src/modules/auth/configs/passportJwtConfig";
import { Logger } from "@utils/logger/logger";

var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
export class AuthMiddleware {
  app: Express;
  constructor(_app: Express) {
    this.app = _app;
  }

  public async usePassport() {
    this.app.use(passport.initialize());
  }

  public async setPassportJWTStrategy() {
    passport.use(
      new JwtStrategy(opts, function (jwt_payload: any, done: any) {
        //logic to do if the jwt is valid and before getting to the actual route function
        //Here we can check if the user exists on our database before proceeding to the route funciton or any other general action we want to perform once the jwt is verified.
        
        //done accepts 3 parameters done(error,user,info) where "info" is optional depending on the value of these 3 fields
        //it will call next() with error, success or fail
        done(null, true);
      })
    );
  }
}
