import { AbstractRouteController } from "../abstractRouteController";
import { Response, Request, NextFunction } from "express";
import { HelloWorld } from "../../serviceclasses/helloworld/helloworld";
import { StatusConstants } from "../../constants/statusConstants";
var httpErrors = require("httperrors");

export class HelloWorldRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    this.path = "/helloworld";
    this.InitializeController(link);
  }
  public async runService(req: Request, res: Response): Promise<any> {
    let response = await HelloWorld.wishHello();

    res.status(StatusConstants.code200).send(response);
  }
}
