import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Article, ArticleInput } from "./articles.schema";

@Resolver(() => Article)
export class ArticlesResolver {
  //This should be on our database not here
  private articles: Article[] = [
    { id: 1, name: "LG Phone", model: "LG 32423" },
    { id: 2, name: "Samsung TV", model: "Samsung 2049u2340" },
    { id: 3, name: "HP Laptop", model: "HP 134394U3242" },
  ];
  //All the methods below are used to show how graphql works, they are not connected to any database.
  //The logic that would be inside these functions can be found on the corresponding database example.
  @Query(() => [Article])
  async getArticles(): Promise<Article[]> {
    return this.articles;
  }

  @Query(() => Article)
  async getArticle(@Arg("id") id: number): Promise<Article | undefined> {
    const article = this.articles.find((u) => u.id === id);
    return article;
  }

  @Mutation(() => Article)
  async updateArticle(
    @Arg("id") id: number,
    @Arg("input") input: ArticleInput
  ): Promise<Article> {
    const article = this.articles.find((u) => u.id === id);
    if (!article) {
      throw new Error("Article not found");
    }
    const updatedArticle = {
      ...article,
      ...input,
    };

    this.articles = this.articles.map((u) => (u.id === id ? updatedArticle : u));

    return updatedArticle
  }
}
