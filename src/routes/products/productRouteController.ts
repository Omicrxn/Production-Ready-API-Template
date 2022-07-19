import { AbstractRouteController } from "../abstractRouteController";
import { Response, Request, Handler } from "express";
import { StatusConstants } from "../../constants/statusConstants";
import { authenticate } from "@src/modules/auth";
/* This class is a controller that handles requests to the server on the path /helloworld. */
export class ProductRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    this.path = "/product";
    this.InitializeController(link);
  }
  public async InitializeGet() {
    this.router
      .get(
        this.path,
        authenticate({ session: false }),
        this.runGetService.bind(this)
      )
      .bind(this);
  }
  /**
   * A function that is called when a request is made to the server on the path endpoint.
   * @param {Request} req - Request - This is the request object that is passed to the service.
   * @param {Response} res - Response - This is the response object that will be sent back to the
   * client.
   */
  public async runGetService(
    req: Request,
    res: Response,
    middleware?: Handler
  ): Promise<any> {
    let response = "hello";

    res.status(StatusConstants.code200).send(response);
  }
}
