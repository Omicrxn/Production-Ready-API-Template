import { Field, ObjectType, InputType } from "type-graphql";
@ObjectType()
export class Article {
  @Field()
  id!: number;
  @Field()
  name!: string;
  @Field()
  model!: string;
}

@InputType()
export class ArticleInput implements Pick<Article, "name" | "model"> {
  @Field()
  name!: string;
  @Field()
  model!: string;
}
