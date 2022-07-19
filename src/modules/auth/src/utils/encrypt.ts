import * as argon2 from "argon2";
import { Request, Response, NextFunction } from "express";
import { Logger } from "@src/utils/logger/logger";
import { nextTick } from "process";
export default class Encrypt {
  public static async encryptPwd(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const hash = await argon2.hash(req.body.password);
      req.body.password = hash;
      next();
    } catch (error) {
      Logger.getLogger().error(error);
      next(error);
    }
  }

  public static async verify(encryptedString: string, stringToCompare: string) {
    try {
      if (await argon2.verify(encryptedString, stringToCompare)) {
        //strings did match
        return true;
      } else {
        //strings did not match
        return false;
      }
    } catch (error) {
      //internal failure
      Logger.getLogger().error(error);
      throw new Error();
    }
  }
}
