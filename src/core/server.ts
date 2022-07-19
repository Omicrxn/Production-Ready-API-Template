import express from "express";
import { Express } from "express";
import { InitializeMiddleWare } from "./initializeMiddleware";
import { InitializeRoutes } from "./initializeRoutes";
import ServerConfig from "@configs/serverConfig";
import { InitializeAuthMiddleware } from "@src/modules/auth/index";
export async function server() {
  /* Creating an instance of express. */
  let app: Express = express();

  /* Converting the value of ServerConfig.HOST to a string. */
  let host: string = ServerConfig.HOST.toString();

  /* Converting the value of ServerConfig.PORT to a number. */
  let port: number = parseInt(ServerConfig.PORT.toString());

  /* Creating a link to the server. */
  let link = "http://" + host + ":" + port;
  
  /* Calling the InitializeCommonMiddleware function from the InitializeMiddleWare class. */
  await InitializeMiddleWare.InitializeCommonMiddleware(app);

  /* Calling the InitializeAuthMiddleware function from the InitializeAuthMiddleware class. */
  await InitializeAuthMiddleware.InitializeAuthMiddleware(app);

  /* Calling the Initialize function from the InitializeRoutes class. */
  await InitializeRoutes.Initialize(app, link);

  /* Calling the InitializeErrorHandlingMiddleware function from the InitializeMiddleWare class. */
  await InitializeMiddleWare.InitializeErrorHandlingMiddleware(app);

  /* Listening for requests on the specified port and host. */
  app.listen(port, host, () => {
    console.log(`Server started listening at ${host} on port ${port}`);
  });

  return Promise.resolve(app);
}
