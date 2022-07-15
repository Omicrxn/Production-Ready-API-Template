import express from "express";
import { Express } from "express";
import { InitializeMiddleWare } from "./initializeMiddleware";
import { InitializeRoutes } from "./initializeRoutes";
import ServerConfig from "@configs/serverConfig";
export async function server() {
  let app: Express = express();

  let host:string = ServerConfig.HOST!.toString();
  let port:number = parseInt(ServerConfig.PORT!.toString());

  let link = "http://" + host + ":" + port;
  await InitializeMiddleWare.InitializeCommonMiddleware(app);
  await InitializeRoutes.Initialize(app, link);
  await InitializeMiddleWare.InitializeErrorHandlingMiddleware(app);

  app.listen(port, host, () => {
    console.log(`Server started listening at ${host} on port ${port}`);
  });

  return Promise.resolve(app);
}
