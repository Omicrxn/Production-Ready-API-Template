import { ArticlesResolver } from "@src/graphql/schema/articles/articles.resolvers";
import { UsersResolver } from "@src/graphql/schema/users/users.resolvers";
import { buildSchema } from "type-graphql";

export async function getSchema() {
  const schema = await buildSchema({
    resolvers: [UsersResolver,ArticlesResolver],
    emitSchemaFile: true,
  });

  return schema;
}
