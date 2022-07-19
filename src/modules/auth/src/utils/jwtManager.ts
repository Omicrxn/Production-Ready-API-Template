import moment from "moment";
import jwt from "jwt-simple";
import serverConfig from "@configs/serverConfig";
import { StatusConstants } from "@src/constants/statusConstants";
export default class JWTManager {
  public static createToken(userid: string) {
    const jwtPayload = {
      sub: userid,
      iat: moment().unix(),
      exp: moment().add(14, "d").unix(),
    };
    return jwt.encode(jwtPayload, serverConfig.JWT_SECRET);
  }
  public static createRefreshToken(userid: string) {
    const refreshPayload = {
      sub: userid,
      iat: moment().unix(),
      exp: moment().add(1, "M").unix(),
    };
    return jwt.encode(refreshPayload, serverConfig.JWT_REFRESH_SECRET);
  }

  public static decodeToken(token: string) {
    const decoded = new Promise((resolve, reject) => {
      try {
        const payload = jwt.decode(token, serverConfig.JWT_SECRET);
        resolve(payload.sub);
      } catch (error) {
        reject({ status: StatusConstants.code401, message: error });
      }
    });
    return decoded;
  }
  public static decodeRefreshToken(token: string) {
    const decoded = new Promise((resolve, reject) => {
      try {
        const payload = jwt.decode(token, serverConfig.JWT_REFRESH_SECRET);
        resolve(payload.sub);
      } catch (error) {
        reject({ status: StatusConstants.code500, message: error });
      }
    });
    return decoded;
  }
}
