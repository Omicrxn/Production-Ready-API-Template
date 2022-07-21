import { Express } from "express";
import { ArticleRouteController, SingleArticleRouteController } from "../routes/articles/articleRouteController";
import { AbstractRouteController } from "../routes/abstractRouteController";
//class that adds the routes to a routes array and then for each route in the array initializes it.
export class InitializeRoutes {
  /**
   * This function takes in an express app and the api link, and then it gets all the routes and adds them to the express app.
   * @param {Express} app - Express - The express app
   * @param {string} link - The link of the API
   */
  public static async Initialize(app: Express, link: string) {
    let routes = await this.getRoutes(link);
    routes.forEach((rc) => {
      app.use("/", rc.router);
    });
  }

  /**
   * This function returns a promise that resolves to an array of AbstractRouteController objects.
   * @param {string} link - string - the link that the route will be added to
   * @returns An array of AbstractRouteController objects.
   */
  public static async getRoutes(
    link: string
  ): Promise<Array<AbstractRouteController>> {
    let routes: Array<AbstractRouteController> = [];
    //routes that we want to add
    routes.push(new ArticleRouteController(link));
    routes.push(new SingleArticleRouteController(link));
    return Promise.resolve(routes);
  }
}
