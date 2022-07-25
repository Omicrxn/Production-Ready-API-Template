import express from "express";
import { Logger } from "@src/utils/logger/logger";
import { graphqlHTTP, Options } from "express-graphql";
/* A base class for all controllers. */
export abstract class AbstractGraphQLRouteController {
  router = express.Router();
  path!: string;
  public async InitializeController(link: string) {
    Logger.getLogger().debug(link + this.path);
    await this.InitializeRoute();
  }

  /**
   * This function is called when a GET request is made to the path specified in the constructor of the
   * class.
   * @param req - express.Request - The request object
   * @param res - express.Response
   */
  public async runService(options: Options) {
    return graphqlHTTP(options);
  }

  /**
   * "This function binds the router.get function to the runGetService function."
   */
  public async InitializeRoute() {
    this.router.get(this.path, this.runService.bind(this)).bind(this);
  }

 
}
