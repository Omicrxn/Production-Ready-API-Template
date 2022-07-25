import express from "express";
import { Express } from "express";
import { InitializeMiddleWare } from "./initializeMiddleware";
import ServerConfig from "@configs/serverConfig";
import InitializeGraphQLMiddleware from "@src/graphql/src/core/initializeGraphQL";

export async function server() {
  /* Creating an instance of express. */
  let app: Express = express();

  /* Converting the value of ServerConfig.HOST to a string. */
  let host: string = ServerConfig.HOST.toString();

  /* Converting the value of ServerConfig.PORT to a number. */
  let port: number = parseInt(ServerConfig.PORT.toString());

  /* Calling the InitializeCommonMiddleware function from the InitializeMiddleWare class. */
  await InitializeMiddleWare.InitializeCommonMiddleware(app);

  await InitializeGraphQLMiddleware.InitializeGraphQL(app);

  /* Listening for requests on the specified port and host. */
  app.listen(port, host, () => {
    console.log(`Server started listening at ${host} on port ${port}`);
  });

  return Promise.resolve(app);
}
