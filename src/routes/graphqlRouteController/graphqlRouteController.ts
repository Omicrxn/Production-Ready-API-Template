import { AbstractGraphQLRouteController } from "../abstractGraphQLRouteController";
import { graphqlHTTP, Options } from "express-graphql";
import { buildSchema } from "type-graphql";
import { UsersResolver } from "@src/schemas/users/users.resolvers";
import { ArticlesResolver } from "@src/schemas/articles/articles.resolvers";
/* This class is a controller that handles requests to the server on the path /helloworld. */
export class GraphQLRouteController extends AbstractGraphQLRouteController {
  constructor(link: string) {
    super();
    this.path = "/graphql";
    this.InitializeController(link);
  }

  /**
   * A function that is called when a request is made to the server on the path endpoint.
   * @param {Request} req - Request - This is the request object that is passed to the service.
   * @param {Response} res - Response - This is the response object that will be sent back to the
   * client.
   */
  public async runService(options: Options): Promise<any> {
    const schema = await buildSchema({
      resolvers: [UsersResolver,ArticlesResolver],
      emitSchemaFile: true,
    });

    return graphqlHTTP({ schema: schema, graphiql: true });
  }
}
