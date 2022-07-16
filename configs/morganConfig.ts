import { StreamOptions } from "morgan";
import { Logger } from "@src/utils/logger/logger";
// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
export const stream: StreamOptions = {
  // Use the http severity
  write: (message) => Logger.getLogger().http(message),
};

// Skip all the Morgan http log if the
// application is not running in development mode.
// This method is not really needed here since
// we already told to the logger that it should print
// only warning and error messages in production.
export const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};
