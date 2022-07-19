var ExtractJwt = require("passport-jwt").ExtractJwt;
import dotenv from "dotenv"
dotenv.config();
export const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  
};
