import winston, { level } from "winston";
import * as config from "@configs/loggerConfig";
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

  private static getLoggerInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public static getLogger() {
    let _logger = Logger.getLoggerInstance();
    return _logger.logger;
  }
}
