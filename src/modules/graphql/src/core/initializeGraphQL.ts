import { Express } from "express";
import { GraphQLMiddleware } from "../middleware/graphqlMiddleware";
export default class InitializeGraphQLMiddleware {
  public static async InitializeGraphQL(app: Express) {
    let graphQLMiddleware = new GraphQLMiddleware(app);
    graphQLMiddleware.useGraphQL();
  }
}
