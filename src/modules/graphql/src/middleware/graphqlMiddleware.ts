import { graphqlHTTP } from "express-graphql";
import { getSchema } from "../../config/graphQLConfig";
import { Express } from "express";
export class GraphQLMiddleware {
  app: Express;
  constructor(_app: Express) {
    this.app = _app;
  }

  public async useGraphQL() {
    
    this.app.use(
      "/graphql",
      await graphqlHTTP({ schema: await getSchema(), graphiql: true })
    );
  }
}
