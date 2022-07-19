# Production-Ready-API-Template

This repository aims to produce a production ready template that you can customize and use in real world projects.

## Description

The **main branch** on this repository includes a project with a basic REST API template following best practices and ready for production. It uses [_body-parser_](https://www.npmjs.com/package/body-parser),[_cors_](https://www.npmjs.com/package/cors),[_helmet_](https://www.npmjs.com/package/helmet),[_compression_](https://www.npmjs.com/package/compression),[_morgan_](https://www.npmjs.com/package/morgan) as middleware, [_winston_](https://www.npmjs.com/package/winston) for logging and [_chai_](https://www.chaijs.com/) with [_mocha_](https://mochajs.org/) for unit and integration testing.

The project structure is the following:

```
root
├───configs
├───src
│   ├───constants
│   ├───core
│   ├───middleware
│   ├───routes
│   │   └───helloworld
│   ├───serviceclasses
│   │   └───helloworld
│   └───utils
│       └───logger
└───tests
    ├───integration
    └───unit
```

- **configs**: This folder contain configuration files (for modules, express middleware or other configurations)
- **src**: This is where our main code will be.
  - **constants**: In this folder there will be some constant values that will be used along the api. For instance the template includes some majorly used status codes with messages that can be used when the response status is returned.
  - **core**: The actual API code, here there is a _server.ts_ file where the express server is initialized and calls _initializeMiddleware.ts_ (which initializes all the middleware and the error handling middleware) and _initializeRoutes.ts_ (which is where our routes are declared).
  - **middleware**: this folder contains two files, the _commonMiddleware.ts_ and _errorHandlingMiddleware.ts_ which are two class called by _initializeMiddleware.ts_ which includes the actual funcitons that act as middleware and error handling.
  - **routes**: This folder includes an abstract class _abstractRouteController.ts_ which defines how a route should be and then inside the **routes** folder you can create any folder that represents a group of routes. For instance in this base template there is a **helloworld** folder which has a helloWorldRouteController class that extends the abstract class. This helloWorldController has a path which will be the route's endpoint and then inside the runService app we call the function that will execute when the route is called and the status and message to be returned. Of course this can be changed to adapt to every project but keep in mind that since this is a production ready project we should separate the business logic from the application logic by creating functions in the **serviceclasses** folder which will be explained next. An example of this is the wishHello function being called inside the hello world route.
  - **serviceclasses**: Here will go all the Business Logic Code. It is all the code pertaining to the actual processes that need to be carried out. This logic changes depending on the purpose of the API.
  - **utils**: Some utiliy classes such as String handling functions, Logging Utilities, etc.
- **tests**:All the code for testing our api will be inside this folder, there is a distinction between unit testing and integration testing inside this folder.

## Modules

This API Template will include modules (⚠️which are under development and not ready at the moment⚠️). The modules will be the following.

- JWT Authentication module
- GraphQL API module (instead of REST)
- MongoDB connection module
- SQL connection module
- Neo4J connection module(problably connected to the GraphQL API module)

### JWT Auth Module

JWT is one of the standard ways to authenticate users. This module helps the integration of this system into any api. The module includes functions and classes to: Create JWT tokens, validate them when passing them to your routes via header and refresh the tokens. It uses passport js to authenticate the JWT. You can also customize the middleware that passport is going to use after validating your token and before executing the actual route function. To use this module you just need to write in server.ts the following snippet before initializing the routes.

```typescript
import { InitializeAuthMiddleware } from "@src/modules/auth/index";

/* Calling the InitializeAuthMiddleware function from the InitializeAuthMiddleware class. */
await InitializeAuthMiddleware.InitializeAuthMiddleware(app);
```

Like so:

```typescript
//server.js
...
/* Calling the InitializeCommonMiddleware function from the InitializeMiddleWare class. */
  await InitializeMiddleWare.InitializeCommonMiddleware(app);

  /* Calling the InitializeAuthMiddleware function from the InitializeAuthMiddleware class. */
  await InitializeAuthMiddleware.InitializeAuthMiddleware(app);

  /* Calling the Initialize function from the InitializeRoutes class. */
  await InitializeRoutes.Initialize(app, link);

  /* Calling the InitializeErrorHandlingMiddleware function from the InitializeMiddleWare class. */
  await InitializeMiddleWare.InitializeErrorHandlingMiddleware(app);
  ...
```

To authenticate your routes before calling their functions, use: `authenticate(options),` in your route controller overriding the InitializeGet | Post | Put | Delete method,as in the following example:

```typescript
//produceRouteController.ts
 public async InitializeGet() {
    this.router
      .get(
        this.path,
        authenticate({ session: false }),
        this.runGetService.bind(this)
      )
      .bind(this);
  }
```

To create, and decode JWT and JWT refresh tokens, you can use the JWTManager class from the module. For example after a successful log in, you can send a response with the token with the following code:

```
    let token = JWTManager.createToken(userid);

 const resp = {
     message: "Logged in successfully!",
     token: "Bearer " + token,
   };
```

## Usage

Clone or download the repo, run an `npm install` and then `npm run build` to generate the build folder. To run the API you can use `npm run start|pm2|dev` depending on your intention. To run tests you need to run `npm run test`.

- "start" command is used to run the API normally
- "pm2" command is used to run the API with [pm2](https://www.npmjs.com/package/pm2) which is a production process manager for Node.js applications.
- "dev" command is to run the API with tsc-watch and nodemon which allows you to make changes in your code without the need of restarting the API.

## ⚠️⚠️Disclaimer and advice⚠️⚠️

While the template has been created for production ready deployment using best practices and keeping in mind the security of the API and the data being handled by it, it is limited to my own knowledge and not prepared for every possible inconvenient. Therfore, I am not responsible for any damage that can occur to any project using this template, use it at your own risk. If you are going to modify this template or add your own code logic (which you should since this is a template), the production code can easily turn into non-production ready code due to bad practices included while changing the template. To avoid this, I would recommend you to visit the official [ExpressJs Security Best Practices website](https://expressjs.com/en/advanced/best-practice-security.html) and [ExpressJs Performance Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html) as well as to look into S.O.L.I.D Principles[[1]](https://itnext.io/brutally-solid-typescript-ba745585f440)[[2]](https://hackernoon.com/solid-principles-made-easy-67b1246bcdf?ref=hackernoon.com)[[3]](https://medium.com/sarccom/is-your-code-solid-enough-part-1-fe1e2cb73894) which were followed on the creation of this template.

### Thanks

Special thanks to Dhairya Gada whose [article on hackernoon](https://hackernoon.com/writing-a-production-ready-express-server-a-step-by-step-guide-2k6732x5) was used as a starting point for this template.
