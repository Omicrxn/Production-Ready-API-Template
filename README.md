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

### MongoDB Connection Module

MongoDB is an open source document-oriented database. It is really popular due to its flexible schema approach and because it supports all major programming languages. It has a really low configuration time and you can use it locally or in the cloud thanks to MongoDB Atlas.

MongoDB already had a lot of support for Javascript and Typescript so in this project it was not wanted to re-invent the wheel. This template module includes mongoose and typegoose which are two packages that allow you to use MongoDB easily in typescript and works well with ExpressJS. However in the module there is a function to initialize mongoose and then an example model, route and service class that shows a very basic starting point to perform CRUD operations in a MongoDB database.

#### Initializing Mongo

To start using mongo with mongoose, it is needed to connect mongoose to the databse through the MongoDB database url (which you can find on MongoDB Atlas or using the CLI on your own local database). To do so you need to call the `initializeMongo()` function before initializing the routes in the _server.ts_ class.

The initializeMongo function, uses the url of the database which should be provided on the .env file under the ```MONGO_URL``` name. The url looks like this: ```mongodb+srv://<user>:<password>@<database>.poerehg.mongodb.net/<collection>```
#### Using The Module
There is nothing else that needs to be done to start working with mongo, you can start working using mongoose and typegoose which is not explained here since it has nothing to do with the module. The basic functionality would be to create a model in the **models** folder inside **src** and the use it in the service class for your route as in the base template.
## Usage

Clone or download the repo, run an `npm install` and then `npm run build` to generate the build folder. To run the API you can use `npm run start|pm2|dev` depending on your intention. To run tests you need to run `npm run test`.

- "start" command is used to run the API normally
- "pm2" command is used to run the API with [pm2](https://www.npmjs.com/package/pm2) which is a production process manager for Node.js applications.
- "dev" command is to run the API with tsc-watch and nodemon which allows you to make changes in your code without the need of restarting the API.

## ⚠️⚠️Disclaimer and advice⚠️⚠️

While the template has been created for production ready deployment using best practices and keeping in mind the security of the API and the data being handled by it, it is limited to my own knowledge and not prepared for every possible inconvenient. Therfore, I am not responsible for any damage that can occur to any project using this template, use it at your own risk. If you are going to modify this template or add your own code logic (which you should since this is a template), the production code can easily turn into non-production ready code due to bad practices included while changing the template. To avoid this, I would recommend you to visit the official [ExpressJs Security Best Practices website](https://expressjs.com/en/advanced/best-practice-security.html) and [ExpressJs Performance Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html) as well as to look into S.O.L.I.D Principles[[1]](https://itnext.io/brutally-solid-typescript-ba745585f440)[[2]](https://hackernoon.com/solid-principles-made-easy-67b1246bcdf?ref=hackernoon.com)[[3]](https://medium.com/sarccom/is-your-code-solid-enough-part-1-fe1e2cb73894) which were followed on the creation of this template.

### Thanks

Special thanks to Dhairya Gada whose [article on hackernoon](https://hackernoon.com/writing-a-production-ready-express-server-a-step-by-step-guide-2k6732x5) was used as a starting point for this template.
