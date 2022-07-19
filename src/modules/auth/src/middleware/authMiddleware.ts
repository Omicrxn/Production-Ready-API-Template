import { Express } from "express";
import passport from "passport";
import { opts } from "@src/modules/auth/configs/passportJwtConfig";

var JwtStrategy = require("passport-jwt").Strategy;
export class AuthMiddleware {
  app: Express;
  constructor(_app: Express) {
    this.app = _app;
  }

  public async usePassport() {
    this.app.use(passport.initialize());
  }

  public async setPassportJWTStrategy(strategy:(jwt_payload:any,done:any)=>void) {
    passport.use(
      new JwtStrategy(opts, strategy)
    );
  }
}
