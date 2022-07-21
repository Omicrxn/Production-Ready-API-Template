import { AbstractRouteController } from "../abstractRouteController";
import { Response, Request } from "express";
import { StatusConstants } from "../../constants/statusConstants";
import { Articles } from "@src/serviceclasses/articles/articles";

/* This class is a controller that handles requests to the server on the path /helloworld. */
export class ArticleRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    this.path = "/article";
    this.InitializeController(link);
  }

  /**
   * A function that is called when a request is made to the server on the path endpoint.
   * @param {Request} req - Request - This is the request object that is passed to the service.
   * @param {Response} res - Response - This is the response object that will be sent back to the
   * client.
   */
  public async runPostService(req: Request, res: Response): Promise<any> {
    let response = await Articles.addArticle();

    res.status(StatusConstants.code200).send(response);
  }

  public async runGetService(req: Request, res: Response): Promise<any> {
    let response = await Articles.getAllArticles();
    console.log(response);
    res.status(StatusConstants.code200).send(response);
  }
}

/* This class is a controller that handles requests to the server on the path /helloworld. */
export class SingleArticleRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    this.path = "/article/:id";
    this.InitializeController(link);
  }

  /**
   * A function that is called when a request is made to the server on the path endpoint.
   * @param {Request} req - Request - This is the request object that is passed to the service.
   * @param {Response} res - Response - This is the response object that will be sent back to the
   * client.
   */
  public async runPutService(req: Request, res: Response): Promise<any> {
    let response = await Articles.updateArticleById(req.params.id, req.body);

    res.status(StatusConstants.code200).send(response);
  }

  public async runDeleteService(req: Request, res: Response): Promise<any> {
    let response = await Articles.deleteArticleById(req.params.id);

    res.status(StatusConstants.code200).send(response);
  }

  public async runGetService(req: Request, res: Response): Promise<any> {
    let response = await Articles.getArticleById(req.params.id);
    console.log(response);
    res.status(StatusConstants.code200).send(response);
  }
}
