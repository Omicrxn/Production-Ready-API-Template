import Article from "@models/article";
import { Logger } from "@utils/logger/logger";
export class Articles {
  public static async addArticle(): Promise<string> {
    try {
      /* Creating a new instance of the Article class. */
      const article = new Article({
        name: "LG ESE",
        brand: "LG",
        model: "LG ESE 34324K",
        description: "Really good tv",
        buyDate: new Date(),
        expirationDate: new Date("2025-01-16"),
        imgUrl: "",
        ticketImgUrl: "",
        family: [""],
      });

      await article.save();
      Logger.getLogger().info("Object saved");

      return Promise.resolve("Object saved");
    } catch (error) {
      Logger.getLogger().error(error);
      throw new Error("Object Not Saved");
    }
  }

  public static async getAllArticles() {
    const articles = await Article.find();
    return Promise.resolve(articles);
  }

  public static async getArticleById(id: string) {
    const article = await Article.findById(id);
    return Promise.resolve(article);
  }

  public static async deleteArticleById(id: string) {
    const article = await Article.findByIdAndDelete(id);
    return Promise.resolve(article);
  }
  public static async updateArticleById(id: string, fieldsToUpdate: object) {
    //findByIdAndUpdate returns the object as it was before updating. To make it return the new version, we add the {new:true} option
    const article = await Article.findByIdAndUpdate(id, fieldsToUpdate, {
      new: true,
    });
    return Promise.resolve(article);
  }
}
