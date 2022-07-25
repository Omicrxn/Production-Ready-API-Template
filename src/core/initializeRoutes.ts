import { AbstractGraphQLRouteController } from "@src/routes/abstractGraphQLRouteController";
import { GraphQLRouteController } from "@src/routes/graphqlRouteController/graphqlRouteController";
import { Express } from "express";
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
  ): Promise<Array<AbstractGraphQLRouteController>> {
    let routes: Array<AbstractGraphQLRouteController> = [];
    //routes that we want to add
    routes.push(new GraphQLRouteController(link));
    return Promise.resolve(routes);
  }
}
