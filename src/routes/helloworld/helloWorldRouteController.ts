import { AbstractRouteController } from "../abstractRouteController";
import { Response, Request, NextFunction } from "express";
import { HelloWorld } from "../../serviceclasses/helloworld/helloworld";
import { StatusConstants } from "../../constants/statusConstants";
var httpErrors = require("http-errors");

/* This class is a controller that handles requests to the server on the path /helloworld. */
export class HelloWorldRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    this.path = "/helloworld";
    this.InitializeController(link);
  }

  /**
   * A function that is called when a request is made to the server on the path endpoint.
   * @param {Request} req - Request - This is the request object that is passed to the service.
   * @param {Response} res - Response - This is the response object that will be sent back to the
   * client.
   */
  public async runGetService(req: Request, res: Response): Promise<any> {
    let response = await HelloWorld.wishHello();

    res.status(StatusConstants.code200).send(response);
  }
}
