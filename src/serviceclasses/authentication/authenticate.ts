import { opts } from "@src/modules/auth/configs/passportJwtConfig";
import passport from "passport";
import { Request } from "express";
import { JWTManager } from "@src/modules/auth";

var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

export class Authenticate {
  public static async registerUser(req: Request): Promise<any> {
    //Step 1. Create new user from req credentials
    //Step 2. Save the user to the database (check for errors)
    const resp = {
      message: "Logged in successfully!",
      token: "Bearer ",
    };
    return Promise.resolve(resp);
  }
  public static async loginUser(req: Request): Promise<any> {
    //Step 1. Find a user with the credentials from the request
    //Step 1.1 -User not found- If the user does not exist, send a status 401
    //Step 1.2 If the user exists, check if the passwords match (should be encrypted using the provided functions in the auth module of this project)
    //Step 1.2.1 -Password Does Not Match- If the user password does not match to the request password return an error
    //Step 1.2.2 -User Password Matches- Everything is correct so we now proceed to Step2

    //Step 2. Generate a JWT and send it in the response
    let token = JWTManager.createToken('0');
    const resp = {
      message: "Logged in successfully!",
      token: "Bearer "+token,
    };
    return Promise.resolve(resp);
  }
}
