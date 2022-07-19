import express from "express";
import { Logger } from "@src/utils/logger/logger";
/* A base class for all controllers. */
export abstract class AbstractRouteController {
  router = express.Router();
  path!: string;
  public async InitializeController(link: string) {
    Logger.getLogger().debug(link + this.path);
    await this.InitializeGet();
    await this.InitializePost();
    await this.InitializePut();
    await this.InitializeDelete();
  }

  /**
   * This function is called when a GET request is made to the path specified in the constructor of the
   * class.
   * @param req - express.Request - The request object
   * @param res - express.Response
   */
  public async runGetService(
    req: express.Request,
    res: express.Response
  ): Promise<any> {
    res.send("GET Method for " + this.path + "does not exist !");
  }

  /**
   * This function is called when a POST request is made to the path specified in the constructor of the
   * class.
   * @param req - express.Request - The request object
   * @param res - express.Response
   */
  public async runPostService(
    req: express.Request,
    res: express.Response
  ): Promise<any> {
    res.send("POST Method for " + this.path + "does not exist !");
  }

  /**
   * This function is called when a PUT request is made to the path specified in the constructor of the
   * class.   * @param req - express.Request - The request object
   * @param res - express.Response
   */
  public async runPutService(
    req: express.Request,
    res: express.Response
  ): Promise<any> {
    res.send("PUT Method for " + this.path + "does not exist !");
  }

  /**
   * This function is called when a DELETE request is made to the path specified in the constructor of the
   * class.
   * @param req - express.Request - The request object
   * @param res - express.Response
   */
  public async runDeleteService(
    req: express.Request,
    res: express.Response
  ): Promise<any> {
    res.send(" DELETE Method for " + this.path + "does not exist !");
  }

  /**
   * "This function binds the router.get function to the runGetService function."
   */
  public async InitializeGet() {
    this.router.get(this.path, this.runGetService.bind(this)).bind(this);
  }

  /**
   * "This function binds the router.post function to the runPostService function."
   */
  public async InitializePost() {
    this.router.post(this.path, this.runPostService.bind(this)).bind(this);
  }

  /**
   * "This function binds the router.put function to the runPutService function."
   */
  public async InitializePut() {
    this.router.put(this.path, this.runPutService.bind(this)).bind(this);
  }

  /**
   * "This function binds the router.delete function to the runDeleteService function."
   */
  public async InitializeDelete() {
    this.router.delete(this.path, this.runDeleteService.bind(this)).bind(this);
  }
}
