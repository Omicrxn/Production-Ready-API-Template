import { AbstractRouteController } from "../abstractRouteController";
import { Response, Request } from "express";
import { StatusConstants } from "../../constants/statusConstants";
import { Authenticate } from "@src/serviceclasses/authentication/authenticate";
import { Encrypt } from "@src/modules/auth";

/* This class is a controller that handles requests to the server on the path /helloworld. */
export class RegisterRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    this.path = "/auth/register";
    this.InitializeController(link);
  }
  /**
   * A function that is called when a request is made to the server on the path endpoint.
   * @param {Request} req - Request - This is the request object that is passed to the service.
   * @param {Response} res - Response - This is the response object that will be sent back to the
   * client.
   */
  public async runPostService(req: Request, res: Response): Promise<any> {
    let response = await Authenticate.registerUser(req);

    res.status(StatusConstants.code200).send(response);
  }
}

/* This class is a controller that handles requests to the server on the path /helloworld. */
export class LogInRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    this.path = "/auth/login";
    this.InitializeController(link);
  }

  public async InitializePost() {
    this.router
      .post(this.path, Encrypt.encryptPwd, this.runPostService.bind(this))
      .bind(this);
  }

  /**
   * A function that is called when a request is made to the server on the path endpoint.
   * @param {Request} req - Request - This is the request object that is passed to the service.
   * @param {Response} res - Response - This is the response object that will be sent back to the
   * client.
   */
  public async runPostService(req: Request, res: Response): Promise<any> {
    let response = await Authenticate.loginUser(req);

    res.status(StatusConstants.code200).send(response);
  }
}
