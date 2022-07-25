import { ArticlesResolver } from "@src/schemas/articles/articles.resolvers";
import { UsersResolver } from "@src/schemas/users/users.resolvers";
import { buildSchema } from "type-graphql";

export async function getSchema() {
  const schema = await buildSchema({
    resolvers: [UsersResolver,ArticlesResolver],
    emitSchemaFile: true,
  });

  return schema;
}