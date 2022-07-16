import winston, { level } from "winston";
import * as config from "@configs/loggerConfig";
//Custom logger class to use as a replacement to console.log()
//It is a singleton class so you only need to use Logger.getLogger()
export class Logger {
  private logger: winston.Logger;
  private static instance: Logger;
  private constructor() {
    // Tell winston that you want to link the colors
    // defined above to the severity levels.
    winston.addColors(config.colors);
    this.logger = winston.createLogger({
      level: config.level(),
      levels: config.levels,
      format: config.format,
      transports: config.transports,
    });
  }
//Creates the logger instance if it is not created or just returns it if it is created
  private static getLoggerInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  //get directly the logger
  public static getLogger() {
    let _logger = Logger.getLoggerInstance();
    return _logger.logger;
  }
}
